
function Button(){
    // let count = 1;
    // const handleCLick = (nome) => {
        
    //     if(count <= 3){
    //         console.log(`${nome} Você clicou em mim ${count} vezes`);
    //         count++;
    //     }else{
    //         console.log(`${nome} Pare de clicar em mim!`);
    //     }
    // }
    const handleCLick = (e) => console.log(e)

    return(
        <button onClick={(e) => handleCLick(e)}> Click me 😊</button>
    );
}
export default Button