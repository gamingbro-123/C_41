class Game
{
    constructor()
    {
       
    }
  
    getState()
    {
      var gameStateRef = database.ref("gameState");
      gameStateRef.on("value", function(data){
        gameState = data.val();
      });
    }
   update(state)
   {
     database.ref("/").update({gameState : state});
   }
  start()
  {
      if(gameState===0)
      {
          player = new Player();
          player.getCount();
         form = new Form();
         form.display();
         car1 = createSprite(100,200);
         car1.addImage(car1Img);
         car2 = createSprite(300,200);
         car2.addImage(car2Img);
         car3 = createSprite(500,200);
         car3.addImage(car3Img);
         car4 = createSprite(700,200);
         car4.addImage(car4Img);
         carMain = [car1,car2,car3,car4]

      }

  }

  play()
      {
        form.hideForm();
        
        Player.getPlayerInfo();
        player.getFinishedCars();
        // var textYPosition = 130;
        
        if(allPlayers!== undefined)
        {
          background("#00FFFF")         
          
          image(trackImg,0,-height*4,width,height*5)
          var index = 0;
          var carX = 350;
          var carY = height;
          for(var slayer in allPlayers)
          {
            textSize(15);
            
            
            carX = carX + 200;
            carY = height - allPlayers[slayer].distance;

            carMain[index].x = carX;
            carMain[index].y = carY;
           
            // text(allPlayers[slayer].name + " : " + allPlayers[slayer].distance, 120,textYPosition);
            // textYPosition = textYPosition +20;
            index = index+1;

            if(index ===  player.index)
            {
            // carMain[index-1].shapeColor = ""
            stroke(10);
            fill("cyan")
            ellipse(carX,carY,60,60);

            camera.position.y = carMain[index-1].y;
            
            }
          }

        }

        if(keyIsDown(UP_ARROW)&& player.index!==null)
        {
          player.distance = player.distance+50;
          player.update();
         // player.distance +=50;
        }

        if( player.distance >= 7000)
        {
          player.rank = player.rank+1;
          player.update();
          Player.updateFinishedCars(player.rank);
         // finishedCars = player.rank;
          gameState =2;

        }

        drawSprites();
      
      }

      end()
      {
        console.log("Game Ended. Your Rank Is "+player.rank);
        

        if(FinishedCars<4)
        {
          textSize(30);
          stroke("lime green");
          fill("lime green");
          text("Wait For All Players To Finish The Race",width/2,camera.position.y);

        }
        else
        {
          displayRank();

        }

      }

      displayRank()
      {
        text("LEADERBOARD",width/2,camera.position.y);
      }
    
  
  
}