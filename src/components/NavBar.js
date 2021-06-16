import React from 'react';
import CartWidget from './CartWidget';

class NavBar extends React.Component {

  constructor (props) {
    super();
    this.state = {
      
    }
  }

  render (){
    return (
      <>
        <h1>Tus Frutos Secos</h1>
        <div style={{display: 'flex', justifyContent: 'space-evenly', minWidth: '600px'}}>
          <span>Inicio</span>
          <span>Conocenos</span>
          <span>Productos</span>
          <span>Contacto</span>
          <CartWidget />
        </div>
      </>
    )
  }
}

export default NavBar