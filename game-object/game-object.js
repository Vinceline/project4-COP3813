let game = {
   lives: 3,
   coins: 0,

   // Getter method for points
   get points() {
      return this.coins * 10; // Use 'this' to refer to the current object
   },

   // Method for when the player dies
   playerDies() {
      if (this.lives > 0) {
         this.lives--; // Use 'this' to refer to the current object's properties
      }
   },

   // Method to start a new game
   newGame() {
      this.lives = 3; // Reset lives
      this.coins = 0; // Reset coins
   }

};

console.log("Testing game object...");

// TODO: Un-comment the code below to test the game object

console.log("lives = " + game.lives);    // should be 3
console.log("coins = " + game.coins);    // should be 0
console.log("points = " + game.points);  // should be 0
game.coins = 2;
console.log("points = " + game.points);  // should be 20
game.playerDies();
console.log("lives = " + game.lives);    // should be 2
game.playerDies();
game.playerDies();
game.playerDies();
console.log("lives = " + game.lives);    // should be 0
game.newGame();
console.log("lives = " + game.lives);    // should be 3
console.log("coins = " + game.coins);    // should be 0

