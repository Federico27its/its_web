import { useState } from "react";
import React from "react";
/*Crea un componente LoginForm.

Usa due useState separati per gestire i campi email e password.

Crea un form HTML con due input (uno per l'email, uno per la password) e un bottone "Login".

Collega il valore di ogni input alla rispettiva variabile di stato e aggiornalo mentre l'utente digita.

Quando il form viene inviato (al click del bottone), previeni il comportamento di default del form e mostra i valori di email e password in un alert.*/
const LoginForm = () => {
    const [nome, setNome] = useState("");
    const [cognome, setCognome] = useState("");
    const [persona, setPersona]=useState({
        nome:"",
        cognome:""
    })
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [persone, setPersone] = useState([]);
    const gestioneDati = (e) => {
        e.preventDefault();
        if (nome && cognome){
            setPersone([
                ...persone,
                {
                    "nome":nome,
                    "cognome":cognome
                }
            ])
            setNome("")
            setCognome("")
        }
        else {
            alert("Inserisci tutti i dati oppure...")
        }

        /*
        const handlerChsnge = (e) => {
            const {nome, value} = e.target
            setPersona({...persona, [name]:value})
        }
            */
    }


    return (
        <div> 
           <form className="row g-3" onSubmit={gestioneDati}>
            <div className="col md-6">
                <label htmlFor="nome">Nome</label>
                <input type="text" id="nome" className="form-control"  value={nome} onChange={(e) => setNome(e.target.value)}></input>
            </div>
            <div className="col md-6">
                <label htmlFor="cognome">Cognome</label>
                <input type="text" id="cognome" className="form-control"  value={cognome} onChange={(e) => setCognome(e.target.value)}></input>
            </div>
            <div className="col md-6">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" className="form-control"  value={email} onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div className="col md-6">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" className="form-control"  value={password} onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <button className="btn btn-success">Login</button>
            </form>
            <div>
                {
                    persone.map((p,index)=>{
                        return (<p key={index}>{p.nome} {p.cognome}</p>)
                    })
                }
             </div>
        </div>
    )
}

export default LoginForm