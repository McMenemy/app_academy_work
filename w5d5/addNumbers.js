var readline = require('readline');

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallBack) {
  if (numsLeft > 0) {
    reader.question("give me a number", function(input) {
      var num = parseInt(input);
      sum += num;
      console.log(sum);
      addNumbers(sum, numsLeft - 1, completionCallBack);
    });
  }
  else {
    completionCallBack(sum);
    reader.close();
  }
}

addNumbers(0, 3, function (sum) {
  console.log("Total Sum: " + sum);
});
