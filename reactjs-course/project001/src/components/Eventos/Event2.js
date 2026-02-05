import styles from './Event2.module.css';
function Event2() {

    function singUp(){
        alert("Usuário cadastrado com sucesso!")
    }

    return(
        <>
            <form className={styles.formulario} onSubmit={singUp}>
                <div>
                    <label>Nome</label>
                    <input type="text" placeholder="Digite seu nome" />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" placeholder="Digite seu e-mail"/>
                </div>
                <div>
                    <label>Senha</label>
                    <input type="password" placeholder="Digite sua senha" />
                </div>
                <div>
                    <input className={styles.cadastrar} type="submit" />
                </div>
                
            </form>
        </>
    )
}

export default Event2;