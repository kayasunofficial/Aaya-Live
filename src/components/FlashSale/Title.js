import React, { useState, useEffect } from 'react';
import Product from './Product';

function Title() {
    const [timeRemaining, setTimeRemaining] = useState(24 * 60 * 60);

    useEffect(() => {
        const interval = setInterval(() => {
            if (timeRemaining > 0) {
                setTimeRemaining(timeRemaining - 1);
            } else {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [timeRemaining]);

    const hours = Math.floor(timeRemaining / 3600);
    const minutes = Math.floor((timeRemaining % 3600) / 60);
    const seconds = timeRemaining % 60;

    return (
        <>
            <section className='flash-color'>
                <h4 className='flash-sales'>TODAY</h4>
                <div className="flash-con">
                    <div className="flex2">
                        <h1 className='flash-header'>Super Deals</h1>
                        <div className='timer'>
                            <span className="tm">Ending In</span>
                            <span className='timer-part'>{`${hours}`}</span> :
                            <span className='timer-part'>{`${minutes}`}</span> :
                            <span className='timer-part'>{`${seconds}`}</span>
                            <i class="fa-solid fa-angle-right right-arrow"></i>
                        </div>
                    </div>
                    <button className="view">SHOP MORE</button>
                </div>
                <Product />
            </section>
        </>
    );
}

export default Title;





















