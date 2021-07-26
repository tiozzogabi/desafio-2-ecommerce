import React from 'react';
import Categories from '../../components/Categories';
import HeaderContainer from '../../components/Header';
import Navbar from '../../components/Navbar'
import ProductComponent from '../../components/Product';

function Home() {  
  return(
    <>
    <Navbar />
    <HeaderContainer />
    <Categories />
    <ProductComponent/>
    </>
  )

}

export default Home;