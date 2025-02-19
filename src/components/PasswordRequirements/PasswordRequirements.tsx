import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { MAX_PASSWORD_LENGTH, MIN_PASSWORD_LENGTH } from 'utils/constants';
import * as S from './styles';
import { PasswordTypes } from './types';

export const PasswordRequirements = ({
  password = '',
  confirmPassword = '',
}: PasswordTypes) => {
  const [hasCharacterAmount, setHasCharacterAmount] = React.useState<
    boolean | undefined
  >(undefined);
  const [hasSpecialCharacter, setHasSpecialCharacter] = React.useState<
    boolean | undefined
  >(undefined);
  const [hasUppercaseLetter, setHasUppercaseLetter] = React.useState<
    boolean | undefined
  >(undefined);
  const [hasNumber, setHasNumber] = React.useState<boolean | undefined>(
    undefined,
  );
  const [equalPasswords, setEqualPasswords] = React.useState<
    boolean | undefined
  >(undefined);

  const neutralIcon = (
    <S.StyledIcon
      className='fa-lg iconColor'
      color='#999999'
      icon={faCaretRight}
    />
  );

  const checkIcon = (
    <S.StyledIcon className='fa-lg' color='#4ADE80' icon={faCheck} />
  );

  const xMarkIcon = (
    <S.StyledIcon className='fa-lg' color='#FB7185' icon={faXmark} />
  );

  function characterLength(value: string) {
    const validation =
      value.length >= MIN_PASSWORD_LENGTH &&
      value.length <= MAX_PASSWORD_LENGTH;

    validation ? setHasCharacterAmount(true) : setHasCharacterAmount(false);
    return validation ? true : false;
  }

  function checkSpecialCharacters(value: string) {
    const regex = /[!@#%*$?]/;
    const match = regex.test(value);

    match ? setHasSpecialCharacter(true) : setHasSpecialCharacter(false);
    return match ? true : false;
  }

  function checkUppercaseLetter(value: string) {
    const regex = /[A-Z]/;
    const match = regex.test(value);

    match ? setHasUppercaseLetter(true) : setHasUppercaseLetter(false);
    return match ? true : false;
  }

  function checkNumber(value: string) {
    const regex = /\d/;
    const match = regex.test(value);

    match ? setHasNumber(true) : setHasNumber(false);
    return match ? true : false;
  }

  function checkEqualPasswords(
    passwordValue: string,
    confirmPasswordValue: string,
  ) {
    passwordValue === confirmPasswordValue
      ? setEqualPasswords(true)
      : setEqualPasswords(false);

    if (
      (passwordValue === '' && confirmPasswordValue !== '') ||
      (passwordValue === '' && confirmPasswordValue === '')
    )
      setEqualPasswords(undefined);

    return passwordValue === confirmPasswordValue ? true : false;
  }

  function getIcon(value: boolean | undefined) {
    return value === undefined ? neutralIcon : value ? checkIcon : xMarkIcon;
  }

  const characterAmountIcon = getIcon(hasCharacterAmount);
  const specialCharacterIcon = getIcon(hasSpecialCharacter);
  const uppercaseLetterIcon = getIcon(hasUppercaseLetter);
  const numberIcon = getIcon(hasNumber);
  const equalPasswordsIcon = getIcon(equalPasswords);

  React.useEffect(() => {
    function checkPasswordRequirements(
      password: string,
      confirmPassword: string,
    ) {
      characterLength(password);
      checkSpecialCharacters(password);
      checkUppercaseLetter(password);
      checkNumber(password);
      checkEqualPasswords(password, confirmPassword);
      if (password === '') {
        setHasCharacterAmount(undefined);
        setHasSpecialCharacter(undefined);
        setHasUppercaseLetter(undefined);
        setHasNumber(undefined);
        setEqualPasswords(undefined);
      }
    }

    checkPasswordRequirements(password, confirmPassword);
  }, [password, confirmPassword]);

  return (
    <S.PasswordRequirementsContainer>
      <S.Title>Requisitos</S.Title>
      <S.Content>
        <S.RequirementWrapper>
          {characterAmountIcon}
          <S.Requirement>
            Conter entre {MIN_PASSWORD_LENGTH} e {MAX_PASSWORD_LENGTH}{' '}
            caracteres
          </S.Requirement>
        </S.RequirementWrapper>

        <S.RequirementWrapper>
          {specialCharacterIcon}
          <S.Requirement>
            Conter ao menos um dos caracteres especiais (!, @, #, %, *, $, ?)
          </S.Requirement>
        </S.RequirementWrapper>

        <S.RequirementWrapper>
          {uppercaseLetterIcon}
          <S.Requirement>Conter ao menos uma letra maiúscula</S.Requirement>
        </S.RequirementWrapper>

        <S.RequirementWrapper>
          {numberIcon}
          <S.Requirement>Conter ao menos um número</S.Requirement>
        </S.RequirementWrapper>

        <S.RequirementWrapper>
          {equalPasswordsIcon}
          <S.Requirement>As senhas devem ser iguais</S.Requirement>
        </S.RequirementWrapper>
      </S.Content>
    </S.PasswordRequirementsContainer>
  );
};

export default PasswordRequirements;
