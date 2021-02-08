
var database;
var gameState=0;
var playerCount;
var allPlayers;
var car1,car2,car3,car4;        
var carMain;
var FinishedCars;



var form;
var game;
var player;

var car1Img;
var car2Img;
var car3Img;
var car4Img;
var trackImg;

function preload()
{
    car1Img = loadImage("images/car1.png");
    car2Img = loadImage("images/car2.png");
    car3Img = loadImage("images/car3.png");
    car4Img = loadImage("images/car4.png");
    trackImg = loadImage("images/track.jpg");


}


function setup(){
    createCanvas(windowWidth,windowHeight);  

    database = firebase.database();

    game = new Game();
    game.getState();
    game.start();
    

    


}

function draw(){
    background("white");

    if(playerCount === 4)
    {
        game.update(1);
    }

    if(gameState === 1)
    {
        clear();
        game.play();

    }
    if(gameState === 2)
    {
        game.end();

    }
  

}

// function readData(DATA)
// {
//     var position = DATA.val();
    
// }


