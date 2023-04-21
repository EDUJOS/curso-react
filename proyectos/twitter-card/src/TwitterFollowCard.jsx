import './App.css'
// eslint-disable-next-line react/prop-types
export function TwitterFollowCard ({ username, name, isFollowing }) {
  console.log(isFollowing)
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
        <button className='tw-followCard-button'>
          Seguir
        </button>
      </aside>
    </article>
  )
}
