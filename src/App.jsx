import { useState} from "react"

function App(){
  const [nome, setNome] = useState('Ronaldo')


  const Formulario = () => {
    return (
      <>
      <h3>Formulário</h3>

      <center>
      <input 
      className="nome"
      onChange={(e)=>{setNome(e.target.value)}}
      type="text" />

      <button
      className="botao"
      onClick={()=>{
        alert("O nome digitado foi " + nome)
        }
        }>

      CLIQUE AQUI
      </button>
      </center>
      
      </>
    )
  }



  return (
    <div>

      <h3>Pizzaria 2d</h3>

      <Formulario />   

    </div>

  )
}

export default App