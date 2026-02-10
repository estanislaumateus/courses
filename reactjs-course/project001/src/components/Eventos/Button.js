import styles from './Event4.module.css';
function Button(props) {
    return(
        <>
            <button className={styles.botao} onClick={props.evento}>{props.texto}</button>
        </>
    )
}

export default Button;