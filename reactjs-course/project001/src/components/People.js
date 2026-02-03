function People({nome, dataNascimento, estadoCivil, morada, nivelAcademico, formacao}) {
    return(
        <div>
            <p>Nome: {nome}</p>
            <p>Data de nascimento: {dataNascimento}</p>
            <p>Estado Civil: {estadoCivil}</p>
            <p>Morada: {morada}</p>
            <p>Nível acadêmico: {nivelAcademico}</p>
            <p>Área de formação: {formacao}</p>
        </div>
    )}

export default People;