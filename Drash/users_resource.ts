import { Drash } from "https://deno.land/x/drash/mod.ts"

export default class MyResource extends Drash.Http.Resource{
    static paths = [
        "/users/:user_id",
        "/users/:user_id/",
    ];

    public GET(){
        this.response.body = "This is a GET request!";
        let user_id = this.request.getPathParam("user_id");
        this.response.body += ` Parsing User ${user_id} data! ;)`
        return this.response;
    }
}