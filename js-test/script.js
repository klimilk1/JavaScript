let todo_list = [];
const input_elem = document.getElementById('input');
const input_elem = document.getElementById('input-1');
const btn_elem = document.getElementById('btn');
const output_elem = document.getElementById('output');
const form_elem = document.getElementById('form_data');
const elems = document.getElementsByClassName('elem');

for (var i = 0; i < 10; i++) {
    document.write('<img src="img/js.jpg">');
}

function render() {
    output_elem.innerText = '';
    todo_list.forEach(elem => {
        const li_elem = document.createElement('li');
        li_elem.innerText = elem;
        output_elem.appendChild(li_elem);
    })
}



up_elem.addEventListener('click', () => {
    todo_list = todo_list.sort();
    render();
})



down_elem.addEventListener('click', () => {
    todo_list = todo_list.sort().reverse();
    render();
})



form_elem.addEventListener('submit', event => {
    event.preventDefault();
    const value = input_elem.value;
    input_elem.value = '';
    todo_list.push(value);
    render();
})



form_elem.addEventListener('submit', event => {
    event.preventDefault();
    const value = input_elem.value;
    input_elem.value = '';
    todo_list.push(value);
    render();
})