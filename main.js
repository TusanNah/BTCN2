import data from './db/data.js'
import HeaderComponent from './VueJS/header.js'
import NavComponent from './VueJS/nav.js'
import HomepageComponent from './VueJS/homePage.js'
import SearchPageComponent from './VueJS/searchPage.js'

export default {
    data() {
        return {
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
        SearchPageComponent

    },
    methods: {
        request() {
        }
    },
    mounted() {
        this.request()
    },
    template: ` 
    <div class="app-container container">
    <div class="row container-background">
        <HeaderComponent />
        <NavComponent />
        <div class="body px-0">
            <!-- home-page -->
            <HomepageComponent v-if="isHomePage" :homePageData="mainData"/>

            <!-- search-page -->
            <SearchPageComponent v-if="isSearchPage" />

            <!-- movie-page -->


        </div>

    </div>
    <!-- class="row" -->
</div>`
    
}