
var request = new XMLHttpRequest();
request.open('GET', 'data/books.json', false);
request.send(null);
var data = JSON.parse(request.responseText);
console.log(data);

var books = data.books;

var table = document.createElement('table');
table.style.width = '100%';
table.setAttribute("border","2");

var tblBody = document.createElement("tbody");
table.appendChild(tblBody);

var row = document.createElement("tr");
var cell = document.createElement("th");
cell.innerHTML ="Title";
row.appendChild(cell);

cell = document.createElement("th");
cell.innerHTML ="Year";
row.appendChild(cell);

cell = document.createElement("th");
cell.innerHTML ="Isbn";
row.appendChild(cell);

cell = document.createElement("th");
cell.innerHTML ="Authors";
row.appendChild(cell);
tblBody.appendChild(row);

for (var i=0; i < books.length; i++) {

	row = document.createElement("tr");
	tblBody.appendChild(row);
	//console.log(books);


	cell = document.createElement('td');
	cell.innerHTML = books[i].title;
	row.appendChild(cell);

	cell = document.createElement('td');
	cell.innerHTML = books[i].year;
	row.appendChild(cell);

	cell = document.createElement('td');
	cell.innerHTML = books[i].isbn;
	row.appendChild(cell);

	cell = document.createElement('td');
	cell.innerHTML = books[i].authors;
	row.appendChild(cell);

}

document.body.appendChild(table);
var nodes = document.querySelectorAll("tr");

nodes[1].addEventListener("click",  function() {
	nodes[1].parentNode.insertBefore(nodes[1],nodes[0].nextSibling)});
nodes[2].addEventListener("click",  function() {
	nodes[2].parentNode.insertBefore(nodes[2],nodes[0].nextSibling)});
nodes[3].addEventListener("click",  function() {
	nodes[3].parentNode.insertBefore(nodes[3],nodes[0].nextSibling)});
nodes[4].addEventListener("click",  function() {
	nodes[4].parentNode.insertBefore(nodes[4],nodes[0].nextSibling)});
nodes[5].addEventListener("click",  function() {
	nodes[5].parentNode.insertBefore(nodes[5],nodes[0].nextSibling)});
