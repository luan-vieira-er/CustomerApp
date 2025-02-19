import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const PasswordRequirementsContainer = styled.div`
  width: 400px;
  height: 35.17%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Title = styled.p`
  font-family: 'Inter';
  font-weight: 600;
  font-size: 14.22px;
  line-height: 18.49px;
  margin-bottom: 12px;
`;

export const Content = styled.div`
  height: 159px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const RequirementWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 13px;
`;

export const Requirement = styled.p`
  color: #ffffff;
  font-size: 14.22px;
  line-height: 17.87px;
`;

export const StyledIcon = styled(FontAwesomeIcon)(() => ({}));
