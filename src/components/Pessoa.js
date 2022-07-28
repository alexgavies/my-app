/* UTILIZA O PROPS QUE SÃO PROPRIEDADES PASSADAS ATRAVEZ DE ARGUMENTOS DAS FUNÇÕES.

function Pessoa(props) {
    return(
        <div>
            <img src={props.foto} alt={props.nome}/>
            <h2>Nome:{props.nome}</h2>
            <p>Idade: {props.idade}</p>
            <p>Profissao: {props.profissao}</p>
        </div>)}
        */
       
//UTILIZA O METODO STRUTER PARA SUBISTITUIR AS VARIAS REPETIÇÕES DE PROPS POR UMA SEQUENCIA DE ARGUMENTOS, RESUMINDO O CODIGO

//NO ARGUMENTO INDICA QUE foto, nome, idade, profissao SÃO PROPS QUE RECEBERAM ESSE VALOR 

function Pessoa({foto, nome, idade, profissao}) {
    return(
        <div>
            <img src={foto} alt={nome}/>
            <h2>Nome:{nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissao: {profissao}</p>
        </div>
    )
}
export default Pessoa