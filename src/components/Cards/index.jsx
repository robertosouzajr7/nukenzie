import "../../style/reset.css";
import "../../style/global.css";
import "../../style/animacoes.css";

import "./index.css";
import { BsFillTrashFill } from "react-icons/bs";

export function Card({ transaction, index, deletTransaction }) {
  if (transaction.type === "Entrada") {
    return (
      <>
        <li className="cadEntrada fadeInLeftCard" key={index}>
          <div>
            <h2 className="Title2">{transaction.description}</h2>
            <p className="Title4">{transaction.type}</p>
          </div>
          <strong className="Title4">R$:{transaction.valor},00</strong>
          <button
            onClick={() => deletTransaction(transaction)}
            className="Disable bounceButtons"
          >
            <BsFillTrashFill />
          </button>
        </li>
      </>
    );
  } else if (transaction.type === "Saida") {
    return (
      <>
        <li className="cadSaida fadeInLeftCard " key={index}>
          <div>
            <h2 className="Title2">{transaction.description}</h2>
            <p className="Title4">{transaction.type}</p>
          </div>
          <strong className="Title4">R$:{transaction.valor},00</strong>
          <button
            onClick={() => deletTransaction(transaction)}
            className="Disable bounceButtons"
          >
            <BsFillTrashFill />
          </button>
        </li>
      </>
    );
  }
}
