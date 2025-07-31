import logo from './logo.svg';
import './App.css';
import Componente1 from './Componente1';
import Clock from './Clock';
import Stampanumeri from './esercizi/Stampanumeri';
import {Component, useState} from 'react'
import {anagrafica} from './data/dati'
import Contatore from './esercizi/Contatore';
import EsempioUseEffect from './esercizi/EsempioUseEffect';
import CleanUp from './esercizi/CleanUp';
import LoginForm from './esercizi/LoginForm';
import CambiaNome from './esercizi/CambiaNome';
import FetchComponent from './esercizi/FetchComponent';
function getDate(date)
    {
      return date.toLocaleDateString() + " " + date.toLocaleTimeString('en-US')
    }

function App() {
  let nome = "Riccardo";


  const[persone, setPersone] = useState(anagrafica)


  const elimina = (id) => {
    const newAnag=persone.filter(p=>p.id!==id);
    setPersone(newAnag);
  }
  
  const [persona, setPersona]=useState({
    id:"1",
    nome:"Pinco",
    cognome:"Pallino",
    eta:34
  })

  const compleanno=()=>{
    let anni=persona.eta+1;

    setPersona({
      ...persona,
      eta:anni
    })
  }
  return (
    <>
    <div className="App">
      <FetchComponent></FetchComponent>
      <LoginForm></LoginForm>
      <CleanUp></CleanUp>
        <EsempioUseEffect></EsempioUseEffect>
        <br></br>
        <Contatore></Contatore>
        <h1>Primo elemento</h1>
        <CambiaNome></CambiaNome>
        <br></br>
        <br></br>
        <div>{persona.nome}</div>
        <div>{persona.cognome}</div>
        <div>{persona.eta}</div>
                <button onClick={compleanno} className='btn btn-primary'>
           Compleanno
        </button>
        {
          persone.map((p) =>{
            return (<div key={p.id}>
              <span>
                {p.nome} {p.cognome}
                </span>
                &nbsp;&nbsp;
                <button onClick={()=>{elimina(p.id)}}>Elimina</button>
                </div>
                )
          })
        }
    <h1>Primo Elemento di {nome}</h1>
    <Componente1>Federico</Componente1>
    <Componente1/>
    <h2>
    {
      new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString('en-US')
    }
    </h2>
    <h2>{getDate(new Date())}</h2>
    <h2>{getDate(new Date())}</h2>
    <h2>{getDate(new Date())}</h2>
    <h1><Clock timezone="0" country="italy"></Clock></h1>
    <h1><Clock timezone="-5" country="USA"></Clock></h1>
    <h1><Clock timezone="7" country="japan"></Clock></h1>
    <Stampanumeri></Stampanumeri>

    </div>
    </>
  );
}

export default App;
