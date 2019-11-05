let keysArray = [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete'],
    ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l',';', "'", 'Enter'],
    ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift', '▲'],
    ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', '◀', '▼', '▶']
];

let codesArray = [
    ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
    ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
    ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL','Semicolon', 'Quote', 'Enter'],
    ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'ArrowUp'],
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
keyboard.classList.add('keyboard');

textArea.setAttribute('autofocus', true);


for (let i = 0; i < keysArray.length; i++) { //проход по строкам клавиатуры (по элементами массива)
    let row = document.createElement('div');
    row.classList.add('row', `row_${i+1}`);
    keyboard.append(row);

    for (let j = 0; j < keysArray[i].length; j++) { //проход по элементам каждой строки клавиатуры (по элементам каждого элемента массива)

        let btn = document.createElement('div');
        row.append(btn);
        btn.textContent = keysArray[i][j];

        btn.classList.add('btn', `btn_${keysArray[i][j]}`);

    }
}