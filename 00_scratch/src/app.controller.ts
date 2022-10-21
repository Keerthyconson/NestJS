import {Controller, Get} from "@nestjs/common";

// create controller
@Controller("/api")
export class AppController{
    @Get()
    getRootRoute(){
        return "Root Page"
    }
    @Get("/movie")
    getMovieRoute(){
        return "Returns Movie";
    }

    @Get("/genre")
    getGenreRoute(){
        return "Returns Genres";
    }

    @Get("/genre/comedy")
    getComedyMovies(){
        return "Comedy movies";
    }

}

