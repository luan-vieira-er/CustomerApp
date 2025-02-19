import styled from '@emotion/styled';
import { Stack } from '@mui/material';
import { theme } from 'styles/constants';
import { StackProps } from './types';

export const HeaderTitle = styled.h3`
  font-family: Inter;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  margin-bottom: 10px;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledStack = styled(Stack)<StackProps>(({ mobile }) => ({
  maxHeight: mobile ? 200 : 558,
  height: 558,
  padding: 20,
  width: '100%',
  overflowX: 'hidden',
  overflowY: 'auto',
  '::-webkit-scrollbar': {
    width: '20px',
  },
  '::-webkit-scrollbar-track': {
    background: 'transparent',
  },
  '::-webkit-scrollbar-thumb': {
    background: theme.Colors.Primary.primaryOrange,
    backgroundClip: 'content-box',
    border: '7px solid transparent',
    borderRadius: '20px',
  },
}));

export const DivContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
  border-left: 3px solid ${theme.Colors.Primary.primaryOrange};
  padding-left: 20px;
  height: 120px;
`;

export const Title = styled.div`
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;
  color: ${theme.Colors.Primary.primaryOrange};
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const Description = styled.span`
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0px;
  text-align: left;
  color: ${theme.Colors.Primary.primaryGreen};
`;

export const Notes = styled.span`
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0px;
  text-align: left;
`;


export const Subtitle = styled.span`
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0px;
  text-align: left;
  color: ${theme.Colors.Primary.darkGrey100};
`;

export const DivActions = styled.div`
  display: flex;
  gap: 5px;
`;
