import { useState, useRef} from 'react';
import song from './song.mp3'
import './App.css';

function App() {

const[musicPlay, setMusicPlay] = useState(true);
const refAudio = useRef();
const handlePlay = ()=> {
  setMusicPlay(!musicPlay)
  musicPlay ? refAudio.current.play() : refAudio.current.pause();

}
  return (
    <div className="App">
<audio 
    src={song}
    loop='loop'
    ref={refAudio}>
    </audio>
    <button onClick={handlePlay}>{musicPlay ? 'Play': 'Pause'}</button>
    </div>
  );
 }

export default App;
