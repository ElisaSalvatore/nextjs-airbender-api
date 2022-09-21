export default function Avatars( {avatars} ) {
    return (
      <div>
        <h1>Avatars</h1>
        <p>All of the Avatars that appeared in the show:</p>
        <ul>
          {avatars.map(avatar => {
            return (
              <li key={avatar._id}>
                {avatar.name}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

export async function getStaticProps() {
  const avatars = await fetch('https://last-airbender-api.herokuapp.com/api/v1/characters/avatar').then(res => res.json());
  return {
    props: {
      avatars
    }
  }
}
  