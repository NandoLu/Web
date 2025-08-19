function App() {

  // Declaração de variaveis 
  let nome = "Fiap";
  let apelido = "Fiapinho";

  let novoNome = nome.toLowerCase();
  novoNome = nome.toUpperCase();

  function soma(valor1, valor2){
    return valor1 + valor2;
  }

  // Arrow function 
  const desconto =(valor3, valor4)=>{
    return valor3 - valor4
  }

  function enviar(){
    alert(`Seja bem-vindo ${nome}`)
  }


  return (
    <>
    <h1> Seja bem-vindo! {nome}, {apelido}, {novoNome} </h1>
    <p>A soma da função é: {soma(10,8)}</p>
    <p>O desconto da função arrow é: {desconto(90,30)}</p>
    <button onClick={enviar} >Clique Aqui</button>

    </>
  )
}

export default App
