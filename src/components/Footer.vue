<template>
  <div class=''>
    <footer class="footerCon" v-if="musicsoon">
      <aplayer autoplay :music="{

    title: list.title,

    author: list.author,

    url: list.url,

    pic: list.pic,

    lrc: 11

  }"> </aplayer>

    </footer>
  </div>
</template>

<script>
  import aplayer from "vue-aplayer";
  import axios from 'axios'
  import store from '../store/store'


  export default {
    data() {
      return {
        musicsoon: false,
        list: {
          title: '',
          author: '',
          url: '',
          pic: '',
        }
      };
    },

    computed: {
      // app() {
      //   //return this.$store.state.soon
      //   return this.$store.state.listId, this.$store.state.soon, this.$store.state.i
      // }
    },
    watch: {
      store,
    },
    methods: {
      adddd() {
        axios.get(`http://localhost:4000/playlist/detail?id=${this.$store.state.listId}`).then(res => {
          console.log(res, res.data.playlist.tracks)
          this.list.title = res.data.playlist.tracks[this.$store.state.i].name
          this.list.author = res.data.playlist.tracks[this.$store.state.i].ar[0].name
          this.list.pic = res.data.playlist.tracks[this.$store.state.i].al.picUrl
          axios.get(`http://localhost:4000/song/url?id=${this.$store.state.soon}`).then(res => {
            console.log(res.data.data[0].url)
            this.list.url = res.data.data[0].url
          })
        })
        if (this.$store.state.listId != 1) {
          this.musicsoon = true
        }
      }
    },
    created() {



    },
    mounted() {
      // this.adddd()

    },
    beforeCreate() {

    },
    beforeMount() {

    },
    beforeUpdate() {

    },
    updated() {},
    beforeDestroy() {},
    destroyed() {},
    activated() {},
    components: {
      aplayer,
    },
  }
</script>

<style scoped>
  .footerCon {
    background: white;
    width: 100%;
    height: 1.5rem;
    position: fixed;
    bottom: 0;
  }
</style>