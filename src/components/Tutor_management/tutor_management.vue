<template>
<div class='home clearfix'>
    <header class='teachertop clearfix'>
        <div class='left'>
            <img class='headpic' >
            <h2 class='title'>xxxx工作室</h2>
            <p>认证：广州博大文化xxxx</p>
        </div>
        <div class='right'>
            <i class='icon'></i>
            <span>访问店铺</span>
        </div>
    </header>
    <main>
        <div class='teacher_left'>
            <ul>
                <li class ='clearfix'>
                    <div class='childnav'>经营数据</div>
                    <div class='conten'>
                    <ul class="tear_right_left">
                        <li class='minbox'>
                            <div>123</div>
                            <p>用户总用量</p>
                        </li>
                        <li class='minbox'>
                            <div>123</div>
                            <p>付费用户</p>
                        </li>
                        <li class='minbox'>
                            <div>123</div>
                            <p>今日用户+</p>
                        </li>
                        <li class='minbox'>
                            <div>123</div>
                            <p>今日付费用户+</p>
                        </li>
                    </ul>
                    <div class="tear_right_right">
                        <div>
                            <div class='minbox bor'></div>
                            <div class='minbox'></div>
                        </div>
                        <div>
                            <div class='minbox bor'></div>
                            <div class='minbox'></div>
                        </div>
                    </div>
                    </div>
                </li>
                <li class='clearfix'>
                    <div class='childnav'>常用功能</div>
                    <ul class='conten'>
                        <li class='changyong clearfix' v-for='(key, index) in navlist' :key='index'>
                            <a :href="key.url">
                                <img v-bind:src="'./static/home/home_nav'+(index+1)+'.png'" alt="key">
                                <span>{{key.name}}</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <div class='childnav'>本期榜单</div>
                    <div class='conten top250'>
                        <ul class='clearfix'>
                            <li class='toplist' v-for='(item, index) in toplist' :key='index'>
                                <img src="../../assets/fans.png" :alt="index">
                                <span>{{item.name}}</span>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
        <div class='tear_right'>
            <!-- 统计图 -->
            <div class='pictable'>
                <div class='tabletop'></div>
            </div>
            <!-- 营销功能 -->
            <div class='yingxiao'>
                <div class='childnav'>营销功能</div>
                <ul class='yxlist'>
                    <li v-for="(yxitem, i) in yingxiaolist" :key='i' class='ysitem'>
                        <img :src="'./static/home/yingxiao' + (i+1) + '.png'" alt="营销小图标">
                        <span>{{yxitem.name}}</span>
                    </li>
                </ul>
            </div>
            <!-- 订单分析 -->
            <div class='Order'>
                <div class='childnav'>订单分析</div>
                <ul>
                    <li v-for="(item) in Orderlist" :key="item.data" class='Orderitem'>
                        <h4>{{item.data}}</h4>
                        <span>{{item.name}}</span>
                    </li>
                </ul>
            </div>
        </div>
    </main>
</div>
</template>

<script>
export default {
  data () {
    return {
      navlist: [
        {name: '视频', url: '/shiping'},
        {name: '音频', url: '/shiping'},
        {name: '图文', url: '/shiping'},
        {name: '直播', url: '/shiping'},
        {name: '会员', url: '/shiping'},
        {name: '专栏', url: '/shiping'},
        {name: '大专栏', url: '/shiping'},
        {name: '活动', url: '/shiping'}
      ],
      toplist: [
        {name: '很长很长很', src: 'aaaaa'},
        {name: '很长很长很', src: 'aaaaa'},
        {name: '很长很长很', src: 'aaaaa'},
        {name: '很长很长很', src: 'aaaaa'},
        {name: '很长很长很', src: 'aaaaa'},
        {name: '很长很长很长很长很长很长很长很长很', src: 'aaaaa'}
      ],
      yingxiaolist: [
        {name: '优惠券'},
        {name: '拼团'},
        {name: '好友助力'},
        {name: '推广员'}
      ],
      Orderlist: [
        {name: '代付款', data: '123'},
        {name: '未完成', data: '123'},
        {name: '课单价', data: '123'},
        {name: '转化率', data: '123'}
      ]
    }
  }
}
</script>

<style scoped lang='less'>
.teachertop{
    height: 1.5rem;
    margin-top: .3rem;
    // padding-left: 3rem;
    padding-right: 0.3rem;
    width: 100%;
    box-sizing: border-box;
    .headpic{
        width: 0.9rem;
        height: 0.9rem;
        background: #ff7e00;
        margin: 0.3rem;
        margin-top:0;
        border-radius: 5px;
        float: left;
    }
    .left{
        float: left;
        width: 50%;
        padding-top: .3rem;
        box-sizing: border-box;
        .title{
            display: inline-block;
            font-size:.2rem;
            font-weight: bold;
            margin-bottom: .3rem;
            position: relative;
        }
        .title::after{
            content: '企业店铺';
            display: block;
            width: .8rem;
            height: .3rem;
            font-size: .16rem;
            font-weight: normal;
            color:#2674bc;
            border: 1px solid #2674bc;
            padding: 0 .05rem;
            line-height: .3rem;
            position: absolute;
            text-align: center;
            top: 0;
            right: -1.2rem;
            border-radius: 0.15rem;
        }
        p{
            font-size:16px;
            height: .4rem;
            color:#b2b2b2;
            line-height: .4rem;
        }
    }
    .right{
        float: right;
        padding-top: .3rem;
        margin-right: .3rem;
        .icon{
            display: block;
            float: left;
            width: 0.27rem;
            height: 0.24rem;
            background: url('../../assets/home_goinshop.png');
            background-size:100%;
            float: left;
            // margin-top:.3rem;
            margin-right: .2rem;
        }
        span{
            float: left;
            color: #2674bc;
        }
    }
}
.teachertop{
    // width: 8.4rem;
    height: 1.5rem;
    background: #fff;
}

