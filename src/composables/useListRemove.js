const ListRemove = (list, item) => {
    list.value = list.value.filter(i => i !== item);
    return list;
}

const UseListRemove = () => {
    return { ListRemove }
}

export default UseListRemove;