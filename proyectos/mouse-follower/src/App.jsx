import { useEffect, useState } from 'react'
import './App.css'

function App () {
  const [enable, setEnable] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (event) => {
      const { x, y } = event
      setPosition({ x, y })
    }

    const $ = selector => document.querySelector(selector)
    const $box = $('#box')

    if (enable) {
      $box.addEventListener('pointermove', handleMove)
    }

    return () => {
      $box.removeEventListener('pointermove', handleMove)
    }
  }, [enable])
  return (
    <>
      <h3>Cursor Follower</h3>
      <div
        id='box' style={{
          width: 500,
          height: 300,
          backgroundColor: '#222',
          borderRadius: '8px'
        }}
      >
        <div style={{
          position: 'absolute',
          background: 'transparent',
          border: 'solid #fff 2px',
          borderRadius: '50%',
          pointerEvents: 'none',
          left: -35,
          top: -35,
          width: 70,
          height: 70,
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
        />
      </div>
      <button onClick={() => setEnable(!enable)}>{enable ? 'Desactivar' : 'Activar'} Seguir puntero</button>
    </>
  )
}

export default App
