import logo from './logo.svg';
import './App.css';
import { Connect } from './components/Connect';
import styled from 'styled-components';

const StyledAppDiv = styled.div`
  display:grid;
  grid-gap: 20px;
`;

function App() {
  return (
    <StyledAppDiv>
      <Connect />
    </StyledAppDiv>
  );
}

export default App;
