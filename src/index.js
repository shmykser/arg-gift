import { checkAnswer } from './riddle11';

document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('answer');
    const button = document.getElementById('check');
    const result = document.getElementById('result');

    button.addEventListener('click', () => {
        const userAnswer = input.value.trim();
        if (checkAnswer(userAnswer)) {
            result.textContent = "Правильно! Переходи к следующей загадке.";
            setTimeout(() => {
                window.location.href = "riddle12.html"; // Переход на следующую загадку
            }, 2000);
        } else {
            result.textContent = "Неверно, попробуй ещё раз!";
        }
    });
});