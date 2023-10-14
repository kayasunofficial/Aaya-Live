import React from 'react';

export default function Product() {

    const products = [
        {
            name: 'Mika Leatherette Study Chair In White Colour',
            price: 2000,
            originalPrice: 4000,
            imageSrc: 'images/product/pro1.webp',
            discountPercent: '20%',
        },
        {
            name: 'Mika Leatherette Study Chair In White Colour',
            price: 1500,
            originalPrice: 2500,
            imageSrc: 'images/product/pro13.webp',
            discountPercent: '20%',
        },
        {
            name: 'Mika Leatherette Study Chair In White Colour',
            price: 1800,
            originalPrice: 3200,
            imageSrc: 'images/product/pro3.webp',
            discountPercent: '20%',
        },

    ];

    return (
        <>
            <section className="products-super-deals">
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

        </>
    );
}

