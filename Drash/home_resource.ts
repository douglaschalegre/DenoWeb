import { Drash } from "https://deno.land/x/drash/mod.ts"

export default class MyResource extends Drash.Http.Resource{
    static paths = ["/"];

    public GET(){
        this.response.body = `
        <!DOCTYPE html>
        <html>
          <head>
            <title>Drash</title>
            <link href="/public/style.css" rel="stylesheet">
          </head>
          <body>
            <h1 class="my-text">This is my title and it is red.</h1>
          </body>
        </html>`;
        return this.response;
    }

    public POST(){
        this.response.body = "This is a POST request!";
        return this.response;
    }

    public PUT(){
        this.response.body = "This is a PUT request!";
        return this.response;
    }

    public DELETE(){
        this.response.body = "This is a DELETE request!";
        return this.response;
    }
}