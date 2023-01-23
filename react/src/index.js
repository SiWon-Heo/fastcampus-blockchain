import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Course from './jsx/Course'
// import Time from './element/Time';
// import MovieList from './movies/MovieList';
// import TestComp from './lifecycle/TestComp';
// import CalculateComp from './hook/CalculateComp';
// import MyButton from './eventhandler/MyButton';
// import Index from './header';
// import MemberList from './list/MemberList';
import Main from './context/Main';
import LightDarkMode from './context/LightDarkMode';




// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Course />
//   </React.StrictMode>
// );

// setInterval(() => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <Time />
//     </React.StrictMode>,
//     document.getElementById('root')
//   )
// }, 1000);

ReactDOM.render(
  <React.StrictMode>
    {/* <MovieList /> */}
    {/* <TestComp /> */}
    {/* <CalculateComp /> */}
    {/* <MyButton /> */}
    {/* <Index /> */}
    {/* <MemberList /> */}
    <LightDarkMode />
  </React.StrictMode>,
  document.getElementById('root')
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
