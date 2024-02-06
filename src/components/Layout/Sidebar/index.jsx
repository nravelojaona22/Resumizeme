import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PlusCircle, GearFill, List, XCircle } from 'react-bootstrap-icons';

const Sidebar = ({data}) => {

    const handleAddBoard = () => {
        //----- add code implementation here-----
        alert('Add new Board');
        //---------------------------------------
    }

    const handleConfigProfile = () => {
        alert('Config Profile');
    }

    const hideClass = 'hide';
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const toogleSidebar = (isOpen) => {
        setSidebarOpen(isOpen);
    }

    return (
        <nav id="sidebar" className={`sidebar ${sidebarOpen ? '' : 'hide'} position-relative`}>
            <div className="sidebar-header">
                <Image src={'/assets/img/logo.png'} width={35} height={35} alt='logo'/> <span>Resumizeme</span>  
                { sidebarOpen && ( <XCircle onClick={() => toogleSidebar(false)} className='resp-menu ms-auto'/> )}
                { !sidebarOpen && ( <List onClick={() => toogleSidebar(true)} className='resp-menu ms-auto'/> )}
            </div>
            <div className={`sidebar-content ${sidebarOpen ? '' : hideClass}`}>
                <div className='main-title'>
                    <Link className='with-icon my-template' href="#" >My template</Link>
                </div>
                <div className='main-title search-container'>
                    <span className='with-icon search'>Search</span>
                    { data.wishlists.length > 0 && (
                        <ul className="star-list list-nostyle second-level">
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
                
                <div className='main-title board-container'>
                    <span className='with-icon boards flex-display vertical-align-center'>My Boards<PlusCircle onClick={() => handleAddBoard()} className='add-board-btn ms-auto'/></span>
                    { data.boards.length > 0 && (
                        <ul className="board-list list-nostyle second-level">
                            {data.boards.map((board, index) => (
                                <li key={index}> <Link className={`with-icon ${board.class}`} href="#">{board.title}</Link></li>
                            ))}
                            
                        </ul>
                    ) }
                    
                </div>
            </div>
            <div className={`sidebar-footer flex-display ${sidebarOpen ? '' : hideClass}`}>
                <Image src={'/assets/img/clara.png'} width={40} height={40} className='rounded-circle' alt='profile setting'/> <span>Carla</span> <GearFill onClick={() => handleConfigProfile()}  width={20} height={20} className='setup-icon ms-auto'/>
            </div>

        </nav>
    );
}

export default Sidebar;