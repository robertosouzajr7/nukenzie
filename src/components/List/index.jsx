import "../../style/reset.css";
import "../../style/global.css";
import "../../style/animacoes.css";

import "./index.css";
import imgNoCard from "../List/noCard.png";
import { Card } from "../Cards";

export function List({
  setFiltered,
  filtered,
  listTransactions,
  setListTransactions,
  formData,
}) {
  function DeletTransaction(deletTarget) {
    const newList = listTransactions.filter(
      (item) => item.description !== deletTarget.description
    );
    setListTransactions(newList);

    if (filtered.length > 0) {
      const newListFiltred = listTransactions.filter(
        (item) => item.description !== deletTarget.description
      );
      setFiltered(newListFiltred);
    }
  }

  return (
    <>
      {listTransactions.length > 0 ? (
        filtered.map((item, index) => (
          <Card
            key={index}
            transaction={item}
            deletTransaction={DeletTransaction}
          />
        ))
      ) : (
        <>
          <h2 className="Title2">Ainda não há transações em {formData.type}</h2>
          <img src={imgNoCard} alt="" />
        </>
      )}
    </>
  );
}
