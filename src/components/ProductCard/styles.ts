import styled from "styled-components";

export const Card = styled.article`
    background-color: white;
    max-width: 218px;
    max-height: 285px;
    gap: 8px;
    border-radius: 8px;
    box-shadow: 0px 2px 8px 0px #00000022;
    padding: 1rem 2rem 0 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

   
`;

export const ProductImage = styled.img`
    width: 100px;
    height: 100px;
    object-fit: contain;
`;

export const ProductTitlePriceArea = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin: auto;
`;

export const ProductTitle = styled.h2`
    
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    text-align: left;
`;

export const PriceArea = styled.div`
    width: 64px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background: #373737;
    color: #FFFFFF;
    text-align: center;
`;

export const Price = styled.strong`
    
    font-size: 12px;
    font-weight: 700;
    text-align: left;
`;

export const ProductDescription = styled.h3`
    
    font-size: 10px;
    font-weight: 300;
  
    text-align: left;
`;

export const AddToCardButton = styled.button`
    width: 218px;
    height: 31.91px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border-radius: 0px 0px 8px 8px;
    font-size: 14px;
    border: none;
    background: #0F52BA;
    color: #FFFFFF;

    
    margin-top: auto;
`;

export const RemoveFromCardButton = styled.button`
    width: 218px;
    height: 31.91px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border-radius: 0px 0px 8px 8px;
    font-size: 14px;
    border: none;
    background: violet;
    color: black;

    
    margin-top: auto;
`;
