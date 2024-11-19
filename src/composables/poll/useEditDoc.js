import { db } from "@/firebase/config";
import { doc, updateDoc } from "firebase/firestore";
import { ref } from "vue";

const editDoc = async (docId, data) => {
    try {
        const docRef = doc(db, 'poll', docId);
        await updateDoc(docRef, data);
    } catch (error) {
        console.error('Error editing document: ', error);
    }
}

const useEditDoc = () => {
    return { editDoc }
}
export default useEditDoc;