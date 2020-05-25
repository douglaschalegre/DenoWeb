// Simple HTTP Server
import { serve } from "https://deno.land/std/http/server.ts";

const PORT = 1337;
const server = serve( {port: PORT} );
console.log(`listening on localhost:${PORT}...`);

//Async iterator; Waits to server object have a request so it can send a response
for await(const req of server){
    req.respond({ body: 'Hello World \n'})
}