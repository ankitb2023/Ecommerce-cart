import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import categories from '../db/categories.json';
import Carousel from '../components/Carousel'
import '../App.css'
const Home = () => {
  return (
  
    <Container className="cont" style={{width:'100%',height:'100%'}}>
        <Carousel className="caru"/>
        <Row >
       {categories.map(c => (
     
       
          <Col
          
            tag={Link}
            key={c.id}
            to={`/category/${c.id}`}
            className="card border border-primary py-5 shadow-sm rounded-lg flex-fill text-center"
            
          >
            <h2 className="h3">{c.name}</h2>
            <div>{c.description}</div>
          </Col>
        
        ))}
        </Row>
    </Container>
  );
};

export default Home;
