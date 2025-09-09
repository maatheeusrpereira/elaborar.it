import React, { useState } from 'react';
import './index.css';

interface Step {
  oQueFazer: string;
  comoFazer: string;
  imagens: File[];
}

function App() {
  const [nomeInstrucao, setNomeInstrucao] = useState('');
  const [setor, setSetor] = useState('');
  const [quantidadeColaboradores, setQuantidadeColaboradores] = useState('');
  const [epis, setEpis] = useState('');
  const [elaborador, setElaborador] = useState('');
  const [steps, setSteps] = useState<Step[]>([{ oQueFazer: '', comoFazer: '', imagens: [] }]);

  const addStep = () => {
    setSteps([...steps, { oQueFazer: '', comoFazer: '', imagens: [] }]);
  };

  const updateStep = (index: number, field: keyof Step, value: any) => {
    const updated = [...steps];
    updated[index][field] = value;
    setSteps(updated);
  };

  const gerarJSON = () => {
    const data = {
      nomeInstrucao,
      setor,
      quantidadeColaboradores,
      epis,
      elaborador,
      steps
    };
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div className="container">
      <div className="header">
        <div className="logo-box">
          <img className="logo" src="logo.png" alt="Logo" />
          <h1>Instrução de Trabalho</h1>
        </div>

        <div className="form-block header-fields">
          <label>
            Nome da instrução de trabalho
            <input value={nomeInstrucao} onChange={e => setNomeInstrucao(e.target.value)} placeholder="Digite o nome..." />
          </label>
          <label>
            Setor
            <input value={setor} onChange={e => setSetor(e.target.value)} placeholder="Digite o setor..." />
          </label>
          <label>
            Quantidade de colaboradores
            <input value={quantidadeColaboradores} onChange={e => setQuantidadeColaboradores(e.target.value)} placeholder="Número de colaboradores..." />
          </label>
          <label>
            EPI's obrigatórios
            <input value={epis} onChange={e => setEpis(e.target.value)} placeholder="Liste os EPIs..." />
          </label>
          <label>
            Elaborador
            <input value={elaborador} onChange={e => setElaborador(e.target.value)} placeholder="Nome do responsável..." />
          </label>
        </div>
      </div>

      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={index} className="step-block">
            <label>
              O que fazer
              <textarea value={step.oQueFazer} onChange={e => updateStep(index, 'oQueFazer', e.target.value)} placeholder="Descreva..." />
            </label>
            <label>
              Como fazer
              <textarea value={step.comoFazer} onChange={e => updateStep(index, 'comoFazer', e.target.value)} placeholder="Descreva..." />
            </label>
            <label>
              Imagens
              <input type="file" multiple onChange={e => updateStep(index, 'imagens', e.target.files ? Array.from(e.target.files) : [])} />
            </label>
          </div>
        ))}
      </div>

      <div className="actions">
        <button className="btn-green" onClick={addStep}>Adicionar Etapa</button>
        <button className="btn-dark" onClick={gerarJSON}>Gerar JSON</button>
      </div>
    </div>
  );
}

export default App;
