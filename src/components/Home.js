import React from 'react'
import styled from 'styled-components';

import CarModels from './shop/CarModels.js';
import Products from './shop/Products';

import CarModelSpecifications from './data/CarModelSpecifications';
import SolarProducts from './data/SolarProducts';


 const Home = () => {
  return (
    <ModelsContainer>
          {
            CarModelSpecifications.map((carModel, index) => (
              <CarModels key ={index}
                carModel = {carModel}
                customOrderText ="Custom Order"
                existingInventoryText = "Existing Inventory"
            />
            )) 
          }

          {
            SolarProducts.map((product, index) => (
             <Products key ={index}
                product = {product}
            />
            ))
          }

    </ModelsContainer>
  )
  
}

export default Home;

const ModelsContainer = styled.div`
    height: 100vh;

`;