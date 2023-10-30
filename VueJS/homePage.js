import { fetch } from "./DBProvider.js";

export default {
    data() {
        return {
            hoveredMovie: null,
            Movies: [],

            movie: 0,
            topFiveLatestMovies: [],
            currentTheaterMoviePage: 0,
            currentTheaterMovie: 0,
            slideRightTheater: false,
            slideLeftTheater: false,

            mostPopularMovies: [],
            threePopularMovies: [],
            currentPopularMoviesPage: 0,
            slideRightPopular: false,
            slideLeftPopular: false,

            topRatingMovies: [],
            threeRatingMovies: [],
            currentRatingMoviesPage: 0,
            slideRightRating: false,
            slideLeftRating: false,
        }
    },

    methods: {

        // Handle two buttons of theater movies
        handleRightTheaterMoviesButton() {
            this.currentTheaterMoviePage += 1;
            if (this.currentTheaterMoviePage > 4) {
                this.currentTheaterMoviePage = 0
            }
            this.slideLeftTheater = true;
            this.currentTheaterMovie = this.topFiveLatestMovies[this.currentTheaterMoviePage]

            setTimeout(() => {
                this.slideLeftTheater = false;
            }, 1000)
        },
        handleLeftTheaterMoviesButton() {
            this.currentTheaterMoviePage -= 1;
            if (this.currentTheaterMoviePage < 0) {
                this.currentTheaterMoviePage = this.topFiveLatestMovies.length - 1
            }
            this.slideRightTheater = true;
            this.currentTheaterMovie = this.topFiveLatestMovies[this.currentTheaterMoviePage]

            setTimeout(() => {
                this.slideRightTheater = false;
            }, 1000)
        },


        // Handle two buttons of popular movies
        handleRightPopularMoviesButton() {
            this.currentPopularMoviesPage += 1;
            var page = this.currentPopularMoviesPage
            if (this.currentPopularMoviesPage > 6) {
                this.currentPopularMoviesPage = 0
                page = this.currentPopularMoviesPage
            }
            for (var i = 0; i < 3; ++i) {
                this.threePopularMovies[i] = this.mostPopularMovies[page * 3 + i];
            }
            this.slideLeftPopular= true;
            setTimeout(() => {
                this.slideLeftPopular = false;
            }, 1000)
        },
        handleLeftPopularMoviesButton() {
            this.currentPopularMoviesPage -= 1;
            var page = this.currentPopularMoviesPage

            if (this.currentPopularMoviesPage < 0) {
                this.currentPopularMoviesPage = 4;
                page = this.currentPopularMoviesPage
            }
            for (var i = 0; i < 3; ++i) {
                this.threePopularMovies[i] = this.mostPopularMovies[page * 3 + i];
            }
            this.slideRightPopular= true;
            setTimeout(() => {
                this.slideRightPopular = false;
            }, 1000)

        },

        // Handle two buttons of top ratinig movies
        handleRightRatingMoviesButton() {
            this.currentRatingMoviesPage += 1;
            var page = this.currentRatingMoviesPage
            if (this.currentRatingMoviesPage > 4) {
                this.currentRatingMoviesPage = 0
                page = this.currentRatingMoviesPage
            }
            for (var i = 0; i < 3; ++i) {
                this.threeRatingMovies[i] = this.topRatingMovies[page * 3 + i];
            }
            this.slideLeftRating = true;
            setTimeout(() => {
                this.slideLeftRating = false;
            }, 1000)
        },
        handleLeftRatingMoviesButton() {
            this.currentRatingMoviesPage -= 1;
            var page = this.currentRatingMoviesPage
            if (this.currentRatingMoviesPage < 0) {
                this.currentRatingMoviesPage = 4
                page = this.currentRatingMoviesPage
            }
            for (var i = 0; i < 3; ++i) {
                this.threeRatingMovies[i] = this.topRatingMovies[page * 3 + i];
            }
            this.slideRightRating = true;
            setTimeout(() => {
                this.slideRightRating = false;
            }, 1000)
        },

        async handleHomePage() {
            var movies = await fetch('get/movie/?per_page=300&page=1');
            movies = movies.items;
            this.Movies = movies;
            var popularMovies = await fetch('get/mostpopular/?per_page=30&page=1')
            // console.log('popularMovies ', popularMovies)
            var ratingMovies =  await fetch('get/top50/?per_page=30&page=1');

     
            this.mostPopularMovies = popularMovies.items
            this.topRatingMovies = ratingMovies.items

            for (var i = movies.length - 1; i >= movies.length - 5; i--) {
                this.topFiveLatestMovies.push(movies[i]);
            }
            this.currentTheaterMovie = this.topFiveLatestMovies[this.currentPopularMoviesPage]

            for (var i = 0; i < 3; ++i) {
                this.threePopularMovies.push(this.mostPopularMovies[i])
            }

            for (var i = 0; i < 3; ++i) {
                this.threeRatingMovies.push(this.topRatingMovies[i]);
            }
            this.$emit('handled-homepage');
        },
        movieClick(movie) {
            this.movie = movie;
            this.$emit('movie-clicked');
        }

    },

    template: `
    <div class="home-page container p-0 mt-2">
                        <div class="movie-theater " style="display: flex; ">
                            <button class="btn btn-default fs-2 text-white pr-3" v-on:click="handleLeftTheaterMoviesButton">&lt;</button>

                            <div  class="rounded" :class="{ 'slide-right': slideRightTheater, 'slide-left': slideLeftTheater}" 
                            style="margin: auto; text-decoration: none; position: relative; cursor: pointer"  
                            @mouseenter="hoveredMovie = currentTheaterMovie" @mouseleave="hoveredMovie = null" @click="movieClick(currentTheaterMovie)">
                                <img v-bind:src="currentTheaterMovie.image"
                                    :alt="currentTheaterMovie.title" class="rounded" 
                                    style="width: 400px; height: 600px">
                                <div class="card text-bg-dark text-center" 
                                style="border: none !important; position: absolute; width: 100%; left: 0; bottom: 5px; background-color: transparent !important; "> {{ currentTheaterMovie.title }} <br> {{currentTheaterMovie.year}}
                                </div>
                            </div>

                            <button class="btn btn-default fs-2 text-white pr-3" v-on:click="handleRightTheaterMoviesButton">></button>
                        </div>
                        <!-- movie-theater-->

                        <div class="movie-popular">
                            <h2 class="mt-3" style="margin: 0;">Most popular</h2>

                            <div class="movie-popular__wrapper mt-2" :class="{'overflow-hidden': slideRightPopular || slideLeftPopular }" style ="display: flex; ">
                                <button class="btn btn-default fs-2 text-white" v-on:click="handleLeftPopularMoviesButton">&lt</button>
                                <div  class="rounded movie-item" :class="{ 'slide-right': slideRightPopular, 'slide-left': slideLeftPopular}"
                                  style="flex: 1; height: 350px; text-decoration: none; cursor: pointer" 
                                  v-for="movie in threePopularMovies" @mouseenter="hoveredMovie = movie" @mouseleave="hoveredMovie = null" @click="movieClick(movie)">
                                    <img :src="movie.image"
                                        :alt="movie.title" class="rounded" style="top: 0; width: 100%; height: 100%; object-fit: fill;">
                                    <div v-if ="hoveredMovie === movie" class="card text-bg-dark text-center movie-card" style="bottom: 3px; width: 100%; border-radius: 0!important; "> {{ movie.title }} {{movie.year}}
                                    </div>
                                </div>
                                <button class="btn btn-default fs-2 text-white" v-on:click="handleRightPopularMoviesButton">></button>
                            </div>
                        </div>
                        <!-- movie-popular -->

                        <div class="movie-popular">
                            <h2 class="mt-3" style="margin: 0;">Top rating</h2>

                            <div class="movie-popular__wrapper mt-2" :class="{'overflow-hidden': slideRightRating || slideLeftRating }" style = "display: flex" >
                                <button class="btn btn-default fs-2 text-white" v-on:click="handleLeftRatingMoviesButton">&lt</button>
                                <div class="rounded movie-item" :class="{ 'slide-right': slideRightRating, 'slide-left': slideLeftRating}"
                                style="position: relative; flex: 1; height: 350px; text-decoration: none; cursor: pointer" 
                                v-for="movie in threeRatingMovies" @mouseenter="hoveredMovie = movie" @mouseleave="hoveredMovie = null"  @click="movieClick(movie)">
                                    <img :src="movie.image"
                                        :alt="movie.title" class="rounded" style="width: 100%; height: 100%; object-fit: fill">
                                    <div v-if ="hoveredMovie === movie" class="card text-bg-dark text-center" style="bottom: 3px; width: 100%; border-radius: 0 !important;"> {{ movie.title }} {{movie.year}}
                                    </div>
                                </div>
                                <button class="btn btn-default fs-2 text-white" v-on:click="handleRightRatingMoviesButton">></button>
                            </div>
                        </div>

                    </div>
                    <!-- home-page -->
    `,

    mounted() {
        this.handleHomePage();
    }
}