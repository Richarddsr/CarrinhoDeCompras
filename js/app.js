let campoTotal = 0;
document.getElementById("lista-produtos").innerHTML = "";
document.getElementById("valor-total").textContent = "R$ 0"
if (!produto || produto.trim)(){
function adicionar(){
    //recuperar nome do produto, quantidade e valor
    let objeto = document.getElementById("produto").value;
    let nomeProduto = objeto.split('-')[0]
    let valorUnitario = objeto.split('R$')[1]
    let quantidade = document.getElementById("quantidade").value;
 //calcular o preço, subtotoal
    let preço = quantidade * valorUnitario;


   
    //adicionar no carrinho
    let carrinho = document.getElementById("lista-produtos")
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos" id="lista-produtos">
        <section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorUnitario}</span>
        </section>
      </section>`
    //atualizar o valor total
    //let quantidadeTotal = quantidade * quantidade
    campoTotal = campoTotal + preço
    let carrinhoTotal  = document.getElementById("valor-total")
   carrinhoTotal.textContent = `R$ ${campoTotal}`
   document.getElementById("quantidade").value = "";
} 
} else {
  alert ("Insira ao menos uma quantidade")
    }
  
  

    function limpar(){
      campoTotal = 0;
      document.getElementById("quantidade").innerHTML = "";
      document.getElementById("produto").innerHTML =  `<label class="campo-grupo">
      <span class="texto-medio-azul">Produto</span>
      <select class="produto-input" name="produto" id="produto">
        <option value="Fone de ouvido - R$100">Fone de ouvido - R$100</option>
        <option value="Celular - R$1400">Celular - R$1400</option>
        <option value="Oculus VR - R$5000">Oculus VR - R$5000</option>
      </select>
      </div>
    </label>`
      document.getElementById("lista-produtos").innerHTML = "";
      document.getElementById("valor-total").textContent = "R$ 0";
      document.getElementById("quantidade").value = "";
    }