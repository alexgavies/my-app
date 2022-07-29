//USO DE EVENTOS NOS COMPONENTES
//USO DE PROPRIEDADES

function Evento({numero}) {

    function meuEvento() {
        console.log(`foi ativado! com ${numero}`);
    }

    return(
        <div>
            <p>Clic para despara um evento</p>
            <button onClick={meuEvento}>Ativar</button>
        </div>
    )
}

export default Evento