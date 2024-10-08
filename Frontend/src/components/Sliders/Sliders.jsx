import React from 'react';
import Slider from 'react-slick';
import { Image } from 'antd';

const Sliders = ({ arrImages }) => {
    const setting = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplayspeed: 1000
    };
    return (
        <Slider {...setting}>
            {arrImages.map((image) => {
                return (
                    < Image src={image} alt="anh1" preview={false} width="100%" height="274px" />
                )
            })}
        </Slider>
    )
}

export default Sliders
