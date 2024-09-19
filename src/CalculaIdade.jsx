import { useState } from 'react';

const CalculaIdade = () => {
  const [anoNascimento, setAnoNascimento] = useState('');
  const [mesNascimento, setMesNascimento] = useState('');
  const [resultado, setResultado] = useState('');

  const anoAtual = 2024;
  const mesAtual = 9;

  const calcularIdade = () => {
    if (anoNascimento && mesNascimento) {
      let idadeCalculada = anoAtual - anoNascimento;

      if (mesAtual > mesNascimento) {
        idadeCalculada -= 1;
      }

      if (mesAtual === mesNascimento) {
        setResultado(`Você irá completar ${idadeCalculada} anos este mês!`);
      } else {
        setResultado(`Sua idade é: ${idadeCalculada} anos`);
      }
    }
  };

  return (
    <div>
      <h1>Calculadora de Idade</h1>
      <input
        type="number"
        placeholder="Ano de Nascimento"
        value={anoNascimento}
        onChange={(e) => setAnoNascimento(e.target.value)}
      />
      <select
        value={mesNascimento}
        onChange={(e) => setMesNascimento(Number(e.target.value))}
      >
        <option value="">Selecione o mês</option>
        <option value="1">01 Janeiro</option>
        <option value="2">02 Fevereiro</option>
        <option value="3">03 Março</option>
        <option value="4">04 Abril</option>
        <option value="5">05 Maio</option>
        <option value="6">06 Junho</option>
        <option value="7">07 Julho</option>
        <option value="8">08 Agosto</option>
        <option value="9">09 Setembro</option>
        <option value="10">10 Outubro</option>
        <option value="11">11 Novembro</option>
        <option value="12">12 Dezembro</option>
      </select>
      <button onClick={calcularIdade}>Descobrir Idade</button>
      <h2>{resultado}</h2>
    </div>
  );
};

export default CalculaIdade;
