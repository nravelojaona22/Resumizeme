import React from 'react';
import { CheckCircleFill, XCircle } from 'react-bootstrap-icons';

const Input = ({childen, htmlFor, LabelTxt, classCol, isValid, ...props}) => {
    const column = classCol !== null ? classCol : '';
    const customLabel = {
        position: 'absolute',
        backgroundColor: '#fff',
        top: '-8px',
        left: '12px',
        fontSize: '0.8rem',
        padding: '0px 3px 0px 3px'
    };

    const customInput = {
        padding: '13px 30px 13px 13px'
    };

    return (
        <div className={`input-container ${column}`} style={{position: 'relative'}}>
            <label style={customLabel} className="form-label" htmlFor={htmlFor}>{LabelTxt}</label>
            <input style={customInput} className="form-control" {...props} />
            {isValid && (<CheckCircleFill width={20} height={20}  className='icon-validation ok' />)}
        </div>
    )
}

export default Input;
