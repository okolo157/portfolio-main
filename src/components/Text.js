import React, { useState, useEffect } from 'react'
import { FiExternalLink } from 'react-icons/fi' // Assuming you're using React Icons library

const Text = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768) // Set breakpoint for mobile devices
    }

    // Add event listener for window resize
    window.addEventListener('resize', handleResize)

    // Initial check on component mount
    handleResize()

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Base styles shared between mobile and desktop
  const baseStyles = {
    position: 'absolute',
    margin: '10px',
    color: '#ffd700',
    display: 'inline-flex',
    alignItems: 'center',
    transition: 'color 0.3s ease',
    textDecoration: 'none',
    textAlign: 'center',
    padding: '10px',
    fontSize: '1.2rem',
  }

  // Styles specific to desktop view
  const desktopStyles = {
    ...baseStyles,
    top: '20px', // Adjusted top position for desktop
    right: '20px', // Adjusted right position for desktop
  }

  // Styles specific to mobile view
  const mobileStyles = {
    ...baseStyles,
    width: 'auto', // Adjusted width for mobile
    maxWidth: '90%', // Optional: Set a maximum width for mobile
    top: '10px', // Adjusted top position for mobile
    left: '48%', // Center horizontally on mobile
    transform: 'translateX(-50%)', // Center horizontally on mobile
  }

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <div style={{ paddingBottom: '50px' }}>
        {/* Other content of your page */}
      </div>
      <h2 style={isMobile ? mobileStyles : desktopStyles}>
        <a
          href="https://drive.google.com/drive/folders/1QosBEOtb4CWiAHPmXcDqLLzOXhfykVps"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: 'inherit',
            textDecoration: 'none',
          }}
          onMouseEnter={(e) => (e.target.style.color = '#333')}
          onMouseLeave={(e) => (e.target.style.color = '#ffd700')}
        >
          Media Portfolio
          <FiExternalLink
            style={{ marginLeft: '5px', verticalAlign: 'middle' }}
          />
        </a>
      </h2>
    </div>
  )
}

export default Text
