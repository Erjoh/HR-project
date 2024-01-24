import React from 'react';
import Header from "./Header/header";
import Footer from "./Footer/footer";

const Layout = ({children}) => {
    return (
        <div>
            <Header/>
            <main className={'min-h-screen'}>
                {children}
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;