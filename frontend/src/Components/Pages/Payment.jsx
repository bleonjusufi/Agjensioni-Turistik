import React, { useState, useEffect, useRef } from 'react';
import '../CSS/Payment.css'

function Payment() {
    const cardNumberRef = useRef(null);
    const cardNameRef = useRef(null);
    const cardDateRef = useRef(null);

    const [isCardFlipped, setIsCardFlipped] = useState(false);
    const [focusElementStyle, setFocusElementStyle] = useState(null);
    const [cardNumber, setCardNumber] = useState('');
    const [cardName, setCardName] = useState('');
    const [cardMonth, setCardMonth] = useState('');
    const [cardYear, setCardYear] = useState('');
    const [cardCvv, setCardCvv] = useState('');
    const minCardYear = new Date().getFullYear();
    const amexCardMask = '#### ###### #####';
    const otherCardMask = '#### #### #### ####';
    const currentCardBackground = Math.floor(Math.random() * 25 + 1);

    const focusInput = (ref) => {
        if (ref.current) {
            const target = ref.current;
            const focusElementStyle = {
                width: `${target.offsetWidth}px`,
                height: `${target.offsetHeight}px`,
                transform: `translateX(${target.offsetLeft}px) translateY(${target.offsetTop}px)`,
            };
            setFocusElementStyle(focusElementStyle);
        }
    };

    const blurInput = () => {
        setFocusElementStyle(null);
    };

    const flipCard = (status) => {
        setIsCardFlipped(status);
    };

    const getCardType = () => {
        const number = cardNumber;
        let re = new RegExp('^4');
        if (number.match(re) != null) return 'visa';

        re = new RegExp('^(34|37)');
        if (number.match(re) != null) return 'amex';

        re = new RegExp('^5[1-5]');
        if (number.match(re) != null) return 'mastercard';

        re = new RegExp('^6011');
        if (number.match(re) != null) return 'discover';

        re = new RegExp('^9792');
        if (number.match(re) != null) return 'troy';

        return 'visa'; // default type
    };

    const generateCardNumberMask = () => {
        return getCardType() === 'amex' ? amexCardMask : otherCardMask;
    };

    // Implement the logic to generate month and year options for the select elements.
    const months = [...Array(12).keys()].map((month) => (month + 1).toString().padStart(2, '0'));
    const currentYear = new Date().getFullYear();
    const years = [...Array(10).keys()].map((year) => (currentYear + year).toString());

    return (
        <div className="wrapper" id="app">
            <div className="card-form">
                <div className="card-list">
                    <div className={`card-item ${isCardFlipped ? '-active' : ''}`}>
                        <div className="card-item__side -front">
                            <div className={`card-item__cover`}>
                                <img src={`https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/${currentCardBackground}.jpeg`} className="card-item__bg" alt="" />
                            </div>
                            <div className="card-item__wrapper">
                                <div className="card-item__top">
                                    <img src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png" className="card-item__chip" alt="" />
                                    <div className="card-item__type">
                                        <img src={`https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/${getCardType()}.png`} alt="" className="card-item__typeImg" />
                                    </div>
                                </div>
                                <label htmlFor="cardNumber" className="card-item__number" ref={cardNumberRef}>
                                    {cardNumber.split('').map((char, index) => (
                                        <div
                                            key={index}
                                            className={`card-item__numberItem ${char.trim() === '' ? '-active' : ''}`}
                                        >
                                            {char}
                                        </div>
                                    ))}
                                </label>
                                <div className="card-item__content">
                                    <label htmlFor="cardName" className="card-item__info" ref={cardNameRef}>
                                        {cardName.length ? (
                                            <div className="card-item__name">
                                                {cardName.split(' ').map((name, index) => (
                                                    <span key={index} className="card-item__nameItem">
                                                        {name}
                                                    </span>
                                                ))}
                                            </div>
                                        ) : (
                                            <div className="card-item__name">Full Name</div>
                                        )}
                                    </label>
                                    <div className="card-item__date" ref={cardDateRef}>
                                        <label className="card-item__dateTitle">Expires</label>
                                        <label className="card-item__dateItem">
                                            {cardMonth ? (
                                                <span>{cardMonth}</span>
                                            ) : (
                                                <span>MM</span>
                                            )}
                                        </label>
                                        /
                                        <label className="card-item__dateItem">
                                            {cardYear ? (
                                                <span>{String(cardYear).slice(2, 4)}</span>
                                            ) : (
                                                <span>YY</span>
                                            )}
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-item__side -back">
                            <div className="card-item__cover">
                                <img src={`https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/${currentCardBackground}.jpeg`} className="card-item__bg" alt="" />
                            </div>
                            <div className="card-item__band"></div>
                            <div className="card-item__cvv">
                                <div className="card-item__cvvTitle">CVV</div>
                                <div className="card-item__cvvBand">
                                    {cardCvv.split('').map((char, index) => (
                                        <span key={index}>*</span>
                                    ))}
                                </div>
                                <div className="card-item__type">
                                    <img src={`https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/${getCardType()}.png`} alt="" className="card-item__typeImg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-form__inner">
                    <div className="card-input">
                        <label htmlFor="cardNumber" className="card-input__label">Card Number</label>
                        <input
                            type="text"
                            id="cardNumber"
                            className="card-input__input"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            onFocus={() => focusInput(cardNumberRef)}
                            onBlur={blurInput}
                            autoComplete="off"
                        />
                    </div>
                    <div className="card-input">
                        <label htmlFor="cardName" className="card-input__label">Card Holder</label>
                        <input
                            type="text"
                            id="cardName"
                            className="card-input__input"
                            value={cardName}
                            onChange={(e) => setCardName(e.target.value)}
                            onFocus={() => focusInput(cardNameRef)}
                            onBlur={blurInput}
                            autoComplete="off"
                        />
                    </div>
                    <div className="card-form__row">
                        <div className="card-form__col">
                            <div className="card-form__group">
                                <label htmlFor="cardMonth" className="card-input__label">Expiration Date</label>
                                <select
                                    className="card-input__input -select"
                                    id="cardMonth"
                                    value={cardMonth}
                                    onChange={(e) => setCardMonth(e.target.value)}
                                    onFocus={() => focusInput(cardDateRef)}
                                    onBlur={blurInput}
                                >
                                    {months.map((month) => (
                                        <option key={month} value={month}>
                                            {month}
                                        </option>
                                    ))}
                                </select>
                                <select
                                    className="card-input__input -select"
                                    id="cardYear"
                                    value={cardYear}
                                    onChange={(e) => setCardYear(e.target.value)}
                                    onFocus={() => focusInput(cardDateRef)}
                                    onBlur={blurInput}
                                >
                                    {years.map((year) => (
                                        <option key={year} value={year}>
                                            {year}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="card-form__col -cvv">
                            <div className="card-input">
                                <label htmlFor="cardCvv" className="card-input__label">CVV</label>
                                <input
                                    type="text"
                                    className="card-input__input"
                                    id="cardCvv"
                                    value={cardCvv}
                                    onChange={(e) => setCardCvv(e.target.value)}
                                    onFocus={() => flipCard(true)}
                                    onBlur={() => flipCard(false)}
                                    autoComplete="off"
                                />
                            </div>
                        </div>
                    </div>
                    <button className="card-form__button">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Payment
