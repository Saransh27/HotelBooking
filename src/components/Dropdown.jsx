import styled from 'styled-components';

import { formControlSharedStyles } from '../styles/sharedStyles';
import Label from './Label';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

const Select = styled.select`
  width: 400px;
  ${formControlSharedStyles}
  option {
    color: black;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

const Dropdown = ({ id, label, value, options, onChange, ...rest }) => {
  return (
    <StyledDiv>
      <Label label={label} />
      <Select id={id} name={id} value={value} onChange={onChange} {...rest}>
        {options.map((op) => (
          <option key={op.value} value={op.value}>
            {op.label}
          </option>
        ))}
      </Select>
    </StyledDiv>
  );
};

export default Dropdown;
