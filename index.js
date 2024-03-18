const array=["cunt","shit","ass","bitch","tits"];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function buttonClicked(){
  const elementNode = document.createElement('p');
  const index=getRandomInt(5);
  const textNode= document.createTextNode(array[index]);
  elementNode.appendChild(textNode);
  document.body.appendChild(elementNode);
  
}
