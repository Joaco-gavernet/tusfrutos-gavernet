import React from 'react';

function NutWidget ({data}) {
  return (
    <img src={data.src} alt='Nuts' width='400px' />
  )
}

export default NutWidget;