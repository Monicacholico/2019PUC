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



/////                     To Do List              ////////////////////////////



var myNodeList = document.getElementsByTagName('LI');
var i;

for(i = 0; i < myNodeList.length; i++){
    var span = document.createElement('SPAN');
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

var list = document.querySelector('ul');
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
    // li.classList.add('fading');
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

    var input = document.getElementById('task-input');
    input.addEventListener('keyup', function(e){
        e.preventDefault();
        if(e.keyCode === 13){
            console.log(e.keyCode);
            document.getElementById('list-button').click();
        }
    });
}



