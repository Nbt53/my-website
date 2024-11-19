import { db } from "@/firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { ref } from "vue";
const error = ref(null);
const uploadPoll = async (poll) => {

    try {
        await addDoc(collection(db, 'poll'), poll);
    } catch (err) {
        console.log(err.message);
        error.value = 'could not upload the data';
    }
}

const useUploadPoll = () => {
    return { uploadPoll, error }
}

export default useUploadPoll;