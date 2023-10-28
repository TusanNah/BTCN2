import myData from '../db/data.js'

export default {
    data() {
        return {

        }
    },
    methods: {
        request() {
            console.log(myData)
        }
    },
    mounted() {
        this.request()
    }
}