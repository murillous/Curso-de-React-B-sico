import Log from './Home-page.jsx'

function App() {
  
  return(
    <>
      <Log estaLogado={true} nome="Murilo"/>
      <Log estaLogado={true} nome="Cardosin" />
      <Log />
    </>
  );
}

export default App
