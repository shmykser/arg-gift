// Объект с загадками
const riddles = [
    {
        id: 1,
        correctAnswer: "15.02.1991", // Замени на реальную дату
        nextPage: "riddle2.html"
    },
    {
        id: 2,
        correctAnswer: "console", // Ответ для перехода
        nextPage: "riddle3.html",
        hint: "Следующая страница: riddle3.html" // Подсказка в консоли
    },
    {
        id: 3,
        correctAnswer: "другая", // Правильный ответ
        nextPage: "riddle4.html"
    },
    {
        id: 4,
        correctAnswer: "hidden", // Ответ для перехода
        nextPage: "riddle5.html"
    },
    {
        id: 5,
        correctAnswer: "qr", // Ответ для перехода
        nextPage: "riddle6.html"
    },
    {
        id: 6,
        correctAnswer: "coordinates", // Ответ для перехода
        nextPage: "riddle7.html"
    },
    {
        id: 7,
        correctAnswer: "puzzle", // Ответ для перехода
        nextPage: "riddle8.html"
    },
    {
        id: 8,
        correctAnswer: "audio", // Ответ для перехода
        nextPage: "riddle9.html"
    },
    {
        id: 9,
        correctAnswer: "ar", // Ответ для перехода
        nextPage: "riddle10.html"
    }
];

// Функция для проверки ответа
function checkAnswer(riddleId) {
    const riddle = riddles.find(r => r.id === riddleId); // Находим текущую загадку
    let userAnswer;

    if (riddleId === 2 || riddleId === 4 || riddleId === 5 || riddleId === 6 || riddleId === 7 || riddleId === 8 || riddleId === 9) {
        // Для загадок, где ответ не нужен, просто переходим дальше
        userAnswer = riddle.correctAnswer;
    } else {
        userAnswer = document.getElementById("answer").value.trim().toLowerCase();
    }

    if (userAnswer === riddle.correctAnswer) {
        window.location.href = riddle.nextPage; // Переход на следующую страницу
    } else {
        document.getElementById("result").textContent = "Неверно, попробуй ещё раз!";
    }
}

// Подсказка для загадки 2
if (window.location.href.includes("riddle2.html")) {
    console.log(riddles[1].hint); // Выводим подсказку в консоль
}
