import React, {useState} from 'react'
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import CarModelSpecifications from '../data/CarModelSpecifications';

import { useParams } from 'react-router-dom';

const CarModelSpec = () => {
    const {selectedCarModel} = useParams();

            return ( 
                CarModelSpecifications.map((carModel) => {
                    if( carModel.model_name === selectedCarModel )
               
                    return (
                        <ModelWrapper bgImage = {carModel.image} >
                            <Fade top>
                                <ModelText>
                                    <h1>{carModel.model_name}</h1>
                                    <p>{carModel.description}</p>
                                </ModelText>
                            </Fade>
                            
                            
                                <Fade top>
                                    <SpecificationContainer>
                                        <SpecificationBox>
                                            <Specification>
                                                <h1>{carModel.range}</h1>
                                                <span>Range (EPA est.)</span>
                                            </Specification>
                                            <Specification>
                                                <h1>{carModel.topSpeed}</h1>
                                                <span>Top Speed</span>
                                            </Specification>
                                            <Specification>
                                                <h1>{carModel.acceleration}</h1>
                                                <span>0-60 mph*</span>
                                            </Specification>
                                            <Specification>
                                                <h1>{carModel.peak_power}</h1>
                                                <span>Peak Power</span>
                                            </Specification>
                                        </SpecificationBox>
                                        <OrderButton>Order Now</OrderButton>
                                    </SpecificationContainer>
                                </Fade>
                        </ModelWrapper>
                    )
                 })
            )
    }
    
 

export default CarModelSpec;

const ModelWrapper = styled.div`
    display: flex ;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image:  ${props => `url("/images/${props.bgImage}")` }
    `;

const ModelText = styled.div`
    padding-top: 15vh;
    text-align: center;
    h1 {
        font-size: 45px;
        font-weight: 500;
    }
    p {
        font-size: 15px;
        padding-top: 10px;
    }
`;

const SpecificationContainer = styled.div`
    display: flex;
    margin-bottom: 60px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
const SpecificationBox = styled.div`
    display: flex;
    gap: 100px;
    @media (max-width: 768px) {
        gap: 40px;
    }
`;

const Specification = styled.div`
    display: flex ;
    flex-direction: column;
    gap: 5px;
    h1,  span  {
        color: #ffffff;
        font-weight: 500;
    }
    @media (max-width: 768px) {
        h1  {
        font-size: 20px;    
    }
     span  {
        font-size: 15px;    
    }
    }
`;

const OrderButton = styled.div`
    background-color: transparent;
    color: #ffffff;
    border: 3px solid #ffffff ;
    height: 45px;
    width: 225px;
    display: flex; 
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.80;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1.5px;
    margin-left: 70px ;
    @media (max-width: 768px) {
        width: 80vw ;
        margin-top: 30px;
        margin-left: 0px ;
    }
`;


