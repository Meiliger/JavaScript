// Напиши функцію getStringLength, яка приймає рядок input та повертає його довжину.
function getStringLength(input) {
    return input.length;
  }
let word = getStringLength("2323");
console.log(word);
console.log('------ Done ------');


// Створи функцію isSubstring, яка приймає два параметри: phrase і part. Функція повинна повертати true,
// якщо phrase містить part, якщо ні - потрібно повертати false.
// Функція має враховувати регістр.
function isSubstring(phrase, part) {
  return phrase.includes(part);
}

let partial = isSubstring('string', 'ring');
console.log(partial);
console.log('------ Done ------');


/*
Створи функцію countMs, яка приймає рядок text і повертає кількість літер 'm' у ньому
(як великих, так і маленьких разом).
*/
function countMs(text) {
  let mCount = 0;
  let lowerMessage = text.toLowerCase();
  for (let m = 0; m <= lowerMessage.length; m++) {
    if (lowerMessage[m] === 'm') {
      mCount++;
    }
  }
  return mCount
}

let counter = countMs('Mermaid Made Money');
console.log(counter);
console.log('------ Done ------');

// Перебір без індексу
function countMs1(text1) {
  let mCount1 = 0;
  for (const letter of text1) {
    if (letter === 'M' || letter === 'm') {
      mCount1++;
    }
  }
  return mCount1;
}

let counter1 = countMs1('Mermaid Made many Money');
console.log(counter1);
console.log('------ Done ------');


/*
Наш новий бос, як виявилося, просто ненавидить голосні літери,
тому нам потрібно прибрати їх з усієї документації.
Напиши функцію removeVowels, яка приймає рядок doc і повертає рядок,
де усі голосні з doc видалені.
Голосними для цього завдання вважаються букви aeiouy в будь-якому регістрі.
*/
function removeVowels(doc) {
  let variable = '';
  for (const letter of doc) {
    if (
      letter !== 'a' &&
      letter !== 'A' &&
      letter !== 'e' &&
      letter !== 'E' &&
      letter !== 'i' &&
      letter !== 'I' &&
      letter !== 'o' &&
      letter !== 'O' &&
      letter !== 'u' &&
      letter !== 'U' &&
      letter !== 'y' &&
      letter !== 'Y'
    ) {
      variable += letter;
    }
  }
  return variable;
}
let v = removeVowels('document');
console.log(v);
console.log('------ Done ------');


// Створи функцію makeAbbr, яка приймає рядок зі слів words і повертає абревіатуру з них у верхньому регістрі.
// Рядок words містить одне або декілька слів, розділених одним пробілом.

function makeAbbr(words) {
  let vault = '';
  const name = ` ${words.trim()}`; // додається один пропуск на початку фрази; трим обрізає по краях усі прогалини

  for (let t = 0; t < words.length; t++) {
    if (name[t] === ' ') { // якщо поточний символ пробіл
      vault += name[t + 1]; // тоді до змінної потрібно додати наступний символ
    }
  }

  return vault.toUpperCase();
}

let abbr = makeAbbr('national aeronautics space administration');
console.log(abbr); // 'NASA'
console.log('------ Done ------');


// Створи функцію decryptMessage, яка приймає рядок message і повертає рядок,
// де символи з message розташовані у зворотному порядку.
function decryptMessage(message) {
  let store = '';
  
  for (let r = message.length - 1; r >= 0; r--) {
      store = store + message[r];
  }
  return store;
}

let m = decryptMessage('!!!reeb gniknird ekil eW');
console.log(m); // We like drinking beer!!!

// another way
function decryptMessage2(message2) {
  let store2 = '';

  for (const r2 of message2) { // перебір всіх літер вихідного рядка
    store2 = r2 + store2; // вставляємо їх на початок рядка
  }
  return store2;
}

let m2 = decryptMessage2('!!!reeb gniknird ekil eW');
console.log(m2); // We like drinking beer!!!
console.log('------ Done ------');


// Створи функцію isWerewolf, яка приймає рядок target і повертає true, якщо це перевертень, або false, якщо це не так.
function isWerewolf(target) {
  const lowerTarget = target.toLowerCase();
  const abc = 'abcdefghijklmnopqrsuvwxyz';
  let direct = '';
  let reversed = '';

  for (const w of lowerTarget) {
    if (abc.includes(w)) {
      direct += w;
      reversed = w + reversed;
      console.log(direct, reversed);
    }
  }

  return direct === reversed;
}

let werewolf = isWerewolf('Racecar'); // регістр ігнорується
console.log(werewolf);
console.log('------ Done ------');