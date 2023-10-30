export default {
    props: {
        movies: Object,
        lightMode: Boolean,
        darkMode: Boolean,
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
    <div class="container search-page" >
                        <div class="row" :class="{
                            'bg-black text-white border border-1': darkMode,
                            'bg-white text-black': lightMode
                          }" >
                            <div class="col-md-4 mt-2" style="cursor: pointer" v-for="movie in movies" @click="movieClick(movie)">
                                <div class="col-md-12 p-0 card search-page-movie" :class="{
                                    'bg-black text-white border border-1': darkMode,
                                    'bg-white text-black': lightMode
                                  }"  >
                                    <img :src="movie.image" :alt="movie.title"
                                    style="width: 100%">
                                    <h2 class="movie-title mt-2" style="font-size: 22px">{{movie.title}}</h2>
                                    <p v-if="movie.year" class="movie-date">({{movie.year}})</p>
                                </div>
                            </div>
                             <!-- row -->
                        </div>
                       
                      
                    </div>
    `,
}