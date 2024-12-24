import TikTokVideoLoop from './TikTokVideoLoop';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from './Footer';

const Yas = () => {
  const ybh = () => {
    return (
      <div className="ybh">
        <div className="profile">
          <h4 style={{color: 'white'}}>Yazmineey's Space</h4>
          <img src="/Yaslogo.jpg" alt="yas profile" />
        </div>
        <div className="star" style={{ top: '10%', left: '10%' }}></div>
        <div className="star" style={{ top: '20%', left: '80%' }}></div>
        <div className="star" style={{ top: '70%', left: '50%' }}></div>
        <div className="star" style={{ top: '80%', left: '20%' }}></div>
        <div className="star" style={{ top: '50%', left: '90%' }}></div>
      </div>
    );
  };

  return (
    <>
      <nav>
        {ybh()}
        <div className="display-image">
          <img src="/yasProfile.jpg" alt="display" className="display-img" />
        </div>
      </nav>
      <div className="content-display">
        <Content />
        <Accounts />
      </div>
      <TikTokVideoLoop />
      <Footer />
    </>
  );
};



function Content() {
  return (
    <div className='content'>
       <h5 className='name'>Hi! Am Yas💕</h5>
       <p className='descript'>A content creator and micro influencer✨</p>
    </div>
  )
}



function Accounts() {
  return (
    <div className="account-links">
      <a href="https://www.instagram.com/_yazmineey?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
        Check me out on Instagram <i className="fab fa-instagram"></i>
      </a>
      <a href="https://www.tiktok.com/@yas.is.so.fab?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer">
        Check me out on TikTok <i className="fab fa-tiktok"></i>
      </a>
    </div>
  )
}

export default Yas;