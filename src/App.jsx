import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavSection from './component/NavSection.jsx';
import FootSection from './component/FootSection.jsx';
import ProductList from './page/ProductList.jsx';
import ProductDetail from './page/ProductDetail.jsx';



// 01. 페이지 구성 (NavSection, main, FootSection)
//   (A) NavSection -> 회사 로고, 로그인, 부가메뉴(여성,Divided,남성,신생아/유아,아동,H&M HOME,Sale,지속가능성), 검색기능
//   (B) main -> ProductList, ProductDetail, Login
//   (C) footerSection -> company info

// 02. 조건
//   (A) 검색기능에 특정단어를 입력하고 엔터를 누르면 그에 해당되는 제품 리스트만 보여준다.
//   (B) 상세페이지 진입 전 로그인 여부를 물어보고 로그인되지 않으면 전근 허가를 불허한n다.

function App() {

  return (
    <>
      <NavSection />
      <Routes>
        <Route path='/' element={<ProductList />} />
        <Route path='/products/:id' element={<ProductDetail />} />
      </Routes>
      <FootSection />
    </>
  )
}

export default App
