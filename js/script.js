const botao = document.querySelector("#confirmar");

botao.addEventListener("click", () => {
    const pokenome = document.querySelector("#nomeInput").value;

    console.log(pokenome.toLowerCase());

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokenome.toLowerCase()}`)
        .then((resposta) => resposta.json())
        .then((json) => {
            console.log(json.sprites.front_default);

            const imagem = document.querySelector("#info img");
            const id = document.querySelector("#num");
            const nome = document.querySelector("#nome");
            const tipos = document.querySelector("#tipos");

            const Tipos = json.types;

            Tipos.forEach((element, index) => {
                Tipos[index] = element.type.name;
            });

            imagem.src = json.sprites.front_default;
            imagem.style.display = "block";
            nome.innerHTML = "Nome: " + json.name;
            id.innerHTML = "Número: " + json.id;
            tipos.innerHTML = "Tipos: " + String(Tipos);
        });
});
