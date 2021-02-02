module.exports = function check(str, bracketsConfig) {
  // Создаем массив из аргумента bracketsConfig
  const arr = [];
  let i = 0;
  bracketsConfig.forEach(elem => {
    arr.push(elem.join(''));
    });
  // Цикл для проверки символа строки str на наличие в массиве
  while (i < arr.length) {
    if (str.includes(arr[i])) {
      str = str.replace(arr[i], '') 
      i = 0} else i++;
  }
  return (str.length === 0) ? true : false;
}
