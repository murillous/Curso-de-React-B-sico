// Podemos adicionar estilos do css de várias formas:
// 1 - External
// 2 - Modules
// 3 - Inline
import Button from './button.jsx'
import Card from './card/card.jsx'

function App() {
  
  return(
    <>
      <Card />
      <Button />
      <Card />
      <Button />
      <Card />
      <Button />
      <Card />
      <Button />
    </>
  );
}

export default App
