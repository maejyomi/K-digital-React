import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); // index.html에 있는 div를 react가 잡아서 가상돔을 만든것
//const tick = () => {
  
  root.render(
    //<React.StrictMode>
      <App /> 
    //</React.StrictMode>
  );
//};
// setInterval(() => {tick()}, 1000); // 1초에 한번씩 부르기, 나중에는 root.render를 다 부르지 않을거임



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
