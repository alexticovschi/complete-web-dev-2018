// variables
let form = document.getElementById('form');
let checkbox = document.getElementsByClassName('checkbox');
let btn = document.getElementsByTagName('button')[0];
let delBtn = document.getElementsByClassName('.del');
let input = document.getElementById('userinput');
let list = document.getElementById('list');

function inputLength() {
    return input.value.length > 0;
}

function createBtn() {
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete"));
	btn.classList.add("btn", "btn-danger","btn-sm", "del");
	btn.addEventListener('click', liDel)
	list.appendChild(btn);
}
function deleteItem(){
    list.removeChild(this.parentNode);
}

function boxChecked(event) {
    const el = event.target;
    if(el.type === "checkbox") {
        // el.parentNode.style.textDecoration = 'line-through';
        el.parentNode.classList.toggle("done");
    }
}

function addElementToList() {
    let li = document.createElement('li');
    let chkbx = document.createElement('input');
    chkbx.setAttribute('type', 'checkbox');
    chkbx.classList.add('checkbox');
    li.prepend(chkbx);
    li.appendChild(document.createTextNode(input.value));
    let btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete"));
    btn.classList.add("btn", "btn-danger", "btn-sm", "del");
    btn.addEventListener('click', deleteItem);
    li.appendChild(btn);
    list.appendChild(li);
    input.value = '';
}

function addElementAfterClick(e) {
    e.preventDefault();
    if(inputLength()) {
        addElementToList();
    }
}

function addElementAfterKeypress(event) {
    if(inputLength() && event.which === 13) {
        addElementToList();
    }
}


btn.addEventListener('click', addElementAfterClick);
list.addEventListener('click', boxChecked);
input.addEventListener('keypress', addElementAfterKeypress);