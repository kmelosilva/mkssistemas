import styled from "styled-components";

interface ContainerProps{
    showCart:boolean;
}

export const Container = styled.aside<ContainerProps>`
    
    position: fixed;
    top: 0;
    right: ${(props) => (props.showCart ? "0": "-468px") };

    width: 468px;
    height: 100vw;
    background-color: #0F52BA;
    color: white;
    padding: 2rem;


    box-shadow: -5px 0px 6px 0px #00000021;

    @media (max-width: 430px) {
        width: 330px;
        height: 932px;
    }

`
export const TitleClose = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 64px;
`

export const Title = styled.h1`
    width: 180px;
    height: 56px;
    top: 36px;
    left: 1001px;
    
    font-size: 27px;
    font-weight: 700;
    line-height: 32.91px;
    text-align: left;

`
export const CloseCart = styled.button`
    width: 38px;
    height: 38px;
    top: 39px;
    left: 1380px;
    background: #000000;
    color: white;
    border-radius: 50%;
    border: none;

    @media (max-width: 430px) {
        width: 45.92px;
        height: 45.92px;
        top: 26.47px;
        left: 314px;
        
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 40px;
        font-weight: 400;
        line-height: 15px;
        text-align: left;

        color: #0F52BA;


    }
`

export const CartProductsList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: start;
    height: 650px;
    overflow: auto;
    scrollbar-width: none;

    @media (max-width: 430px) {
        
        width: 250px;
        height: 432px;
        
    }

`

export const CartProductItem = styled.li`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    width: 379px;
    max-height: 300px;
    top: 6px;
    gap: 20px;
    border-radius: 8px;
    

    background-color: #FFFFFF;
    color: black;
    list-style: none;

    box-shadow: -2px 2px 10px 0px #0000000D;

    @media (max-width: 430px) {
        flex-direction: column;
        width: 250px;
        height: 220.05px;
        gap: 7px;
        
        padding: 1rem;
    }
`
export const ProductImage = styled.img`
    
    max-width: 80px;

    @media (max-width: 430px) {
        
        max-width: 120px;
    }

`

export const NameProduct = styled.h1`

    width: 113px;
    height: 33px;
    top: 37px;
    left: 90px;
   
    
    font-size: 13px;
    font-weight: 400;
    line-height: 17px;
    text-align: center;
    justify-content: left;
    align-items: center;
    display: flex;

    @media (max-width: 430px) {
        
        justify-content: center;
        width: 211px;
        height: 21.45px;
        top: 131.47px;
        left: 16px;
        
        
        font-size: 16px;
        font-weight: 400;
        line-height: 19px;
        text-align: left;

        color:#2C2C2C;


    }

`
export const PriceArea = styled.div`

    display: flex;
    width: 84px;
    height: 34.81px;
    top: 163.17px;
    left: 143px;
    gap: 0px;
    border-radius: 5px ;
    opacity: 0px;

    background: #373737;
    color: white;
    align-items: center;
    justify-content: center;

`;

export const BinProduct = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -10px;
    right: 18px;
    width: 20px;
    height: 20px;
    left: 372px;
    

    background: #000000;
    color: white;
    border-radius: 50%;
    border: none;

    font-size: 14px;
    font-weight: 400;
   
    text-align: left;

    @media (max-width: 430px) {
        width: 21px;
        height: 41.21px;
        top: 9.81px;
        left: 215px;

       
        font-size: 42px;
        font-weight: 400;
        line-height: 17px;
        text-align: left;

        background: white;
        color: #000000;



        
    }

`

export const CartTotal = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 65px;
    margin-bottom: 50px;

    @media (max-width: 430px) {
        
        margin-top: 100px;
    }
`

export const TextTotal = styled.h1`

    font-size: 28px;
    font-weight: 700;
    line-height: 15px;
    text-align: left;

`

export const SomaCart = styled.h1`
    
    
    font-size: 28px;
    font-weight: 700;
    line-height: 15px;
    text-align: left;

   

`

export const FinishShop = styled.button`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    
    margin-left:-32px;
    border: none;
   

    width: 468px;
    height: 97px;
    background-color: #000000;
    color: white;

    font-size: 28px;
    font-weight: 700;
    line-height: 15px;
    text-align: left;


    @media (max-width: 430px) {
        
        width: 330px;
        height: 65.86px;
        
        

        
    }
`