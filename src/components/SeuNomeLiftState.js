//State left serve para utilizar o hook State no ele mento pai, podendo reutilizar em diversos elementos. Lembrando que o State é aplicado a filho.

function SeuNome({setNome}) {
    return(
        <div>
            <p>Digite seu nome</p>
            <input type="text"
            name=""
            id=""
            placeholder="Qual é o seu nome?"
            onChange={(e)=> setNome(e.target.value)}/>
        </div>
    )
}

export default SeuNome