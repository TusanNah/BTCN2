export default {
    props: {
        lightMode: Boolean,
        darkMode: Boolean,
    },
    data() {
        return {

        }
    },
    template: `
    <footer class="card mt-3 rounded-3 text-center p-0"
    :class="{
        'bg-black text-white border border-1': darkMode,
        'bg-white text-black': lightMode
      }">
        <div class="font-italic">Copyright &copy Truong Anh Tuan</div>
    </footer>`
}