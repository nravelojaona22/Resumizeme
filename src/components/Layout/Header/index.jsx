import React from 'react';

const Header = ({noheader}) => {
    return (
        <>
            { ((noheader != null && noheader===false) || (noheader === null)) && (
                <header>
                    
                </header>
            )}
            
        </>
    );
}

export default Header;