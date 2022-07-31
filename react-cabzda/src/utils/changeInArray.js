export const changeInArray = (arr, propertyName, newPropertyName, newObject) => {
    return arr.map(el => {
        if (el[propertyName] === newPropertyName) {
            return { ...el, ...newObject }
        }
        return el;
    })
}