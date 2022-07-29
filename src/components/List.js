
//FRAGMENT É O UDO DE TAGS SEM NOME COMO POR EXEMPLO <> conteúdo </>
import Item from "./Item"
function List() {
    return(
        <>
            <h1>Minha lista</h1>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <Item marca="Fiat" ano_lançamento={1999}/>
                <Item marca="Ferrari" ano_lançamento={2000}/>
                <Item marca="Porche" ano_lançamento={2010}/>
                <Item/>
            </ul>
        </>
    )
}

export default List