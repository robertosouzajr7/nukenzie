import "../../style/reset.css";
import "../../style/global.css";
import "./index.css";
import logo from "./logo-nukenzie.png";
import imgIllustration from "./illustration.png";
function Login({ setLogin }) {
  return (
    <main className="container__Login ">
      <section className="section__container--login bounceIn">
        <div>
          <img src={logo} alt="logo nukenzie" />
          <h1 className="Title1">Centralize o Controle das suas finanças...</h1>
          <p>de forma rápida e segura</p>
          <button className="button bounceButtons " onClick={setLogin}>
            iniciar
          </button>
        </div>
      </section>
      <section>
        <img className="bounceIn " src={imgIllustration} alt="illustracao" />
      </section>
    </main>
  );
}

export default Login;
