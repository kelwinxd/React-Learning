import React from 'react';

const ButtonModal = ({ setModal }) => {
   // essa função callback da um efeito Toggle, vai e volta
  function Call(){
    setModal((sla) => !sla)
  }

  return <button onClick={Call}>Abrir Modal</button>;
};

export default ButtonModal;
