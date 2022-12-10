import React, { useState, useEffect } from "react";
import { CheckoutFormStyled } from "./CheckoutFormStyled";

import { ReactComponent as WhiteCheckmark } from "../../../images/icons/checkmark.svg";
import { ReactComponent as GreenCheckmark } from "../../../images/icons/checkmark2.svg";
import { ReactComponent as CreditCardFront } from "../../../images/creditCardFront.svg";
import { ReactComponent as CreditCardBack } from "../../../images/creditCardBack.svg";
import { useAppDispatch } from "../../../features/store";
import { checkoutThunk } from "../../../features/customer/customerSlice";
import { useNavigate } from "react-router";

const CheckoutForm = ({ total }: { total: number }) => {
  const [states, setStates] = useState<string[]>(["California", "New York"]);
  const [step, setStep] = useState(1);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [emailInput, setEmailInput] = useState("");
  const [fNameInput, setFNameInput] = useState("");
  const [lNameInput, setLNameInput] = useState("");
  const [address1Input, setAddress1Input] = useState("");
  const [address2Input, setInput5] = useState("");
  const [cityInput, setCityInput] = useState("");
  const [stateInput, setStateInput] = useState("");
  const [countryInput, setInput8] = useState("United States");
  const [zipInput, setZipInput] = useState("");
  const [companyInput, setCompanyInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [expidShip, setExpidShip] = useState(false);

  const [billingSame, setBillingSame] = useState(true);

  const requiredInputList = [
    emailInput,
    fNameInput,
    lNameInput,
    address1Input,
    cityInput,
    stateInput,
    countryInput,
    zipInput,
    phoneInput,
  ];

  const ShippingOverview = () => {
    return (
      <div>
        <h3>Shipping Address</h3>
        <div>
          <b>{fNameInput}</b>
          <b>{lNameInput}</b>
        </div>
        <p>{address1Input}</p>
        {address2Input.length > 0 && <p>{address2Input}</p>}
        <p>
          {cityInput} {stateInput} {zipInput}
        </p>
        <p>{phoneInput}</p>
        <p>{emailInput}</p>
      </div>
    );
  };

  const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e.target);
  };

  const submitPg1Handler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let error = false;
    requiredInputList.forEach((input) => {
      console.log(input);
      if (input.length <= 0) error = true;
    });
    if (!error) {
      setStep(2);
      window.scrollTo(0, 0);
    }
  };

  const submitPg2Handler = () => {
    dispatch(checkoutThunk(total));
    navigate("/my-account");
  };

  return (
    <CheckoutFormStyled expidShip={expidShip}>
      {step === 1 && (
        <form
          action=''
          onChange={formHandler}
          id='checkoutForm'
          onSubmit={submitPg1Handler}
        >
          <h2>CONTACT INFO</h2>
          {/* -----------------------first line---------------------- */}
          <div className='longInput inputWrapper'>
            <label htmlFor='emailAddress'>
              Email address <span>*</span>
            </label>
            <input
              id='emailAddress'
              type='text'
              name='emailAddress'
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
            />
            <p>Order update will be sent to this address.</p>
          </div>
          <h2>SHIPPING ADDRESS</h2>
          {/* -----------------------second line---------------------- */}
          <div className='flexContainer'>
            <div className='shortInput inputWrapper'>
              <label htmlFor='fName'>
                First Name <span>*</span>
              </label>
              <input
                id='fName'
                type='text'
                name='fName'
                value={fNameInput}
                onChange={(e) => setFNameInput(e.target.value)}
              />
            </div>
            <div className='shortInput inputWrapper'>
              <label htmlFor='lName'>
                Last Name <span>*</span>
              </label>
              <input
                id='lName'
                type='text'
                name='lName'
                value={lNameInput}
                onChange={(e) => setLNameInput(e.target.value)}
              />
            </div>
          </div>
          {/* -----------------------third line---------------------- */}
          <div className='longInput inputWrapper'>
            <label htmlFor='addressOne'>
              Address 1 <span>*</span>
            </label>
            <input
              id='addressOne'
              type='text'
              name='addressOne'
              value={address1Input}
              onChange={(e) => setAddress1Input(e.target.value)}
            />
          </div>
          {/* -----------------------optional line---------------------- */}
          <div className='longInput inputWrapper'>
            <label htmlFor='addressTwo'>Address 2</label>
            <input
              id='addressTwo'
              type='text'
              name='addressTwo'
              value={address2Input}
              onChange={(e) => setInput5(e.target.value)}
            />
          </div>
          {/* -----------------------fourth line---------------------- */}
          <div className='flexContainer'>
            <div className='shortInput inputWrapper'>
              <label htmlFor='city'>
                City <span>*</span>
              </label>
              <input
                id='city'
                type='text'
                name='city'
                value={cityInput}
                onChange={(e) => setCityInput(e.target.value)}
              />
            </div>
            <div className='shortInput inputWrapper'>
              <label htmlFor='state'>
                State <span>*</span>
              </label>
              <select
                id='state'
                form='checkoutForm'
                autoComplete='off'
                name='state'
                value={stateInput}
                onChange={(e) => setStateInput(e.target.value)}
              >
                <option value='' className='placeholder'>
                  Choose State
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
            <div className='shortInput inputWrapper'>
              <label htmlFor='country'>
                Country <span>*</span>
              </label>
              <select
                id='country'
                form='checkoutForm'
                autoComplete='off'
                name='country'
                value={countryInput}
                onChange={(e) => setInput8(e.target.value)}
              >
                <option value='United States'>United States</option>
              </select>
            </div>
            <div className='shortInput inputWrapper'>
              <label htmlFor='zipCode'>
                Zip Code <span>*</span>
              </label>
              <input
                id='zipCode'
                type='text'
                name='zipCode'
                value={zipInput}
                onChange={(e) => setZipInput(e.target.value)}
              />
            </div>
          </div>
          {/* -----------------------sixth line---------------------- */}
          <div className='longInput inputWrapper'>
            <label htmlFor='company'>Company</label>
            <input
              id='company'
              type='text'
              name='company'
              value={companyInput}
              onChange={(e) => setCompanyInput(e.target.value)}
            />
          </div>
          {/* -----------------------seventh line---------------------- */}
          <div className='longInput inputWrapper'>
            <label htmlFor='phone'>
              Phone Number <span>*</span>
            </label>
            <input
              id='phone'
              type='text'
              name='phone'
              value={phoneInput}
              onChange={(e) => setPhoneInput(e.target.value)}
            />
            <p>This information will be only used to deliver your purchase.</p>
          </div>
          <h2>SHIPPING METHOD</h2>
          <div className='shippingMethod'>
            <div className='stdShip'>
              <input
                type='radio'
                id='free'
                name='shippingMethod'
                onChange={(e) => e.target.checked && setExpidShip(false)}
                defaultChecked
              />
              <label htmlFor='free'>
                <b>Free Shipping </b>
                <span>(4-7 Business Days*)</span>
                <strong>Free</strong>
                <GreenCheckmark />
              </label>
            </div>
            <div className='expShip'>
              <input
                type='radio'
                id='expedited'
                name='shippingMethod'
                onChange={(e) => e.target.checked && setExpidShip(true)}
              />
              <label htmlFor='expedited'>
                <b>Expedited Shipping </b>
                <span>(2-3 Business Days*)</span>
                <strong>$8.00</strong>
                <GreenCheckmark />
              </label>
            </div>
          </div>
          <button>CONTINUE TO PAYMENT</button>
        </form>
      )}
      {step === 2 && (
        <>
          <div className='shippingTitle'>
            <div className='completeStatus'>
              <WhiteCheckmark />
            </div>
            <h2>SHIPPING INFO</h2>
            <button
              className='editBtn'
              type='button'
              onClick={() => setStep(1)}
            >
              Edit
            </button>
          </div>
          <div className='shippingOverview'>
            <ShippingOverview />
            <div className='shippingMethodSummary'>
              <h3>Shipping Method</h3>
              <div>
                <div className='check2 stdShipCheck'>
                  {!expidShip && <WhiteCheckmark />}
                </div>
                <div>
                  <p>Standard Shipping</p>
                  <b>(4-7 Business Days)</b>
                </div>
              </div>
              <div>
                <div className='check2 expShipCheck'>
                  {expidShip && <WhiteCheckmark />}
                </div>
                <div>
                  <p>Expedited Shipping</p>
                  <b>(2-3 Business Days)</b>
                </div>
              </div>
            </div>
          </div>

          <div className='billingAddress'>
            <h3>Billing Address</h3>
            <div className='billingOverview'>
              <div className='sameShippingCheck'>
                <input
                  type='checkbox'
                  name=''
                  id='shippingSame'
                  onChange={() => setBillingSame((old) => !old)}
                  checked={billingSame}
                />
                <label htmlFor='shippingSame'>Same as Shipping Address</label>
              </div>
              {billingSame ? (
                <ShippingOverview />
              ) : (
                <form className='billingForm'>
                  <div className='flexContainer'>
                    <div className='shortInput inputWrapper'>
                      <label htmlFor='fName'>
                        First Name <span>*</span>
                      </label>
                      <input
                        id='fName'
                        type='text'
                        name='fName'
                        value={fNameInput}
                        onChange={(e) => setFNameInput(e.target.value)}
                      />
                    </div>
                    <div className='shortInput inputWrapper'>
                      <label htmlFor='lName'>
                        Last Name <span>*</span>
                      </label>
                      <input
                        id='lName'
                        type='text'
                        name='lName'
                        value={lNameInput}
                        onChange={(e) => setLNameInput(e.target.value)}
                      />
                    </div>
                  </div>
                  {/* -----------------------third line---------------------- */}
                  <div className='longInput inputWrapper'>
                    <label htmlFor='addressOne'>
                      Address 1 <span>*</span>
                    </label>
                    <input
                      id='addressOne'
                      type='text'
                      name='addressOne'
                      value={address1Input}
                      onChange={(e) => setAddress1Input(e.target.value)}
                    />
                  </div>
                  {/* -----------------------optional line---------------------- */}
                  <div className='longInput inputWrapper'>
                    <label htmlFor='addressTwo'>Address 2</label>
                    <input
                      id='addressTwo'
                      type='text'
                      name='addressTwo'
                      value={address2Input}
                      onChange={(e) => setInput5(e.target.value)}
                    />
                  </div>
                  {/* -----------------------fourth line---------------------- */}
                  <div className='flexContainer'>
                    <div className='shortInput inputWrapper'>
                      <label htmlFor='city'>
                        City <span>*</span>
                      </label>
                      <input
                        id='city'
                        type='text'
                        name='city'
                        value={cityInput}
                        onChange={(e) => setCityInput(e.target.value)}
                      />
                    </div>
                    <div className='shortInput inputWrapper'>
                      <label htmlFor='state'>
                        State <span>*</span>
                      </label>
                      <select
                        id='state'
                        form='checkoutForm'
                        autoComplete='off'
                        name='state'
                        value={stateInput}
                        onChange={(e) => setStateInput(e.target.value)}
                      >
                        <option value='' className='placeholder'>
                          Choose State
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
                    <div className='shortInput inputWrapper'>
                      <label htmlFor='country'>
                        Country <span>*</span>
                      </label>
                      <select
                        id='country'
                        form='checkoutForm'
                        autoComplete='off'
                        name='country'
                        value={countryInput}
                        onChange={(e) => setInput8(e.target.value)}
                      >
                        <option value='United States'>United States</option>
                      </select>
                    </div>
                    <div className='shortInput inputWrapper'>
                      <label htmlFor='zipCode'>
                        Zip Code <span>*</span>
                      </label>
                      <input
                        id='zipCode'
                        type='text'
                        name='zipCode'
                        value={zipInput}
                        onChange={(e) => setZipInput(e.target.value)}
                      />
                    </div>
                  </div>
                  {/* -----------------------sixth line---------------------- */}
                  <div className='longInput inputWrapper'>
                    <label htmlFor='company'>Company</label>
                    <input
                      id='company'
                      type='text'
                      name='company'
                      value={companyInput}
                      onChange={(e) => setCompanyInput(e.target.value)}
                    />
                  </div>
                  {/* -----------------------seventh line---------------------- */}
                  <div className='longInput inputWrapper'>
                    <label htmlFor='phone'>
                      Phone Number <span>*</span>
                    </label>
                    <input
                      id='phone'
                      type='text'
                      name='phone'
                      value={phoneInput}
                      onChange={(e) => setPhoneInput(e.target.value)}
                    />
                    <p>
                      This information will be only used to deliver your
                      purchase.
                    </p>
                  </div>
                </form>
              )}
            </div>
            <div className='paymentMethod'>
              <h2>PAYMENT METHOD</h2>
              <div className='cardContainer'>
                <div className='creditCardFront'>
                  <div className='cardNumber'>
                    <input type='text' />
                    <input type='text' />
                    <input type='text' />
                    <input type='text' />
                  </div>
                  <h4>CARD NUMBER</h4>
                  <div className='bottomRow'>
                    <div className='cardNameInput'>
                      <div className='inputWrapper'>
                        <input type='text' />
                      </div>
                      <h4>NAME</h4>
                    </div>
                    <div className='cardExpirationInput'>
                      <div className='inputWrapper'>
                        <input type='' min='20/08' />
                      </div>
                      <h4>VALID THRU</h4>
                    </div>
                  </div>
                </div>
                <div className='creditCardBack'>
                  <div className='cvvInput'>
                    <div className='inputWrapper'>
                      <input type='text' />
                    </div>
                    <h4>CVV</h4>
                  </div>
                </div>
              </div>
            </div>
            <button onClick={submitPg2Handler}>SUBMIT</button>
          </div>
        </>
      )}

      <p>
        * In-stock orders placed prior to 3:00pm EST usually ship the next
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
