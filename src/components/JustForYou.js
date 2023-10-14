import React from 'react';

function ProductItem({ product }) {
    return (
        <div className='product-item' key={product.id}>
            <img src={product.imageSrc} alt='' className='product-image' />
            <div className="pri">
                <p className="product-prices">Rs.{product.price}</p>
                <div className="pporiginal">
                    <p className="product-oprice">Rs.{product.originalPrice}</p>
                    <p className="discount-per">-60%</p>
                </div>
            </div>
            <i class="fa-solid fa-star ratings-ico"><p>4.8/5</p></i>
            <h3 className='product-names'>{product.name}</h3>
        </div>
    );
}

export default function JustForYou() {

    const productsList1 = [
        {
            id: 1,
            name: 'Multicolor Vela Cotton Bedsheet With 2 Pillow Cover For Double Bed',
            price: '350',
            imageSrc: 'images/product/pro8.webp',
            originalPrice: '500',
        },
        {
            id: 2,
            name: 'Beautiful Floral Patterned Tablecloth For Dining Room Decor',
            price: '150',
            imageSrc: 'images/product/pro2.webp',
            originalPrice: '500',
        },
        {
            id: 3,
            name: 'Premium Quality Stainless Steel Kitchen Utensil Set - 12 Pieces',
            price: '200',
            imageSrc: 'images/product/pro3.webp',
            originalPrice: '400',
        },
        {
            id: 4,
            name: 'Luxurious Velvet Sofa Cover With Elastic Straps - Multiple Colors',
            price: '280',
            imageSrc: 'images/product/pro4.webp',
            originalPrice: '450',
        },
        {
            id: 5,
            name: 'Set of 4 Decorative Throw Pillow Covers - Various Designs',
            price: '320',
            imageSrc: 'images/product/pro5.webp',
            originalPrice: '600',
        },
        {
            id: 6,
            name: 'Elegant Crystal Chandelier for Dining Room and Living Room',
            price: '220',
            imageSrc: 'images/product/pro6.webp',
            originalPrice: '380',
        },
        {
            id: 7,
            name: 'Adjustable Ergonomic Office Chair with Lumbar Support',
            price: '190',
            imageSrc: 'images/product/pro7.webp',
            originalPrice: '320',
        },
        {
            id: 8,
            name: 'Durable Stainless Steel Insulated Travel Mug - 16oz',
            price: '360',
            imageSrc: 'images/product/pro8.webp',
            originalPrice: '600',
        },
        {
            id: 9,
            name: 'Handwoven Cotton Area Rug for Bedroom and Living Room',
            price: '250',
            imageSrc: 'images/product/pro9.webp',
            originalPrice: '400',
        },
        {
            id: 10,
            name: 'Electric Milk Frother and Steamer for Coffee and Latte',
            price: '430',
            imageSrc: 'images/product/pro10.webp',
            originalPrice: '700',
        },
        {
            id: 11,
            name: 'Noise-Canceling Bluetooth Headphones with Built-in Mic',
            price: '300',
            imageSrc: 'images/product/pro11.webp',
            originalPrice: '550',
        },
        {
            id: 12,
            name: 'Modern Wood and Metal Coffee Table for Living Room',
            price: '150',
            imageSrc: 'images/product/pro12.webp',
            originalPrice: '300',
        },
        {
            id: 13,
            name: 'Stainless Steel Kitchen Knife Set with Wooden Block - 14 Pieces',
            price: '260',
            imageSrc: 'images/product/pro13.webp',
            originalPrice: '450',
        },
        {
            id: 14,
            name: 'Decorative Wall Mirror with Round Bamboo Frame',
            price: '220',
            imageSrc: 'images/product/pro14.webp',
            originalPrice: '380',
        },
        {
            id: 15,
            name: 'Ceramic Plant Pots with Drainage Holes - Set of 3',
            price: '190',
            imageSrc: 'images/product/pro15.webp',
            originalPrice: '320',
        },
        {
            id: 16,
            name: 'Elegant Crystal Chandelier for Dining Room and Living Room',
            price: '360',
            imageSrc: 'images/product/pro16.webp',
            originalPrice: '600',
        },
        {
            id: 17,
            name: 'Adjustable Ergonomic Office Chair with Lumbar Support',
            price: '250',
            imageSrc: 'images/product/pro17.webp',
            originalPrice: '400',
        },
        {
            id: 18,
            name: 'Durable Stainless Steel Insulated Travel Mug - 16oz',
            price: '430',
            imageSrc: 'images/product/pro18.webp',
            originalPrice: '700',
        },
        {
            id: 19,
            name: 'Handwoven Cotton Area Rug for Bedroom and Living Room',
            price: '300',
            imageSrc: 'images/product/pro19.webp',
            originalPrice: '550',
        },
        {
            id: 20,
            name: 'Electric Milk Frother and Steamer for Coffee and Latte',
            price: '150',
            imageSrc: 'images/product/pro20.webp',
            originalPrice: '300',
        },
        {
            id: 21,
            name: 'Noise-Canceling Bluetooth Headphones with Built-in Mic',
            price: '260',
            imageSrc: 'images/product/pro21.webp',
            originalPrice: '450',
        },
        {
            id: 22,
            name: 'Modern Wood and Metal Coffee Table for Living Room',
            price: '220',
            imageSrc: 'images/product/pro22.webp',
            originalPrice: '380',
        },
        {
            id: 23,
            name: 'Stainless Steel Kitchen Knife Set with Wooden Block - 14 Pieces',
            price: '190',
            imageSrc: 'images/product/pro23.webp',
            originalPrice: '320',
        },
        {
            id: 24,
            name: 'Decorative Wall Mirror with Round Bamboo Frame',
            price: '360',
            imageSrc: 'images/product/pro24.webp',
            originalPrice: '600',
        },
        {
            id: 25,
            name: 'Ceramic Plant Pots with Drainage Holes - Set of 3',
            price: '250',
            imageSrc: 'images/product/pro25.webp',
            originalPrice: '400',
        },
    ];


    const productsList2 = [
        {
            id: 26,
            name: 'Elegant Solid Wood Dining Table Set with Bench and Chairs',
            price: '250',
            imageSrc: 'images/product/pro26.webp',
            originalPrice: '400',
        },
        {
            id: 27,
            name: 'Modern Sectional Sofa with Reversible Chaise Lounge',
            price: '180',
            imageSrc: 'images/product/pro27.webp',
            originalPrice: '300',
        },
        {
            id: 28,
            name: 'Luxury Queen Size Upholstered Platform Bed Frame',
            price: '280',
            imageSrc: 'images/product/pro28.webp',
            originalPrice: '450',
        },
        {
            id: 29,
            name: 'Contemporary Glass Coffee Table with Stainless Steel Legs',
            price: '320',
            imageSrc: 'images/product/pro29.webp',
            originalPrice: '600',
        },
        {
            id: 30,
            name: 'Modern Velvet Armchair with Tufted Backrest',
            price: '220',
            imageSrc: 'images/product/pro30.webp',
            originalPrice: '380',
        },
        {
            id: 31,
            name: 'Elegant Crystal Chandelier with 6 Lights',
            price: '190',
            imageSrc: 'images/product/pro31.webp',
            originalPrice: '320',
        },
        {
            id: 32,
            name: 'Contemporary TV Stand with Storage Shelves',
            price: '360',
            imageSrc: 'images/product/pro32.webp',
            originalPrice: '600',
        },
        {
            id: 33,
            name: 'Luxury Bedding Set with Embroidered Duvet Cover',
            price: '250',
            imageSrc: 'images/product/pro33.webp',
            originalPrice: '400',
        },
        {
            id: 34,
            name: 'Stylish Glass Dining Table with Metal Base',
            price: '430',
            imageSrc: 'images/product/pro34.webp',
            originalPrice: '700',
        },
        {
            id: 35,
            name: 'Modern L-Shaped Sectional Sofa with Chaise',
            price: '300',
            imageSrc: 'images/product/pro35.webp',
            originalPrice: '550',
        },
        {
            id: 36,
            name: 'Elegant Bedroom Dresser with Mirror and Drawers',
            price: '150',
            imageSrc: 'images/product/pro36.webp',
            originalPrice: '300',
        },
        {
            id: 37,
            name: 'Contemporary Bar Stools with Adjustable Height',
            price: '260',
            imageSrc: 'images/product/pro37.webp',
            originalPrice: '450',
        },
        {
            id: 38,
            name: 'Luxury Crystal Table Lamp with Fabric Shade',
            price: '220',
            imageSrc: 'images/product/pro38.webp',
            originalPrice: '380',
        },
        {
            id: 39,
            name: 'Elegant Kitchen Faucet with Pull-Down Sprayer',
            price: '190',
            imageSrc: 'images/product/pro39.webp',
            originalPrice: '320',
        },
        {
            id: 40,
            name: 'Contemporary Wall Art Canvas Prints Set',
            price: '360',
            imageSrc: 'images/product/pro40.webp',
            originalPrice: '600',
        },
        {
            id: 41,
            name: 'Luxury Bath Towel Set with Embroidered Design',
            price: '250',
            imageSrc: 'images/product/pro41.webp',
            originalPrice: '400',
        },
        {
            id: 42,
            name: 'Stylish Desk Chair with Ergonomic Design',
            price: '430',
            imageSrc: 'images/product/pro42.webp',
            originalPrice: '700',
        },
        {
            id: 43,
            name: 'Modern Outdoor Dining Set with Cushioned Chairs',
            price: '300',
            imageSrc: 'images/product/pro43.webp',
            originalPrice: '550',
        },
        {
            id: 44,
            name: 'Elegant Velvet Throw Pillow Covers Set',
            price: '150',
            imageSrc: 'images/product/pro44.webp',
            originalPrice: '300',
        },
        {
            id: 45,
            name: 'Contemporary Wall Mirror with Metal Frame',
            price: '260',
            imageSrc: 'images/product/pro45.webp',
            originalPrice: '450',
        },
        {
            id: 46,
            name: 'Luxury Tableware Set with Gold Trim',
            price: '220',
            imageSrc: 'images/product/pro46.webp',
            originalPrice: '380',
        },
        {
            id: 47,
            name: 'Elegant Bedside Table with Drawer and Shelf',
            price: '190',
            imageSrc: 'images/product/pro47.webp',
            originalPrice: '320',
        },
        {
            id: 48,
            name: 'Stylish Area Rug with Modern Geometric Design',
            price: '360',
            imageSrc: 'images/product/pro48.webp',
            originalPrice: '600',
        },
        {
            id: 49,
            name: 'Modern Sofa Bed with Convertible Design',
            price: '250',
            imageSrc: 'images/product/pro49.webp',
            originalPrice: '400',
        },
        {
            id: 50,
            name: 'Luxury Dining Table Set with Velvet Chairs',
            price: '180',
            imageSrc: 'images/product/pro50.webp',
            originalPrice: '300',
        },

    ];


    return (
        <>
            <p className='pro-heading'>Just For You</p>
            <section className='product-con'>
                <div className='product-list'>
                    {productsList1.map((product) => (
                        <ProductItem key={product.id} product={product} />
                    ))}
                </div>

                <div className='product-list'>
                    {productsList2.map((product) => (
                        <ProductItem key={product.id} product={product} />
                    ))}
                </div>
            </section>
        </>

    );
}
