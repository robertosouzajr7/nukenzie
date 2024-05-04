import "../../style/reset.css";
import "../../style/global.css";
import "../../style/animacoes.css";
import "./index.css";
const Form = ({
  formData,
  setFormData,
  setListTransactions,
  listTransactions,
  setFiltered,
}) => {
  function handleForm(event) {
    event.preventDefault();
    const newFormData = {
      description: formData.description,
      valor: formData.valor,
      type: formData.type,
    };
    setListTransactions([...listTransactions, newFormData]);
    setFiltered([...listTransactions, newFormData]);
  }

  return (
    <form onSubmit={handleForm}>
      <label>
        Descrição
        <input
          type="text"
          value={formData.description}
          placeholder="Digite aqui sua descrição"
          onChange={(event) =>
            setFormData({ ...formData, description: event.target.value })
          }
        />
        <p>Ex: Conta de Luz</p>
      </label>
      <div className="container__input">
        <label>
          Valor
          <input
            type="number"
            value={formData.valor}
            placeholder="R$ 0,00"
            onChange={(event) =>
              setFormData({ ...formData, valor: Number(event.target.value) })
            }
          />
        </label>
        <label>
          Tipo de Conta
          <select
            value={formData.type}
            onChange={(event) =>
              setFormData({ ...formData, type: event.target.value })
            }
          >
            <option>Selecione</option>
            <option value="Entrada">entradas</option>
            <option value="Saida">Saídas</option>
          </select>
        </label>
      </div>
      <div>
        <button type="submit">Registrar Valor </button>
      </div>
    </form>
  );
};

export default Form;
