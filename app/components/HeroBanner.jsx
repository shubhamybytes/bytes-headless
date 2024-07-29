import Slider from 'react-slick';
import '../styles/slick.css';
import '../styles/slick-theme.css';
import {Image} from '@shopify/hydrogen';
import {Link} from '@remix-run/react';
import '../styles/hero-banner.css';

export default function HeroBanner() {
  const data = {
    heading: '',
    banners: [
      {
        img: 'https://cdn.shopify.com/s/files/1/0661/9965/0467/files/stylish-summer-necklace_925x_c29781f7-63a3-4f4b-9696-cecc75938970.jpg',
        
      },
      {
        img: 'https://cdn.shopify.com/s/files/1/0661/9965/0467/files/pretty-gold-necklace_925x_8c464b00-5736-4dec-9daf-aedf344c9cd0.jpg',
        redirect: '/collections/necklace',
      },
    ],
    settings: {
      fullWidth: false,
    },
  };

  const classes = `container ${data.settings.fullWidth ? '' : 'page-width'}`;

  const images = data.banners.map((banner, index) => (
    <div className='banner-slide'>
      {banner.redirect && <Link to={banner.redirect} className='banner-link'></Link>}
      <Image src={banner.img}  sizes="(min-width: 45em) 50vw, 100vw" />
    </div>
    
  ));
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true
  };


  // console.log(shopify.image.url(data.banners[0].img));

  return (
    <section
      id="heroBanner"
      className="shopify-section hero-banner index-section"
    >
      <div className={classes}>
        {data.heading && (
          <div className="banner-heading">
            <h1>{data.heading}</h1>
          </div>
        )}
        <div className="banner-images"><Slider {...settings}>{images && images}</Slider></div>
      </div>
    </section>
  );
}
