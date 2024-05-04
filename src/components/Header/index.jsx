import "../../style/reset.css";
import "../../style/global.css";
import "../../style/animacoes.css";

import "./index.css";
import logo from "../Header/Nu Kenzie.png";
import "./index.css";

function Header({ setLogin }) {
  function logout() {
    return setLogin();
  }
  return (
    <>
      <header className="fadeHeader">
        <img src={logo} alt="logo" />
        <button onClick={logout} className="Disable">
          Início
        </button>
      </header>
    </>
  );
}

export default Header;
