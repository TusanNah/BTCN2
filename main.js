import HeaderComponent from './VueJS/header.js'
import NavComponent from './VueJS/nav.js'
import HomepageComponent from './VueJS/homePage.js'
import SearchPageComponent from './VueJS/searchPage.js'
import MoviePageComponent from './VueJS/moviePage.js'
import FooterComponent from './VueJS/footer.js'
import { fetch } from './VueJS/DBProvider.js'

export default {
    data() {
        return {
            Movies: null,
            searchMovies: [],
            movie: null,
            isHomePage: true,
            isSearchPage: false,
            isMoviePage: false,
            isPersonPage: false,
            lightMode: true,
            darkMode: false,
        }
    },
    components: {
        HeaderComponent,
        NavComponent,
        HomepageComponent,
        SearchPageComponent,
        MoviePageComponent,
        FooterComponent,

    },
    methods: {
        getListOfMovies(){
            this.Movies = this.$refs.homepageComponent.Movies
        },
        changeMode() {
            this.lightMode = !this.lightMode;
            this.darkMode = !this.darkMode;
        },
        changeToMoviePage() {
            let movie = null
            if (this.isHomePage === true) {
                console.log('run into isHomePage ');
                movie = this.$refs.homepageComponent.movie
            }
            else if (this.isSearchPage === true) {
                movie = this.$refs.searchPageComponent.movie;
            }
            console.log("id, title", movie.id, movie.title)
            var movies = this.Movies;
            console.log('Movies ', this.Movies);
            for (var movieElement of movies) {
                // console.log(movieElement.id);
                if (movie.id === movieElement.id) {
                    movie  = movieElement;
                    console.log('movie of Movies', movie)
                    break;
                }
            }
            this.movie = movie;
            this.isHomePage = this.isPersonPage = this.isSearchPage = false,
            this.isMoviePage = true
        },
        handleHomeClicked() {
            console.log('handle home-clicked')
            this.isHomePage = true
            this.isMoviePage = this.isPersonPage = this.isSearchPage = false
        },
        async changeToSearchPage() {
            this.isSearchPage = true
            this.isMoviePage = this.isPersonPage = this.isHomePage = false

            const searchInput = this.$refs.navComponent.searchInput;
            const searchMovies = await fetch(`search/movie/${searchInput}?per_page=6&page=1`)
            console.log('json-----------', searchMovies)
            this.searchMovies = searchMovies.items;
        }
    },
    // mounted() {
    //     this.changeToMoviePage();
    // },
    template: ` 
    <div class="app-container container">
    <div class="row container-background" :class="{ 'dark-mode': darkMode, 'light-mode' : lightMode}">
        <HeaderComponent v-on:change-mode="changeMode" />
        <NavComponent ref="navComponent" v-on:home-clicked="handleHomeClicked" v-on:search-clicked="changeToSearchPage" :lightMode="lightMode" :darkMode="darkMode"/>
        <div class="body px-0">
            <!-- home-page -->
            <HomepageComponent v-if="isHomePage" ref="homepageComponent" v-on:handled-homepage="getListOfMovies" v-on:movie-clicked="changeToMoviePage"/>

            <!-- search-page -->
            <SearchPageComponent v-if="isSearchPage" ref="searchPageComponent" :movies="searchMovies" v-on:movie-clicked="changeToMoviePage"
            :lightMode="lightMode" :darkMode="darkMode"/>

            <!-- movie-page -->
            <MoviePageComponent v-if="isMoviePage" ref="moviePageComponent" :movie="movie" />



        </div>
        <FooterComponent :lightMode="lightMode" :darkMode="darkMode"/>
    </div>
    <!-- class="row" -->

    
    
</div>`,
    
}