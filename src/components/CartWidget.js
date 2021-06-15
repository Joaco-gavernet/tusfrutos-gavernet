import React from 'react';
import CartIcon from './CartIcon';

class CartWidget extends React.Component {

  constructor (props) {
    super();
    this.state = {
      contador: 0,
      props: props
    }
  }

  render = () => {
    return (
      <>
        {console.log(this.props.src)}
        <CartIcon data={this.props} />
      </>
    )
  }
}

export default CartWidget;