var createStarInterval, deleteStarInterval, points, id = 0, lives, name, pause = false, clicked = false;
function MoveMenu(){
    pause = true;
    document.getElementById("myHeader").style.top = "0px";
    document.getElementById("darkBackground").style.visibility = "unset";
    clearInterval(createStarInterval);
}

function StartGame(){
    if(pause == true){
        document.getElementById("myHeader").style.top = "-75px";
        document.getElementById("darkBackground").style.visibility = "hidden";
        document.getElementById("myDropdown").style.display = "none";
        pause = false;
        createStarInterval = setInterval(AddStar,1000);
    } else{
        points = 0;
        document.getElementById('userScore').innerHTML = String(points);
        InsertHearts();
        lives = 3;
        document.getElementById("myHeader").style.top = "-75px";
        document.getElementById("darkBackground").style.visibility = "hidden";
        document.getElementById("myDropdown").style.display = "none";
        createStarInterval = setInterval(AddStar,1000);
    }
}

function AddStar(){
    var varStar = document.createElement('img');
    varStar.id = 'star' + toString(id);
    varStar.className = 'star';
    varStar.src = "images/star.png";
    var marginTop, marginLeft;
    marginTop = Math.floor(Math.random() * 430 + 1);
    toString(marginTop);
    varStar.style.marginTop = marginTop + 'px';
    marginLeft = Math.floor(Math.random() * 90 + 1);
    toString(marginLeft);
    varStar.style.marginLeft = marginLeft + '%';
    varStar.onclick = function(){
        document.getElementById(varStar.id).src = "images/graystar.png";
        points++;
        document.getElementById('userScore').innerHTML = String(points);
    };
    document.getElementById("game").appendChild(varStar);
    deleteStarInterval = setTimeout(DeleteStar,1000,varStar.id);
    id++;
}

function DeleteStar(idstar){
    var path = document.getElementById(idstar).src;
    path = path.substr(22,undefined);
    if(path == 'images/star.png'){
        document.getElementById('heart' + lives).remove();
        lives--;
    }
    document.getElementById(idstar).remove();
    if(lives == 0){
        EndGame();
    }
}

function EndGame(){
    document.getElementById("myHeader").style.top = "0px";
    document.getElementById("darkBackground").style.visibility = "unset";
    document.getElementById("currentScore").innerHTML = String(points);
    document.getElementById("myDropdown").style.display = "block";
    document.getElementById("nameInput").focus();
    clearInterval(createStarInterval);
}

function DropMenu(){
    if (clicked == false){
        document.getElementById("myDropdown").style.display = "block";
        clicked = true;
    } else{
        document.getElementById("myDropdown").style.display = "none";
        clicked = false;
    }
}

function RecordPoints(){
    userName = document.getElementById("nameInput").value;
}

function InsertHearts(){
    for (let index = 1; index <= 3; index++) {
        var img = document.createElement("img");
        img.id = "heart" + String(index);
        img.src = "images/heart.png";
        document.getElementById("ItemHeart" + String(index)).appendChild(img);
    }
}