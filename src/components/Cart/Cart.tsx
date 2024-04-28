import { useDispatch, useSelector } from 'react-redux';
import * as S from './styles'
import { RootReducer } from '../../redux/root-reducer';
import { cleanCart, removeProduct } from '../../redux/Cart/cart-slice';

interface CartProps{
    showCart:boolean;
    onHideCart: () => void;
}

export const Cart: React.FC<CartProps> = ({showCart, onHideCart})=>{
    const { cart } = useSelector((rootReducer: RootReducer)=> rootReducer.cartReducer)
    
    

    const dispatch = useDispatch()

    const total = cart.reduce((totalCart, product) => {
        return totalCart + parseFloat(product.price); // Converta a string price para número
    }, 0);


    return(
        <S.Container showCart={showCart}>
            <S.TitleClose>
                <S.Title>Carrinho de compras</S.Title>
                <S.CloseCart onClick={onHideCart}>X</S.CloseCart>
            </S.TitleClose>
            
            <S.CartProductsList>
                {cart.map((product)=> (
                    <S.CartProductItem key={product.id}>
                        <S.ProductImage src={product.photo} alt={product.name} />
                        <S.NameProduct>{product.name}</S.NameProduct>
                        <S.PriceArea>R${product.price}</S.PriceArea>
                        
                        <S.BinProduct onClick={()=>
                        dispatch(removeProduct(product))}>X</S.BinProduct>
                    </S.CartProductItem>
                ))}
            </S.CartProductsList>

            
            <S.CartTotal>
                <S.TextTotal>Total:</S.TextTotal>
                <S.SomaCart>R${total}</S.SomaCart>
            </S.CartTotal>
            <S.FinishShop onClick={()=>
                        dispatch(cleanCart())}>Finalizar Compra
            </S.FinishShop>
            
        </S.Container>
    )
}