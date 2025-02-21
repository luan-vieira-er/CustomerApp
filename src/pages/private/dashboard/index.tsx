import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { DashboardProvider, useDashboard } from './context';
import { FaPlus, FaPencilAlt, FaTrash, FaCheck } from 'react-icons/fa';
import { deleteCustomer, getCustomersData, insertCustomer, updateCustomer, selectCustomer, ISelectCustomer } from './services';
import { IGetCustomersData, IGetCustomersRequestData, IInsertCustomersRequestForm, IUpdateCustomerRequestForm, IUpdateCustomerRequestFormId } from './types';
import { common } from '../../../styles/constants';
import { renderErrors } from '../../../components';
import TextField from '@mui/material/TextField';
import { formatCurrency } from './utils/formatCurrency';
import { useForm } from 'react-hook-form';

import {
  CreateButton,
  HeaderContainer,
  Select,
  Grid,
  PaginationContainer,
  Button,
  DeleteButton,
  ButtonGroup,
  Card,
  CloseButton,
  ModalContent,
  ModalOverlay,
  ModalTitle,
  PageButton,
  SubmitButton,
  ModalText,
  PageWrapper,
} from './styles'
import { InputAdornment, OutlinedInput } from '@mui/material';

interface ICustomerForm {
  id: string;
  fullname: string;
  salary: number;
  company_value: number;
}

interface ISelectCustomerForm {
  id: string;
  selected: boolean;
}

