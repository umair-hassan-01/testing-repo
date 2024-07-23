interface Player{
    name:string,
    currentScore:number,
    playerId:string
}

class Person{
    private userId:string
    private name:string;
    private maxRating:number;
    private currentRating:number;

    constructor(userId:string,name:string){
        this.userId = userId;
        this.name = name;
        this.maxRating = 0;
        this.currentRating = 0;
    }

    public getDetails():string{
        return `user name  = ${this.name} , max rating = ${this.maxRating} , current rating = ${this.currentRating}`;
    }

    public getCurrentRating():number{
        return this.currentRating;
    }

    public getMaxRating():number{
        return this.maxRating;
    }

    public getName():string{
        return this.name;
    }

    public calculateRating(currentGameRating:number , timePlayed:number,decision:boolean){
        let ratingChange = (currentGameRating*(timePlayed)) / Math.max(1,this.currentRating*0.69);
        if(decision)
            this.currentRating += ratingChange;
        else
            this.currentRating -= ratingChange;
    }

}
function decideBetter(player1:Player , player2: Player):Player{
    if(player1.currentScore > player2.currentScore)
        return player1;
    return player2;
}

let player:Person = new Person("727382HJHJ" , "umair hassan");
console.log(player.getDetails());

