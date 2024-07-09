import p from 'prop-types'
function Log(props){
    
    const bemVindo = <h2 className="bemVindo">Olá, {props.nome} </h2>
    const log = <h2 className="log">Logue para continuar</h2>
    
    return(props.estaLogado ? bemVindo : log);
}
Log.propTypes = {
    nome: p.string,
    estaLogado: p.bool,
}
Log.defaultProps = {
    nome: "convidado",
    estaLogado: false,
}
export default Log