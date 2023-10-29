export default {
    props: {
        movie: Object
    },
    date(){
        return {

        }
    },
    template: `
    <div class="movie-page container"
    style="background-image: url(https://m.media-amazon.com/images/M/MV5BODI0NTFkMTItOTYyNC00MzQ4LTgzZWMtMzdhMDAyOWU5YjA5XkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_Ratio0.7046_AL_.jpg);">
    <div class="moive-background-img">

    </div>
    <h1>The Gold Rush</h1>
    <p><strong>Released date: </strong>1925-07-13</p>
    <p><strong>Summary: </strong>A prospector goes to the Klondike during the 1890s gold rush in
        hopes of making his fortune,
        and is smitten with a girl he sees in a dance hall.</p>
    <p><strong>Genre: </strong>Action</p>

    <div class="director-list-wrapper">
        <h2>Director list</h2>
        <span>Tuan Truong, Phuong Tay</span>
    </div>

    <div class="writer-list-wrapper">
        <h2>Writer list</h2>
        <span>Tuan Truong, Phuong Tay</span>

    </div>

    <div class="actor-list-wrapper container p-0">
        <h2>Actor list</h2>
        <div class="row" style="background-color: transparent !important;">
            <div class="col-md-3 mt-2">
                <div class="col-md-12 p-2"
                    style="background-color: black; color: white; display: flex; flex-direction: column; justify-content: center; align-items: center; cursor: pointer">
                    <img src="https://m.media-amazon.com/images/M/MV5BNTFkOTk0YzctNDcyOS00YmFlLWEzMzktMmNlMGQ1Njg2MzllXkEyXkFqcGdeQXVyMzI5NDcxNzI@._V1_Ratio0.7727_AL_.jpg"
                        alt="" style="width: 100%">
                    <h2 class="actor-name">Charles Chaplin</h2>
                    <p class="actor-role">The Lone Prospector</p>
                </div>
            </div>

            <div class="col-md-3 mt-2">
                <div class="col-md-12 p-2"
                    style="background-color: black; color: white; display: flex; flex-direction: column; justify-content: center; align-items: center; cursor: pointer">
                    <img src="https://m.media-amazon.com/images/M/MV5BNTFkOTk0YzctNDcyOS00YmFlLWEzMzktMmNlMGQ1Njg2MzllXkEyXkFqcGdeQXVyMzI5NDcxNzI@._V1_Ratio0.7727_AL_.jpg"
                        alt="" style="width: 100%">
                    <h2 class="actor-name">Charles Chaplin</h2>
                    <p class="actor-role">The Lone Prospector</p>
                </div>
            </div>

            <div class="col-md-3 mt-2">
                <div class="col-md-12 p-2"
                    style="background-color: black; color: white; display: flex; flex-direction: column; justify-content: center; align-items: center; cursor: pointer">
                    <img src="https://m.media-amazon.com/images/M/MV5BNTFkOTk0YzctNDcyOS00YmFlLWEzMzktMmNlMGQ1Njg2MzllXkEyXkFqcGdeQXVyMzI5NDcxNzI@._V1_Ratio0.7727_AL_.jpg"
                        alt="" style="width: 100%">
                    <h2 class="actor-name">Charles Chaplin</h2>
                    <p class="actor-role">The Lone Prospector</p>
                </div>
            </div>

            <div class="col-md-3 mt-2">
                <div class="col-md-12 p-2"
                    style="background-color: black; color: white; display: flex; flex-direction: column; justify-content: center; align-items: center; cursor: pointer">
                    <img src="https://m.media-amazon.com/images/M/MV5BNTFkOTk0YzctNDcyOS00YmFlLWEzMzktMmNlMGQ1Njg2MzllXkEyXkFqcGdeQXVyMzI5NDcxNzI@._V1_Ratio0.7727_AL_.jpg"
                        alt="" style="width: 100%">
                    <h2 class="actor-name">Charles Chaplin</h2>
                    <p class="actor-role">The Lone Prospector</p>
                </div>
            </div>
        </div>
    </div>
</div>
    `,
    mounted() {
        console.log(this.movie);
    }
}