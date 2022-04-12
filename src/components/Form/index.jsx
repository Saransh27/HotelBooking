import React from 'react';
import styled from 'styled-components';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

import Button from '../Button';

const SuccessIcon = styled(FaCheckCircle)`
  display: inline-block;
  color: green;
  transform: scale(2);
  margin-left: 85px;
`;

const FailureIcon = styled(FaTimesCircle)`
  display: inline-block;
  color: red;
  transform: scale(2);
  margin-left: 85px;
`;

const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 0;
`;

const StyledForm = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

const StyledError = styled.div`
  color: red;
  font-weight: 800;
  margin: 0 0 40px 0;
`;

const Form = ({
  children,
  submitButtonLabel,
  onSubmit,
  errorMessage,
  showSuccessIcon,
  showFailureIcon,
}) => {
  return (
    <StyledFormWrapper>
      <StyledForm onSubmit={onSubmit}>
        {children}
        <Button type='submit' data-testid='ihs-booking-form-submit-btn'>
          {submitButtonLabel}
        </Button>
        {showSuccessIcon && (
          <SuccessIcon data-testid='ihs-booking-form-success-icon'></SuccessIcon>
        )}
        {showFailureIcon && (
          <FailureIcon data-testid='ihs-booking-form-failure-icon'></FailureIcon>
        )}
        {errorMessage && <StyledError />}
      </StyledForm>
    </StyledFormWrapper>
  );
};

export default Form;
