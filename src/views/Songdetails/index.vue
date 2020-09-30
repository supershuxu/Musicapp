<template>
    <div class=''>
        <van-nav-bar title="官方动态歌单" left-text="返回" left-arrow @click.native="back">
            <template #right>
            </template>
        </van-nav-bar>
        <div class="content">

            <div class="pic">

                <img src="http://p4.music.126.net/EuVP2n4KLtz4vXX5FBKslw==/109951165141335283.jpg" alt="">
                <p>华语速爆新歌</p>
                <div class="bot"><span class="iconfont icon-shouye"></span><span
                        class="iconfont icon-shouye"></span><span class="iconfont icon-shouye"></span><span
                        class="iconfont icon-shouye"></span></div>
            </div>

            <div class="musicsoonlist">
                <ul class="musicsoonlistul">
                    <li>
                        <span>
                            1
                        </span>
                        <h5>无人知晓</h5>
                        <h6>柳大壮-lalla</h6>
                    </li>
                    <li>
                        <span>
                            1
                        </span>
                        <h5>无人知晓</h5>
                        <h6>柳大壮-lalla</h6>
                    </li>
                    <li>
                        <span>
                            1
                        </span>
                        <h5>无人知晓</h5>
                        <h6>柳大壮-lalla</h6>
                    </li>
                    <li>
                        <span>
                            1
                        </span>
                        <h5>无人知晓</h5>
                        <h6>柳大壮-lalla</h6>
                    </li>
                </ul>

            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                soonlist: [],

            };
        },
        computed: {},
        watch: {},
        methods: {
            back() {
                this.$router.push({
                    path: '/'
                })
            },
getlist(){
     axios.get(`http://localhost:4000/playlist/detail?id=${this.$route.params.id}`).then(res => {
                    console.log(res, res.data.playlist.tracks)
                    //this.soonlist = res.data.playlist.tracks
                })
}


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
        components: {},
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
        top: 2.90rem;
        font-size: 0.75rem;
        font-weight: 900;
        color: black;
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
    }

    .musicsoonlistul li h6 {
        line-height: 1;
        color: #909090;

        display: inline-block;
        /* clear: both; */
        /* float: left; */
        width: 3rem;
    }
</style>