export default {
    data() {
        return {

        }
    },

    template: `
    <nav class="navbar navbar-expand-lg mt-2 bg-white rounded">
                    <div class="container">
                        <a class="fw-bold navbar-brand p-0" href="#" v-on:click="handleHome">Home</a>

                        <div class="navbar__searching-wrapper">
                            <form class="d-flex navbar__form" action="" role="search">
                                <input type="text" style="outline: none;" class="navbar__form-input rounded" id=""
                                    placeholder="Search" v-model="searchInput">
                                <button type="button" class="btn btn-mine ml-2"
                                    v-on:click="handleSearch">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
    `
}