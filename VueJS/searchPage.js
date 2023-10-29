export default {
    props: {
        movies: Object,
    },
    data() {
        return {
            movie: null,
        }
    },
    methods: {
        movieClick(movie) {
            console.log('movie click of search page ');
            this.movie = movie;
            this.$emit('movie-clicked');
        }
    },
    template: `
    <div class="container search-page">
                        <div class="row">
                            <div class="col-md-4 mt-2" style="cursor: pointer" v-for="movie in movies" @click="movieClick(movie)">
                                <div class="col-md-12 p-0 card search-page-movie">
                                    <img :src="movie.image" :alt="movie.title"
                                    style="width: 100%">
                                    <h2 class="movie-title" style="font-size: 22px">{{movie.title}}</h2>
                                    <p class="movie-date">{{movie.year}}</p>
                                </div>
                            </div>
                             <!-- row -->
                        </div>
                       
                      
                    </div>
    `,
}