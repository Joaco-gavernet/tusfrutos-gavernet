import React, {useEffect, useState} from 'react';
import Card from './Card';

let referensData = [
  {
    "message": "lorem impsudcam;slkdm ;acakm;l dk jgel;km al;dsmkcl ael;k jasdf",
    "user": {
      "name": "Joaquin",
      "course": "React.js"
    }
  },
  {
    "message": "lorem impsudcam;slkdm ;acakm;l dk jgel;km al;dsmkcl ael;k jasdf",
    "user": {
      "name": "Nicolas",
      "course": "React.js"
    }
  },
  {
    "message": "lorem impsudcam;slkdm ;acakm;l dk jgel;km al;dsmkcl ael;k jasdf",
    "user": {
      "name": "Rosario",
      "course": "React.js"
    }
  }
]

function CardContainerHook () {
  const [referens] = useState(referensData);

  useEffect(() => {console.log('Componente listo')}, []);

  return (
    <>
      {referens.map((item) => <Card {...item} />)}
    </>
  )
}

export default CardContainerHook