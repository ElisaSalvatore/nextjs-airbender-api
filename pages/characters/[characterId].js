export default function Character( {character} ) {
    return (
        <>
            <img src={character.photoUrl} alt={character.name}/>
            <h1>{character.name}</h1>
            <p>Affiliation: {character.affiliation}</p>
        </>
    )
}

export async function getStaticProps( {params} ) {
    //return an array, that's why naming "results" variable
    const characterId = params.characterId.replace(/\-/, '+');
    const results = await fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters?name=${characterId}`).then(res => res.json());

    return {
        props: {
            character: results[0],
        }
    }
}

export async function getStaticPaths() {
    const characters = await fetch('https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=500').then(res => res.json());

    return {
        paths: characters.map(character => {
            const characterId = character.name.toLowerCase().replace(/ /g, '-');
            return {
                params: {
                    characterId
                }
            }
        }),
        fallback: false, //if the page is not found we want display an 404 not found page 
    }
}