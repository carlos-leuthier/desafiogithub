const inputnumero = document.getElementById("inputnumero");
const btCalcular = document.getEleme
const ntById("btCalcular");
const clean =  document.getElementById("btClean");
  const inputIndex =  document.getElementById("inputnumeroIndex");
  const remove =  document.getElementById("btRemoveItem");
  const list =  document.getElementById("list");

  ley numbers = []

  function showlist(){
  	list.innerHTML = "";
  for (let i = 0; i< numbers.lenght; i++){
  list.innerHTML += <li>${numbers[i]}</li>;

  }

  }

  function insertNumberbottom(){
  let number = parseInte(inputNum.value);
  if (!isNaN(number);
  numbers.push(number);
  showlist();
  inputNum.value = "";
  }

  inputNum.focus();

  }
