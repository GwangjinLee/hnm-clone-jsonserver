import React, { useEffect, useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    let { id } = useParams();
    const [product, setProduct] = useState(null);

    const getProductDetail = async () => {
        try {
            let url = `https://my-json-server.typicode.com/GwangjinLee/hnm-clone-jsonserver/products/${id}`;
            const response = await fetch(url);
            const data = await response.json();
            setProduct(data);
        } catch (error) {
            console.log('error', error);
        }
    };

    useEffect(() => {
        getProductDetail();
    }, []);
  return (
    <Container>
        <Row>
            <Col className='product-img'>
                <img src={product?.img}></img>
            </Col>
            <Col>
                <div>{product?.title}</div>
                <div>{product?.price}</div>
                {['Secondary'].map(
                    (variant) => (
                    <DropdownButton
                        as={ButtonGroup}
                        key={variant}
                        id={`dropdown-variants-${variant}`}
                        variant={variant.toLowerCase()}
                        title={'사이즈 선택'}
                    >
                    {product?.size.map((item) => {
                        return <Dropdown.Item eventKey="1">{item}</Dropdown.Item>
                    })}
                        
                        
                    </DropdownButton>
                    ),
                )}
                <div>
                    <button>장바구니 담기</button>
                </div>
                
            </Col>
        </Row>
    </Container>
  )
}

export default ProductDetail