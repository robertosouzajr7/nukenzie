import "./index.css";

function TotalMoney({ listTransactions, money, setMoney }) {
  const result = listTransactions.reduce(
    (acc, nextValue) =>
      nextValue.type === "Entrada"
        ? acc + nextValue.valor
        : acc - nextValue.valor,
    0
  );

  setMoney(result);

  return (
    <div className="container__price">
      <p>R$:{money},00</p>
    </div>
  );
}

export default TotalMoney;
