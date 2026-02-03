import styles from './Botao.module.css';

function Botao() {
    function message() {
        alert("O botão foi clicado!")
    }
    return (
        <div>
            <h4>Estilizando componentes em React js</h4>
            <button className={styles.botao} onClick={message}>Click aqui</button>
        </div>
    )
}

export default Botao;