// Змінні для відстеження стану кліків на 9-му і 10-му елементах
let isFirstClickOnElement9 = true;
let isFirstClickOnElement10 = true;

// Функція для зміни кольору фону та тексту
function changeColors(element, backgroundColor, textColor) {
    element.style.backgroundColor = backgroundColor;
    element.style.color = textColor;
}

// Отримання 9-го елемента за допомогою getElementById()
const element9 = document.getElementById('element9');
// Отримання 10-го елемента за допомогою querySelector()
const element10 = document.querySelector('#element10');

// Додавання обробника кліку для 9-го елемента
element9.addEventListener('click', function() {
    if (isFirstClickOnElement9) {
        // Перший клік: встановити кольори для 9-го елемента
        changeColors(element9, 'lightblue', 'darkblue');
        isFirstClickOnElement9 = false;
    } else {
        // Повторний клік: обміняти кольори з 10-м елементом
        changeColors(element9, 'lightgreen', 'darkgreen');
        changeColors(element10, 'lightblue', 'darkblue');
        isFirstClickOnElement9 = true; // Повернути до початкового стану для чергового кліку
    }
});

// Додавання обробника кліку для 10-го елемента
element10.addEventListener('click', function() {
    if (isFirstClickOnElement10) {
        // Перший клік: встановити кольори для 10-го елемента
        changeColors(element10, 'lightgreen', 'darkgreen');
        isFirstClickOnElement10 = false;
    } else {
        // Повторний клік: обміняти кольори з 9-м елементом
        changeColors(element10, 'lightblue', 'darkblue');
        changeColors(element9, 'lightgreen', 'darkgreen');
        isFirstClickOnElement10 = true; // Повернути до початкового стану для чергового кліку
    }
});

// Додавання функціональності кнопок для роботи із зображенням
const initialImage = document.getElementById('cityImage');
const addButton = document.getElementById('addBtn');
const increaseButton = document.getElementById('increaseBtn');
const decreaseButton = document.getElementById('decreaseBtn');
const removeButton = document.getElementById('removeBtn');

// Масив для зберігання зображень
let images = [];

// Кнопка "Додати" - клонувати зображення
addButton.addEventListener('click', function() {
    const newImage = initialImage.cloneNode(true);
    document.body.appendChild(newImage);
    images.push(newImage); // Додати нове зображення до масиву
});

// Кнопка "Збільшити" - збільшити зображення на 10%
increaseButton.addEventListener('click', function() {
    const allImages = document.querySelectorAll('img'); // Отримати всі зображення на сторінці
    allImages.forEach((img) => {
        let currentWidth = img.width;
        img.width = currentWidth * 1.1; // Збільшити на 10%
    });
});

// Кнопка "Зменшити" - зменшити зображення на 10%
decreaseButton.addEventListener('click', function() {
    const allImages = document.querySelectorAll('img'); // Отримати всі зображення на сторінці
    allImages.forEach((img) => {
        let currentWidth = img.width;
        img.width = currentWidth * 0.9; // Зменшити на 10%
    });
});

// Кнопка "Видалити" - видалити останнє додане зображення або початкове
removeButton.addEventListener('click', function() {
    if (images.length > 0) {
        const lastImage = images.pop(); // Витягнути останнє зображення з масиву
        lastImage.remove(); // Видалити його з DOM
    } else {
        // Якщо немає доданих зображень, видалити початкове зображення
        initialImage.remove();
    }
});
