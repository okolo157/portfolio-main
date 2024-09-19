import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeOff, faVolumeHigh } from '@fortawesome/free-solid-svg-icons'
import { useState, useRef } from 'react'
import './btnstyle.scss'

function Player() {
  const [isPlaying, setIsPlaying] = useState(true)

  const audioRef = useRef(null) // Reference to the audio element
 

  const onlineAudioUrl = 'http://streaming.tdiradio.com:8000/house.mp3'

  const togglePlay = () => {
    const audio = audioRef.current

    if (audio.paused) {
      audio.play()
    } else {
      audio.pause()
    }

    setIsPlaying(!isPlaying)
  }
  console.log('Current isPlaying state:', isPlaying)

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column', // Arrange items vertically
          // justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '10px',
          marginBottom: '9px',

          // Add margin to the right
        }}
      >
        <div style={{}}>
          <button className="bubble-btn" onClick={togglePlay}>
            <FontAwesomeIcon
              icon={isPlaying ? faVolumeOff : faVolumeHigh}
              size="2x"
              style={{ color: '#ffd700' }} 
            />
          </button>
        </div>
      </div>

      <audio ref={audioRef} src={onlineAudioUrl} autoPlay={false} />
    </>
  )
}

export default Player
