let keysArrayEN = [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete'],
    ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l',';', "'", 'Enter'],
    ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift'],
    ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', '◀', '▼', '▶']
];

let keysArrayRU = [
    ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Delete'],
    ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', "э", 'Enter'],
    ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'Shift'],
    ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', '◀', '▼', '▶']
];

let keysArrayENUP = [
    ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],
    ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Delete'],
    ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',':', "”", 'Enter'],
    ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '▲', 'Shift'],
    ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', '◀', '▼', '▶']
];

let keysArrayRUUP = [
    ['Ё', '!', '»', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'],
    ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Delete'],
    ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', "Э", 'Enter'],
    ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '▲', 'Shift'],
    ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', '◀', '▼', '▶']
];

let codesArray = [
    ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
    ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
    ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL','Semicolon', 'Quote', 'Enter'],
    ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp','ShiftRight'],
    ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight']
];

let wrapper = document.createElement('div');
let textArea = document.createElement('textarea');
let keyboard = document.createElement('div');

document.body.append(wrapper);
wrapper.append(textArea);
wrapper.append(keyboard);

wrapper.classList.add('wrapper');
textArea.classList.add('wrapper--text_area');
keyboard.classList.add('keyboard', 'keyboard_EN', 'keyboardDown');

textArea.setAttribute('autofocus', true);

createKeyboard(keysArrayEN);

function createKeyboard(keysArrayEN) {
    for (let i = 0; i < keysArrayEN.length; i++) { //проход по строкам клавиатуры (по элементами массива)
        
        let row = document.createElement('div');
        row.classList.add('row', `row_${i+1}`);
        keyboard.append(row);

        for (let j = 0; j < keysArrayEN[i].length; j++) { //проход по элементам каждой строки клавиатуры (по элементам каждого элемента массива)

            let btn = document.createElement('div');
            row.append(btn);
            btn.textContent = keysArrayEN[i][j];

            btn.classList.add('btn', `btn_${keysArrayEN[i][j]}`);


            // ввод при клике мышкой
            btn.addEventListener('mousedown', (event) => {  

                if (btn.textContent === 'Tab') {

                    textArea.textContent += '   ';
                    btn.classList.add('btn-active');

                } else if (btn.textContent === 'Space') {

                    textArea.textContent += ' ';
                    btn.classList.add('btn-active');

                } else if (btn.textContent === 'CapsLock' || btn.textContent === 'Ctrl' || btn.textContent === 'Win' || btn.textContent === 'Alt') {

                    textArea.textContent += '';
                    btn.classList.add('btn-active');
                    
                } else if (btn.textContent === 'Shift') {
                    btn.textContent = btn.textContent.toUpperCase();
                    btn.classList.add('btn-active');
                    
                } else if (btn.textContent === 'Backspace') {
                    
                    textArea.textContent = textArea.textContent.slice(0, -1);
                    btn.classList.add('btn-active');
                    
                } else if (btn.textContent === 'Delete') {
                    
                    textArea.textContent = textArea.textContent.slice(0, -1);
                    btn.classList.add('btn-active');
                    
                } else if (btn.textContent === 'Enter') {
                    
                    textArea.textContent += '\n';
                    btn.classList.add('btn-active');

                } else {
                    textArea.textContent += `${keysArrayEN[i][j]}`;
                    // btn.style.backgroundColor = 'red';   //for animation
                    btn.classList.add('btn-active');
                }

                btn.addEventListener('mouseup', (event) => {
                    btn.classList.remove('btn-active');
                    // btn.style.backgroundColor = 'lightblue';  //for animation
                }); 
            });
        }
    }

}

//ввод с клавиатуры
document.addEventListener('keydown', (event) => {
    for (let i = 0; i < codesArray.length; i++) { 
        if (codesArray[i].indexOf(event.code) !== -1) {
            let x = codesArray[i].indexOf(event.code); //place
            let ind = i; //row
            let newBtn = document.querySelector(`.btn_${keysArrayEN[ind][x]}`);

            newBtn.classList.add('btn-active');
            
            document.addEventListener('keyup', (event) => {
                 newBtn = document.querySelector(`.btn_${keysArrayEN[ind][x]}`);
                 newBtn.classList.remove('btn-active');
            });
            
        }   

    }
});



//для сочетания клавиш
function changeKeyboard(func, ...codes) {
    let pressed = new Set();

    document.addEventListener('keydown', function(event) {
      pressed.add(event.code);

      for (let code of codes) { 
        if (!pressed.has(code)) {
          return;
        }
      }
       
      pressed.clear();

      func();
      document.addEventListener('keyup', function(event) {
        pressed.delete(event.code);
      });
    });
  }

  //shift+alt - change language
  changeKeyboard(
    () => {
        let elemToDel = document.querySelector('.keyboard');
        let keyEN = document.querySelector('.keyboard_EN');
        let keyRU = document.querySelector('.keyboard_RU');

        if (keyEN) {

            while (elemToDel.firstChild) {
                elemToDel.removeChild(elemToDel.firstChild);
              }

            keyboard.classList.toggle('keyboard_RU');
            keyboard.classList.toggle('keyboard_EN');
            createKeyboard(keysArrayRU);
            
        } else if (keyRU) {

            while (elemToDel.firstChild) {
                elemToDel.removeChild(elemToDel.firstChild);
              }
            
            keyboard.classList.toggle('keyboard_RU');
            keyboard.classList.toggle('keyboard_EN');
            createKeyboard(keysArrayEN);
        }
    },
    "ShiftLeft",
    "AltLeft"
  );










// document.addEventListener('keydown', function(event) {
//     if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
//       alert('Отменить!')
//     }
//   });