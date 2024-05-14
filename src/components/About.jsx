import React, { useState } from 'react';

const About = () => {
  const [isAnimeExpanded, setIsAnimeExpanded] = useState(false);
  const [isSportsExpanded, setIsSportsExpanded] = useState(false);
  const [isMusicExpanded, setIsMusicExpanded] = useState(false);

  const toggleAnime = () => {
    setIsAnimeExpanded(!isAnimeExpanded);
  };

  const toggleSports = () => {
    setIsSportsExpanded(!isSportsExpanded);
  };

  const toggleMusic = () => {
    setIsMusicExpanded(!isMusicExpanded);
  };

  return (
    <div>
      <div className="plate">
        <h1>Learn more about me!</h1>
        <p>These are some of my many (but not limited) to interests!</p>
      </div>
      <div className="plate">
        <h2 className="anime" onClick={toggleAnime} style={{ cursor: 'pointer' }}>Anime {isAnimeExpanded ? '🧙‍♂️' : '🧙‍♂️'}</h2>
        {isAnimeExpanded && (
          <p className="anime">
            - Quintessential Quintuplets <br />
            <img className="aboutImages" src="https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,fit=contain,width=1200,height=675,quality=85/catalog/crunchyroll/010634e9d1c76f0596248c1091e4586c.jpe"/> <br/>
            - Frieren <br />
            <img className="aboutImages" src="https://pbs.twimg.com/media/GJVAgpfXoAAaJFg?format=jpg&name=4096x4096"/> <br/>
            - Attack on Titan <br />
            <img className="aboutImages" src="https://pbs.twimg.com/media/F-Fs4wqbQAAhI4r?format=jpg&name=large"/> <br/>
            - Food Wars <br/>
            <img className="aboutImages" src="https://de7i3bh7bgh0d.cloudfront.net/2020/06/04/22/13/31/3fff201f-33e7-4cdc-b18a-3f1e3e44d62f/FoodWars36_blogsplash_1200x630.jpg"/>
          </p>
        )}
        <p>I have simple taste so if I enjoy it then I think it's good (LOL)</p>
      </div>
      <div className="plate">
        <h2 className="sports" onClick={toggleSports} style={{ cursor: 'pointer' }}>Sports {isSportsExpanded ? '⚽' : '⚽'}</h2>
        {isSportsExpanded && (
          <p className="sports">
            - Soccer <br />
            <img className="aboutImages" src="https://cdn.vox-cdn.com/thumbor/ZFf6V8H7w2tkCQaDWS_X_13ZB8M=/0x0:3559x2341/1200x800/filters:focal(1496x887:2064x1455)/cdn.vox-cdn.com/uploads/chorus_image/image/72194756/1480830938.0.jpg"/> <br/>
            - Basketball <br />
            <img className="aboutImages" src="https://i.ytimg.com/vi/V8RleExl3yw/maxresdefault.jpg"/> <br/>
            - Badminton <br />
            <img className="aboutImages" src="https://media.istockphoto.com/id/1192023529/photo/asian-badminton-player-is-hitting-in-court.jpg?s=612x612&w=0&k=20&c=32rDisHRvLTxaetdlFHZ0lsaWqu3yYO21w-hv4Z29xs="/>
          </p>
        )}
        <p>These are just sports that I enjoy watching, I do not play any of them except for badminton.</p>
      </div>
      <div className="plate">
        <h2 className="music" onClick={toggleMusic} style={{ cursor: 'pointer' }}>Music {isMusicExpanded ? '🎵' : '🎵'}</h2>
        {isMusicExpanded && (
          <p className="music">
            - Grent Perez <br />
            <img className="aboutImages" src="https://assets.teenvogue.com/photos/65326617f2b842152f4a913d/16:9/w_1920,h_1080,c_limit/gp-press-16x9crop2%20-%20OWY%20press.jpg"/> <br/>
            - Wave 2 Earth <br />
            <img className="aboutImages" src="https://kohai.com/wp-content/uploads/2023/04/wave-to-earth.jpg"/> <br/>
            - YOASOBI <br />
            <img className="aboutImages" src="https://assets.teenvogue.com/photos/63b98a0effed78bd420c4383/16:9/w_2560%2Cc_limit/YOASOBI_A%25E5%2586%2599_2021_12.jpg"/> <br/>
            - BTS <br/>
            <img className="aboutImages" src="https://variety.com/wp-content/uploads/2020/09/bts-variety-cover-shoot-full-band-1-16x9-1.jpg"/>
          </p>
        )}
        <p>I am always listening to music whether I'm driving, doing work, and just chilling. These are some of my favorite artists.</p>
      </div>
    </div>
  );
};

export default About;
