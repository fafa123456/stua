<template>
    <div class='topnav'>
        <div class='topnav_left'>
            <img src="" alt="">
            <span>xxx工作工作工作室</span>
        </div>
        <div class='topnav_right'>
            <ul>
                <li>
                    <i class='topicon'></i>
                    <span class='toptext'>消息中心</span>
                    <i class='munber'>99</i>
                </li>
                <li>
                    <i class='topicon topicon1'></i>
                    <span class='toptext' >用户评论</span>
                    <i class='munber'>99+</i>
                </li>
                <li>
                    <i class='topicon topicon2'></i>
                    <span class='toptext'>用户反馈</span>
                    <i class='munber'>0</i>
                </li>
                <li>
                    <i class='topicon topicon3'></i>
                    <span class='toptext'>我的账号</span>
                </li>
                <li>
                    <i class='topicon topicon4'></i>
                    <span class='toptext'>退出登录</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="less" scoped>
.topnav{
    width:100% ;
    height: .6rem;
    position:fixed;
    top: 0;
    left: 0;
    background: #fff;
    .topnav_left{
        width: 35%;
        height: 100%;
        // background-color: aqua;
        float: left;
        line-height: .6rem;
        vertical-align: middle;
        border-top: 1px soild transparent;
        box-sizing: border-box;
        // text-align: justify;
        img{
            display: block;
            float: left;
            width: .4rem;
            height: .4rem;
            border-radius: .03rem;
            background-color: #fff;
            margin: 0.1rem .2rem 0.1rem 0.3rem;
        }
        span{
            display: block;
            float: left;
        }
    }
    .topnav_right{
        // width: 60%;
        height: 100%;
        // background: hotpink;
        float: right;
        padding-right: 0.3rem;
        box-sizing: border-box;
        line-height: .6rem;
        li{
            float: left;
            margin-right:.3rem;
            i{
                display: block;
                float: left;
            }
            .topicon{
                width: 0.28rem;
                height: .26rem;
                margin: 0.19rem .2rem 0 0;
                float: left;
                background: url('../../assets/news.png') center 100% no-repeat;
                background-size: 100%;
            }
            .topicon1{
                background: url('../../assets/top_comment.png') center 100% no-repeat;
                background-size: 100%;
            }
           .topicon2{
                background: url('../../assets/feedback.png') center 100% no-repeat;
                background-size: 100%;
            }
            .topicon3{
                background: url('../../assets/top_account.png') center 100% no-repeat;
                background-size: 100%;
            }
            .topicon4{
                background: url('../../assets/sign_out.png') center 100% no-repeat;
                background-size: 100%;
            }
            .toptext{
                line-height: .6rem;
                font-size: .16rem;
                margin-right: .1rem;
                display: block;
                float: left;
            }
            .munber{
                // width: 0.2rem;
                height: 0.2rem;
                line-height: .2rem;
                border-radius: 0.15rem;
                padding:.05rem .10rem ;
                float: left;
                background: #f43530;
                margin: .16rem .2rem 0 0;
                font-style:normal;
                font-size: .12rem;
                color: #fff;
            }
        }
    }
}
</style>
