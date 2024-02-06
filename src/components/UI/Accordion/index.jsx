import React, { useState } from 'react';
import { PlusCircle, DashCircle } from 'react-bootstrap-icons';
import { CSSTransition } from 'react-transition-group';

const Accordion = ({ children, isOpen, titleClass, contentClass, duration, handleToggleClick, title }) => {

    return (
        <>
            <div className='accordion-container'>
                <span className={titleClass}>{ title }
                    { isOpen ? ( <DashCircle onClick={() => handleToggleClick(false)} className='toggle1 ms-auto'/> ) : (<PlusCircle onClick={() => handleToggleClick(true)} className='toggle1 ms-auto'/> ) }
                </span>
                <CSSTransition
                    in={isOpen}
                    timeout={duration === null ? 300 : duration}
                    classNames="slideDown"
                    unmountOnExit
                >
                    <ul className={`slideUpContent ${contentClass}`}>
                        { children }
                    </ul>
                </CSSTransition>
            </div>
        </>
    );
}

export default Accordion;