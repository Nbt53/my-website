import { db } from "@/firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { ref } from "vue";
const error = ref(null);
const uploadTodos = async (todos) => {

    try {
        await addDoc(collection(db, 'todos'), todos.value);
    } catch (err) {
        console.log(err.message);
        error.value = 'could not upload the data';
    }
}

const useUploadTodos = () => {
    return { uploadTodos, error }
}

export default useUploadTodos;