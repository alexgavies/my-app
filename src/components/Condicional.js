//USO DE CONDICIONAIS para renderização de conteudo

import {useState} from 'react'
function Condicional() {

    const [email, setEmail]= useState()
    const [userEmail, setUserEmail]= useState()

    function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(email)   
    }

    function limparEmail() {//condição falsa conteudo vazio
        setUserEmail('')
    }

    return(
        <div>
            <h2>Cadastre seu E-mail</h2>
            <form>
                <input type="email" name="email" id="" placeholder="Digite seu E-mail" 

                 onChange={(e)=>setEmail(e.target.value)}/>

                <button type="submit" onClick={enviarEmail}>Enviar E-mail</button>
                {userEmail && (//condição verdadeira elemento com conteudo
                    <div>
                        <p>O E-mail do usuario é {userEmail}</p>
                        <button onClick={limparEmail}>Limpar E-mail</button>
                    </div>
                )}
            </form>
        </div>
    )
}
export default Condicional