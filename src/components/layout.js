import React from 'react';
import Header from "./header";
import Footer from "./footer";

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