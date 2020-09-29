<template>
  <div class=''> <header class="headerCon">
        <ul class="headerConul">
            <li >
            <span class="iconfont icon-shouye"></span></li>
            <router-link  tag="li" to="/mine">我的</router-link>
            <router-link  tag="li" to="/find">发现</router-link>
            <router-link  tag="li" to="/yun">云村</router-link>
            <router-link  tag="li" to="/video">视频</router-link>
            <li>
            <span class="iconfont icon-shouye"></span></li>
        </ul>
    </header></div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  computed: {},
  watch: {},
  methods: {

  },
  created() {

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

<style  scoped>


.headerCon{
    height: 1.26rem;
}
.headerConul{
    height: 1.26rem;
    line-height: 1.26rem;
    text-align: center;
    padding: 0 0.25rem;
}
.headerConul li{
    float: left;
    color: #888888;
    font-size: 0.3rem;
    width: 1rem;
    box-sizing: border-box;
}
.headerConul li span{
    font-size: 0.35rem;
}
.headerConul li.active{
    font-size: 0.35rem;
    color: black;
}
.headerConul li:nth-of-type(1){
    width: 1.42rem;
}
.headerConul li:nth-of-type(6){
    width: 1.42rem;
}

</style>