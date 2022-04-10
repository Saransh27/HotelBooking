import logo from '../images/hote_logo.png';
import styled from 'styled-components';

const HeaderBar = styled.header`
  width: 100%;
  padding: 0.5em 1em;
  display: flex;
  height: 64px;
  position: fixed;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
  z-index: 1;
`;

const Heading = styled.h2`
  margin-left: 40px;
  align-items: center;
  display: flex;
`;

const Header = () => {
  return (
    <HeaderBar>
      <img src={logo} alt='Grand Hotel Logo' height='40' />
      <Heading>Booking System</Heading>
    </HeaderBar>
  );
};
export default Header;
