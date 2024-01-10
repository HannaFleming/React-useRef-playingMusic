***useRef***

Let’s run the following command to set up a development environment with Create React App:

```
npx create-react-app react-audio-player
```
Then do the following to start the project:
```
cd react-audio-player
npm start
```
Next, in the src file add your song.
```
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

```


https://github.com/HannaFleming/useRef-payingMusic/assets/124400864/b1fe1a99-4926-4d56-b2cd-b96897b7e388

