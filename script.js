var rows = 3;
var columns = 3;
var currTile;
var otherTile;

var turns=0;

//var imgOrder =["1","2","3","4","5","6","7","8","9"];
var imgOrder =["4","2","8","5","1","6","7","9","3"];
 

window.onload = function(){
    for(let r=0;r<rows;r++){
        for(let c=0;c<columns;c++){

            //<img id="1-09">
            let tile = document.createElement('img');
            tile.id = r.toString()+ "-" + c.toString();
            tile.src = imgOrder.shift() + ".jpg";

            //Drag Functionallaty
            tile.addEventListener("dragstart",dragStart);//click the img
            tile.addEventListener('dragover',dragOver); //movijngn  img around
            tile.addEventListener('dragenter',dragEnter); // dragging img on anotherone
            tile.addEventListener('dragleave',dragLeave);// drag img  leave  the img
            tile.addEventListener('drop',dragDrop); //drage d img over a am=nother img
            tile.addEventListener('dragend',dragEnd); //after drag swap the two tile

            document.getElementById("board").append(tile);
        }
    }
}

function dragStart(){
    currTile = this; // this reffer to img being dragerde
}
function dragOver(e){
    e.preventDefault();
}
function dragEnter(e){
    e.preventDefault();
}
function dragLeave(){

}
function dragDrop(){
    otherTile  =this; //this refers too  the img tile being dropped on
}
function dragEnd(){
    if(!otherTile.src.includes("3.jpg")){
        return;
    }

    let currCoords = currTile.id.split("-"); //ex) '0-0' => ["0","0"]
    let r = parseInt(currCoords[0]);
    let c = parseInt(currCoords[1]);

    let otherCoords = otherTile.id.split("-");
    let r2 = parseInt(otherCoords[0]);
    let c2 = parseInt(otherCoords[1]);

    let moveLeft = r==r2 && c2 == c-1;
    let moveRight = r== r2 && c2 == c+1;

    let moveUp = c==c2 && r2 ==r-1;
    let moveDown = c==c2 && r2 == r+1;

    let isAdjecent = moveLeft || moveRight || moveUp || moveDown;

    if(isAdjecent){
        let currImg = currTile.src;
        let otherImg = otherTile.src;

        currTile.src = otherImg;
        otherTile.src = currImg;
        turns+=1;
        document.getElementById('turns').innerText =turns;
    }
    
}