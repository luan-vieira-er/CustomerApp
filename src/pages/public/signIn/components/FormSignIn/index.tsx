import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiInfo } from 'react-icons/fi';
import {
  faEye,
  faEyeSlash,
  faUser,
  faLock,
} from '@fortawesome/free-solid-svg-icons';

import { Button, Icon, renderErrors } from 'components';

import { useSignIn } from '../../context';
import { IFormSign, ILoginForm } from '../../types';
import { intialValues } from '../../utils/intialValues';

import * as S from './styles';
import { ErrorDisplay } from 'components/MessageDisplay/styles';
import { theme } from 'styles/constants';
import logo from 'assets/react.svg';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import { SUBMIT_BUTTON_WIDTH } from 'utils/constants';

export const FormSignIn: React.FC<IFormSign> = ({ onSubmit }) => {
  const { loading, listErrors, setListErrors } = useSignIn();
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<ILoginForm>({
    mode: 'onChange',
  });

  const [hidden, setHidden] = useState(true);

  return (
    <S.StyledForm onSubmit={handleSubmit(onSubmit)}>
      <S.Container>
        <div>
          <div className='centerText'>
            Olá, seja bem-vindo!
          </div>
          <div className='input'>
            <TextField
              fullWidth
              defaultValue={intialValues.name}
              type='text'
              placeholder='Digite seu nome:'
              inputProps={{ maxLength: 200 }}
              {...register('name', {
                validate: (value) => {
                  if (!value) {
                    return false;
                  }
                  return true;
                },
                onChange: () => {
                  setListErrors(null);
                },
                required: {
                  value: true,
                  message: 'O nome é um campo obrigatório',
                },
              })}
            />
            {errors.name && (
              <ErrorDisplay>
                <FiInfo />
                <span style={{ marginLeft: 5 }}>{errors.name.message}</span>
              </ErrorDisplay>
            )}
          </div>
          {renderErrors(listErrors)}
          
          <div className='containerButton'>
            <Button
              className='button'
              disabled={loading}
              type='submit'
              text='Entrar'
              loading={loading}
            />
          </div>
        </div>
      </S.Container>
    </S.StyledForm>
  );
};
