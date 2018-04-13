self.importScripts("game.js");

self.addEventListener("message", function(e) {
  var game = Game.prototype.initializeGame();
  var bestMove = ChessAI(5, game, true);
  self.postMessage(bestMove);
});
