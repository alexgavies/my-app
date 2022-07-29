//USO DE onCLICK() direto na tag form
//USO DE preventDefault() para pausa e conferencia

function Form() {
    
    function cadasatrarUsuario(e) {
        e.preventDefault() //É NECESSARIO PARA PARA A APLICAÇÃO ANTES QUE REALISE O ENVIO DOS DADOS PARA O BACK. 
        //SE NÃO FOSE APENAS UM TESTE USARIA ASYNC AWAT
        console.log("Cadastrou o usuario");
    }
    
    return(
        <div>
            <h1>Meu Cadastro</h1>
            <form onSubmit={cadasatrarUsuario}> 
                <div>
                    <input type="text" name="" id="" placeholder="Digite seu nome" />
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form