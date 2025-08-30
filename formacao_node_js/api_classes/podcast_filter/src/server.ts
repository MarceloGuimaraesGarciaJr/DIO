import * as http from "http";
const server = http.createServer((req:http.IncomingMessage,res:http.ServerResponse) => {

}

)
server.listen(process.env.PORT,()=>{
    console.log(`Servidor iniciado on port ${process.env.PORT}`)
})