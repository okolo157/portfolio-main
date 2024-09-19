import React, { useEffect, useState } from 'react'
import image from '../../../assets/images/victor.png'
import './index.scss'

const Image = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isImageLoaded) {
        setIsVisible(true)
      }
    }, 4000) // Adjust timeout duration to 4 seconds

    return () => clearTimeout(timeout)
  }, [isImageLoaded])

  const handleImageLoad = () => {
    setIsImageLoaded(true)
  }

  return (
    <div className={`image-container ${isVisible ? 'fade-in zoom-in' : ''}`}>
      <img
        src={image}
        alt="mylogo"
        className="circle"
        onLoad={handleImageLoad}
      />
    </div>
  )
}

export default Image
