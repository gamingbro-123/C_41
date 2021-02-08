class Player
{
    constructor()
    {
        this.name = "";
        this.distance = 0;
        this.index = null;
        this.rank = null;

    }

    getCount()
        { 
            var playerRef = database.ref("playerCount");
            playerRef.on("value",function(data) 
            {
                playerCount = data.val();
            })
        }

        updateCount(count)
        {
            database.ref("/").update({playerCount : count})
        }

        update()
        {
            var playerIndex  = "Players/player" + this.index;
            database.ref(playerIndex).set({name : this.name, distance : this.distance, rank : this.rank})
        }

        static getPlayerInfo()
        {
            var referenceNode = database.ref("Players");
            referenceNode.on("value",(data)=>{
                allPlayers = data.val();
            });

}

getFinishedCars()
{
    var finishedCarsRef = database.ref("finishedCars");
    finishedCarsRef.on("value",function(data)
    {
        this.rank = data.val();

        
    })
}

static updateFinishedCars(rank)
{
    database.ref("/").update({finishedCars : rank})

    var CarCountRef = database.ref("finishedCars")
    CarCountRef.on("value",(data)=>{FinishedCars = data.val();})

}
     
}