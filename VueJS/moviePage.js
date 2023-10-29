export default {
    props: {
        movie: Object,
    },
    data() {
        return {
            actorList: [],
            directorList: [],
            plotFull: null,
            image: null,

        }
    },
    methods: {
        testData() {
            this.actorList = this.movie.actorList;
            this.directorList = this.movie.directorList;
        }
    },
    template: `
    <div class="movie-page container"
    style="color: white; background-repeat: no-repeat; background-size: cover; background-attachment: fixed"
    :style="{ 'background-image': 'url(' + movie.image + ')' }">
    <div style="color: white; background-color: rgba(0, 0, 0, 0.2); padding: 20px;">
        <h1><strong>Title: </strong> {{movie.title}}</h1>
        <p><strong>Released date: </strong>{{movie.releaseDate}}</p>
        <p><strong>Summary: </strong>{{movie.plot}}</p>
        <span><strong>Genre: </strong></span>
        <span v-for="(genre, index) in movie.genreList">{{genre.value}}<span v-if="index < movie.genreList.length - 1">, </span></span>
        <div class="director-list-wrapper">
            <h2>Director list</h2>
            <span style="cursor: pointer; margin-right: 3px" v-for="(person, index) in movie.directorList">{{person.name}}<span v-if="index < movie.directorList.length - 1">,</span></span>
         </div>

        <div class="writer-list-wrapper">
            <h2>Writer list</h2>
            <span style="cursor: pointer; margin-right: 3px" v-for="(person, index) in movie.writerList">{{person.name}}<span v-if="index < movie.writerList.length - 1">,</span></span>
        </div>
    </div>
    <div class="actor-list-wrapper container p-0">
        <h2 style="padding-left: 20px">Actor list</h2>
        <div class="row" style="background-color: transparent !important;">
            <div class="col-md-3 mt-2" v-for="actor in actorList">
                <div class="col-md-12 p-2"
                    style="background-color: black; color: white; display: flex; flex-direction: column; justify-content: center; align-items: center; cursor: pointer; height: 450px">
                    <img :src="actor.image"
                        :alt="actor.name" style="width: 100%; height: 100%; object-fit: cover">
                    <h2 class="actor-name" style="font-size: 22px; margin-top: 4px; font-weight: bolder">{{actor.name}}</h2>
                    <p class="actor-role">{{actor.asCharacter}}</p>
                </div>
            </div>
        </div>
    </div>
</div>

    `,
    mounted() {
        this.testData();
    }
}
