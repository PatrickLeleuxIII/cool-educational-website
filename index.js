const array=["./1.jpg","./2.png","./3.png","./4.png","./5.png"];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function buttonClicked(){
  const elementNode = document.createElement('img');
  const index=getRandomInt(5);
  newElement.setAttribut('src', array[index]);
  document.body.appendChild(elementNode);
  
}
