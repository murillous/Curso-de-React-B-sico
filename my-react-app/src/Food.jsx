
function Food(){

    const food1 = "Orange"
    const food2 = "Banana"
    return(
        <ul>
            <li>Apple</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}
// com o uso de {} dá pra usar funções do js no html
export default Food