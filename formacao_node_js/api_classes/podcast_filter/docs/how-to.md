#Podcast manager 
### Descrição do projeto 
Criar uma bibliteca ao estilo netflix onde estejam centralizados podcasts categorizados. 
### Features 
- Listar podcasts (episódios) em sessões de categorias: 
    - Saúde 
    - Fitness
    - Humorra
- Filtrar episódios por nome de podcast 

### how-to 
Retornar categorias em formato json via API 
```js 
    {
        podcastName:"flow",
        episode:"CBUM - Flow #319",
        cover:"hrtmll",
        link:"https://",
        category:["sports","racing"]
    },
    {
        podcastName:"flow",
        episode:"CBUM - Flow #319",
        cover:"hrtmll",
        link:"https://",
        category:["sports","racing"]
    }
```

GET: retorna lista de episódios baseado em um parâmetro enviado pelo client 
