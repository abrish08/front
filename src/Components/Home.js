import React, { useEffect, useReducer } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button, CardActionArea } from '@mui/material';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import { Link } from 'react-router-dom';

// Define the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function Home() {
  const [{ loading, error, products }, dispatch] = useReducer(reducer, {
    loading: true,
    error: '',
    products: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH' });
      try {
        const response = await axios.get('/api/data');
        dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <p>List of Projects </p>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <Row>
          {products.map((product) => (
            <Col sm={6} lg={4} md={8} key={product.Name} className='mb-3'>
              <Card sx={{ maxWidth: 345, display: 'flex', }}>
         
                <CardActionArea>
             
                  <CardContent>
                  <Link to ={`/product/${product.Name}`}>
<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_FWF2judaujT30K9sMf-tZFhMWpgP6xCemw&s' height='100%' width='100%' alt={product.Name}/>
</Link>
                    <h3> Full Name:{product.Name}</h3>
                    <h4>Age: {product.age}</h4>
           
                  <Button>View</Button>
                  </CardContent>
                </CardActionArea>
        
           
            
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default Home;
