import { useState } from 'react'

// eslint-disable-next-line react/prop-types
export function TwitterFollowCard ({ username, name, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const btnClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img className='tw-followCard-avatar' src={`https://api.microlink.io/?url=https://twitter.com/${username}&embed=image.url`} alt='Image' />
        <div className='tw-followCard-info'>
          <a href={`https://twitter.com/${username}`} target='_blank' rel='noreferrer'>
            <strong>{name}</strong>
          </a>
          <span className='tw-followCard-infoUserName'>@{username}</span>
        </div>
      </header>

      <aside>
        <button onClick={handleClick} className={btnClassName}>
          <span className='tw-followCard-text'>{text}</span>
          <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}
