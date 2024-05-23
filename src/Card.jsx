//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

import React from 'react';

function Card({ input1, input2 }) {
return (
<div className="card">
  <h2>Información del usuario:</h2>
  <p><strong>hola </strong> {input1}</p>
  <p><strong>Sabemos que tu color favorito es: </strong> {input2}</p>
  </div>
);
}

export default Card;
