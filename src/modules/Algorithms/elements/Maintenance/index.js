import React, { useState } from 'react';

import * as S from './styles';
import { Controller, useForm } from 'react-hook-form';

export const Maintenance = () => {
  const [idClient, setIdClient] = useState();
  const { handleSubmit, control } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://192.168.0.17:1880/productionParameter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        alert('Dados enviados com sucesso!')
      } else {
        alert('Erro ao enviar dados.')
      }
    } catch (error) {
      console.error('Erro ao enviar a solicitação:', error);
    }
  }

  return (
    <S.Container>
      <S.Content>
        <S.FormTemp>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='sectionInput'>
              <label>Sensor de pressão</label>
              <Controller
                name="pressure"
                control={control}
                defaultValue=""
                render={({ field }) => <input {...field} type="number" placeholde="Campo de Texto" />}
              />
            </div>

            <div className='sectionInput'>
              <label>Corrente</label>
              <Controller
                name="current"
                control={control}
                defaultValue=""
                render={({ field }) => <input {...field} type="number" placeholde="Campo de Texto" />}
              />
            </div>

            <div className='sectionInput'>
              <label>Temperatura</label>
              <Controller
                name="temperature"
                control={control}
                defaultValue=""
                render={({ field }) => <input {...field} type="number" placeholde="Campo de Texto" />}
              />
            </div>

            <button type="submit">Enviar</button>

          </form>
        </S.FormTemp>
      </S.Content>
    </S.Container>
  );
};
