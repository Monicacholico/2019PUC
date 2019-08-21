function greeting(){
    console.log("Hello World")
}

greeting();


function onTabClick(e){
    let activeTabs = document.querySelectorAll('.active');


    activeTabs.forEach(function(tab){
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

////////////////                     To Do List in Contact                      //////////////////////////


var myDailyList = document.getElementsByTagName('li');
var i;

for(i = 0; i < myDailyList.length; i++){
    var span = document.createElement('span');
    var txt = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(txt);
    myDailyList[i].appendChild(span);
}

var close = document.getElementsByClassName('close');
var i;
for(i = 0; i < close.length; i++) {
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = none;
    }
}

var dailyList = document.getElementById('daily-to-do-list');
dailyList.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
    }
}, false);

function newTask(){
    var li = document.createElement('li');
    var inputValue = document.getElementById('today-input').value;
    var t = document.createTextNode(inputValue);
    li.classList.add('fadeIn');
    li.appendChild(t);
    if(inputValue === '') {
        alert("You must enter a task to your list")
    }else {
        document.getElementById('daily-to-do-list').appendChild(li);
    }
        document.getElementById('today-input').value = '';

    var span = document.createElement('span');
    var txt = document.createTextNode('\u00D7');
    var cell = document.createElement('div');
    cell.className = 'grid-list';
    document.getElementById('task-squares').appendChild(cell);
    span.className = 'close';
    span.appendChild(txt);
    li.appendChild(span);

    for(var i = 0; i < close.length; i++){
        close[i].onclick = function(){
            var div = this.parentElement;
            div.style.display = 'none';
            cell.style.backgroundColor = '#C02044';
        }
    }
}


function enterClick(e){
        if(e.keyCode === 13){
            e.preventDefault();
            document.getElementById('dailyList-button').onclick();
        }
}

var input = document.getElementById('today-input');
input.addEventListener('keyup', enterClick, false);


///////////                                 FILTER ONE                                  /////////////////////////

filterSelection('all');
function filterSelection(c){
    var x, i;
    x = document.getElementsByClassName('filterDiv');
    if(c == 'all') c = "";
    for(i = 0; i < x.length; i++){
        removeClass(x[i], "show");
        if(x[i].className.indexOf(c) > -1) addClass(x[i], 'show');
    }
}

function addClass(element, name){
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(' ');
    for(i = 0; i < arr2.length; i++){
        if(arr1.indexOf(arr2[i]) == -1){
            element.className += " " + arr2[i];
        }
    }
}


function removeClass(element, name){
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for(i = 0; i < arr2.length; i++){
        while(arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1)
        }
    }
    element.className = arr1.join(" ");
}

var btnContainer = document.getElementById("myBttons");
var btns = btnContainer.getElementsByClassName("btn");
for(var i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', function(){
        var current = document.getElementsByClassName("btn active");
        current[0].className = current[0].className.replace("active", " ");
        this.className += ' active';
    })
}


//////////////////                        FILTER TWO                       ///////////////////////////

// VARIABLES

var app = document.querySelector('#filters');
var songs = Array.from(document.querySelectorAll("#playlist li"));

console.log(songs);

// METHODS

var getGenres = function(){
    var genres = songs.map(function(song){
        return song.getAttribute('data-genre');
    });
    return genres.filter(function(genre, index){
        return genres.indexOf(genre) === index;
    });
};


var renderChecklists = function(genres){
    console.log('genres: ' + genres);
    app.innerHTML = '<h2>Filter Sons</h2><h3>By Genre</h3>' +
        genres.map(function(genre){
            var html = '<label>' +
                '<input type="checkbox" data-filter= "' + genre + '" checked>' +
                genre + '</label>';
            return html;
        }).join(" ") + '<h3>Grammy Nomination</h3>' +
                        '<label>' + '<input type="checkbox" data-filter="grammy">' +
                        'Only show Grammy-nomminated Songs' +
                        '</label>';
};


var showAndHideSongs = function(event, filter){
    // Get all songs that match the genre of the filter
    var songsByGenre = Array.from(document.querySelectorAll('#playlist [data-genre="' + filter + '"]'));
        //if checkbox is checked, show songs
        // otherwise, hide them
        if(event.target.checked){
            songsByGenre.forEach(function(song){
                song.removeAttribute('hidden');
            });
        } else {
            songsByGenre.forEach(function(song){
                song.setAttribute('hidden', 'true');
            });
        }
};

var clickHandler = function(event){
    var filter = event.target.getAttribute('data-filter');
    if(!filter) return;

    // Show or Hide Songs;

    showAndHideSongs(event, filter);

};


var genres = getGenres();
renderChecklists(genres);


// Listen for checklist toggles


// document.documentElement.addEventListener('click', clickHandler, false);

var genreCheckeds = Array.from(document.getElementsByTagName('label'));

    genreCheckeds.forEach(function(genreChecked){
        genreChecked.addEventListener('click', clickHandler, false);
    });


