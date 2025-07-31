import React, { useEffect, useState } from 'react';

const EsempioUseEffect = () => {
  const [count, setCount] = useState(0);

  // Funzioni richieste dal prof
  const first = () => {
    console.log("Funzione first eseguita");
  };

  const second = () => {
    console.log("Funzione second eseguita (cleanup)");
  };

  const third = count; // Usato solo per triggerare l'useEffect

  // Primo useEffect con first e second
  useEffect(() => {
    first();

    return () => {
      second();
    };
  }, [third]); // ora third è definito (basato su count)

  // Aggiornamento titolo pagina
  useEffect(() => {
    console.log("Ho chiamato useEffect");

    if (count < 1) {
      document.title = "nessun titolo";
    } else {
      document.title = "Ho trovato qualcosa";
    }
  }, [count]);

  console.log("Sono fuori dallo useEffect");

  return (
    <>
      <div>EsempioUseEffect: {count}</div>
      <button onClick={() => setCount(count + 1)} className='btn btn-primary'>
        INCREMENTA
      </button>
    </>
  );
};

export default EsempioUseEffect;
