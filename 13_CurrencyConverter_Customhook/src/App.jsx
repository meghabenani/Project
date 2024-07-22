import "./App.css";
import { useState, useEffect } from "react";
import UseCurrency from "./Hooks/UseCurrency";
import Inputbox from "./Components/Inputbox";

export default function App() {
  let [amount, setAmount] = useState(1);
  let [from, setFrom] = useState("usd");
  let [to, setTo] = useState("inr");
  let [convertAmount, setConvertamount] = useState(1);
  let currencyInfo = UseCurrency(from);
  let options = Object.keys(currencyInfo);

  useEffect(() => {
    setConvertamount(String(amount * currencyInfo[to]));
  });

  return (
    <div
      className="card container w-75"
      style={{ backgroundColor: "ThreeDFace" }}
    >
      <h1 className="mb-5">Currency Converter App</h1>

      <Inputbox
        label={"from"}
        amount={amount}
        changeValue={(amount) => {
          setAmount(amount);
        }}
        current={from}
        currencyOption={options}
        changeCurrency={(from) => {
          setFrom(from);
        }}
      />
      <div>
        <button
          className="btn btn-primary"
          onClick={() => {
            setFrom(to);
            setTo(from);
            setAmount(convertAmount);
            setConvertamount(amount);
          }}
        >
          Swap
        </button>
      </div>
      <Inputbox
        label={"to"}
        amount={convertAmount}
        current={to}
        currencyOption={options}
        changeCurrency={(to) => {
          setTo(to);
        }}
      />
    </div>
  );
}
