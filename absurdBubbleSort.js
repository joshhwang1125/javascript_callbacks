var readline = require("readline");

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Write this first.
function askIfGreaterThan(el1, el2, callback) {
  // Prompt user to tell us whether el1 > el2; pass true back to the
  // callback if true; else false.

  var compare = "Is " + el1 + " > " + el2 + "?";
  reader.question(compare,
  function(answer)
    {
      if (answer === "yes")
      {
        callback(true);
      }
      else if (answer ==="no")
      {
        callback(false);
      }
      else {
        console.log("YES or NO only");
      }
    });
}


// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  console.log(arr);

  if (i < arr.length - 1)
  {

    askIfGreaterThan(arr[i], arr[i+1], function(isGreaterThan)
    {
      if (isGreaterThan)
      {
        var b = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = b;
        madeAnySwaps = true;
        i++;
        innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop);
      }
      else
      {
        i++;
        innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop);
      }
    }
  );

  }
  else
  {
    outerBubbleSortLoop(madeAnySwaps);
  }
}



// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback)
{
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps) {
      var i = 0;
      innerBubbleSortLoop(arr, i, false, outerBubbleSortLoop);
    }
    else {
      sortCompletionCallback(arr);
    }
  }
  outerBubbleSortLoop(true);
  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

// absurdBubbleSort([4,3,2,1], false);

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
