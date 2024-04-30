import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';


const ProductAll = () => {
    const [productList, setProductList] = useState([]);
    const [query, setQuery] = useSearchParams();


    const getProducts = async () => {
        try {
            let searchQuery = query.get('q')||'';
            console.log('searchQuery', searchQuery);
            let url = `https://my-json-server.typicode.com/GwangjinLee/hnm-clone-jsonserver/products?q=${searchQuery}`;
            const response = await fetch(url);
            const data = await response.json();
            setProductList(data);
        } catch (error) {
            console.log('error', error);
        }
    };
    useEffect(() => {
        getProducts();
    }, [query]);
  return (
    <div>
        <h1>ProductAll </h1>
        <Container>
            <Row>
            {productList.map((product) => 
                <Col lg={3}>
                <ProductCard item={product}/>
                </Col>
            )}
                
            </Row>
        
        </Container>
        
    </div>
  )
}

export default ProductAll