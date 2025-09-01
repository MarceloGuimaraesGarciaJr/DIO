#🎧 Podcast Manager
📌 Descrição

O Podcast Manager é uma aplicação estilo Netflix que centraliza podcasts categorizados em diferentes seções.
Ele permite visualizar episódios organizados por categorias e buscar episódios por nome de podcast através de uma API.

##✨ Features

- 📂 Listagem de podcasts (episódios) em categorias:

- Saúde 🩺

- Fitness 🏋️‍♂️

- Humor 😂

🔍 Filtro de episódios por nome do podcast

📡 API que retorna dados em formato JSON

📦 Estrutura do JSON

A API retorna os episódios no seguinte formato:

[
  {
    "podcastName": "flow",
    "episode": "CBUM - Flow #319",
    "cover": "https://link-da-imagem.com/cbum.jpg",
    "link": "https://link-para-o-episodio.com",
    "category": ["sports", "racing"]
  },
  {
    "podcastName": "nerdcast",
    "episode": "Especial RPG 2025",
    "cover": "https://link-da-imagem.com/rpg.jpg",
    "link": "https://link-para-o-episodio.com",
    "category": ["geek", "rpg"]
  }
]