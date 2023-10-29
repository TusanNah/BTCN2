import data from './db/data.js'
import HeaderComponent from './VueJS/header.js'
import NavComponent from './VueJS/nav.js'
import HomepageComponent from './VueJS/homePage.js'
import SearchPageComponent from './VueJS/searchPage.js'
import MoviePageComponent from './VueJS/moviePage.js'
export default {
    data() {
        return {
            movie: 0,
            mainData: data,
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

    },
    methods: {
        changeToMoviePage() {
            this.movie = this.$refs.homepageComponent.movie;
            console.log('this movie', this.movie);
        }
    },
    // mounted() {
    //     this.changeToMoviePage();
    // },
    template: ` 
    <div class="app-container container">
    <div class="row container-background">
        <HeaderComponent />
        <NavComponent />
        <div class="body px-0">
            <!-- home-page -->
            <HomepageComponent v-if="isHomePage" ref="homepageComponent" :homePageData="mainData" v-on:movie-clicked="changeToMoviePage"/>

            <!-- search-page -->
            <SearchPageComponent v-if="isSearchPage" ref="searchPageComponent" />

            <!-- movie-page -->
            <MoviePageComponent v-if="isMoviePage" ref="moviePageComponent" :movie="movie" />



        </div>

    </div>
    <!-- class="row" -->
</div>`
    
}