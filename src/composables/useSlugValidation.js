import { ref } from "vue";

const slugError = ref(null);

const slugValidation = (value, slugs) => {
    if (value) {
        const forbiddenCharacters = [
            "<",
            ">",
            "#",
            "%",
            '"',
            "{",
            "}",
            "|",
            "\\",
            "^",
            "~",
            "[",
            "]",
            "`",
        ];

        if (slugs.value.includes(value)) {
            slugError.value = "Slug already exists";
        } else if (value.includes(" ")) {
            slugError.value = "Slug cannot contain spaces";
        } else if (forbiddenCharacters.some((char) => value.includes(char))) {
            slugError.value = "Slug contains forbidden characters";
        } else {
            slugError.value = null;
        }
    }
    return slugError;
}

const useSlugValidation = () => {
    return { slugError, slugValidation };
}   

export default useSlugValidation;