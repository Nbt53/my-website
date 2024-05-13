import { ref } from 'vue';

const error = ref(null);
const filteredDoc = ref(null);
const filterTodos = (user, documents) => {
    error.value = null;
    documents.filter(doc => {
        if (doc.user === user) {
            filteredDoc.value = doc;
        }
    }
    )
    error.value = null;
    return filteredDoc;
}

const getTodos = () => {
    return { error, filterTodos }
}

export default getTodos;