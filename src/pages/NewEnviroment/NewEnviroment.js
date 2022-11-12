import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from '../../components/Form/Form';
import { Input } from '../../components/Input/Input';
import { PageLayout } from '../../components/PageLayout/PageLayout';

export const NewEnviroment = () => {
  let navigate = useNavigate();
  return (
    <PageLayout title={'REGISTRO DE QUALIDADE DO AMBIENTE'} back={-1}>
      <Form onSave={() => navigate('/enviroments')}>
        <Input type={'date'} name={'data'} placeholder={'Data'} />
        <Input
          type={'number'}
          name={'temperatura'}
          placeholder={'Temperatura (°C)'}
        />
        <Input
          type={'number'}
          name={'qualidade'}
          placeholder={'Qualidade do ambiente'}
          max={10}
          min={0}
        />
        <Input type={'text'} name={'estado'} placeholder={'Estado'} />
        <Input type={'text'} name={'cidade'} placeholder={'Cidade'} />
        <Input type={'text'} name={'distrito'} placeholder={'Distrito'} />
      </Form>
    </PageLayout>
  );
};
