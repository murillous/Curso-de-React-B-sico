import Students from './students.jsx'

function App() {
  
    return(
      <>
      <Students nome="Gutão" idade={19} estudante={true}/>
      <Students nome="Rhuann" idade={3} estudante={false}/>
      <Students nome="Cardoso" idade="30" estudante={true}/>
      <Students />
      </>
    );
}

export default App
