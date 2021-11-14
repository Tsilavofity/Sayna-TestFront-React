import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FirstSection from './components/section1/section1'
import reportWebVitals from './reportWebVitals';
import SecondSection from './components/section2/section2'
import ThirdSection from './components/section3/section3'
import FourthSection from './components/section4/section4';
import FifthSection from './components/section5/section5';
import SixthSection from './components/section6/section6';
import SeventhSection from './components/section7/section7';
import EightSection from './components/section8/section8';

ReactDOM.render(
  <React.StrictMode>
    <FirstSection />
    <SecondSection />
    <ThirdSection />
    <FourthSection />
    <FifthSection />
    <SixthSection />
    <SeventhSection />
    <EightSection />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
