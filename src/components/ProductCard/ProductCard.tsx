import React from 'react';
import { Product } from '../ProductsList/types';
import * as S from './styles'
import { FiShoppingBag } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer, rootReducer } from '../../redux/root-reducer';
import { addProduct, removeProduct } from '../../redux/Cart/cart-slice';

export interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

  const { cart } = useSelector((rootReducer: RootReducer)=> rootReducer.cartReducer)
  const dispatch = useDispatch()

  const isProductOnCart = cart.find(productOnCart => product.id === productOnCart.id)!==undefined

  function addProductToCard(){
    dispatch(addProduct(product))
  }

  function removeProductToCard(){
    dispatch(removeProduct(product))
  }

  return (
    <S.Card>
      <S.ProductImage src={product.photo} alt={product.name} />
      <S.ProductTitlePriceArea>
        <S.ProductTitle>{product.name}</S.ProductTitle>
        <S.PriceArea>
            <S.Price>R${product.price}</S.Price>
        </S.PriceArea>
      </S.ProductTitlePriceArea>
      <S.ProductDescription>{product.description}</S.ProductDescription>
      {isProductOnCart?(
        <S.RemoveFromCardButton onClick={removeProductToCard}>
        <FiShoppingBag />
        REMOVER DO CARRINHO
        </S.RemoveFromCardButton>
      ) : (
        <S.AddToCardButton onClick={addProductToCard}>
        <FiShoppingBag />
        COMPRAR
      </S.AddToCardButton>)}
      
      
    </S.Card> 
  );
};


