export default {
    data() {
        return {

        }
    },
    methods: {
        homeClicked() {
            console.log('home-clicked');
            this.$emit('home-clicked');
        },
        searchClicked() {
            this.$emit('search-clicked');
        }
    },
    template: `
    <nav class="navbar navbar-expand-lg mt-2 bg-white rounded">
                    <div class="container">
                        <div v-on:click="homeClicked" class="fw-bold navbar-brand p-0" style="cursor: pointer">Home</div>

                        <div class="navbar__searching-wrapper">
                            <form class="d-flex navbar__form" action="" role="search">
                                <input type="text" style="outline: none;" class="navbar__form-input rounded" id=""
                                    placeholder="Search" v-model="searchInput">
                                <button type="button" class="btn btn-mine ml-2" @click="searchClicked">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
    `
}