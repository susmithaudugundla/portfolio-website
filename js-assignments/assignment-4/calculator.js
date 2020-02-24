let expression = "";
let onClickShowOutput = function(input) {
  if (input != 'AC') {
    expression = expression.concat(input);
    console.log(input);
  }
  else {
    expression = "";
    console.log()
  }
  let element = document.getElementById("demo");
  element.innerHTML = expression;

}


function getExpressionOutput() {
  try {
    if (expression != 0) {
      const total = eval(expression);
      let element = document.getElementById("demo");
      element.innerHTML = total;
      expression = "".concat(total);
      console.log(total);
    }

  }
  catch (e) {
    console.warn('Invalid expression', expression);
  }
}
