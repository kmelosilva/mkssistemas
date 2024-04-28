import styled from "styled-components";


export const StyledHeader = styled.header`
    background: #0F52BA;
    max-width: 1440px;
    height: 101px;

    @media (max-width: 430px){
        max-width: 430px;
        height: 48px;
        
    }
  
`;

export const Wrapper = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    
    
`;

export const TitlesWrapper = styled.div`
   display: flex;
   align-items: center;
   gap: 5px;
   margin-left: 65px;
`;

export const HeaderTitle = styled.h1`


   
    font-size: 40px;
    font-weight: 600;
    line-height: 19px;
    text-align: left;
    color: #FFFFFF;

    @media (max-width: 430px){
        font-size: 32px;
    }
;

`;

export const HeaderSubTtitle = styled.h2`
   
    font-size: 20px;
    font-weight: 300;
    line-height: 19px;
    text-align: left;
    color: #FFFFFF;

    @media (max-width: 430px){
        font-size: 16px;
    }

`;

export const CartButton = styled.button`
    width: 90px;
    height: 45px;
   
    border-radius: 8px;
    margin-right: 88px; 
    
    border: none;
    display: flex;
    align-items: center;
    gap: 15px;
    justify-content: center;

    
    font-size: 18px;
    font-weight: 700;
    line-height: 21.94px;
    text-align: left;

     
   svg{
    font-size: 19px;
   }

    @media (max-width: 430px){
        width: 52px;
        height: 26px;
        top: 11px;
        left: 300px;

        svg{
         font-size: 10px;
        }
    

    }

   
    

`;