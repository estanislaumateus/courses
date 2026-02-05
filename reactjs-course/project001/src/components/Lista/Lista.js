import styles from './Lista.module.css';
import ItemLista from './ItemLista';

function Lista() {
    return (
        <>
            <ul className={styles.lista}>
                <ItemLista marca="Toyata" />
                <ItemLista marca="BMW" />
                <ItemLista marca="Mercedes" />
                <ItemLista marca="Tesla"/>
            </ul>
        </>
    )

}

export default Lista;