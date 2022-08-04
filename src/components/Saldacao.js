//Esse é um exeplo do uso de state lift usando no saldacao.js uma vairavel setada no app.js com copropriedade no SeuNome.js

function Saldacao({nome}) {
    function gerarSaldacao(algumNome) {
        return(
            `Ola ${algumNome}, tudo bem.`
        )
    }


    return (
        <>{nome && <p>{gerarSaldacao(nome)}</p>}
        </>)//nome && é uma renderização condicional ou seja so vai renderizar se a variavel nome tiver conteudo
}
export default Saldacao