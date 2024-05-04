import "./style/reset.css";
import "./style/global.css";
import "./style/animacoes.css";

import "./index.css";
import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import { List } from "./components/List";
import TotalMoney from "./components/TotalMoney";
import Filter from "./components/Filter";
import Login from "./components/login";
import Header from "./components/Header";
function App() {
  const [listTransactions, setListTransactions] = useState([]);
  const [formData, setFormData] = useState({
    description: "",
    valor: "",
    type: "",
  });

  const [filtered, setFiltered] = useState([]);
  const [login, setLogin] = useState();
  const [money, setMoney] = useState();

  return (
    <>
      {login ? (
        <>
          <Header login={login} setLogin={setLogin} />
          <main className="App">
            <aside className="bounceIn">
              <Form
                formData={formData}
                setFormData={setFormData}
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
                setFiltered={setFiltered}
              />
              <TotalMoney
                listTransactions={listTransactions}
                money={money}
                setMoney={setMoney}
              />
            </aside>
            <section className="container__transaction bounceIn ">
              <Filter
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
                setFiltered={setFiltered}
                filtered={filtered}
              />
              <ul className="bounceIn ">
                <List
                  listTransactions={listTransactions}
                  setListTransactions={setListTransactions}
                  setFiltered={setFiltered}
                  money={money}
                  setMoney={setMoney}
                  filtered={filtered}
                  formData={formData}
                />
              </ul>
            </section>
          </main>
        </>
      ) : (
        <Login setLogin={setLogin} />
      )}
    </>
  );
}

export default App;
