const symbolArray = [[
  {
    en: '`',
    ru: 'ё',
    enShift: '¬',
    ruShift: 'Ё',
    code: 'Backquote',
  },
  {
    en: '1',
    ru: '1',
    enShift: '!',
    ruShift: '!',
    code: 'Digit1',
  },
  {
    en: '2',
    ru: '2',
    enShift: '"',
    ruShift: '@',
    code: 'Digit2',
  },
  {
    en: '3',
    ru: '3',
    enShift: '#',
    ruShift: '№',
    code: 'Digit3',
  },
  {
    en: '4',
    ru: '4',
    enShift: '$',
    ruShift: '%',
    code: 'Digit4',
  },
  {
    en: '5',
    ru: '5',
    enShift: '%',
    ruShift: ':',
    code: 'Digit5',
  },
  {
    en: '6',
    ru: '6',
    enShift: '^',
    ruShift: ':',
    code: 'Digit6',
  },
  {
    en: '7',
    ru: '7',
    enShift: '&',
    ruShift: '?',
    code: 'Digit7',
  },
  {
    en: '8',
    ru: '8',
    enShift: '*',
    ruShift: '*',
    code: 'Digit8',
  },
  {
    en: '9',
    ru: '9',
    enShift: '(',
    ruShift: '(',
    code: 'Digit9',
  },
  {
    en: '0',
    ru: '0',
    enShift: ')',
    ruShift: ')',
    code: 'Digit0',
  },
  {
    en: '-',
    ru: '-',
    enShift: '_',
    ruShift: '_',
    code: 'Minus',
  },
  {
    en: '=',
    ru: '=',
    enShift: '+',
    ruShift: '+',
    code: 'Equal',
  },
  {
    en: '&#9003',
    ru: '&#9003',
    enShift: '&#9003',
    ruShift: '&#9003',
    code: 'Backspace',
  }],
[
  {
    en: '&#8677',
    ru: '&#8677',
    enShift: '&#8677',
    ruShift: '&#8677',
    code: 'Tab',
  },
  {
    en: 'q',
    ru: 'й',
    enShift: 'Q',
    ruShift: 'Й',
    code: 'KeyQ',
  },
  {
    en: 'w',
    ru: 'ц',
    enShift: 'W',
    ruShift: 'Ц',
    code: 'KeyW',
  },
  {
    en: 'e',
    ru: 'у',
    enShift: 'E',
    ruShift: 'У',
    code: 'KeyE',
  },
  {
    en: 'r',
    ru: 'к',
    enShift: 'R',
    ruShift: 'К',
    code: 'KeyR',
  },
  {
    en: 't',
    ru: 'е',
    enShift: 'T',
    ruShift: 'Е',
    code: 'KeyT',
  },
  {
    en: 'y',
    ru: 'н',
    enShift: 'Y',
    ruShift: 'Н',
    code: 'KeyY',
  },
  {
    en: 'u',
    ru: 'г',
    enShift: 'U',
    ruShift: 'Г',
    code: 'KeyU',
  },
  {
    en: 'i',
    ru: 'ш',
    enShift: 'I',
    ruShift: 'Ш',
    code: 'KeyI',
  },
  {
    en: 'o',
    ru: 'щ',
    enShift: 'O',
    ruShift: 'Щ',
    code: 'KeyO',
  },
  {
    en: 'p',
    ru: 'з',
    enShift: 'P',
    ruShift: 'З',
    code: 'KeyP',
  },
  {
    en: '[',
    ru: 'х',
    enShift: '{',
    ruShift: 'Х',
    code: 'BracketLeft',
  },
  {
    en: ']',
    ru: 'ъ',
    enShift: '}',
    ruShift: 'Ъ',
    code: 'BracketRight',
  },
  {
    en: '\\',
    ru: '\\',
    enShift: '\\',
    ruShift: '\\',
    code: 'Backslash',
  },
],
[
  {
    en: '&#8682',
    ru: '&#8682',
    enShift: '&#8682',
    ruShift: '&#8682',
    code: 'CapsLock',
  },
  {
    en: 'a',
    ru: 'ф',
    enShift: 'A',
    ruShift: 'Ф',
    code: 'KeyA',
  },
  {
    en: 's',
    ru: 'ы',
    enShift: 'S',
    ruShift: 's',
    code: 'KeyS',
  },
  {
    en: 'd',
    ru: 'в',
    enShift: 'D',
    ruShift: 'в',
    code: 'KeyD',
  },
  {
    en: 'f',
    ru: 'а',
    enShift: 'F',
    ruShift: 'А',
    code: 'KeyF',
  },
  {
    en: 'g',
    ru: 'п',
    enShift: 'G',
    ruShift: 'П',
    code: 'KeyG',
  },
  {
    en: 'h',
    ru: 'р',
    enShift: 'H',
    ruShift: 'Р',
    code: 'KeyH',
  },
  {
    en: 'j',
    ru: 'о',
    enShift: 'J',
    ruShift: 'О',
    code: 'KeyJ',
  },
  {
    en: 'k',
    ru: 'л',
    enShift: 'K',
    ruShift: 'Л',
    code: 'KeyK',
  },
  {
    en: 'l',
    ru: 'д',
    enShift: 'L',
    ruShift: 'Д',
    code: 'KeyL',
  },
  {
    en: ';',
    ru: 'ж',
    enShift: ':',
    ruShift: 'Ж',
    code: 'Semicolon',
  },
  {
    en: "'",
    ru: 'э',
    enShift: '"',
    ruShift: 'Э',
    code: 'Quote',
  },
  {
    en: '&#8629',
    ru: '&#8629',
    enShift: '&#8629',
    ruShift: '&#8629',
    code: 'Enter',
  }],
[
  {
    en: '&#8679',
    ru: '&#8679',
    enShift: '&#8679',
    ruShift: '&#8679',
    code: 'ShiftLeft',
  },
  {
    en: 'z',
    ru: 'я',
    enShift: 'Z',
    ruShift: 'Я',
    code: 'KeyZ',
  },
  {
    en: 'x',
    ru: 'ч',
    enShift: 'X',
    ruShift: 'Ч',
    code: 'KeyX',
  },
  {
    en: 'c',
    ru: 'с',
    enShift: 'C',
    ruShift: 'С',
    code: 'KeyC',
  },
  {
    en: 'v',
    ru: 'м',
    enShift: 'V',
    ruShift: 'М',
    code: 'KeyV',
  },
  {
    en: 'b',
    ru: 'и',
    enShift: 'B',
    ruShift: 'И',
    code: 'KeyB',
  },
  {
    en: 'n',
    ru: 'т',
    enShift: 'N',
    ruShift: 'Т',
    code: 'KeyN',
  },
  {
    en: 'm',
    ru: 'ь',
    enShift: 'M',
    ruShift: 'Ь',
    code: 'KeyM',
  },
  {
    en: ',',
    ru: 'б',
    enShift: '<',
    ruShift: 'Б',
    code: 'Comma',
  },
  {
    en: '.',
    ru: 'ю',
    enShift: '>',
    ruShift: 'Ю',
    code: 'Period',
  },
  {
    en: '/',
    ru: '.',
    enShift: '?',
    ruShift: ',',
    code: 'Slash',
  },
  {
    en: '&#8638',
    ru: '&#8638',
    enShift: '&#8638',
    ruShift: '&#8638',
    code: 'ArrowUp',
  },
  {
    en: '&#8679',
    ru: '&#8679',
    enShift: '&#8679',
    ruShift: '&#8679',
    code: 'ShiftRight',
  }],
[
  {
    en: 'Ctrl',
    ru: 'Ctrl',
    enShift: 'Ctrl',
    ruShift: 'Ctrl',
    code: 'ControlLeft',
  },
  {
    en: 'Win',
    ru: 'Win',
    enShift: 'Win',
    ruShift: 'Win',
    code: 'MetaLeft',
  },
  {
    en: 'Alt',
    ru: 'Alt',
    enShift: 'Win',
    ruShift: 'Win',
    code: 'AltLeft',
  },
  {
    en: ' ',
    ru: ' ',
    enShift: ' ',
    ruShift: ' ',
    code: 'Space',
  },
  {
    en: 'Alt',
    ru: 'Alt',
    enShift: 'Alt',
    ruShift: 'Alt',
    code: 'AltRight',
  },
  {
    en: '&#8637',
    ru: '&#8637',
    enShift: '&#8637',
    ruShift: '&#8637',
    code: 'ArrowLeft',
  },
  {
    en: '&#8642',
    ru: '&#8642',
    enShift: '#8642',
    ruShift: '#8642',
    code: 'ArrowDown',
  },
  {
    en: '&#8641',
    ru: '&#8641',
    enShift: '&#8641',
    ruShift: '&#8641',
    code: 'ArrowRight',
  },
  {
    en: 'Ctrl',
    ru: 'Ctrl',
    enShift: 'Ctrl',
    ruShift: 'Ctrl',
    code: 'ControlRight',
  }],
];

