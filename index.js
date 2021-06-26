function scuberGreetingForFeet(numberOfFeet){
  if (numberOfFeet <= 400) return "This one is on me!";
  else if (numberOfFeet > 2500) return "No can do."
  else if (numberOfFeet > 2000) return "I will gladly take your thirty bucks.";
}

function ternaryCheckCity(destination){
  const message = destination === "NYC" ? "Ok, sounds good." : "No go.";
  return message;
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case "generous":
      return "Thank you so much.";
      break;
    case "not as generous":
      return "Thank you.";
      break;
    default:
      return "Bye."
  }
}