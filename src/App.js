// 단축키 rsc
import React from 'react';
import "./App.css";
import Header from './components/Header';
import Footer from './components/Footer';
import {Container} from 'react-bootstrap'

// 라이브러리를 불러오는 곳
// 글로벌 상수를 선언하는 곳


const App = () => {

  // 상태, 함수, 상수, 변수 선언하는 곳

  return ( // 화면에 보여지는 부분
    // <div className="App">
    //   <Header />
    //   <h1>안녕하세용</h1>
    //   <Footer />
    // </div>
    <>
      <Header />
        <main className='py-3'>
          <Container>
            <h1>Welcome to Mina Shopping!</h1>
          </Container>
        </main>
      <Footer />
    </>
  );
};

export default App;

// 스타일 시트 선언