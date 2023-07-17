let inputList = [];
let input;
function readInput() {

    while (input >= 0 || isNaN(input)) {
        if (!isNaN(input) && input >= 0) {
          inputList.push(input);
        }
        input = prompt("Enter a integer (a negative to quit):");
        if(isNaN(input) && input < 0) {
            alert("For the list that is empty, the average is 0, the minimum is 0, and the maximumu is 0")
        }
      }

      return inputList;
    
}

function displayStats(list) {
    let sum = list.reduce((a, b) => a + b, 0);
    let average = list.length > 0 ? (sum / list.length): 0;
    let min = list.length > 0 ? Math.min(...list) : 0;
    let max = list.length > 0 ? Math.max(...list) : 0;

    alert("For the list " + inputList.join(",") + " the average is "+ average 
    + " , the minimum is " + min + " and the maximum is " + max);
  }

inputList = readInput();
displayStats(inputList);

