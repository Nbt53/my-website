import { auth } from "@/firebase/config";
import { signOut } from "firebase/auth";

import { ref } from "vue";

const error = ref(null);

const logout = async () => {
    error.value = null;
    try {
        await signOut(auth);
        console.log("User logged out successfully");
        return { success: true };
    } catch (err) {
        console.log(err.message);
        error.value = err.message;
        return { success: false, error };
    }
}

const useLogout = () => {
    return { logout, error };
}

export default useLogout;