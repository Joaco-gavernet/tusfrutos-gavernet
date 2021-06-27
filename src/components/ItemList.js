import React from 'react';

function ItemList () {

  const itemData = {
    "product1": {
      "name": "Pasas",
      "img": "../../public/resources/castanas.png",
      "description": "Humedas y sabrosas, pero no mimosas."
    },
    "product2": {
      "name": "Nueces",
      "img": "https://picsum.photos/id/237/200/300",
      "description": "Las tradicionales y tan buscadas nueces."
    },
    "product3": {
      "name": "Almendras",
      "img": "https://picsum.photos/id/237/200/300",
      "description": "Almendras para alargar tus años de vida."
    },
    "product4": {
      "name": "Castañas",
      "img": "https://picsum.photos/id/237/200/300",
      "description": "Mejores que cualquier otro fruto, muy sabrosas."
    }
  };

  // const itemPromiseResult = '';
  // const ItemPromise = new Promise((resolve, reject) => {
  //   let fetchPetition = fetch('../data/itemData.json', {mode: 'no-cors'});

  //   resolve(fetchPetition);
  //   reject('Hubo un error');
  // })

  // ItemPromise.then(result => {
  //   console.log(result.text());
  //   // itemPromiseResult = result;
  // });
  // ItemPromise.catch(msj => console.log(msj));

  // const {items} = useState(itemPromiseResult);


  return (
    <>
      <img src={itemData.product1.img} alt="" />
    </>
  )
}

export default ItemList;