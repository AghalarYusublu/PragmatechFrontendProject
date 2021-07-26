let btn = document.querySelectorAll('.btn')
let txt = document.querySelector('.txt')

btn.forEach(button => {
    button.addEventListener('click', calculate);
});

function calculate(event) {
    let clickedButtonValue = event.target.value;
    if (clickedButtonValue === '=') {
        if (txt.value !== '') {
            txt.value = eval(txt.value);
        }
    } else if (clickedButtonValue === 'AC') {
        txt.value = '';
    } else if (clickedButtonValue === 'DEL') {
        txt.value = txt.value.substr(0, txt.value.length - 1)
    } else {
        txt.value += clickedButtonValue;
    }
}