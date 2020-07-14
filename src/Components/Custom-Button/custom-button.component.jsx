import React from 'react'
import './custom-button.styles.scss';

function CustomButton({children,...otherButtonProps}) {
    return (
        <div>
            <button className="custom-button" {...otherButtonProps}>{children}</button>            
        </div>
    )
}

export default CustomButton;
