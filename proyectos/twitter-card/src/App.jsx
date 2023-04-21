import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
  // const edujos = { isFollowing: false, username: 'EdTkiere', name: 'Ed 🍟' }
  // Una forma de pasar props a un componente => {...edujos} MALA PRACTICA
  return (
    <div className='cont'>
      <div className='h2-cont'>
        <h2>A quién seguir</h2>
      </div>
      <>
        <TwitterFollowCard isFollowing={false} username='EdTkiere' name='Ed 🍟' />
        <TwitterFollowCard isFollowing={false} username='SoylaPerradeEd' name='👹' />
        <TwitterFollowCard isFollowing username='midudev' name='Miguel Ángel Durán' />
      </>
    </div>
  )
}
