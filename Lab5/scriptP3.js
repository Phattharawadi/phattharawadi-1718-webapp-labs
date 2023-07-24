for (var i = 1; i <= 16; i++) {
    var myDiv = document.createElement('div');
    document.body.append(myDiv);
}

function random(number) {
    return Math.floor(Math.random() * number);
}

function bgChange() {
    var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    return rndCol;
}

var divs = document.querySelectorAll('div');
for (var i = 0; i < divs.length; i++) {
    if ((i % 4) == 0 || (i % 4) == 2) { // for first and third column divs
        divs[i].onclick = function(e) {
            e.target.style.backgroundColor = bgChange();
        }
    } else { // for second and fourth column divs
        divs[i].onclick = function(e) {
            e.target.style.backgroundColor = 'yellow';
        }
    }
}