import p from 'prop-types'

function Students(props){
    
    return(
        <div className='estudantes'>

        <p>Nome: {props.nome}</p>
        <p>Idade: {props.idade}</p>
        <p>Estudante: {props.estudante ? "Sim" : "Não" }</p>

        </div>
    );
}
Students.propTypes = {
    nome: p.string,
    idade: p.number,
    estudante: p.bool,
}
Students.defaultProps = {
    nome: "Convidado",
    idade: 0,
    estudante: false,
}

export default Students