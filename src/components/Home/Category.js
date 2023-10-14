import React from 'react'

function Category() {

    const categories1 = [
        {
            name: "All Category",
            imageSrc: "images/category/all-cat.webp",
        },
        {
            name: "Fashion",
            imageSrc: "images/category/fash.webp",
        },
        {
            name: "Electronics",
            imageSrc: "images/category/electro.png",
        },
        {
            name: "Computer & Office",
            imageSrc: "images/category/comp.jpg",
        },
    ];

    const categories2 = [
        {
            name: "Automobiles & Parts",
            imageSrc: "images/category/auto.jpeg",
        },
        {
            name: "Home & Garden",
            imageSrc: "images/category/home.jpg",
        },
        {
            name: "Phone & Gadgets",
            imageSrc: "images/category/phone.webp",
        },
        {
            name: "Sports & Entertainment",
            imageSrc: "images/category/sports.jpg",
        },
    ];

    return (
        <>
            <section className='category'>
                <span className='flex-cat1'>
                    {categories1.map((category, index) => (
                        <div className="cat-names" key={index}>
                            <img src={category.imageSrc} alt="" />
                            <p className='cat-nam'>{category.name}</p>
                        </div>
                    ))}
                </span>
                <span className='flex-cat2'>
                    {categories2.map((category, index) => (
                        <div className="cat-names" key={index}>
                            <img src={category.imageSrc} alt="" />
                            <p className='cat-nam'>{category.name}</p>
                        </div>
                    ))}
                </span>
            </section>
        </>
    )
}

export default Category