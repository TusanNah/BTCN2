export default {
    props: {
        // use props from receive data from parent
        homePageData: Object,
    },
    data() {
        return {
            topFiveLatestMovies: [],
            currentTheaterMoviePage: 0,
            currentTheaterMovie: 0,

            mostPopularMovies: [],
            threePopularMovies: [],
            currentPopularMoviesPage: 0,

            topRatingMovies: [],
            threeRatingMovies: [],
            currentRatingMoviesPage: 0,
        }
    },

    methods: {
        
        // Handle two buttons of theater movies
        handleRightTheaterMoviesButton() {
            this.currentTheaterMoviePage +=1;
            if (this.currentTheaterMoviePage > 4){
                this.currentTheaterMoviePage = 0
            }
            this.currentTheaterMovie = this.topFiveLatestMovies[this.currentTheaterMoviePage]
        },
        handleLeftTheaterMoviesButton() {
            this.currentTheaterMoviePage -=1;
            if (this.currentTheaterMoviePage < 0){
                this.currentTheaterMoviePage = this.topFiveLatestMovies.length -1
            }
            this.currentTheaterMovie = this.topFiveLatestMovies[this.currentTheaterMoviePage]
        },


        // Handle two buttons of popular movies
        handleRightPopularMoviesButton() {
            this.currentPopularMoviesPage +=1;
            var page = this.currentPopularMoviesPage
            if (this.currentPopularMoviesPage > 4){
                this.currentPopularMoviesPage = 0
                page = this.currentPopularMoviesPage
            }
            for (var i = 0; i < 3; ++i) {
                this.threePopularMovies[i] = this.mostPopularMovies[page*3 + i];
            }
        },
        handleLeftPopularMoviesButton() {
            this.currentPopularMoviesPage -=1;
            var page = this.currentPopularMoviesPage

            if (this.currentPopularMoviesPage < 0){
                this.currentPopularMoviesPage = 4;
                page = this.currentPopularMoviesPage
            }
            for (var i = 0; i < 3; ++i) {
                this.threePopularMovies[i] = this.mostPopularMovies[page*3 + i];
            }

        },

        // Handle two buttons of top ratinig movies
        handleRightRatingMoviesButton() {
            this.currentRatingMoviesPage +=1;
            var page = this.currentRatingMoviesPage
            if (this.currentRatingMoviesPage > 4){
                this.currentRatingMoviesPage = 0
                page = this.currentRatingMoviesPage
            }
            for (var i = 0; i < 3; ++i) {
                this.threeRatingMovies[i] = this.topRatingMovies[page*3 + i];
            }
        },
        handleLeftRatingMoviesButton() {
            this.currentRatingMoviesPage -=1;
            var page = this.currentRatingMoviesPage
            if (this.currentRatingMoviesPage < 0){
                this.currentRatingMoviesPage = 4
                page = this.currentRatingMoviesPage
            }
            for (var i = 0; i < 3; ++i) {
                this.threeRatingMovies[i] = this.topRatingMovies[page*3 + i];
            }
        },

        handleHomePage() {
            var movies = this.homePageData.Movies;
            var popularMovies = this.homePageData.MostPopularMovies;
            var ratingMovies = this.homePageData.Top50Movies;
   
            for (var i= movies.length-1; i >= movies.length - 5; i--) {
                this.topFiveLatestMovies.push(movies[i]);
            }
            
            for (var i = 0; i < 15; ++i) {
                this.mostPopularMovies.push(popularMovies[i]);
            }

            for (var i = 0; i < 15; ++i) {
                this.topRatingMovies.push(ratingMovies[i])
            }

            this.currentTheaterMovie = this.topFiveLatestMovies[this.currentPopularMoviesPage]

            for (var i = 0; i< 3; ++i) {
                this.threePopularMovies.push(this.mostPopularMovies[i])
            }

            for (var i = 0; i<3; ++i) {
                this.threeRatingMovies.push(this.topRatingMovies[i]);
            }
        },

      
    },

    template: `
    <div class="home-page container p-0 mt-2">
                        <div class="movie-theater " style="display: flex;">
                            <button class="btn btn-default fs-2 text-white pr-3" v-on:click="handleLeftTheaterMoviesButton" >&lt;</button>

                            <a href="./movie.html" class="rounded" style="margin: auto;">
                                <img v-bind:src="currentTheaterMovie.image"
                                    :alt="currentTheaterMovie.title" class="rounded" 
                                    style="width: 400px; height: 650px">
                            </a>

                            <button class="btn btn-default fs-2 text-white pr-3" v-on:click="handleRightTheaterMoviesButton">></button>
                        </div>
                        <!-- movie-theater-->

                        <div class="movie-popular">
                            <h2 class="mt-3" style="margin: 0;">Most popular</h2>

                            <div class="movie-popular__wrapper" style = "display: flex">
                                <button class="btn btn-default fs-2 text-white" v-on:click="handleLeftPopularMoviesButton">&lt</button>
                                <a href="./movie.html" class="rounded movie-item" style="flex: 1" v-for="movie in threePopularMovies" >
                                    <img :src="movie.image"
                                        :alt="movie.title" class="rounded" style="width: 100%; height: 90%">
                                </a>
                                <button class="btn btn-default fs-2 text-white" v-on:click="handleRightPopularMoviesButton">></button>
                            </div>
                        </div>
                        <!-- movie-popular -->

                        <div class="movie-popular">
                            <h2 class="mt-3" style="margin: 0;">Top rating</h2>

                            <div class="movie-popular__wrapper" style = "display: flex">
                                <button class="btn btn-default fs-2 text-white" v-on:click="handleLeftRatingMoviesButton">&lt</button>
                                <a href="./movie.html" class="rounded movie-item" style="flex: 1" v-for="movie in threeRatingMovies">
                                    <img :src="movie.image"
                                        :alt="mov" class="rounded" style="width: 100%; height: 90%">
                                </a>
                                <button class="btn btn-default fs-2 text-white" v-on:click="handleRightRatingMoviesButton">></button>
                            </div>
                        </div>

                    </div>
                    <!-- home-page -->
    `,

    mounted() {
        this.handleHomePage();
        console.log(this.topFiveLatestMovies[this.currentTheaterMoviePage].title);

    }
}