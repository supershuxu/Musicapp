<template>
    <div class=''>
        <Header></Header>
        <div class="content">
            <div class="banner">
                <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                    <van-swipe-item><img
                            src="http://p1.music.126.net/jTr9N13bI7DiaPMfFGLw5Q==/109951165349136229.jpg?imageView&quality=89"
                            alt=""></van-swipe-item>
                    <van-swipe-item><img
                            src="http://p1.music.126.net/dntrqgJlxm7eZHZY0ja6fA==/109951165349144391.jpg?imageView&quality=89"
                            alt=""></van-swipe-item>
                    <van-swipe-item><img
                            src="http://p1.music.126.net/rWBgpRcJPuCoYVY7SS564w==/109951165349432759.jpg?imageView&quality=89"
                            alt=""></van-swipe-item>
                    <van-swipe-item><img
                            src="http://p1.music.126.net/xJCUVYFk9_FzXHjSo1Zl2A==/109951165349008892.jpg?imageView&quality=89"
                            alt=""></van-swipe-item>
                    <van-swipe-item><img
                            src="http://p1.music.126.net/qFmfyW9dZRS5Nhw8mi2B5g==/109951165349121698.jpg?imageView&quality=89"
                            alt=""></van-swipe-item>
                    <van-swipe-item><img
                            src="http://p1.music.126.net/GuW9i8C704NeYKmh3OBy3g==/109951165350046036.jpg?imageView&quality=89"
                            alt=""></van-swipe-item>
                    <van-swipe-item><img
                            src="http://p1.music.126.net/lsHEvOnINATYiauE-rThsQ==/109951165349076922.jpg?imageView&quality=89"
                            alt=""></van-swipe-item>
                </van-swipe>
            </div>
            <div class="musicList">
                <p>宝藏歌单,值得聆听 <span>查看更多</span></p>
                <ul class="musicListsul">
                    <li v-for="item in list" :key="item.id" @click="jump(item.id)"><img :src="item.coverImgUrl" alt="">
                        <h4>
                            {{item.name}}</h4>
                    </li>
                </ul>
            </div>
            <div class="otherMusicist">
                <p>好听的华语歌曲精选 <span>查看更多</span></p>
                <ul class="otherMusicistul">
                    <li>
                        <div class="picweap" v-for="(item,index)  in soonlist" :key="item.id" @click="choose(),$store.commit('change',5001),$store.commit('reduce',item.id),$store.commit('suoyin',index)"><img
                                :src="item.al.picUrl" alt="">
                            <h1><mark>{{item.name}}</mark>--{{item.ar[0].name}}</h1>
                            <h2>
                                所属专辑:{{item.al.name}}
                            </h2><span class="iconfont icon-shouye"></span>
                        </div>
                    </li>
                </ul>
            </div>


              <div class="otherMusicist">
                <p>好听的流行歌曲精选 <span>查看更多</span></p>
                <ul class="otherMusicistul">
                    <li>
                        <div class="picweap" v-for="(item,index)  in othersoonlist" :key="item.id" @click="choose(),$store.commit('change',1001),$store.commit('reduce',item.id),$store.commit('suoyin',index)"><img
                                :src="item.al.picUrl" alt="">
                            <h1><mark>{{item.name}}</mark>--{{item.ar[0].name}}</h1>
                            <h2>
                                所属专辑:{{item.al.name}}
                            </h2><span class="iconfont icon-shouye"></span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <Footer ref="Footer"></Footer>

    </div>

</template>
<script>
    import Header from '../../components/Header'
    import Footer from '../../components/Footer'
    import axios from 'axios'
    import store from '../../store/store'
    export default {
        data() {
            return {
                list: [],
                soonlist: [],
                othersoonlist:[]
            };

        },
        computed: {

            
        },
        watch: {},
        methods: {
            getmusiclist() {
                axios.get('http://localhost:4000/top/playlist/highquality').then(res => {
                    this.list = res.data.playlists.slice(0, 10)
                    console.log( this.list )
                })
                //  axios.get('http://localhost:4000/playlist/highquality/tags').then(res => {
                //     console.log(res.data)
                // })
                axios.get('http://localhost:4000/playlist/detail?id=5001').then(res => {
                   // console.log(res, res.data.playlist.tracks)
                    this.soonlist = res.data.playlist.tracks
                })
                 axios.get('http://localhost:4000/playlist/detail?id=1001').then(res => {
                   // console.log(res, res.data.playlist.tracks)
                    this.othersoonlist = res.data.playlist.tracks
                })
            },
        store,

            choose() {
           this.$refs.Footer.adddd()
            },
            jump(id){
                  this.$router.push({
          path: '/songdetails/' + id
        })
               // alert(id)
            }

        },
        created() {
            this.getmusiclist()
        },
        mounted() {

        },
      
        beforeDestroy() {},
        destroyed() {},
        activated() {},
        components: {
            Header,
            Footer
        },
    }