const body = document.querySelector('body');

function init() {
  const hello = document.createElement('div');
  hello.className = 'hello';
  hello.innerHTML = 'RS School virtual keyboard';
  body.append(hello);
  const textArea = document.createElement('textarea');
  textArea.className = 'textArea';
  textArea.rows = '4';
  textArea.cols = '50';
  body.append(textArea);
  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';
  body.append(wrapper);
  for (let i = 0; i < symbolArray.length; i += 1) {
    const rows = document.createElement('div');
    rows.className = 'rows';
    wrapper.append(rows);
    for (let n = 0; n < symbolArray[i].length; n += 1) {
      const symbol = document.createElement('div');
      symbol.className = `symbol char ${symbolArray[i][n].code}`;
      symbol.innerHTML = symbolArray[i][n].en;
      rows.append(symbol);
    }
  }
  const message = document.createElement('div');
  message.className = 'message';
  message.innerHTML = 'Клавиатура создана в операционной системе Windows. Для переключения языка комбинация: левыe shift + alt';
  body.append(message);
  const noСhar = document.querySelectorAll('.Backspace, .Tab, .CapsLock, .Enter, .ShiftLeft, .ShiftRight, .ControlLeft, .MetaLeft, .AltLeft, .AltRight, .ControlRight');
  noСhar.forEach((item) => item.classList.remove('char'));
}

