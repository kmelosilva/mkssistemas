import { BsCart4 } from "react-icons/bs";
import * as S from "./styles";
import { useState } from "react";
import { Cart } from "../Cart/Cart";

export const Header: React.FC = () => {
    
    const [isCartVisible, setIsCartVisible] = useState(false);

    const handleCartButtonClick = () => {
        setIsCartVisible(!isCartVisible);
    };

    return (
        <S.StyledHeader>
            <S.Wrapper>
                <S.TitlesWrapper>
                    <S.HeaderTitle>MKS</S.HeaderTitle>
                    <S.HeaderSubTtitle>Sistemas</S.HeaderSubTtitle>
                </S.TitlesWrapper>
                <S.CartButton onClick={handleCartButtonClick}>
                    <BsCart4 />
                    
                </S.CartButton>
            </S.Wrapper>
            <Cart showCart={isCartVisible} onHideCart={handleCartButtonClick} />
        </S.StyledHeader>
    );
};