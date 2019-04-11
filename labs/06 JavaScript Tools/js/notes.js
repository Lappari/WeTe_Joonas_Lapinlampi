var notes = new Array();
loadList();

function addItem() {
	var add = false;
	var textbox = document.getElementById('item');
	var itemText = textbox.value;
	textbox.value = '';
	textbox.focus();
	var newItem = {title: itemText, quantity: 1};
	for (var i = 0; i < notes.length; i++) {
		if (notes[i].title == newItem.title) {
			notes[i].quantity++;
			add = true;
		}
	}
	if (!add) {
		notes.push(newItem);
	}
	saveList();
	displayList();
}


function displayList() {
	var table = document.getElementById('list');
	table.innerHTML = '';
	for (var i = 0; i<notes.length; i++) {
		var node = undefined;
		var note = notes[i];
		var node = document.createElement('tr');
		node.innerHTML = `<td>${note.title}</td><td>${note.quantity}</td><td><a href="#" onClick="deleteIndex(${i})">delete</td>`;
		table.appendChild(node);
	}
}

function saveList() {
	localStorage.notes = JSON.stringify(notes);
}

function loadList() {
	console.log('loadList');
	if (localStorage.notes) {
		notes = JSON.parse(localStorage.notes);
		displayList();
	}
}

const deleteIndex = function (i) {
	notes.splice(i, 1);
	displayList();
};
var button;
button = document.getElementById('add');
button.onclick = addItem;