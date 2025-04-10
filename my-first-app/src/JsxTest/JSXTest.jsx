import React from 'react';

function JSXTest(){
    const name = 'ReactJS';
    const num = 10 ;
    return(
        <div>
            <h1>Welcome to {name}</h1>
            <h2>Welcome to {num===10 ? 'Number is 10' : 'Number is Not 10'}</h2>
        </div>
    )
}
export default JSXTest;