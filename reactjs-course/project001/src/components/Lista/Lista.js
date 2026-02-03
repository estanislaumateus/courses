import styles from './Lista.module.css';

function Lista() {
    return (
        <>
            <ul className={styles.lista}>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </>
    )

}

export default Lista;