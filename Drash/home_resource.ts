import { Drash } from "https://deno.land/x/drash/mod.ts"

export default class MyResource extends Drash.Http.Resource{
    static paths = ["/"];

    public GET(){
        this.response.body = "This is a GET request!";
        return this.response;
    }

    public POST(){
        this.response.body = "This is a POST request!";
        return this.response;
    }
}