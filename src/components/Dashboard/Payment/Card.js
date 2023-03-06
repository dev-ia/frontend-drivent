import { useState } from 'react';
import Cards from 'react-credit-cards';
import { toast } from 'react-toastify';
import styled from 'styled-components';

import 'react-credit-cards/es/styles-compiled.css';
import { ButtonFont } from '../Reservation';
import { payWithCard } from '../../../services/paymentApi';

export default function Card({ setIsPayed, userData }) {
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

  const handleSubmit = async(evt) => {
    evt.preventDefault();

    const ticketId = 242;

    const { token } = userData;
    const { number, name, expiry, cvc, issuer } = card;

    if (number === '' || name === '' || expiry === '' || cvc === '') {
      return toast('por favor preencha todos os campos');
    }

    const cardData = {
      issuer,
      number,
      name,
      expirationDate: expiry,
      cvv: cvc
    };

    try {
      await payWithCard(ticketId, cardData, token);

      toast('pagamento realizado com sucesso!');
    } catch (error) {
      toast('não foi possivel realizar o pagamento. Tente novamente mais tarde!');
    }

    setIsPayed(true);
  };

  return (
    <>
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
        </form>
      </PaymentForm>
      <PayButton type='submit'>
        <ButtonFont onClick={handleSubmit}>
          FINALIZAR PAGAMENTO
        </ButtonFont>
      </PayButton>
    </>
  );
}

const PaymentForm = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  form{
    margin: 0 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    justify-self: flex-end;
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
      width: 50%;
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

const PayButton = styled.button`
  position: relative;
  all: unset;
  width: 200px;
  height: 37px;
  background-color: #E0E0E0;
  box-shadow: 0px 2px 10px 0px #00000040;
  border-radius: 4px;
  align-items:center;
  text-align:center;
  cursor:pointer;
  margin-top:20px;
`;
