export default function AnnouncementSlide({content, redirection}) {
    
  return (
    <div className="announcement-slide">
      { content && redirection ? (
        <a href={redirection} title="slide link" target="_blank">
          <p>{content}</p>  
        </a>
      ) : (
        <p>{content}</p>
      )}
    </div>
  );
}
