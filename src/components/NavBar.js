import React from 'react';

class NavBar extends React.Component {

  constructor (props) {
    super();
    this.state = {
      styles: props.NavBarStyles
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
        </div>
      </>
    )
  }
}

export default NavBar