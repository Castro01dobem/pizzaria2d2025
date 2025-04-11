import { useState} from "react"

function App(){
  const [nome, setNome] = useState('Guilherme')

  
  const Formulario = () => {
    return (
      <>
      <h3>Formulário</h3>

      
      <input 
      className="nome"
      onChange={(e)=>{setNome(e.target.value)}}
      type="text" />

      <button
      className="botao"
      onClick={()=>{
        alert("Olá" + nome + ", é um prazer ter você conosco!")
        }
        }>

      OK
      </button>
      

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