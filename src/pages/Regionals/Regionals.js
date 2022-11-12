import React, { useEffect, useState } from 'react';
import { PageLayout } from '../../components/PageLayout/PageLayout';
import { Table } from '../../components/Table/Table';
import { useNavigate } from 'react-router-dom';

export const Regionals = () => {
  const [regionals, setRegionals] = useState([]);
  const cabecalhos = ['data', 'placa', 'modelo', 'marca'];
  let navigate = useNavigate();

  async function getRegionals() {
    try {
      const response = await fetch('http://localhost:8080/regional');
      const json = await response.json();
      setRegionals(json);
    } catch (e) {
      console.log(e);
    }
  }

  async function deleteRegional(id) {
    await fetch(`http://localhost:8080/regional/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    getRegionals();
  }

  useEffect(() => {
    getRegionals();
  });

  return (
    <PageLayout
      title={'Vendas Regionais'}
      headerButton={'Registrar Nova Venda'}
      headerButtonAction={() => navigate('/new-regional')}
      headerColor={'#EF9A37'}
      back={'/'}
    >
      {regionals.length > 0 ? (
        <Table
          cabecalhos={cabecalhos}
          data={regionals}
          onDelete={(id) => deleteRegional(id)}
        />
      ) : (
        'Nenhuma venda registrada'
      )}
    </PageLayout>
  );
};
