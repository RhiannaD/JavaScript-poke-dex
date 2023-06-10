const formEle = document.getElementsByTagName('form')[0]
formEle.addEventListener('submit', (event) => {
    event.preventDefault()
    const name = formEle[0].value
    pokemonData(name)
})


const pokeDiv = document.querySelector('.poke-div')


const pokemonData = async (name) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const data = await response.json()
    console.log(data)
    const img = data["sprites"]["front_shiny"]
    const ability = data["abilities"][0]["ability"]["name"]
    const attack = data["stats"][2]["base_stat"]
    pokeDiv.innerHTML = `
    <div class="card" style="width: 18rem;">
        <img src="${img}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${data.name}</h5>
        <p class="card-text"> Ability: ${ability} Attack Level: ${attack}</p>
        </div>
    </div>
    `
}