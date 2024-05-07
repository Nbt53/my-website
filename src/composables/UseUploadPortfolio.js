import { db, storage } from '@/firebase/config';
import { addDoc, collection } from 'firebase/firestore';
import { uploadBytes, getDownloadURL, ref as firebaseRef } from "firebase/storage";
import { ref } from 'vue'
const portfolioError = ref(null)

const UploadPortfolio = async (portfolio) => {
    let paragraphs
    //// Check if the description has multiple paragraphs and split them
    if (portfolio.description.includes('\n')) {
        paragraphs = portfolio.description.split('\n');
        paragraphs = paragraphs.filter(paragraph => paragraph !== '');
        portfolio.description = paragraphs;
    }

    //upload images and get urls
    let paths = []
    let urls = []
    for (const [index, url] of portfolio.images.entries()) {
        try {
            const response = await fetch(url);
            const blob = await response.blob();
            const storageRef = firebaseRef(storage, `images/portfolio/${portfolio.slug}/${portfolio.slug}-${index}`);
            await uploadBytes(storageRef, blob);
            const imageUrls = await getDownloadURL(storageRef);
            urls.push(imageUrls);
            paths.push(storageRef.fullPath);
        }
        catch (err) {
            portfolioError.value = err.message
        }
    }
    ///create new portfolio object with image urls
    const newPortfolio = {
        ...portfolio,
        images: urls,
        imagePaths: paths,
        description: paragraphs
    }

    ///upload portfolio to firestore
    try {
        await addDoc(collection(db, 'portfolio'), newPortfolio);
        console.log('Portfolio uploaded successfully')
    }
    catch (err) {
        portfolioError.value = err.message
        console.log(portfolio)
    }
}

const UseUploadPortfolio = () => {
    return {
        UploadPortfolio, portfolioError
    }
}

export default UseUploadPortfolio;