let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
  }else{
    document.querySelector('#scroll-top').classList.remove('active');
  }

}

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut();


// FUNÇÔES DOS KITS
function kit01(){
  document.getElementById('codPedido').value = "001";
  document.getElementById('nomePedido').value = "Kit de festa bolo com cupcake e bigradeiros";
  document.getElementById('observacoes').value = "18.00";
}
function kit02(){
  document.getElementById('codPedido').value = "002";
  document.getElementById('nomePedido').value = "Kit de festa bolo do minicraft comdocinhos";
  document.getElementById('observacoes').value = "20.00";

}
function kit03(){
  document.getElementById('codPedido').value = "003";
  document.getElementById('nomePedido').value = "Kit de festa bolo do Homem de ferro com docinhos";
  document.getElementById('observacoes').value = "20.00";
}
function kit04(){
  document.getElementById('codPedido').value = "004";
  document.getElementById('nomePedido').value = "Kit de festa bolo Palavrinhas com docinhos";
  document.getElementById('observacoes').value = "25.00";
}
function kit05(){
  document.getElementById('codPedido').value = "005";
  document.getElementById('nomePedido').value = "Kit de festa bolo do Golfinhos docinhos";
  document.getElementById('observacoes').value = "22.00";
}
function kit06(){
  document.getElementById('codPedido').value = "006";
  document.getElementById('nomePedido').value = "Kit de festa bolo do minecraft com brigadeiros";
  document.getElementById('observacoes').value = "25.00";
}


// FUNÇÕES DO CARDAPIO

function card01(){
  document.getElementById('codPedido').value = "007";
  document.getElementById('nomePedido').value = "Bolo faz um pix";
  document.getElementById('observacoes').value = "30.00";
}
function card02(){
  document.getElementById('codPedido').value = "008";
  document.getElementById('nomePedido').value = "Bolo branco morango";
  document.getElementById('observacoes').value = "35.00";
}
function card03(){
  document.getElementById('codPedido').value = "009";
  document.getElementById('nomePedido').value = "Bolo chocolate com morango";
  document.getElementById('observacoes').value = "23.00";
}
function card04(){
  document.getElementById('codPedido').value = "010";
  document.getElementById('nomePedido').value = "Cupcake de decorado";
  document.getElementById('observacoes').value = "20.00";
}
function card05(){
  document.getElementById('codPedido').value = "011";
  document.getElementById('nomePedido').value = "Brigadeiro branco";
  document.getElementById('observacoes').value = "22.00";
}
function card06(){
  document.getElementById('codPedido').value = "012";
  document.getElementById('nomePedido').value = "Bolo de morango";
}
function card07(){
  document.getElementById('codPedido').value = "013";
  document.getElementById('nomePedido').value = "Doce no copo Finos";
  document.getElementById('observacoes').value = "27.00";
}
function card08(){
  document.getElementById('codPedido').value = "014";
  document.getElementById('nomePedido').value = "BomBom de chocolate";
  document.getElementById('observacoes').value = "25.00";
}
function card09(){
  document.getElementById('codPedido').value = "0015";
  document.getElementById('nomePedido').value = "Bolo massa de pão";
  document.getElementById('observacoes').value = "15.00";
}

//FUNÇÂO DE ENVIAR PARA WHATSAPP

document.querySelector('#submit').addEventListener('click',function(){
  let cliente = document.querySelector('#nome').value;
  let codProduto = document.querySelector('#codPedido').value;
  let quantidade = document.querySelector('#quantidade').value;
  let nomePedido = document.querySelector('#nomePedido').value;
  let pagamento = document.querySelector('#pagamento').value;
  let obs = document.querySelector('#observacoes').value;
  let endereco = document.querySelector('#endereco').value;
  let covertobs = parseInt(obs)
  let coverquatidade = parseInt(quantidade)
  let total ="R$ "+ (covertobs * coverquatidade).toFixed(2)
  //let exampleFormControlSelect1 = document.querySelector('#exampleFormControlSelect1').value;
  
 let url = "https://api.whatsapp.com/send?phone=5585981073174&text= *Nome do Cliente:*%0A " + cliente +"%0A*Codido do seu pedido é:*%0A"+ codProduto +"%0A*Quantidade:*%0A" + quantidade +"%0A*Nome do Produto:*%0A"+ nomePedido+ "%0A*Forma de pagamento:*%0A" + pagamento+"%0A*Valor da Unidade:*%0A"+obs+"%0A*Entregar em:*%0A"+endereco+"%0A*total do pedido:*%0A"+total; 
 
 window.open(url);
 
 });