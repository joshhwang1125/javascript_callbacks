var readline = require('readline');
var reader = readline.createInterface(process.stdin, process.stdout, null);

function HanoiGame() {
  this.stacks = [[3,2,1],[],[]];
}

HanoiGame.prototype.promptMove = function () {
  console.log(this.stacks);
  var that = this;

  var processMoveFrom = function(startTowerIdx) {
    var start = startTowerIdx;

    var processMoveTo = function(endTowerIdx) {
      var end = endTowerIdx;

      var validMoveTrue = that.isValidMove(start, end);

      if (validMoveTrue) {
        that.move(start, end);
        console.log("we're in prompt");
        // that.run(callBack());
        // return;
      } else {
        that.promptMove();
      }
    };

    reader.question("Where do you want to move to?", processMoveTo);
    reader.close();
  };

  reader.question("Where do you want to move from?", processMoveFrom);
  reader.close();

};

HanoiGame.prototype.isValidMove = function (start, end) {
  if (0 <= start && start <= 2 && this.stacks[start].length > 0 )
  {
    if (0 <= end && end <= 2 && ( this.stacks[end].length === 0 ||
      this.stacks[end][this.stacks[end].length -1]
      > this.stacks[start][this.stacks[start].length -1]))
    {
      return true;
    }
  }
  else
  {
    // this.promptMove();
    return false;
  }
};

HanoiGame.prototype.move = function (start, end) {
    this.stacks[end].push(this.stacks[start].shift());
    this.print();
    console.log("we're in move");
};

HanoiGame.prototype.print = function () {
  console.log(JSON.stringify(this.stacks));
};

HanoiGame.prototype.isWon = function () {
  if (this.stacks[2].length === 3 || this.stacks[1].length === 3) {
    return true;
  }
  else
  {
    return false;
  }
};

HanoiGame.prototype.run = function (callBack) {
  this.promptMove();
  console.log("test");
  callBack(this.isWon());

  // console.log("test2");
  // completionCallback(this.isWon());

};

var game = new HanoiGame();

var callBack = function completionCallback(isWon) {
  console.log(isWon);
  if (isWon) {
    console.log("You're a winnner");
  }
  else {
    console.log("test");
    game.run( completionCallback(isWon));
  }
};

game.run(callBack());
