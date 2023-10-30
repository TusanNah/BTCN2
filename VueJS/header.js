export default {
    data(){
        return {
            lightMode: true,
            darkMode: false,
        }
    },
    methods: {
        changeMode() {
            this.lightMode = !this.lightMode;
            this.darkMode = !this.darkMode;
            this.$emit('change-mode');
        }
    },
    template: `
    <header class="header rounded" :class="{
        'bg-black text-white border border-1': darkMode,
        'bg-white text-black': lightMode
      }">
                    <span>21120589</span>
                    <h1>Movies info</h1>

                    <div class="header__wrapper">
                        <div class="key-api">21589</div>
                        <div style="display: flex; align-items: center;">
                            <i v-if="lightMode" class="fa-solid fa-toggle-off" style="cursor: pointer; font-size: 30px;" @click="changeMode"></i>
                            <i v-if="darkMode" class="fa-solid fa-toggle-on" style="cursor: pointer; font-size: 30px; color: blue" @click="changeMode"></i>
                            <span v-if="lightMode" style="margin-left: 12px"><strong>Light mode</strong></span>
                            <span v-if="darkMode" style="margin-left: 12px"><strong>Dark mode</strong></span>
                        </div>

                    </div>
                </header>
    `
}