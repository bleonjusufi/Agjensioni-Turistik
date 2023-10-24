import React from "react";
import '../CSS/Payment.css';
import Card from '../Images/card_img.png'

function Payment(){
    return(
        <>
        <div class="container">

        <form action="">

<div class="row">

    <div class="col">

        <h3 class="title">billing address</h3>

        <div class="inputBox">
            <span>Full Name :</span>
            <input type="text" placeholder="Bleon Jusufi"></input>
        </div>
        <div class="inputBox">
            <span>Email :</span>
            <input type="email" placeholder="bleonjusufi@ubt-uni.net"></input>
        </div>
        <div class="inputBox">
            <span>Address :</span>
            <input type="text" placeholder="Bregu i Diellit"></input>
        </div>
        <div class="inputBox">
            <span>City :</span>
            <input type="text" placeholder="Prishtina"></input>
        </div>

        <div class="flex">
            <div class="inputBox">
                <span>State :</span>
                <input type="text" placeholder="Kosova"></input>
            </div>
            <div class="inputBox">
                <span>Zip Code :</span>
                <input type="text" placeholder="10000"></input>
            </div>
        </div>

    </div>

    <div class="col">

        <h3 class="title">Payment</h3>

        <div class="inputBox">
            <span>Cards Accepted :</span>
            <img src={Card} alt=""></img>
        </div>
        <div class="inputBox">
            <span>Name on Card :</span>
            <input type="text" placeholder="Mr. Bleon Jusufi"></input>
        </div>
        <div class="inputBox">
            <span>Credit Card Number :</span>
            <input type="number" placeholder="4600-xxxx-xxxx-xxxx"></input>
        </div>
        <div class="inputBox">
            <span>Exp month :</span>
            <input type="text" placeholder="December"></input>
        </div>

        <div class="flex">
            <div class="inputBox">
                <span>Exp year :</span>
                <input type="number" placeholder="2023"></input>
            </div>
            <div class="inputBox">
                <span>CVV :</span>
                <input type="text" placeholder="xxx"></input>
            </div>
        </div>

    </div>

</div>

<input type="submit" value="Proceed to Checkout" class="submit-btn"></input>

</form>


</div>    

        </>
    )
}

export default Payment