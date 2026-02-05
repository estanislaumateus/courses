import styles from './Event3.module.css';
import {useState} from 'react';
function Event3() {
    function signUp(e){
        e.preventDefault();
        alert(`O usuário ${name} com o email ${email} foi cadastrado com sucesso!`)
    }

    const [name, setName] = useState(" ")
    const [email, setEmail] = useState(" ")
    const [password, setPassword] = useState(" ")

    return (
        <>
            <form className={styles.formulario}>
                <div>
                    <label htmlFor='name'>Nome:</label>
                    <input 
                    type='text' 
                    id='name' 
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Digite seu nome' />
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input 
                    type='email' 
                    id='email' 
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Digite seu email' />
                </div>
                <div>
                    <label htmlFor='password'>Senha:</label>
                    <input 
                    type='password' 
                    id='password' 
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Digite sua senha' />
                </div>
                <div>
                    <input 
                    className={styles.cadastrar} 
                    onClick={signUp} 
                    type='submit' />
                </div>
            </form>
        </>
    )

}

export default Event3;