import List from './fruits.jsx'

function App() {

  const fruits = [{id: 1, nome: "banana", calorias:  Random()},
                  {id: 2, nome: "maçã", calorias:  Random()},
                  {id: 3, nome: "abacaxi", calorias:  Random()},
                  {id: 4, nome:"bacuri", calorias: Random()},
                  {id: 5, nome: "melancia", calorias:  Random()}]

  const vegetais = [{id: 1, nome: "brocólis", calorias:  Random()},
                    {id: 2, nome: "alface", calorias:  Random()},
                    {id: 3, nome: "repolho", calorias:  Random()},
                    {id: 4, nome:"couve-flor", calorias: Random()},
                    {id: 5, nome: "espinafre", calorias: Random()}]

  function Random(){
    return Math.floor(Math.random() * 100)+1
  }

  return(
    
    <>
    {fruits.length > 0 && <List items={fruits} categoria="fruits"/>}
    {vegetais.length > 0 && <List items={vegetais} categoria="vegetais"/>}
    </>
  );
}

export default App
