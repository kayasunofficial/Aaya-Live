import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Banner() {

    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        touchMove: true,
    };

    const imageUrls = [
        'images/banner/banner2.png',
        'images/banner/banner7.png',
        'images/banner/banner3.png',
        'images/banner/banner4.png',
        'images/banner/banner5.png',
        'images/banner/banner6.png',
    ];
    return (
        <>
            <section className='banner'>
                <Slider {...settings}>
                    {imageUrls.map((imageUrl, index) => (
                        <div key={index}>
                            <img src={imageUrl} alt="" />
                        </div>
                    ))}
                </Slider>

            </section>

        </>
    )
}

export default Banner