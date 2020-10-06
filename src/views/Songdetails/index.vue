<template>
    <div class=''>
        <van-nav-bar title="官方动态歌单" left-text="返回" left-arrow @click.native="back">
            <template #right>
            </template>
        </van-nav-bar>
        <div class="content">
            <div class="pic">
                <img :src="picurl" alt="">
                <p>{{txt}}</p>
                <div class="bot"><span v-for="item in word" :key="item">{{item}}</span></div>
            </div>
            <div class="musicsoonlist">
                <ul class="musicsoonlistul">
                    <li v-for="(item,index) in soonlist" :key="item.id" @click="choose(),$store.commit('change',$route.params.id),$store.commit('reduce',item.id),$store.commit('suoyin',index)">
                        <span>
                            {{index+1}}
                        </span>
                        <h5>{{item.name}}</h5>
                        <h6>{{item.ar[0].name}}-{{item.al.name}}</h6>
                    </li>
                </ul>

            </div>
        </div>
    <router-view></router-view>
        <Footer ref="Footer"></Footer>

    </div>
</template>

<script>
    import axios from 'axios'
    import Footer from '../../components/Footer'
    import store from '../../store/store'

    export default {
        data() {
            return {
                soonlist: [],
                picurl:'',
                txt:'',
                word:''
            };
        },
        store,

        computed: {},
        watch: {},
        methods: {
            back() {
                this.$router.push({
                    path: '/'
                })
            },
            getlist() {
                axios.get(`http://localhost:4000/playlist/detail?id=${this.$route.params.id}`).then(res => {
                    this.picurl=res.data.playlist.coverImgUrl
                   this.txt=res.data.playlist.name
                   this.word=res.data.playlist.tags
                    this.soonlist = res.data.playlist.tracks
                })
            },
               choose() {
           this.$refs.Footer.adddd()
            },


        },
        created() {
            this.getlist()
        },
        mounted() {

        },
        beforeCreate() {},
        beforeMount() {},
        beforeUpdate() {},
        updated() {},
        beforeDestroy() {},
        destroyed() {},
        activated() {},
        components: {Footer},
    }
</script>

<style scoped>
    .van-nav-bar {
        background: transparent;
    }

    .content img {
        width: 7.5rem;
        height: 5.60rem;
        opacity: 0.5;
    }

    .content {
        margin-top: -2rem;
    }

    .pic {
        position: relative;
    }

    p {
      position: absolute;
    left: 0.76rem;
    top: 3.5rem;
    font-weight: 900;
    color: black;
    font-size: 0.3rem;
    }

    .bot {
        position: absolute;
        bottom: 0;
        height: 1.90rem;
        line-height: 1.90rem;
        display: flex;
        width: 7.5rem;
        text-align: center;
    }

    .bot span {
        flex: 1;
    }

    .musicsoonlist {
        width: 7.5rem;
    }

    .musicsoonlistul li {
        width: 7.5rem;
        height: 0.7rem;
        box-sizing: border-box;
        margin-top: 0.6rem;
    }
.musicsoonlistul{
    margin-bottom: 1.6rem;
}
    .musicsoonlistul li span {
        width: 1rem;
        height: 0.7rem;
        line-height: 0.7rem;
        text-align: center;
        color: #909090;
        display: block;
        float: left;
    }

    .musicsoonlistul li h5 {
        width: 5rem;
        float: left;
        line-height: 0.45rem;
        font-size: 0.27rem;
        color: black;
        font-weight: 600;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .musicsoonlistul li h6 {
        line-height: 1;
        color: #909090;

        display: inline-block;
        /* clear: both; */
        /* float: left; */
        width: 5rem;
    }
</style>