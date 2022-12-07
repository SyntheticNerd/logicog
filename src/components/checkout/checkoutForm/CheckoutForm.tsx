import React, { useState } from "react";
import { CheckoutFormStyled } from "./CheckoutFormStyled";

const CheckoutForm = () => {
  const [states, setStates] = useState<string[]>(["California", "New York"]);

  const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e.target);
  };

  return (
    <CheckoutFormStyled>
      <form action='' onChange={formHandler} id='checkoutForm'>
        <h2>CONTACT INFO</h2>
        {/* -----------------------first line---------------------- */}
        <div className='longInput'>
          <label htmlFor='emailAddress'>
            Email address <span>*</span>
          </label>
          <input id='emailAddress' type='text' name='emailAddress' />
          <p>Order update will be sent to this address.</p>
        </div>
        <h2>SHIPPING ADDRESS</h2>
        {/* -----------------------second line---------------------- */}
        <div className='flexContainer'>
          <div className='shortInput'>
            <label htmlFor='fName'>
              First Name <span>*</span>
            </label>
            <input id='fName' type='text' name='fName' />
          </div>
          <div className='shortInput'>
            <label htmlFor='lName'>
              Last Name <span>*</span>
            </label>
            <input id='lName' type='text' name='lName' />
          </div>
        </div>
        {/* -----------------------third line---------------------- */}
        <div className='longInput'>
          <label htmlFor='addressOne'>
            Address 1 <span>*</span>
          </label>
          <input id='addressOne' type='text' name='addressOne' />
        </div>
        {/* -----------------------optional line---------------------- */}
        <div className='longInput'>
          <label htmlFor='addressTwo'>Address 2</label>
          <input id='addressTwo' type='text' name='addressTwo' />
        </div>
        {/* -----------------------fourth line---------------------- */}
        <div className='flexContainer'>
          <div className='shortInput'>
            <label htmlFor='city'>
              City <span>*</span>
            </label>
            <input id='city' type='text' name='city' />
          </div>
          <div className='shortInput'>
            <label htmlFor='state'>
              State <span>*</span>
            </label>
            <select
              id='state'
              form='checkoutForm'
              autoComplete='off'
              name='state'
            >
              <option value='' className='placeholder'>
                State
              </option>

              {states.map((state) => (
                <option value={state} key={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
        </div>
        {/* -----------------------fifth line---------------------- */}
        <div className='flexContainer'>
          <div className='shortInput'>
            <label htmlFor='country'>
              Country <span>*</span>
            </label>
            <select
              id='country'
              form='checkoutForm'
              autoComplete='off'
              name='country'
            >
              <option value='United States'>United States</option>
            </select>
          </div>
          <div className='shortInput'>
            <label htmlFor='zipCode'>
              Zip Code <span>*</span>
            </label>
            <input id='zipCode' type='text' name='zipCode' />
          </div>
        </div>
        {/* -----------------------sixth line---------------------- */}
        <div className='longInput'>
          <label htmlFor='company'>Company</label>
          <input id='company' type='text' name='company' />
        </div>
        {/* -----------------------seventh line---------------------- */}
        <div className='longInput'>
          <label htmlFor='phone'>
            Phone Number <span>*</span>
          </label>
          <input id='phone' type='text' name='phone' />
          <p>This information will be only used to deliver your purchase.</p>
        </div>
        <h2>SHIPPING METHOD</h2>
        <div className='shippingMethod'>
          <div className='stdShip'>
            <input
              type='radio'
              id='free'
              name='shippingMethod'
              value='free'
              defaultChecked
            />
            <label htmlFor='free'>
              <strong>Free Shipping </strong>
              <span>(4-7 Business Days*)</span>
              <strong>Free</strong>
            </label>
          </div>
          <div className='expShip'>
            <input
              type='radio'
              id='expedited'
              name='shippingMethod'
              value='expedited'
            />
            <label htmlFor='expedited'>
              <strong>Expedited Shipping </strong>
              <span>(2-3 Business Days*)</span>
              <strong>$8.00</strong>
            </label>
          </div>
        </div>
      </form>
      <p>
        *In-stock orders placed prior to 3:00pm EST usually ship the next
        business day. Some orders may be delayed due to order processing or
        other issues. Once your order has shipped, delivery time is based on the
        shipping method selected.
      </p>
      <p>
        <a href=''>DR globalTech Inc.</a> is the authorized reseller and
        merchant of the products and services offered within this store.
      </p>
    </CheckoutFormStyled>
  );
};

export default CheckoutForm;
