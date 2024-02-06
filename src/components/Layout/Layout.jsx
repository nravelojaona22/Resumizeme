import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Mobilesidebar from './Mobilesidebar';

const Layout = ({children, title, pageProps}) => {

    const wrapperStyle = {
        
    };

    const data = {
        wishlists : [
            {title: 'Software Engineer'},
            {title: 'Computer Hardware engineer'},
            {title: 'Network Engineer'},
            {title: 'Technical Support'},
            {title: 'Network Administrator'},
            {title: 'Management'},
            {title: 'Data Analysis'},
            {title: 'Computer Technician'}
        ],
        histories : [
            {title: 'Past Search1'},
            {title: 'Past Search2'},
            {title: 'Computers and Information'},
            {title: 'Database Administrator'},
            {title: 'Computer Security'},
            {title: 'Computer System Analyst'}
        ],
        boards : [
            {class: 'board1', title: 'Board1'},
            {class: 'board1', title: 'Board1'},
            {class: 'board1', title: 'Board1'},
            {class: 'lock', title: 'Board agent1'},
            {class: 'lock', title: 'Board agent1'},
            {class: 'lock', title: 'Board agent1'}
        ]
    }

    return (
        <>
        <Head>
            <title>{title??title}</title>
        </Head>
        <div style={wrapperStyle} className='wrapper'>
            <Sidebar data={data} />
            <div className='container'>
                {children}
                <Footer />
            </div>
        </div>
        </>
    );
}

export default Layout;