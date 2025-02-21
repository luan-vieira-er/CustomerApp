
import { media } from 'styled-bootstrap-grid';
import styled from 'styled-components';
import { common } from '../../../styles/constants';
import { CardProps } from '@mui/material';

export const PageWrapper = styled.div`
  max-width: 1200px; /* Limita a largura total */
  margin: 0 auto; /* Centraliza a página */
  padding: 0 80px; /* Espaçamento lateral */
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Select = styled.select`
  padding: 8px;
  font-size: 16px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); /* Cards menores */
  gap: 16px;
  justify-content: center;
  padding: 20px 0; /* Espaçamento acima e abaixo */
`;

export const CreateButton = styled.button`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  background-color: #ffffff;
  color: ${common.colors.orange};
  border: 1px solid ${common.colors.orange};
  border-radius: 4px;
  margin-bottom: 6px;
  cursor: pointer;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  gap: 8px;
  padding-bottom: 40px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;
`;

export const ButtonGroupRight = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 60px;
`;

export const Button = styled.button`
  padding: 8px;
  cursor: pointer;
  background: none;
  border: none;
  font-size: 1.2em;
`;

export const DeleteButton = styled.button`
  padding: 8px;
  cursor: pointer;
  background: none;
  border: none;
  font-size: 1.2em;
  color: red;
`;

export const PageButton = styled.button<{ active?: boolean }>`
  padding: 8px 12px;
  border: none;
  background: ${({ active }) => (active ? common.colors.orange : 'none')};
  color: ${({ active }) => (active ? '#fff' : common.colors.orange)};
  cursor: pointer;
  font-size: 1em;
  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: #fff;
  padding: 32px;
  border-radius: 4px;
  width: 400px;
  max-width: 100%;
  position: relative;
`;

export const ModalTitle = styled.h2`
  margin-bottom: 24px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  font-size: 1.2em;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  background-color: ${common.colors.orange};
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 6px;
`;

export const ModalText = styled.div`
  font-size: 16px;
`;

export const Card = styled.div<CardProps>`
  background: #ffffff;
  border: 0px solid #ccc;
  padding: 16px;
  text-align: center;
`;

export const CreateButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;