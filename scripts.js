function greeting(){
    console.log("Hello World")
}

greeting();


function onTabClick(e){
    let activeTabs = document.querySelectorAll('.active');


    activeTabs.forEach(function (tab){
        tab.className = tab.className.replace('active', '');
    });



    e.target.parentElement.className += ' active';
    document.getElementById(event.target.href.split("#")[1]).className += ' active';

}

const element = document.getElementById('nav-tab');
element.addEventListener('click', onTabClick, false);




////////////////////////            DRAG & DROP         /////////////////////////////////

const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');


fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for(const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}


function dragStart(){
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd(){
    this.className = 'fill';
}

function dragOver(e){
    e.preventDefault();
}

function dragEnter(e){
    e.preventDefault();
    this.className += ' hovered';
}

function dragLeave(){
    this.className = 'empty';
}

function dragDrop(){
    this.className = 'empty';
    this.append(fill);
}




///////////             To add Style to element           //////////////////////////////

function addStyle(){
    var element, name, arr;
    element = document.getElementById('myDiv');
    name = 'mystyle';
    arr = element.className.split(' ');
    if(arr.indexOf(name) === -1){
        element.className += " " + name;
    }
}


////             To do Input           /////////////////

function addTodo(){
    var node = document.createElement('li');
    var input = document.getElementById('my-input').value;
    var textNode = document.createTextNode(input);
    node.classList.add('fadeIn');
    node.appendChild(textNode);
    document.getElementById('my-list').appendChild(node);
    document.getElementById('my-input').value = "";
};

var input = document.getElementById('my-input');
input.addEventListener('keyup', function(e){
    if(e.keyCode === 13){
        e.preventDefault();
        document.getElementById('my-button').click();
    }
});




/////                     To Do List              ////////////////////////////


var input = document.getElementById('task-input');
input.addEventListener('keyup', function(e){
    if(e.keyCode === 13){
        e.preventDefault();
        console.log(e.keyCode);
        document.getElementById('list-button').click();
    }
});

var myNodeList = document.getElementsByTagName('li');
var i;

for(i = 0; i < myNodeList.length; i++){
    var span = document.createElement('span');
    var txt = document.createTextNode('\u00d7');
    span.className = 'close';
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}

var close = document.getElementsByClassName('close');
var i;

for(i = 0; i < close.length; i++){
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = 'none';
    }
}

var list = document.getElementById('my-to-do-list');
list.addEventListener('click', function(e){
    if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
    }
}, false);


function newElement() {
    var li = document.createElement('li');
    var inputValue = document.getElementById('task-input').value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    li.classList.add('fadeIn');
    if(inputValue === ""){
        alert("You must add something to your list");
    } else {
        document.getElementById('my-to-do-list').appendChild(li);
    }
        document.getElementById('task-input').value = "";

    var span = document.createElement('span');
    var txt = document.createTextNode('\u00d7');
    span.className = 'close';
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++){
        close[i].onclick = function(){
            var div = this.parentElement;
            div.style.display = 'none';
        }
    }


}



