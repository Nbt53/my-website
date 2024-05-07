import { db } from "@/firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { ref } from "vue";

const slugs = ref([]);

const getSlugs = async () => {
    const documents = collection(db, 'portfolio');

    try {
        const res = await getDocs(documents);
        slugs.value = res.docs.map(doc => doc.data().slug);
    }
    catch (err) {
        console.log(err.message);
    }
    return slugs;
}

export default getSlugs;