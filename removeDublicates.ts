let array = [1, 2, 2, 3, 4, 3, 5, 4, 6, 5, 45, 45, 23, 65, 65];

const removeArrayElement = (array: number[]): number[] => {
    return array.filter((item,
        index) => array.indexOf(item) === index);
}
console.log(removeArrayElement(array));