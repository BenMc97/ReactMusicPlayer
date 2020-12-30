import {useState, useRef} from 'react';
//Styles
import "./styles/app.scss";
//Components
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
import data from './data';
import Nav from './components/Nav';


function App() {
  const audioRef = useRef(null);
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);

  const timeUpdateHandlers = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    //Calculate percentage
    const roundCurrent = Math.round(current);
    const roundDuration = Math.round(duration);
    const animation = Math.round((roundCurrent  / roundDuration) *100);
    setSongInfo({...songInfo, currentTime: current, duration: duration, animationPercentage: animation});
  } 
  const songEndHandler = async () => {
      let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
      await setCurrentSong(songs[(currentIndex+1) % songs.length]);
      if (isPlaying) audioRef.current.play();
  }
  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player setSongs={setSongs} setCurrentSong={setCurrentSong} songs={songs} songInfo={songInfo} setSongInfo={setSongInfo} audioRef={audioRef} isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong} />
      <Library libraryStatus={libraryStatus} setSongs={setSongs} setIsPlaying={setIsPlaying} audioRef={audioRef} songs={songs} setCurrentSong={setCurrentSong} />
      <audio onEnded={songEndHandler} onLoadedMetadata={timeUpdateHandlers} onTimeUpdate={timeUpdateHandlers} ref={audioRef} src={currentSong.audio} />
    </div>
  );
}

export default App;
