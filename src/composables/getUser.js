import { auth } from "@/firebase/config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ref } from "vue";

const user = ref(null)

onAuthStateChanged(auth, (u) => {
    user.value = u
})

const getUser = () => {
    return { user }
}

export default getUser;