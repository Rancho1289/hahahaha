
import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate, useSearchParams } from 'react-router-dom';

const ProductList = () => {
  let [products, setProducts] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4; // 한 페이지당 상품 수
  let [currentSet, setCurrentSet] = useState(1); // 현재 페이지 세트
  const pagesPerSet = 5; // 한 세트당 페이지 수
  const [query, setQuery] = useSearchParams();

  const navigate = useNavigate('')
  // console.log(query)
  const goDetail=(e)=>{
    console.log("TEST1231123",e)
    navigate(`/products/${e}`)
  }

  useEffect(() => {
    getProduct();
  }, [query]);

  const getProduct = async () => {
    let url = `https://my-json-server.typicode.com/Rancho1289/hahahaha/products`;
    let keyword = query.get("q") || "";
    // console.log(keyword)
    let response = await fetch(url);
    let data = await response.json();
    let filteredProduct = data.filter(item => item.title.includes(keyword))
    // console.log("filteredProduct: ", filteredProduct)
    setProducts(filteredProduct);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPageCount = Math.ceil(products.length / productsPerPage);
  const totalSetCount = Math.ceil(totalPageCount / pagesPerSet);

  const updatePageAndSet = (page) => {
    setCurrentPage(page);
    const newSet = Math.ceil(page / pagesPerSet);
    setCurrentSet(newSet);
  };

  const pageNumbers = [];
  const currentSetFirstPage = (currentSet - 1) * pagesPerSet + 1;
  const currentSetLastPage = Math.min(currentSetFirstPage + pagesPerSet - 1, totalPageCount);

  for (let i = currentSetFirstPage; i <= currentSetLastPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <Container className='productList-Section'>
        <Row>
          {currentProducts.map((product, index) => (
            <Col key={index} md={3} xs={12} className='product-Card'>
              <Card style={{ width: '17rem' }}>
                <Card.Img variant="top" src={product?.img} />
                <Card.Body>
                  <Card.Title>{product?.title}</Card.Title>
                  <div>
                    <div>{product?.price}</div>
                    <div>{product?.size}</div>
                  </div>
                  <Button variant="primary"  onClick={()=>goDetail(product.id)}>자세히 보기</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <Button className="me-2" onClick={() => updatePageAndSet(1)} disabled={currentPage === 1}>처음</Button>
            <Button className="me-2" onClick={() => updatePageAndSet(Math.max(1, currentSetFirstPage - pagesPerSet))} disabled={currentPage === 1}>이전 5개</Button>
            {pageNumbers.map(number => (
              <Button className="me-1" key={number} onClick={() => setCurrentPage(number)}>{number}</Button>
            ))}
            <Button className="me-2" onClick={() => updatePageAndSet(Math.min(totalPageCount, currentSetLastPage + 1))} disabled={currentPage === totalPageCount}>다음 5개</Button>
            <Button className="me-2" onClick={() => updatePageAndSet(totalPageCount)} disabled={currentPage === totalPageCount}>마지막</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductList;