export const PageComponent: React.FC = () => {
  const [itemsPerPage, setItemsPerPage] = useState('16');
  const [skip, setSkip] = useState(0);
  const [cards, setCards] = useState<IGetCustomersData[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [selectedCustomer, setSelectedCustomer] = useState<ICustomerForm>({
    id: '',
    fullname: '',
    salary: 0,
    company_value: 0
  });

  const { loading, listErrors, setListErrors, setLoading } = useDashboard();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ICustomerForm>({
    mode: 'onChange',
    defaultValues: {
      id: '',
      fullname: '',
      salary: 0,
      company_value: 0,
    }
  });

  // Quando um cliente for selecionado para edição, reinicia os valores do formulário
  useEffect(() => {
    if (selectedCustomer.id) {
      reset(selectedCustomer);
    } else {
      reset({
        id: '',
        fullname: '',
        salary: 0,
        company_value: 0,
      });
    }
  }, [selectedCustomer, reset]);

  // Estados para controle dos modais
  const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(e.target.value);
    setSkip(0); // Reinicia o skip ao alterar itens por página
  };

  const handleCustomersChange = () => {
    const getCustomersRequestData: IGetCustomersRequestData = {
      take: Number(itemsPerPage),
      skip: skip,
      selected: undefined
    };

    getCustomersData({
      getCustomersData: getCustomersRequestData,
      setLoading: setLoading,
      setListErrors: setListErrors
    }).then((response) => {
      setCards(response?.customers || []);
      setTotalCount(response?.count || 0);
    });
  }

  useEffect(() => {
    handleCustomersChange();
  }, [itemsPerPage, skip]);

  const currentPage = Math.floor(skip / Number(itemsPerPage)) + 1;
  const totalPages = Math.ceil(totalCount / Number(itemsPerPage));

  const getPagination = (current: number, total: number): (number | string)[] => {
    const pages: (number | string)[] = [];
    if (total <= 7) {
      for (let i = 1; i <= total; i++) {
        pages.push(i);
      }
    } else {
      if (current <= 4) {
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(total);
      } else if (current > total - 4) {
        pages.push(1);
        pages.push("...");
        for (let i = total - 4; i <= total; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push("...");
        pages.push(current - 1);
        pages.push(current);
        pages.push(current + 1);
        pages.push("...");
        pages.push(total);
      }
    }
    return pages;
  };

  const paginationItems = getPagination(currentPage, totalPages);

  // Função para criar um novo cliente com validação
  const handleCreateClient = (values: IInsertCustomersRequestForm) => {
    console.log("🚀 ~ handleCreateClient ~ values:", values)
    insertCustomer({
      insertCustomersRequestForm: {
        fullname: values.fullname,
        salary: Number(values.salary),
        company_value: Number(values.company_value),
      },
      setLoading: setLoading,
      setListErrors: setListErrors
    }).then((response) => {
      if (response?.customer) {
        handleCustomersChange();
      }
      setIsModalCreateOpen(false);
      reset({ id: '', fullname: '', salary: 0, company_value: 0 });
    });
  };

  const handleUpdateClient = (values: IUpdateCustomerRequestFormId) => {
    updateCustomer({
      id: values.id,
      updateCustomerRequestForm: {
        fullname: values.fullname,
        salary: Number(values.salary),
        company_value: Number(values.company_value),
      },
      setLoading: setLoading,
      setListErrors: setListErrors
    }).then((response) => {
      if (response?.customer) {
        handleCustomersChange();
      }
      setIsModalUpdateOpen(false);
      reset({ id: '', fullname: '', salary: 0, company_value: 0 });
    });
  };
  
  const handleUpdateModalOpen = (id: string) => () => {
    const customer = cards.find((card) => card.id === id);
    if (customer) {
      setSelectedCustomer({
        id: customer.id,
        fullname: customer.fullname,
        salary: customer.salary,
        company_value: customer.company_value,
      });
    }
    setIsModalUpdateOpen(true);
  }

  const handleDeleteModalOpen = (id: string) => () => {
    const customer = cards.find((card) => card.id === id);
    if (customer) {
      // Reinicia o formulário com os dados do cliente a ser excluído
      setSelectedCustomer({
        id: customer.id,
        fullname: customer.fullname,
        salary: customer.salary,
        company_value: customer.company_value,
      });
    }
    setIsModalDeleteOpen(true);
  }

  const handleDeleteClient = (values: IUpdateCustomerRequestFormId) => {
    deleteCustomer({
      id: values.id,
      setLoading: setLoading,
      setListErrors: setListErrors
    }).then((response) => {
      if (response?.customer) {
        handleCustomersChange();
      }
      setIsModalDeleteOpen(false);
      reset({ id: '', fullname: '', salary: 0, company_value: 0 });
    });
  };

  const handleOpenCreateModal = () => {
    reset({ id: '', fullname: '', salary: 0, company_value: 0 });
    setSelectedCustomer({
      id: '',
      fullname: '',
      salary: 0,
      company_value: 0,
    });
    setIsModalCreateOpen(true);
  };

  const handleSelectCustomer = (values: ISelectCustomerForm) => () => {
    selectCustomer({
      id: values.id,
      selected: values.selected,
      setLoading: setLoading,
      setListErrors: setListErrors
    }).then((response) => {
      if (response?.customer) {
        handleCustomersChange();
      }
      reset({ id: '', fullname: '', salary: 0, company_value: 0 });
    });
  }

  return (
    <PageWrapper>
      <HeaderContainer>
        <div style={{ fontSize: 'large' }}>
          <strong>{totalCount}</strong> clientes encontrados:
        </div>
        <div style={{ fontSize: 'large' }}>
          Clientes por página:{' '}
          <Select value={itemsPerPage} onChange={handleSelectChange}>
            <option value="16">16</option>
            <option value="32">32</option>
            <option value="64">64</option>
            <option value="128">128</option>
          </Select>
        </div>
      </HeaderContainer>
      <Grid>
        {cards.map((card) => (
          <Card key={card.id}>
            <div>
              <strong>{card.fullname}</strong>
            </div>
            <div>
              Salário: {formatCurrency(card.salary)}
            </div>
            <div style={{ marginBottom: '12px' }}>
              Empresa: {formatCurrency(card.company_value)}
            </div>
            <ButtonGroup>
              <Button title="Selecionar" onClick={handleSelectCustomer({id: card.id, selected: !card.selected})}>
                {card.selected ? <FaCheck style={{ color: 'green' }} /> : <FaPlus/>}
              </Button>
              <Button title="Editar" onClick={handleUpdateModalOpen(card.id)}>
                <FaPencilAlt />
              </Button>
              <DeleteButton title="Excluir" onClick={handleDeleteModalOpen(card.id)}>
                <FaTrash />
              </DeleteButton>
            </ButtonGroup>
          </Card>
        ))}
      </Grid>
      <CreateButton onClick={handleOpenCreateModal}>
        Criar cliente
      </CreateButton>
      <PaginationContainer>
        {paginationItems.map((item, index) =>
          typeof item === 'number' ? (
            <PageButton
              key={index}
              active={item === currentPage}
              onClick={() => setSkip((item - 1) * Number(itemsPerPage))}
            >
              {item}
            </PageButton>
          ) : (
            <span key={index}>{item}</span>
          )
        )}
      </PaginationContainer>

      {/* Modal de Criação */}
      {isModalCreateOpen && (
        <ModalOverlay>
          <ModalContent>
            <CloseButton onClick={() => setIsModalCreateOpen(false)}>X</CloseButton>
            <ModalTitle>Criar cliente:</ModalTitle>
            <form onSubmit={handleSubmit(handleCreateClient)}>
              <TextField
                fullWidth
                defaultValue=""
                type="text"
                placeholder="Digite seu nome:"
                inputProps={{ maxLength: 200 }}
                size="small"
                margin="dense"
                {...register('fullname', {
                  required: {
                    value: true,
                    message: 'O nome é um campo obrigatório',
                  },
                  onChange: () => {
                    setListErrors(null);
                  },
                })}
                error={!!errors.fullname}
                helperText={errors.fullname?.message}
              />
              <TextField
                fullWidth
                defaultValue={0}
                size="small"
                margin="dense"
                placeholder="Digite o salário:"
                {...register('salary', {
                  required: {
                    value: true,
                    message: 'O salário é um campo obrigatório',
                  },
                  onChange: () => {
                    setListErrors(null);
                  },
                })}
                error={!!errors.salary}
                helperText={errors.salary?.message}
              />
              <TextField
                fullWidth
                defaultValue={0}
                size="small"
                margin="dense"
                placeholder="Valor da Empresa:"
                {...register('company_value', {
                  required: {
                    value: true,
                    message: 'O valor da empresa é um campo obrigatório',
                  },
                  onChange: () => {
                    setListErrors(null);
                  },
                })}
                error={!!errors.company_value}
                helperText={errors.company_value?.message}
              />

              {renderErrors(listErrors)}
              <SubmitButton type="submit">
                Criar cliente
              </SubmitButton>
            </form>
          </ModalContent>
        </ModalOverlay>
      )}

      {/* Modal de Edição */}
      {isModalUpdateOpen && (
        <ModalOverlay>
          <ModalContent>
            <CloseButton onClick={() => setIsModalUpdateOpen(false)}>X</CloseButton>
            <ModalTitle>Editar cliente:</ModalTitle>
            <form onSubmit={handleSubmit(handleUpdateClient)}>
              {/* Campo oculto para o id */}
              <TextField
                fullWidth
                style={{ display: 'none' }}
                defaultValue={selectedCustomer.id}
                type="text"
                {...register('id')}
              />

              <TextField
                fullWidth
                defaultValue={selectedCustomer.fullname}
                type="text"
                placeholder="Digite seu nome:"
                inputProps={{ maxLength: 200 }}
                size="small"
                margin="dense"
                {...register('fullname', {
                  required: {
                    value: true,
                    message: 'O nome é um campo obrigatório',
                  },
                  onChange: () => {
                    setListErrors(null);
                  },
                })}
                error={!!errors.fullname}
                helperText={errors.fullname?.message}
              />

              <TextField
                fullWidth
                defaultValue={selectedCustomer.salary}
                size="small"
                margin="dense"
                placeholder="Digite o salário:"
                {...register('salary', {
                  required: {
                    value: true,
                    message: 'O salário é um campo obrigatório',
                  },
                  onChange: () => {
                    setListErrors(null);
                  },
                })}
                error={!!errors.salary}
                helperText={errors.salary?.message}
              />

              <TextField
                fullWidth
                defaultValue={selectedCustomer.company_value}
                size="small"
                margin="dense"
                placeholder="Valor da Empresa:"
                {...register('company_value', {
                  required: {
                    value: true,
                    message: 'O valor da empresa é um campo obrigatório',
                  },
                  onChange: () => {
                    setListErrors(null);
                  },
                })}
                error={!!errors.company_value}
                helperText={errors.company_value?.message}
              />

              {renderErrors(listErrors)}
              <SubmitButton type="submit">
                Editar cliente
              </SubmitButton>
            </form>
          </ModalContent>
        </ModalOverlay>
      )}

      {/* Modal de Exclusão */}
      {isModalDeleteOpen && (
        <ModalOverlay>
          <ModalContent>
            <CloseButton onClick={() => setIsModalDeleteOpen(false)}>X</CloseButton>
            <ModalTitle>Excluir cliente:</ModalTitle>
            <form onSubmit={handleSubmit(handleDeleteClient)}>
              {/* Campo oculto para o id */}
              <TextField
                fullWidth
                style={{ display: 'none' }}
                defaultValue=""
                type="text"
                {...register('id')}
              />

              <ModalText>
                Você está prestes a excluir o cliente: <strong>{selectedCustomer.fullname}</strong>
              </ModalText>
              <SubmitButton type="submit">
                Excluir cliente
              </SubmitButton>
            </form>
          </ModalContent>
        </ModalOverlay>
      )}
    </PageWrapper>
  );
};

export const Dashboard: React.FC = () => {
  return (
    <DashboardProvider>
      <PageComponent />
    </DashboardProvider>
  );
};
