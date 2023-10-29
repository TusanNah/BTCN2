import HeaderComponent from './VueJS/header.js'
import NavComponent from './VueJS/nav.js'
import HomepageComponent from './VueJS/homePage.js'
import SearchPageComponent from './VueJS/searchPage.js'
import MoviePageComponent from './VueJS/moviePage.js'
import FooterComponent from './VueJS/footer.js'
import { fetch } from './VueJS/dbProvider.js'

export default {
    data() {
        return {
            searchMovies: [],
            movie: null,
            isHomePage: true,
            isSearchPage: false,
            isMoviePage: false,
            isPersonPage: false,
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
            var movies = this.$refs.homepageComponent.Movies;
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
            this.searchMovies = searchMovies.items;
            

            console.log('searchMovies ', searchMovies.items);
            console.log('searchInput ', searchInput);
        }
    },
    // mounted() {
    //     this.changeToMoviePage();
    // },
    template: ` 
    <div class="app-container container">
    <div class="row container-background">
        <HeaderComponent />
        <NavComponent ref="navComponent" v-on:home-clicked="handleHomeClicked" v-on:search-clicked="changeToSearchPage"/>
        <div class="body px-0">
            <!-- home-page -->
            <HomepageComponent v-if="isHomePage" ref="homepageComponent" v-on:movie-clicked="changeToMoviePage"/>

            <!-- search-page -->
            <SearchPageComponent v-if="isSearchPage" ref="searchPageComponent" :movies="searchMovies" v-on:movie-clicked="changeToMoviePage"/>

            <!-- movie-page -->
            <MoviePageComponent v-if="isMoviePage" ref="moviePageComponent" :movie="movie" />



        </div>

    </div>
    <!-- class="row" -->

    <FooterComponent />
    
</div>`
    
}