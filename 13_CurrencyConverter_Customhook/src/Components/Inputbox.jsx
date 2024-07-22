export default function Inputbox({
  label,
  amount = 0,
  changeValue,
  changeCurrency,
  current = "usd",
  currencyOption = [],
}) {
  return (
    <div className="card w-75 container" style={{ border: "1px solid black" }}>
      <div className="row">
        <div className="col-6">
          <div className="mb-2">{label}</div>
          <input
            type="number"
            value={amount}
            onChange={(e) => {
              changeValue(Number(e.target.value));
            }}
          />
        </div>
        <div className="col-6">
          <div className="mb-2">Currency</div>
          <select
            name="currency"
            value={current}
            onChange={(e) => {
              changeCurrency(e.target.value);
            }}
          >
            {currencyOption.map((i, j) => {
              return (
                <option key={j} value={i}>
                  {i}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
}