init();

// animation by mouse

function addAnimationMouse(event) {
  event.target.classList.add('animation');
}

function removeAnimationMouse(event) {
  event.target.classList.remove('animation');
}

const allSymbol = document.querySelectorAll('.symbol');

allSymbol.forEach((element) => {
  element.addEventListener('mousedown', addAnimationMouse);
  element.addEventListener('mouseup', removeAnimationMouse);
});

// animation by key

const textArea = document.querySelector('textArea');

function addAnimationKey(event) {
  if (event.code !== 'F12') {
    const symbolTarget = document.querySelector(`.${event.code}`);
    symbolTarget.classList.add('animation');
    textArea.focus();
  }
}

function removeAnimationKey(event) {
  if (event.code !== 'F12') {
    const symbolTarget = document.querySelector(`.${event.code}`);
    symbolTarget.classList.remove('animation');
  }
}

body.addEventListener('keydown', addAnimationKey);
body.addEventListener('keyup', removeAnimationKey);

// add by mouse

const chars = document.querySelectorAll('.char');

function addSymbol(event) {
  textArea.value += event.target.innerHTML;
  textArea.focus();
}

chars.forEach((element) => {
  element.addEventListener('click', addSymbol);
});

// change language
let language = 'en';
function changeLanguage(event) {
  if (event.code === 'ShiftLeft') {
    document.onkeyup = function getAlt(two) {
      if (two.code === 'AltLeft') {
        language = 'ru';
        const symbols = document.querySelectorAll('.symbol');
        symbols.forEach((element) => {
          const el = element;
          for (let i = 0; i < symbolArray.length; i += 1) {
            for (let n = 0; n < symbolArray[i].length; n += 1) {
              if (el.classList.contains(`${symbolArray[i][n].code}`)) el.innerHTML = `${symbolArray[i][n].ru}`;
            }
          }
        });
      }
    };
  }
}

function removeChangeLanguage(event) {
  if (language === 'ru') {
    if (event.code === 'ShiftLeft') {
      document.onkeyup = function getAlt(s) {
        if (s.code === 'AltLeft') {
          language = 'en';
          const symbols = document.querySelectorAll('.symbol');
          symbols.forEach((element) => {
            const el = element;
            for (let i = 0; i < symbolArray.length; i += 1) {
              for (let n = 0; n < symbolArray[i].length; n += 1) {
                if (el.classList.contains(`${symbolArray[i][n].code}`)) el.innerHTML = `${symbolArray[i][n].en}`;
              }
            }
          });
        }
      };
    }
  }
}

document.addEventListener('keydown', changeLanguage);
document.addEventListener('keydown', removeChangeLanguage);

// tab

const tabButton = document.querySelector('.Tab');

function tabMouse() {
  textArea.value += '\t';
  textArea.focus();
}

function tabKey(event) {
  if (event.code === 'Tab') {
    event.preventDefault();
    textArea.value += '\t';
    textArea.focus();
  }
}

tabButton.addEventListener('click', tabMouse);

document.addEventListener('keydown', tabKey);

// del

function deleteLetter() {
  const textAreaValue = textArea.value;
  textArea.value = textAreaValue.slice(0, -1);
  textArea.focus();
}
const backspaceButton = document.querySelector('.Backspace');

backspaceButton.addEventListener('click', deleteLetter);

// enter

function addEnter() {
  textArea.value += '\n';
  textArea.focus();
}

const enterButton = document.querySelector('.Enter');

enterButton.addEventListener('click', addEnter);

// caps

const capsButton = document.querySelector('.CapsLock');

function caps(event) {
  if ((event.code === 'CapsLock' && capsButton.classList.contains('animation1')) || (event.target.classList.contains('animation1'))) {
    capsButton.classList.remove('animation1');
    const allChars = document.querySelectorAll('.char');
    allChars.forEach((element) => {
      const el = element;
      el.innerHTML = el.innerHTML.toLowerCase();
    });
  } else if (event.code === 'CapsLock' || event.target.classList.contains('CapsLock')) {
    capsButton.classList.add('animation1');
    const allChars = document.querySelectorAll('.char');
    allChars.forEach((element) => {
      const el = element;
      el.innerHTML = el.innerHTML.toUpperCase();
    });
  }
}

capsButton.addEventListener('click', caps);
document.addEventListener('keydown', caps);
