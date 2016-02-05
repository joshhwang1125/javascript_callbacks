// function Clock () {
//   var currentDate = new Date();
//   this.hours = currentDate.getHours();
//   this.minutes= currentDate.getMinutes();
//   this.seconds= currentDate.getSeconds();
//
//   setInterval(this._tick.bind(this), 1000);
// }
//
//
//
// Clock.prototype.printTime = function () {
//   console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
// };
//
// Clock.prototype._tick = function () {
//   this.printTime();
//
//   this.seconds++;
//
//   if (this.seconds >= 60)
//   {
//     this.seconds = 0;
//     this.minutes++;
//   }
//
//   if (this.minutes >= 60)
//   {
//     this.minutes = 0;
//     this.hours++;
//   }
//
//   if (this.hours >= 13)
//   {
//     this.hours = 1;
//   }
//
//
//   // 1. Increment the time by one second.
//   // 2. Call printTime.
// };
//
// var clock = new Clock();

//
// var readline = require('readline');
// var reader = readline.createInterface(process.stdin, process.stdout, null);
//
// function addNumbers(sum, numsLeft, completionCallback) {
//   if (numsLeft === 0 )
//   {
//     completionCallback(sum);
//   }
//   else
//   {
//     var sumThing = sum;
//     reader.question("What number do you want?", function(number)
//     {
//       sumThing = parseInt(number) + sum;
//       console.log(sumThing);
//
//       addNumbers(sumThing, numsLeft - 1, completionCallback );
//     });
//   }
// }
//
// addNumbers(0, 3, function (sum) {
//   console.log("Total Sum: " + sum);
// });



// reader.question("What is your name?", function (answer) {
//   console.log("Hello " + answer + "!");
//
//   reader.close(function(){
//     console.log("closed")
//   });
// });
//
// console.log("\n\nLast program line");
