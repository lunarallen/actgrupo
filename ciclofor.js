let iceCreamFlavors = [
    "Chocolate",
    "Strawberry",
    "Vanilla",
    "Pistacho",
    "Neapolitan",
    "Mint Chip",
  ];
  
  
  let iWantAIceCream = window.prompt("Que sabor de helado deseas?", "");
  let iceCreamFound;
  for (let i = 0; i < iceCreamFlavors.length; i++) {
    if (iceCreamFlavors[i].toLowerCase() === iWantAIceCream.toLowerCase()) {
      iceCreamFound = iceCreamFlavors[i];
    }
  }
  if(iWantAIceCream === "") {
     console.log("No elegiste un sabor de helado");
  } else if (iceCreamFound) {
    console.log(`Aquí está tu helado de ${iceCreamFound}, disfrútalo!`);
  } else {
    console.log(`Lo siento, no tenemos helados sabor ${iWantAIceCream}`);
  }
  
  