</script>

<style scoped>
    html,
    body {
        height: 100%;
    }

    html {
        font-size: 13.333333vw;
    }

    body {
        font-size: 12px;
        display: flex;
        flex-direction: column;
    }

    .content {
        width: 7rem;
        margin: 0 auto;
        flex: 1;
        overflow-y: auto;
    }

    .content .banner {
        height: 2.65rem;
        background: brown;
        width: 7rem;
        margin: 0 auto;
    }

    .my-swipe .van-swipe-item {
        color: #fff;
        line-height: 1.5px;
        text-align: center;
        background-color: #39a9ed;
        width: 7rem;
        margin: 0 auto;
        height: 2.65rem;
    }

    .my-swipe .van-swipe-item img {
        width: 100%;
        height: 100%;
    }

    /* 歌单列表 */
    .content .musicList {
        height: 4.06rem;
        width: 7rem;
        margin: 0 auto;
    }

    .content .musicList p {
        line-height: 0.86rem;
        color: black;
        font-size: 0.35rem;
        display: flex;
        font-weight: 900;
        justify-content: space-between;
    }

    .content .musicList p span {
        margin-top: 0.16rem;
        height: 0.5rem;
        width: 1.3rem;
        border-radius: 0.25rem;
        -webkit-border-radius: 0.25rem;
        -moz-border-radius: 0.25rem;
        -ms-border-radius: 0.25rem;
        -o-border-radius: 0.25rem;
        border: 1px gray solid;
        font-size: 0.27rem;
        line-height: 0.5rem;
        text-align: center;
        font-weight: 100;
    }

    .musicListsul {
        display: flex;
        height: 3.20rem;
        overflow-x: auto;

    }

    .musicListsul li {
        width: 2.15rem;
        margin-left: 0.2rem;
        flex-shrink: 0;
        float: left;
    }

    .musicListsul li img {
        width: 2.15rem;
        height: 2.15rem;
    }

    .musicListsul li h4 {
        width: 2.15rem;
        line-height: 0.36rem;
        font-size: 0.25rem;
        color: #171717;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
    }

    .otherMusicist {
        width: 7rem;
        margin: 0 auto;
    }

    .content .otherMusicist p {
        line-height: 0.86rem;
        color: black;
        font-size: 0.35rem;
        display: flex;
        font-weight: 900;
        justify-content: space-between;
    }

    .content .otherMusicist p span {
        margin-top: 0.16rem;
        height: 0.5rem;
        width: 1.3rem;
        border-radius: 0.25rem;
        -webkit-border-radius: 0.25rem;
        -moz-border-radius: 0.25rem;
        -ms-border-radius: 0.25rem;
        -o-border-radius: 0.25rem;
        border: 1px gray solid;
        font-size: 0.27rem;
        line-height: 0.5rem;
        text-align: center;
        font-weight: 100;
    }

    .otherMusicistul {
        display: flex;
        overflow-x: auto;
        height: 3.46rem;
        flex-wrap: wrap;
    }

    .otherMusicistul li {
        height: 1rem;
        width: 6.9rem;
        flex-shrink: 0;
        font-size: 0.2rem;
    }

    .otherMusicistul li mark {
        font-weight: 900;
        font-size: 0.25rem;
        color: black;
        background: white;
    }

    .otherMusicistul li h1 {
        font-weight: 100;
        line-height: 0.6rem;
        font-size: 0.2rem;
        color: black;
    }

    .otherMusicistul li h2 {
        font-weight: 100;
        font-size: 0.2rem;
        color: black;
    }

    .otherMusicistul li img {
        width: 1rem;
        height: 1rem;
        margin-right: 0.17rem;
        float: left;
    }

    .otherMusicistul li span {
        position: absolute;
        top: 0.29rem;
        right: 0.5rem;
    }

    .otherMusicistul li .picweap {
        height: 1rem;
        margin-bottom: 0.13rem;
        position: relative;

    }
</style>