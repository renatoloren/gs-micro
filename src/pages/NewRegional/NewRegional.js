import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from '../../components/Form/Form';
import { Input } from '../../components/Input/Input';
import { PageLayout } from '../../components/PageLayout/PageLayout';
import { GlobalContext } from '../../GlobalContext';
import UseInput from '../../hooks/UseInput';

export const NewRegional = () => {
  let navigate = useNavigate();
  const { vehicles, getVehicles } = useContext(GlobalContext);
  const placa = UseInput();
  async function saveRegional(event) {
    event.preventDefault();
    await fetch('http://localhost:8080/veiculo', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        marca: 'placa.value',
        modelo: 'modelo.value',
        placa: 'placa.value',
        quilometragem: 'quilometragem.value',
      }),
    });
    navigate('/vehicles');
  }

  return (
    <PageLayout title={'Nova Venda'} back={-1}>
      <Form onSave={(event) => saveRegional(event)}>
        <Input type={'date'} name={'data'} placeholder={'Data'} />
        <Input type={'text'} name={'veiculo'} placeholder={'Veiculo'} />
        <Input type={'text'} name={'estado'} placeholder={'Estado'} />
        <Input type={'text'} name={'cidade'} placeholder={'Cidade'} />
        <Input type={'text'} name={'distrito'} placeholder={'Distrito'} />
      </Form>
    </PageLayout>
  );
};
