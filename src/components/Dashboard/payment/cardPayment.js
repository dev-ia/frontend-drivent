import { useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { toast } from 'react-toastify';
import styled from 'styled-components';

export default function CardPayment() {
  const [card, setCard] = useState({
    number: '',
    name: '',
    expiry: '',
    cvc: '',
    issuer: '',
    focus: '',
  });

  const handleCallback = (evt) => {
    const { issuer } = evt;
    setCard((prev) => ({ ...prev, issuer }));
  };

  const handleInputChange = (evt) => {
    evt.preventDefault();
    evt.persist();

    const { name, value } = evt.target;
    setCard((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    evt.preventDefault();
    evt.persist();

    setCard((prev) => ({ ...prev, focus: evt.target.name }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    console.log(card);

    const { number, name, expiry, cvc } = card;
    if (number === '' || name === '' || expiry === '' || cvc === '') {
      toast('por favor preencha todos os campos');
    }
  };

  return (
    <PaymentForm>
      <Cards
        number={card.number}
        name={card.name}
        expiry={card.expiry}
        cvc={card.cvc}
        callback={handleCallback}
        focused={card.focus}
      />
      <form>
        <input
          type="tel"
          name="number"
          placeholder="Card Number"
          value={card.number}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <p>E.g.: 49..., 51..., 36..., 37...</p>
        <input
          type="text"
          name="name"
          placeholder="Your name here"
          value={card.name}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <div className='date-and-cvc'>
          <input
            type="tel"
            name="expiry"
            placeholder="Valid Thru"
            value={card.expiry}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <input
            type="tel"
            name="cvc"
            placeholder="CVC"
            pattern="\d{3,4}"
            value={card.cvc}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </div>
        <button onClick={handleSubmit} >Enviar Pagamento</button>
      </form>
    </PaymentForm>
  );
}

const PaymentForm = styled.div`
  display: flex;
  form{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;
    color: gray;

    >p{
      margin: 0 5%;
      font-size: 80%;
    }

    >input{
    height: 20%;
    border: solid 1px;
    border-radius: 10px;
    border-color: lightgrey;
    color: black;
    }

    >input::placeholder{
      font-size: 15px;
      padding-left: 10px;
    }

    >.date-and-cvc{
      display: flex;
      justify-content: space-between;
      height: 20%;
      
      >input{
        border: solid 1px;
        border-radius: 10px;
        border-color: lightgrey;
        height: 100%;
      }

      >input::placeholder{
      font-size: 15px;
      padding-left: 10px;
    }
    }
  }
`;
