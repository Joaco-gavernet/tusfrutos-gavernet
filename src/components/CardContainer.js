import React from 'react';
import Card from './Card';

// new Promise ((resolve, reject) => {
//   resolve(cardData)
//   reject('There was some error I guess')
// })
// .then(data => {console.log(data)})
// .catch(message => {console.log(message)})
// .finally(() => {console.log('All done')})


// // Tratando de implementar un llamado con fetch. No funciona. 
// fetch('./data/cardData.json', {
//   headers: {
//     'Content-Type': 'application/json', 
//     'Accept': 'application/json'
//   }
// })
//   .then(function(response) {
//     console.log(response.json());
//     return response.json();
//   })
//   .then(function(obj) {
//     console.log(obj)
//   })
//   .catch(function(error) {
//     console.error('Something went wrong during the process');
//     console.error(error);
//   })


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

class CardContainer extends React.Component {

  state = {
    referens: referensData
  }

  render() {
    return (
      <div>
        Container Card
        {this.state.referens.map((item) =>
          <Card {...item} />)}
      </div>
    )
  }
  
}

export default CardContainer;