import logo from './logo.svg';
import './App.css';
import { Connect } from './components/Connect';
import { WalletStatus } from './components/WalletStatus';
import { SignMessage } from './components/SignMessage';
import { ContractCall } from './components/ContractCall';
import styled from 'styled-components';

const StyledAppDiv = styled.div`
  display:grid;
  grid-gap: 20px;
`;

function App() {
  return (
    <StyledAppDiv>
      <Connect />
      <WalletStatus />
      <SignMessage />
      <ContractCall />
    </StyledAppDiv>
  );
}

export default App;
