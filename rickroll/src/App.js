import { useState } from 'react';
import './App.css';
import ReactPlayer from 'react-player'

function App() {
  const [play, setPlay] = useState(false);

  return (
    <div style={{ textAlign: '-webkit-center', marginTop: '2%' }}>
      {play === false && <button onClick={() => setPlay(true)} style={{ position: 'absolute', top: '50%', left: '50%' }}>Start</button>}
      <div style={{ display: play === true ? 'block' : 'none' }}>
        <ReactPlayer url='https://youtu.be/fn1PVDDo2lE?si=UUxjKa_VQbqUauhh&t=72'
          // style={{ margin: 'auto' }}
          width={1366}
          height={768}
          playing={play}
          controls={true}
        />
      </div>
    </div>
  );
}

export default App;
