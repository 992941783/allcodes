/*
获取歌曲url
get https://autumnfish.cn/song/url?id=
搜索
https://autumnfish.cn/search?keywords=
*/
let vm = new Vue({
    el:'#app',
    data:{
        //文本框
        text00:'',
        //响应列表
        searchList:[],    
        //播放src
        audioUrl:'',
        //封面图片src
        img00:'',
        //是否渲染封面
        startFengMian:false,
        //热门评论
        hotComments:[],
        //其他评论
        otherComments:[],
        //mv链接
        mvUrl:'',
        //是否显示遮罩层
        isShow:false
    },
    methods:{
        //搜索,获取歌曲
        getDatas:function(){
            let that = this
            axios.get(`http://103.45.251.164:3000/search?keywords=${this.text00}`)
            .then(function(res){
                that.searchList = res.data.result.songs;
            },function(err){console.log(`关键字搜索err:${err}`)})
        },

        //歌曲id,获取信息
        audio:function(id){
            let that = this
            let a
            //获取歌曲url,播放
            axios.get(`http://103.45.251.164:3000/song/url?id=${id}`)
            .then(function(res){
                if(res.data.data[0].url ==null){alert('此链接已失效');}//判断链接是否失效
                that.audioUrl =  res.data.data[0].url//加载src
            },function(err){console.log(`歌曲链接err:${err}`)})
            //获取歌曲信息,封面图片
            axios.get(`http://103.45.251.164:3000/song/detail?ids=${id}`)
            .then(function(res){
                that.img00 = res.data.songs[0].al.picUrl
                that.startFengMian = true
            },function(err){console.log(`封面err:${err}`)})

            //获取歌曲评论
            axios.get(`http://103.45.251.164:3000/comment/music?id=${id}&limit=100`)
            .then(function(res){
                that.hotComments = res.data.hotComments
                that.otherComments = res.data.comments
            },function(err){console.log(`评论err:${err}`)})   
        },
        
        //播放mv
        video:function(mvId){
            let that = this
            axios.get(`http://103.45.251.164:3000/mv/url?id=${mvId}`)
            .then(function(res){
                that.mvUrl = res.data.data.url//加载src
                document.getElementsByTagName('audio')[0].pause()//暂停音乐播放
                that.isShow = true//显示遮罩层
              	document.getElementById('app').style.opacity = '1'//背景不透明
            },function(err){console.log(`mv链接err：${err}`)})
        },
    
        //退出mv
        quit:function(){
            this.isShow = false//取消遮罩层
            this.mvUrl = "#"//停止mv播放
            document.getElementById('app').style.opacity = '0.8'
            document.getElementsByTagName('audio')[0].play()//继续播放音乐
        }
    }
})
document.getElementsByTagName('input')[0].focus()//获取焦点