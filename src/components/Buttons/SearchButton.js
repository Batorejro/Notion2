import React, { useEffect, useRef, useState } from 'react';


const Button = (props) => {
    return (
        <div>
            {props.symbol === "plus" && <Icon className="fa fa-plus-circle" />}
            <button onClick={props.onClick} />
        </div>
    );
}
export default Button;