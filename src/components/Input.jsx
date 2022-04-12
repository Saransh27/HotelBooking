import styled from 'styled-components';
import { string } from 'prop-types';

import { formControlSharedStyles } from '../styles/sharedStyles';
import Label from './Label';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;
const StyledInput = styled.input`
  width: 400px;
  ${formControlSharedStyles}
`;

const Input = ({ label, type, ...rest }) => {
  return (
    <StyledDiv>
      <Label label={label} />
      <StyledInput type={type} {...rest} />
    </StyledDiv>
  );
};

Input.defaultProps = {
  type: 'text',
};

Input.propTypes = {
  type: string,
};

export default Input;
