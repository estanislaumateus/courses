import { useState } from 'react';
import styles from './Condicional.module.css';

function Condicional() {

    function EnviarForm(e) {
        e.preventDefault();
        setUserEmail(email)
    }

    function limparEmail(){
        setUserEmail('')

    }


    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()
    return (
        <>
            <h1>Renderização Condicional</h1>
            <p>Cadastre o teu e-mail</p>
            <form >
                <label htmlFor='email'>Email:</label>
                <input
                    type='email'
                    id='email'
                    name='email'
                    placeholder='pedroantonio12@gmail.com'
                    onChange={(e) => setEmail(e.target.value)} />
                <button
                    className={styles.botao}
                    type='submit'
                    value='Enviar'
                    onClick={EnviarForm}
                >Logar</button>
                {userEmail && (
                    <di>
                        <p>O email do usuário é: {userEmail}</p>
                        <button className={styles.botao} onClick={limparEmail}>Limpar email</button>
                    </di>
                )}
            </form>
        </>
    )
}

export default Condicional;