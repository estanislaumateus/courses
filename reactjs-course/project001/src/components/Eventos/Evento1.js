
function Evento1 () {
    function showEvent(){
        alert("Este eveento foi disparado atraves de um botão")
    }

    return(
        <>
            <p>Clique no botão para dispara</p>
            <br></br>
            <button onClick={showEvent}>Clique aqui</button>
        </>
    )
}

export default Evento1;