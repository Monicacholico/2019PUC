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





