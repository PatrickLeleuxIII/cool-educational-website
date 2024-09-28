const array=["./1.jpg","./2.jpg","./3.jpg","./4.jpg","./5.jpg"];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function buttonClicked(){
  const elementNode = document.createElement('img');
  const index=getRandomInt(5);
  elementNode.setAttribute('src', array[index]);
  document.body.appendChild(elementNode);
  
}