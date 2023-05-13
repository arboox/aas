function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}
const array = ['https://aas.arboox.com/app/1', 'https://aas.arboox.com/app/2', 'https://aas.arboox.com/app/3', 'https://aas.arboox.com/app/4', 'https://aas.arboox.com/app/5', 'https://aas.arboox.com/app/6', 'https://aas.arboox.com/app/7', 'https://aas.arboox.com/app/8'];
const result = getRandomItem(array);
document.getElementById('aas-1').src = result;
