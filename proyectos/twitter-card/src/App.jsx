import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    username: 'EdTkiere',
    name: 'Ed 🍟',
    isFollowing: false
  },
  {
    username: 'SoyLaPerradeEd',
    name: 'Toñito es feo',
    isFollowing: false
  },
  {
    username: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true
  },
  {
    username: 'Hasbulla_NFT',
    name: 'Hasbulla',
    isFollowing: true
  }
]

export function App () {
  // const edujos = { isFollowing: false, username: 'EdTkiere', name: 'Ed 🍟' }
  // Una forma de pasar props a un componente => {...edujos} MALA PRACTICA
  return (
    <section className='cont'>
      <div className='h2-cont'>
        <h2>A quién seguir</h2>
      </div>
      {
        users.map(({ username, name, isFollowing }) => (
          <TwitterFollowCard key={username} username={username} initialIsFollowing={isFollowing} name={name} />
        ))
      }
    </section>
  )
}
