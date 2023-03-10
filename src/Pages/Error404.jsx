import React from 'react';
import Error from "../components/Error/Error"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

const Error404 = () => {
    return (
        <div>
            <Header />
            <Error /> 
            <Footer />
        </div>
    );
};

export default Error404;