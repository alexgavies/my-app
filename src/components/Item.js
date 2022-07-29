//USO DE FRAGMENTS<> </>

//USO DE defaultProps, define um tipo de valor padrão caso nada seja passado.

//USO DE PropTyps, define o tipo da props ou propriedade, é obrigatório a importação do método

import PropTyps from 'prop-types'

function Item({marca, ano_lançamento}) {
    return (
        <>
            <li>{marca} - {ano_lançamento} </li>
            <p>teste</p>
        </>
    )
}
Item.prototype={
    marca: PropTyps.string.isRequired,
    ano_lançamento: PropTyps.number.isRequire
}

//default Props
Item.defaultProps ={
    marca: "Faltou a marca",
    ano_lançamento: 0,
}
export default Item