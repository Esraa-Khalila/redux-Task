import { useSelector, useDispatch } from "react-redux";
import {  withdraw, deposit } from "./Store/Bank";
import  { useState } from "react";

function Test() {
    const [amount, setAmount] = useState();
  const result = useSelector((state) => state.result);
  
    const dispatch = useDispatch()
    const onChange = (e) => {
        setAmount(e.target.value)
    }
    return (
      <>
        <div class="limiter">
          <div
            class="container-login100"
            style={{ backgroundImage: "url('images/bank.jfif' )" }}
          >
            <div class="wrap-login100 p-t-30 p-b-50">
              <span class="login100-form-title p-b-41">Bank</span>
              <div class="login100-form validate-form p-b-33 p-t-5">
                <div
                  class="wrap-input100 validate-input"
                  data-validate="Enter username"
                >
                  <input
                    class="input100"
                    type="number"
                    value={amount}
                    onChange={onChange}
                    placeholder="amount"
                  />
                </div>
                <h3> {result}</h3>
                
                <div class="container-login100-form-btn m-t-32">
                  <button
                    class="login100-form-btn"
                    onClick={() => dispatch(deposit(+amount))}
                  >
                    deposit
                  </button>
                  <button
                    class="login100-form-btn"
                    onClick={() => dispatch(withdraw(+amount))}
                  >
                    withdraw
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
       
  



}
export default Test;