import { TypeProps } from './types';

export const getTypeFeedback = (type: string) => {
    const types: Record<string, TypeProps> = {
        notFound: {
            title: 'Não encontrado',
            subtitle: 'Pesquisa não encontrada.',
            infoText: 'Revise sua pesquisa ou tente novamente',
            button: 'Atualizar',
            color: '#FB7185',
            animation: 'https://lottie.host/dfe18e44-cfad-45ff-9d79-0f00caca241d/wBm1kXy3k1.json',
        },
        error: {
            title: 'Erro',
            subtitle: 'Não foi possivel processar sua solicitação',
            infoText: 'Tente Novamente mais tarde',
            button: 'Atualizar',
            color: '#FB7185',
            animation: 'https://lottie.host/dfe18e44-cfad-45ff-9d79-0f00caca241d/wBm1kXy3k1.json',
        },
        /* Future 
        sucesso: {
            animation: 'https://lottie.host/865ff358-c23e-43cd-8984-9f50d3631780/H85aYei3BF.json',
        },*/
    };

    return types[type];
};
