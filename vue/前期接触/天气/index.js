let vm = new Vue({
    el:'#app',
    data:{
        list00:[],
        text00:'',
    },
    methods: {
        getData:function(city){
            let that = this
            axios.get(`http://wthrcdn.etouch.cn/weather_mini?city=${this.text00}`)
            .then(function(res){ 
                console.log(res)       
                try{
                    that.list00 = res.data.data.forecast
                }catch(err){
                    alert('仅支持国内')
                    location.reload()
                }
            },function(err){
                console.log(err)
            })
        },
        getData2:function(city){
            this.text00 = city;
            this.getData(city)
        }
    },
})
document.getElementById('text').focus()//获取焦点