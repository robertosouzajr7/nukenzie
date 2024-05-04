import "../../style/reset.css";
import "../../style/global.css";
import "./index.css";
const Filter = ({ setFiltered, listTransactions }) => {
  function Todos() {
    setFiltered(listTransactions);
  }

  function Entrada() {
    const entradas = listTransactions.filter((item) => item.type === "Entrada");
    setFiltered(entradas);
  }

  function Saidas() {
    const listsaida = listTransactions.filter((item) => {
      return item.type === "Saida";
    });
    setFiltered(listsaida);
  }

  return (
    <div className="container__botoes">
      <h2 className="Title2">Resumo Financeiro</h2>
      <button className="Enable" onClick={Todos}>
        Todos
      </button>
      <button className="Disable" onClick={Entrada}>
        Entrada
      </button>
      <button className="Disable" onClick={Saidas}>
        Saida
      </button>
    </div>
  );
};

export default Filter;
