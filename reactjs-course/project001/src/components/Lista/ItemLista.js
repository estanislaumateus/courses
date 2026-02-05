import PropTypes from 'prop-types';
function ItemLista ({marca, anoLancamento}) {

    return(
        <>
            <li>{marca} - {anoLancamento}</li>
           
        </>
    )
}
ItemLista.propTypes ={
    marca: PropTypes.string.isRequired,
    anoLancamento: PropTypes.number 
}

ItemLista.defaultProps = {
    marca: 'Marca não informada',
    anoLancamento: 0
}


export default ItemLista;