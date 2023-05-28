import MeuComponente from "./components/MeuComponente"

function App() {

  return (
    <div>


      <h1>Olá Mundo, React!</h1>
      <MeuComponente />
      {/* <CardDePrograma image = '' titulo = 'credit suisse' subtitle = 'python'/> */}
      <MeuBotao conteudo='Me clique'/>
      <MeuBotao conteudo = 'Depois aqui'/>
      <MeuBotao conteudo = 'E por fim aqui' idade = {2}/>
    </div>
    
  )
}
function MeuBotao(props){
  
  return(
    <button>{props.conteudo}</button>
  )
}

export default App
