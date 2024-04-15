// Создаем переменную
var variable = "igonin";

// Получаем тип переменной
var variableType = typeof variable;

// Выводим тип переменной на экран
console.log("Тип переменной: " + variableType);

// Проверяем тип переменной и выводим текст на экран в зависимости от значения
if (variableType === "number") {
    console.log("Переменная является числом.");
} else if (variableType === "string") {
    console.log("Переменная является строкой.");
} else if (variableType === "boolean") {
    console.log("Переменная является булевым значением.");
} else {
    console.log("Переменная имеет другой тип.");
}
