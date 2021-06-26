import React, {useEffect, useState, Fragment} from 'react';
import Card from './Card';

let referensData = [
  {
    "message": "lorem impsudcam;slkdm ;acakm;l dk jgel;km al;dsmkcl ael;k jasdf",
    "key": "1",
    "user": {
      "name": "Joaquin",
      "course": "React.js"
    }
  },
  {
    "message": "lorem impsudcam;slkdm ;acakm;l dk jgel;km al;dsmkcl ael;k jasdf",
    "key": "2",
    "user": {
      "name": "Nicolas",
      "course": "React.js"
    }
  },
  {
    "message": "lorem impsudcam;slkdm ;acakm;l dk jgel;km al;dsmkcl ael;k jasdf",
    "key": "3",
    "user": {
      "name": "Rosario",
      "course": "React.js"
    }
  }
]

function CardContainerHook () {
  const [referens] = useState(referensData);

  useEffect(() => {console.log('Component did mount')}, []);

  return (
    <>
      {referens.map((item, i) => <Card {...item} key={i} id={i} /> )}
    </>
  )
}

export default CardContainerHook