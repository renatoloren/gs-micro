import React from 'react';
import { Form } from '../../components/Form/Form';
import { Input } from '../../components/Input/Input';
import { PageLayout } from '../../components/PageLayout/PageLayout';
import { useNavigate } from 'react-router-dom';
import UseInput from '../../hooks/UseInput';

export const NewVehicle = () => {
  const placa = UseInput();
  const marca = UseInput();
  const modelo = UseInput();
  const quilometragem = UseInput();
  let navigate = useNavigate();

  async function saveVehicle(event) {
    event.preventDefault();
    await fetch('http://localhost:8080/veiculo', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        marca: marca.value,
        modelo: modelo.value,
        placa: placa.value,
        quilometragem: quilometragem.value,
      }),
    });
    navigate('/vehicles');
  }

  return (
    <PageLayout title={'Novo Veículo'} back={-1}>
      <Form onSave={(event) => saveVehicle(event)}>
        <Input
          type={'text'}
          name={'placa'}
          placeholder={'Placa'}
          onChange={placa.onChange}
          {...placa}
        />
        <Input
          type={'text'}
          name={'marca'}
          placeholder={'Marca'}
          onChange={marca.onChange}
          {...marca}
        />
        <Input
          type={'text'}
          name={'modelo'}
          placeholder={'Modelo'}
          onChange={modelo.onChange}
          {...modelo}
        />
        <Input
          type={'number'}
          name={'quilometragem'}
          placeholder={'Quilometragem Percorrida (KM)'}
          onChange={quilometragem.onChange}
          {...quilometragem}
        />
      </Form>
    </PageLayout>
  );
};
