export default function Affiliations({ characters, affiliationId }) {
    return (
        <div>
            <h1>Affiliation matching {affiliationId}</h1>
            <ul>
                {characters.map(character => {
                    return (
                        <li key={character._id}>
                            <img src={character.photoUrl}></img>
                            <p>{character.name} is affliated at {character.affiliation}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export async function getServerSideProps( {params} ) {

    const affiliationId = params.affiliationId.replace(/\-/g, '+')
    const characters = await fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters?affiliation=${affiliationId}`).then(res => res.json());

    return {
        props: {
            characters,
            affiliationId
        }
    }
}