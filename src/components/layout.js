import React from 'react';
import Header from "./Layout/header";
import Footer from "./Layout/footer";

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