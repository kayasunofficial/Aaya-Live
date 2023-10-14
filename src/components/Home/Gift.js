import React from 'react';

export default function Gift() {

    const products = [
        {
            name: 'Mika Leatherette Study Chair In White Colour',
            price: 2000,
            originalPrice: 4000,
            imageSrc: 'images/product/pro16.webp',
            discountPercent: '20%',
        },
        {
            name: 'Mika Leatherette Study Chair In White Colour',
            price: 1500,
            originalPrice: 2500,
            imageSrc: 'images/product/pro34.webp',
            discountPercent: '20%',
        },
        {
            name: 'Mika Leatherette Study Chair In White Colour',
            price: 1800,
            originalPrice: 3200,
            imageSrc: 'images/product/pro45.webp',
            discountPercent: '20%',
        },

    ];

    return (

        <>
            <div className='flash-color'>
                <div className="gift-head">
                    <h1 className='gift'>Gifts for New User</h1>
                    <i class="fa-solid fa-arrow-right"></i>
                </div>
                <p className='gift-p'>Free shipping</p>
                <section className="products-super-deals gift-deals">
                    {products.map((product, index) => (
                        <div className="pro-list-super-deals" key={index}>
                            <img src={product.imageSrc} alt="" />
                            <p className='pro-price-super-deals'>Rs. {product.price}</p>
                            <div className='discount-super-deals'>
                                <p className='dis-price-super-deals'>Rs. {product.originalPrice}</p>
                                <p className='discount-percent-super-deals'>-{product.discountPercent}</p>
                            </div>
                        </div>
                    ))}
                </section>
            </div>

        </>
    );
}

