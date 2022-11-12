import React, { useContext, useEffect, useState } from 'react';
import { PageLayout } from '../../components/PageLayout/PageLayout';
import { useNavigate } from 'react-router-dom';
import { Table } from '../../components/Table/Table';
import { GlobalContext } from '../../GlobalContext';

export const Vehicles = () => {
  const { vehicles, getVehicles } = useContext(GlobalContext);
  const cabecalhos = ['placa', 'modelo', 'marca', 'quilometragem'];
  let navigate = useNavigate();

  async function deleteVehicle(id) {
    await fetch(`http://localhost:8080/veiculo/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    getVehicles();
  }

  useEffect(() => {
    getVehicles();
  });

  return (
    <PageLayout
      title={'Veículos Cadastrados'}
      headerButton={'Novo Veículo'}
      headerButtonAction={() => navigate('/new-vehicle')}
      headerColor={'#82D48F'}
      back={'/'}
    >
      {vehicles.length > 0 ? (
        <Table
          cabecalhos={cabecalhos}
          data={vehicles}
          onDelete={(id) => deleteVehicle(id)}
        />
      ) : (
        'Nenhum veículo cadastrado'
      )}
    </PageLayout>
  );
};
