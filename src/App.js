// 단축키 rsc
import React from 'react';
import "./App.css";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Header, Footer } from "./components"
import {
    HomeScreen,
    DetailScreen,
    LoginScreen,
    RegisterScreen,
    ShippingScreen,
    PaymentScreen,
    PlaceOrderScreen,
    ProfileScreen,
    CartScreen,
} from "./screens"
import {Container} from "react-bootstrap";

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
    
    <Router>
      <Header variant='primary' />
      <main className='py-3'>
          <Container>
            <Route path='/' component={HomeScreen} exact />
            <Route path='/product/:id' component={DetailScreen} />
            <Route path='/login/' component={LoginScreen} />
            <Route path='/register/' component={RegisterScreen} />
            <Route path='/shipping/' component={ShippingScreen} />
            <Route path='/payment/' component={PaymentScreen} />
            <Route path='/placeorder/' component={PlaceOrderScreen} />
            <Route path='/profile/' component={ProfileScreen} />
            <Route path='/cart/:id?' component={CartScreen} />
          </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;

// 스타일 시트 선언