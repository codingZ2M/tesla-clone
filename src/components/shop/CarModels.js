import React from 'react'
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const CarModels = ({carModel, customOrderText, existingInventoryText }) => {
    
  return (
    <ModelWrapper bgImage = {carModel.image} >
        <Fade top>
            <ModelText>
                <h1>{carModel.model_name}</h1>
                <p>{carModel.description}</p>
            </ModelText>
        </Fade>

        <Buttons>
        <Fade top>
            <ButtonGroup>
                <CustomOrderButton>
                    {customOrderText}
                </CustomOrderButton>
                { existingInventoryText && 
                    <ExistingInventoryButton>
                        {existingInventoryText}
                    </ExistingInventoryButton>
                }               
            </ButtonGroup>
            <DownArrow src="/images/down_arrow.png" />
        </Fade>
        </Buttons>

    </ModelWrapper>
  )
}

export default CarModels;

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

const Buttons = styled.div`
`;

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 50px;
    gap: 20px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
const CustomOrderButton = styled.div`
    background-color:#101010;
    color: #ffffff;
    height: 40px;
    width: 256px;
    display: flex; 
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.80;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: bold;
    letter-spacing: 1px;
    @media (max-width: 768px) {
       width: 400px ;
    }
`;

const ExistingInventoryButton = styled(CustomOrderButton)`
    background-color:#ffffff;
    opacity: 0.70;
    color: #101010;
`;

const DownArrow = styled.img`
    margin-top:0px; 
    margin-bottom: 20px;
    height: 30px;
    animation: animateDown infinite 1.5s
`;