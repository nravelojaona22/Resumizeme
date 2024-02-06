import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PlusCircle, GearFill, List } from 'react-bootstrap-icons';

const Mobilesidebar = ({data}) => {

    const handleAddBoard = () => {
        console.log('add new Board');
        //----- add code implementation here-----
        
        //---------------------------------------
    }

    const [menuisOpen, setMenuIsOpen] = useState(false);
    const toggleMenu = () => {
        setMenuIsOpen(!menuisOpen);
    }

    return (
        <div className='fix-position sidebar-mobile-container' style={{top: '0px', left: '0px'}}>
        <nav id="mobile-sidebar" className='position-relative'>

            <div className="sidebar-header flex-display vertical-align-center sidebar-block">
                <Image src={'/assets/img/logo.png'} width={30} height={30} alt='logo'/> <span>Resumizeme</span> <List onClick={() => toggleMenu()} className='ms-auto menu-access'/>
            </div>
            <div className={`sidebar-content ${menuisOpen ? '': 'hide'} flex-display default-gap flex-direction-column  sidebar-block`}>
                <div className='main-title'>
                    <Link className='with-icon my-template' href="#" >My template</Link>
                </div>
                <div className='main-title'>
                    <span className='with-icon search'>Search</span>
                    { data.wishlists.length > 0 && (
                        <ul className="list-nostyle second-level">
                            {data.wishlists.map((wishlist, index) => (
                                <li key={index}> <Link className='with-icon star' href="#">{wishlist.title}</Link></li>
                            ))}
                            
                        </ul>
                    ) }
                    { data.histories.length > 0 && (
                        <ul className="history-list list-nostyle second-level">
                            {data.histories.map((history, index) => (
                                <li key={index}> <Link className='with-icon history' href="#">{history.title}</Link></li>
                            ))}
                            
                        </ul>
                    ) }
                    
                </div>
                
                <div className='main-title'>
                    <span className='with-icon boards flex-display vertical-align-center'>My Boards<PlusCircle onClick={() => handleAddBoard()} className='add-board-btn ms-auto'/></span>
                    { data.boards.length > 0 && (
                        <ul className="list-nostyle second-level">
                            {data.boards.map((board, index) => (
                                <li key={index}> <Link className={`with-icon ${board.class}`} href="#">{board.title}</Link></li>
                            ))}
                            
                        </ul>
                    ) }
                    
                </div>
            </div>
            <div className={`sidebat-footer ${menuisOpen ? '': 'hide'} flex-display second-gap vertical-align-center sidebar-block`}>
                <Image src={'/assets/img/clara.png'} width={30} height={30} className='rounded-circle' alt='profile setting'/> <span>Carla</span> <GearFill className='setup-icon ms-auto'/>
            </div>

        </nav>
        </div>
    );
}

export default Mobilesidebar;