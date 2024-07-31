import Slider from 'react-slick';
import '../../styles/slick.css';
import '../../styles/slick-theme.css';

import AnnouncementSlide from './AnnouncementSlide';
import '../../styles/announcement.css';
import fetchEvents from 'fetchEvents';
import { Suspense } from 'react';

import { useState, useEffect } from 'react';


export default function Announcement() {
  
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetchEvents()
      .then((data) => setEvents(data))
      .catch((error) => console.error(error));
  }, []);



  const announcementData = {
    slides: events.map(slide => {
      return {
        title: slide.title,
        redirection: slide.url || ''
      }
    }),
    settings: {
        backgroundColor: '#123432',
        textColor: '#ffffff',
        fullWidth: true
    }
  };

  const announcementSlides = announcementData.slides.map(
    (announcement, index) => (
      <AnnouncementSlide 
        key={index}
        content={announcement.title}
        redirection={announcement.redirection}
      />
    ),
  );
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };


  const pageStyle = {
    '--announcement-bg': announcementData.settings.backgroundColor,
    '--textColor': announcementData.settings.textColor
  }
  const classes = `container ${announcementData.settings.fullWidth?'':'page-width'}`;

  console.log('announcement data is : ', announcementData);
  

  return (
    <div className="announcement-bar-container" style={pageStyle}>
      <div className={classes}>
        <div className="announcement-slider">
          <Slider {...settings}>{announcementSlides}</Slider>
        </div>
      </div>
    </div>
  );
}
