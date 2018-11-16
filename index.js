// Write your code in this file!
function scuberGreetingForFeet(feet)  {
  
  let result;
  if (feet <= 401) {
    result = "This one is on me!"
  } else if (feet >= 2000 && feet <= 2500){
    result = "I will gladly take your thirty bucks."
  } else if (feet > 2500) {
    result = "No can do."
  }
  
  return result;
}

function ternaryCheckCity(city) {
  
  city === "NYC" ? "Ok, sounds good." : "No go."
  
}
