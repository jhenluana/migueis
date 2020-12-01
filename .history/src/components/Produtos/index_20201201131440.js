import React, {useEffect} from 'react';
import {
  ProductsContainer,
  ProductWrapper,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductPrice,
  ProductDesc,
  ProductButton,
  Produtolistar,

} from './ProductsElements';
import './style.css';
import { IoMdAddCircle } from "react-icons/io";



const Produtos = ({ data }) => {


  return (
      <Produtolistar href="/listar/pedidos">
        {data.map((it, index) => {
          return (
            <div key={index} className="product_container">
              <div className="product_thumbnail">1 foto</div>
              <div className="product_desc_cont">
                <h1 className="product_name">Pintado à urucum</h1>
                <p className="product_desc">pintado ao molho de urucum pintado ao molho de urucum pintado ao molho de urucum </p>
                <div className="product_cart">
                  <spam className="product_price">R$ 30,00</spam>
                  <button className="product_add">+</button>
                </div>
              </div>
            </div>
            // <ProductsContainer>
            //   <ProductWrapper>
            //     <div>
            // <ProductCard key={index}>
            //   <ProductInfo>
            //   <ProductImg src={it.thumb}/>
            //   <ProductTitle>{it.produto}</ProductTitle>
            //     <div>
            // <ProductDesc>{it.desc}</ProductDesc>
            // </div>
            //     <ProductPrice>  R${it.valor},00 </ProductPrice>
            //     <ProductButton><IoMdAddCircle size={32} color="#FA4A0C"/></ProductButton>
            //   </ProductInfo>
            // </ProductCard>
            // </div>
            // </ProductWrapper>
            // </ProductsContainer>

          );
        })}
      </Produtolistar>


  );
};

export default Produtos;
