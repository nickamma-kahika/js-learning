import React, { useState } from 'react'

export default function Count() {

    const handleOnClick = () => {
        let newCount = count + 1;
        setCount(newCount);

    }

    const [count, setCount] = useState(0);

    return (
        <div className='container my-3'>
            <button type="button" className="btn btn-primary" onClick={handleOnClick}>Count is {count}</button>
        </div>
    );
}