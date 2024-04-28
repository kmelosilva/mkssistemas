import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ProductCard } from '../ProductCard/ProductCard';
import { Product } from './types';
import * as S from './style'

export const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC');
        const productsData = response.data.products;
        setProducts(productsData);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <S.Container>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </S.Container>
  );
};
