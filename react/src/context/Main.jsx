import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #f1f1f1;
  color: ${props => props.theme === 'light' ? 'blue' : 'red'};
  display: flex;
  justify-content: space-around;
`


function Main(props) {
  // const toggleTheme = () => {

  // }

  const { theme, toggleTheme } = useContext(ThemeContext);



  return (
    // <div style={{
    //   backgroundColor: theme === 'light' ? '#fff' : "#000",
    //   color: theme === 'light' ? '#000' : '#fff'
    // }}>
    <Wrapper theme={theme}>
      <h3>Main</h3>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </Wrapper>
    // </div >
  );
}

export default Main;