.home{
    padding-left: 3rem;
    background: #fff;
    background-clip: content-box;
    box-sizing: border-box;
    .childnav{
        width: 100%;
        height: .8rem;
        // background: #2674bc;
        background: #fff;
        color: #b2b2b2;
        float: left;
        padding-top: .3rem;
        padding-left: .3rem;
        font-size: .2rem;
        box-sizing: border-box;
        &::before{
            display: block;
            content: '';
            width: .4rem;
            height: .4rem;
            background:url('../../assets/home/home1.png') no-repeat 100%;
            float: left;
            margin-right: .2rem;
            margin-top: -0.09rem;
        }
    }
    main{
        width: 100%;
        .teacher_left{
            float: left;
            width: 8.7rem;
            height: .8rem;
            .conten{
                width: 8.7rem;
                margin-left: .3rem;
                .minbox{
                     width: 2rem;
                     height: 1.12rem;
                     float: left;
                     box-sizing: border-box;
                     text-align: center;
                     background-color: #f2f2f2;
                        //  line-height: 1.12rem;
                    padding-top: .3rem;
                    box-sizing: border-box;
                    div{
                        font-size: .25rem;
                        color: #ff7e00;
                    }
                }
                //常用功能的样式
                .changyong{
                    width: 2.1rem;
                    height: 1.13rem;
                    background-color: #f2f2f2;
                    float: left;
                    padding-top: .3rem;
                    padding-bottom: .1rem;
                    text-align: center;
                    // box-sizing: border-box;
                    border-bottom:1px solid #e5e5e5;
                    a{
                        width: 100%;
                        height: 100%;
                        display: block;
                        margin: 0 auto;
                        img{
                            width: .66rem;
                            height: .66rem;
                        }
                    }
                    span{
                        display: block;
                        font-size:.16rem;
                        color:#3a3a3a;
                    }
                }
                .changyong:nth-last-child(1), .changyong:nth-last-child(2),
                .changyong:nth-last-child(3),.changyong:nth-last-child(4){
                    border-bottom:none;
                }
                //本期榜单的样式
                .tear_right_left{
                     float: left;
                     width: 4rem;
                     height: 2.24rem;
                     box-sizing: border-box;
                     margin-right: .2rem;
                    li:nth-of-type(odd){
                       border: 1px solid #e5e5e5;
                       border-top: none;
                       border-left: none;
                    }
                    li:nth-of-type(2){
                        border-bottom: 1px solid #e5e5e5;
                    }
                    li:nth-last-of-type(2){
                        border-bottom: none;
                    }
                }
            }
            .tear_right_right{
                background: #fff;
                width: 4.2rem;
                float: left;
                .bor{
                   border-bottom: 1px solid #e5e5e5;
                }
            }
            .tear_right_right>div{
                width: 2rem;
                float: left;
            }
            .tear_right_right>div:nth-of-type(2){
                margin-left: .2rem;
            }
        }
    }
}
//本期榜单的样式
.home .top250{
    width: 100%;
    height: 1.25rem;
    margin-left: .3rem;
    // margin-top: 1.5rem;
    .toplist{
        width: 1.4rem;
        height: 1.25rem;
        background: #f2f2f2;
        // background: #ff7e00;
        float: left;
        font-size: .12rem;
        color: #b2b2b2;
        img{
            margin: .3rem auto .1rem;
            width: .4rem;
            height: .40rem;
            display: block;
            background: #f2f2f2;
            border-radius: 3px;
        }
        span{
            width: .93rem;
            margin: 0 auto;
            display: block;
            // line-height: 0;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            text-align: center;
        }
    }
}
//统计图的样式
.home .tear_right{
    padding-top: .8rem;
    padding-left: .3rem;
    margin: 0;
    // height: 10.8rem;
    width: 7.5rem;
    background: #fff;
    box-sizing: border-box;
    float: left;
    padding-bottom: .3rem;
}
.home .pictable{
    width: 6.9rem;
    height: 3.9rem;
    background: #2674bc;
}
//营销功能

.yingxiao{
    width: 6.9rem;
    height: 2.2rem;
    // padding-top: 0.8rem;
    .yxlist{
        width: 100%;
        height: 100%;
        border-radius: 3px;
        background: #f2f2f2;
    }
    .ysitem{
        float: left;
        width: 1.65rem;
        height: 1.39rem;
        img{
        width: .7rem;
        height: .7rem;
        display: block;
        margin:.3rem auto 0 ;
        // margin-top:.3rem ;
        }
        span{
            display: block;
            margin: -.05rem auto 0;
            text-align: center;
        }
    }
}
//订单分析
.Order{
    width: 6.9rem;
    height: 2.05rem;
    // background: #2674bc;
    .Orderitem{
        float: left;
        text-align: center;
        width: 25%;
        background: #f2f2f2;
        height: 1.25rem;
        h4{
            font-size: .25rem;
            color:#ff7e00;
            font-weight: 700;
            margin: .35rem auto 0.1rem;
            // margin-top: .35rem;
        }
        span{
            font-size: 0.14rem;
            color: #3a3a3a;
            line-height: 0;
        }
    }
}
</style>
