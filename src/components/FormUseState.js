
import {useState} from 'react'

function FormUseState() {
    
    function cadasatrarUsuarios(e) {
        e.preventDefault() //É NECESSARIO PARA PARA A APLICAÇÃO ANTES QUE REALISE O ENVIO DOS DADOS PARA O BACK. 
        //SE NÃO FOSE APENAS UM TESTE USARIA ASYNC AWAT
        console.log(`usuario ${name} foi cadastratdo com a senha ${Password}`);
        console.log("Cadastrou o usuario");
    }
    
const [name, setName] = useState()//pode se colocar em () o valor padrão 
const [Password, setPassword] =useState()

    return(
        <div>
            <h1>Meu Cadastro</h1>
            <form onSubmit={cadasatrarUsuarios}> 
                <div>
                    <label htmlFor="naMe">Nome:</label>
                    <input 
                    type="text" 
                    name="naMe" 
                    id="" 
                    placeholder="Digite seu nome" 
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    /> 
                    <br />
                    <label htmlFor="password">Senha:</label>
                    <input 
                    type="Password" 
                    name="password" 
                    id="" 
                    placeholder="Digite sua senha" 
                    value={Password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />

                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default FormUseState