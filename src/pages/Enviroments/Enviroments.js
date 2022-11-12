import React from 'react';
import { PageLayout } from '../../components/PageLayout/PageLayout';
import { Table } from '../../components/Table/Table';
import { useNavigate } from 'react-router-dom';

export const Enviroments = () => {
  const enviroments = [];
  // const cabecalhos = ['data', 'placa', 'modelo', 'marca'];
  let navigate = useNavigate();
  return (
    <PageLayout
      title={'Qualidade do Ambiente'}
      headerButton={'Registrar atualização'}
      headerButtonAction={() => navigate('/new-enviroment')}
      headerColor={'#E350D5'}
      back={'/'}
    >
      {enviroments.length > 0
        ? // <Table cabecalhos={cabecalhos} data={regionals} />
          'dados'
        : 'Não há registro de qualidade do ambiente para essa localização'}
    </PageLayout>
  );
};
