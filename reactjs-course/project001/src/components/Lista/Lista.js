import styles from './Lista.module.css';
import ItemLista from './ItemLista';

function Lista() {
    return (
        <>
            <ul className={styles.lista}>
                <ItemLista marca="Toyata" anoLancamento={2008} />
                <ItemLista marca="BMW"  anoLancamento={2006}/>
                <ItemLista marca="Mercedes" anoLancamento={2000} />
                <ItemLista marca="Tesla" anoLancamento={1990}/>
                <ItemLista  />
            </ul>
        </>
    )

}

export default Lista;