import React from 'react';
import Header from './../Header'
import Footer from './../Footer'
import styled from 'styled-components';


function PageDefault(props){
    return (
        <>
        
        <Header />
            {props.children}
        <Footer />
        
        </>


    )
}

export default PageDefault;