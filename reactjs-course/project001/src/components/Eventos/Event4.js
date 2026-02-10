import Button from './Button';
function Event4 ({}) {
    function ShowEvent(){
        alert("O botão foi disparado por um evento!")
    }

    function ShowEvent2(){
        alert("O botão foi disparado por um novo evento!")
    }
    return(
        <>
            <p>Clique aqui para disparar um evento!</p>
            <Button  evento={ShowEvent} texto="Clicar aqui!" />
            <Button  evento={ShowEvent2} texto="Clicar aqui!" />
            
        </>
    )
}

export default Event4;