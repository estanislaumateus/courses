import Button from './Button';
function Event4 ({}) {
    function ShowEvent(){
        alert("O botão foi disparado por um evento!")
    }
    return(
        <>
            <p>Clique aqui para disparar um evento!</p>
            <Button  evento={ShowEvent} texto="Clicar aqui!" />
            
        </>
    )
}

export default Event4;