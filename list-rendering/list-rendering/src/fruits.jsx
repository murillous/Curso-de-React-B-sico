import p from 'prop-types'

function List(props){

    const itemsList = props.items
    const categoria = props.categoria



    // itemsList.sort((a,b) => b.calorias - a.calorias) //ordem por calorias
    // fruits.sort((a,b) => b.nome.localeCompare(a.nome)); //alfabeto reverso
    // itemsList.sort((a,b) => a.nome.localeCompare(b.nome)); //alfabeto

    const listItems = itemsList.map(item => <li key={item.id}> 
                                                  {item.nome}
                                             <b>  {item.calorias} cal</b>
                                          </li>)

    return(
        <>
            <h2>{categoria}</h2>
            <ol className="lista">{listItems}</ol>
        </>
    );
}
List.propTypes = {
    categoria: p.string,
    items: p.arrayOf(p.shape({  id: p.number,
                                nome: p.string,
                                calorias: p.number})),
}

List.defaultProps = {
    categoria: "Categoria",
    items: [],
}
export default List