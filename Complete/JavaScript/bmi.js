//Create your function below this line.
function bmiCalculator(weight, height) {
  const bmi = weight / Math.pow(height, 2)
  return Math.round(10 * bmi) / 10;
}

var bmi = bmiCalculator(65, 1.8);
// console.log(bmi);

/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8);

bmi should equal around 20 in this case.

*/


// BMI Calculator Advanced (If/Else)

function bmiCalculator (weight, height) {
  let bmi = weight / Math.pow(height, 2)
  let bmiRounded = Math.round(10 * bmi) / 10;

  if (bmiRounded < 18.5) {
    console.log("Your BMI is " + bmiRounded + "," + " so you are underweight.");
  }

  if (bmiRounded >= 18.5 && bmiRounded <= 24.9) {
    console.log("Your BMI is " + bmiRounded + "," + " so you have a normal weight.");
  }

  if (bmiRounded > 24.9) {
    console.log("Your BMI is " + bmiRounded + "," + " so you are overweight.");
  }

  return bmiRounded;
}

// console.log(bmiCalculator(65, 1.8));


// An Answer from Q&A
function bmiCalculator (weight, height) {
    var interpretation = (weight / Math.pow (height,2));

    if (interpretation <= 18.5) {
        return  "Your BMI is "+interpretation+", so you are underweight." ;
    } else if (interpretation > 18.5 && interpretation < 24.9){

        return  "Your BMI is "+interpretation+", so you have a normal weight." ;

    }

    else if (interpretation > 24.9){

        return  "Your BMI is "+interpretation+", so you are overweight." ;

    }

    return interpretation;

}
