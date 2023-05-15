const container = document.querySelector('.container');
const color = document.querySelector('input');

const defaultcolor = '#fff';
container.style.backgroundColor = `${defaultcolor}`;

function onChangeBg(){
    container.style.backgroundColor = `${color.value}`;
}