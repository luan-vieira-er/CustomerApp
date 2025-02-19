import * as React from 'react';

import { PasswordTips } from 'components';

const hasNumberRegex = new RegExp('^(?=.*[0-9])');
const hasUpperCaseLetterRegex = new RegExp('^(?=.*[A-Z])');
const hasLowerCaseLetterRegex = new RegExp('^(?=.*[a-z])');
const hasSpecialCharacterRegex = new RegExp('^(?=.*[!@#%*$?])');
const hasOnlyValidCharacters = new RegExp('^[A-Za-z0-9!@#%*$?]*$');

export const lengthRule = (password: string) =>
    password.length !== 0 ? password.length >= 8 && password.length <= 15 : null;

export const specialCharacterRule = (password: string) =>
    password.length !== 0
        ? hasSpecialCharacterRegex.test(password) && hasOnlyValidCharacters.test(password)
        : null;

export const upperCaseRule = (password: string) =>
    password.length !== 0 ? hasUpperCaseLetterRegex.test(password) : null;

export const lowerCaseRule = (password: string) =>
    password.length !== 0 ? hasLowerCaseLetterRegex.test(password) : null;

export const numberRule = (password: string) =>
    password.length !== 0 ? hasNumberRegex.test(password) : null;

export const confirmPasswordRule = (password: string, confirmPassword: string) =>
    password.length !== 0 || confirmPassword.length !== 0 ? password === confirmPassword : null;

export const passwordRules = [
    {
        routine: lengthRule,
        message: 'Conter entre 8 e 15 caracteres',
    },
    {
        routine: specialCharacterRule,
        message: 'Conter ao menos um dos caracteres especiais (!, @, #, %, *, $, ?)',
    },
    {
        routine: upperCaseRule,
        message: 'Conter ao menos uma letra maiúscula',
    },
    {
        routine: lowerCaseRule,
        message: 'Conter ao menos uma letra minúscula',
    },
    {
        routine: numberRule,
        message: 'Conter ao menos um número',
    },
    {
        routine: confirmPasswordRule,
        message: 'As senhas devem coincidir',
    },
];

export const usePasswordTips = (title: string, onSuccess: () => void, onError: () => void) => {
    const [password, setPassword] = React.useState<string>('');
    const [confirmPassword, setConfirmPassword] = React.useState<string>('');
    const [inputErrorProps, setInputErrorProps] = React.useState({});
    const wrappedRules = passwordRules.map(rule => ({
        routine: () => rule.routine(password, confirmPassword),
        message: rule.message,
    }));

    const passwordTipsComponent = <PasswordTips title={title} rules={wrappedRules} />;

    React.useEffect(() => {
        if (!password || !confirmPassword) {
            return;
        }
        const hasError = wrappedRules.some(rule => rule.routine() === false);
        if (hasError) {
            onError();
            setInputErrorProps({
                error: true,
            });
        } else {
            onSuccess();
            setInputErrorProps({
                error: false,
            });
        }
    }, [password, confirmPassword]);

    return {
        password,
        confirmPassword,
        setPassword,
        setConfirmPassword,
        inputErrorProps,
        passwordTipsComponent,
    };
};
