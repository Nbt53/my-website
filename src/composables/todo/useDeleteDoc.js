import { db } from "@/firebase/config";
import { doc , deleteDoc as docDelete} from "firebase/firestore";

const deleteDoc = async (id) => {
    try {
        const docRef = doc(db, 'todos', id);
        await docDelete(docRef);
    } catch (error) {
        console.error('Error deleting document: ', error);
    }
}

const useDeleteDoc = () => {
    return { deleteDoc }
}
export default useDeleteDoc;