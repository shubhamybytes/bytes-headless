import Slider from 'react-slick';
import '../../styles/slick.css';
import '../../styles/slick-theme.css';

import AnnouncementSlide from './AnnouncementSlide';
import '../../styles/announcement.css';

export default function Announcement() {
  const announcementData = {
    slides: [
      {
        content: 'announcement first',
        redirection: 'https://www.example.com',
      },
      {
        content: 'announcement second',
        redirection: 'https://www.example.com',
      },
      {
        content: 'announcement third',
        redirection: 'https://www.example.com',
      },
    ],
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
        content={announcement.content}
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
  const classes = `container ${announcementData.settings.fullWidth?'':'page-width'}`

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
