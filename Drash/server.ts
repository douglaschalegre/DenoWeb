import { Drash } from "https://deno.land/x/drash/mod.ts"
import HomeResource from "./home_resource.ts";
import UsersResource from "./users_resource.ts";

const hostname = 'localhost';
const port = 1337;

const server = new Drash.Http.Server({
    resources: [HomeResource, UsersResource],
});

server.run({
    hostname: hostname,
    port: port
});
console.log(`Running server on ${hostname}:${port}`);
