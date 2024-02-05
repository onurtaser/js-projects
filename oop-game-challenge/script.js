function Player(name){
  {
    this.name = name,
    this.level = 1,
    this.points = 0
  }
}

Player.prototype.gainXp = function (xp) {
  this.points += xp;

  if(this.points >= 10){
    this.level++;
    this.points -= 10;
  }

  console.log(this.describe());
}

Player.prototype.describe = function() {
  return `${this.name} is level ${this.level} with ${this.points} experience points`
}

let player1 = new Player("Bob");
let player2 = new Player("Alice");

player1.gainXp(2);
player2.gainXp(3);
player1.gainXp(5);
player2.gainXp(7);
player1.gainXp(3);
player2.gainXp(4);
player1.gainXp(1);
player2.gainXp(2);

