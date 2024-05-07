const ListAdd = (item, list) => {
    if (list.value.includes(item.value.trim())) {
        item.value = "";
        return
    }
    list.value.push(item.value.trim());
    item.value = "";
    return list;
}

const useListAdd = () => {
    return { ListAdd }
}

export default useListAdd;