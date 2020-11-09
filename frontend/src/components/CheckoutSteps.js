import React from 'react';
function CheckoutSteps(props) {
  return <div className="checkout-steps">
    <div className={props.step1 ? 'active' : ''} >Logar</div>
    <div className={props.step2 ? 'active' : ''} >Frete</div>
    <div className={props.step3 ? 'active' : ''} >Pagamento</div>
    <div className={props.step4 ? 'active' : ''} >Fazer pedido</div>
  </div>
}

export default CheckoutSteps;