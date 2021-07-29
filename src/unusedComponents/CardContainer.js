import React from 'react';
import Card from './Card';


class CardContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      done: false,
      referens: []
    };
  }

  componentDidMount() {
    fetch('https://mocki.io/v1/ca2683ca-be97-4773-b99c-9549d78b312e')
    .then((response) => response.json())
    .then((obj) => {
      this.setState({
        done: true,
        referens: obj
      })
    })
    .catch((error) => {
      console.log('Something went wrong during the process');
      console.log(error);
    })
  }



  render() {
    return (
      <div>
        Container Card
        {this.state.done && Array.isArray(this.state.referens) ? (
          this.state.referens.map((item, i) => <Card {...item} key={i} />)
        ) : (
          <p>Cargando...</p>
        )}

      </div>
    )
  }
  
}




export default CardContainer;