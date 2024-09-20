import { useState } from 'react';
import './App.css';
import ReactPlayer from 'react-player'

function App() {
  const [play, setPlay] = useState(false);

  return (
    <div style={{ textAlign: '-webkit-center', marginTop: '2%' }}>
      {play === false && <button onClick={() => setPlay(true)} style={{ position: 'absolute', top: '50%', left: '50%' }}>Start</button>}
      <div style={{ display: play === true ? 'block' : 'none' }}>
        <ReactPlayer url='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
          // style={{ margin: 'auto' }}
          width={1366}
          height={768}
          playing={play}
        />
      </div>
    </div>
  );
}

export default App;
