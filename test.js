// Для исполнения кода в терминале на Windows ввести node и путь к исполняемому файлу

const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const rl = readline.createInterface({ input, output });


// 1.
rl.question('Введите число: ', (answer) => {
  rl.close();
  if (answer > 7) console.log('Привет')
});

// 2.
rl.question('Введите имя: ', (answer) => {
  rl.close();
  if (answer === 'Вячеслав') console.log('Привет, Вячеслав')
  else console.log('Нет такого имени')
});

// 3.
// формат ввода массива - строка "4, 3, 2, ..."
rl.question('Введите массив: ', (answer) => {
  rl.close();
  const array = answer.split(', ')
  console.log(array.filter(n => n % 3 === 0))
});

// 4. Скобочная последовательность неправильная - последняя скобка лишняя
