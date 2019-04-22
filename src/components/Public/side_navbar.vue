<template>
  <div>
    <ul class='navbar'>
      <li v-for='( item, index) in list' :key='item.name' @mouseover="hoverIndex = index" @mouseout="hoverIndex = -1" :class="{'listitem': true, 'navhover':index==hoverIndex}">
        <img v-bind:src="item.url" class='icon'>
        {{item.name}}
        <i style='color:#fff' class='open'></i>
        <ul class="childnav" :v-if='!index'>
          <!-- <li class='chidnav_item'><a href="">我的服务</a></li> -->
          <li v-for='key in item.child' :key='key.content' :class="'chidnav_item childnav'+index" :ref="'childnav'+index">{{key.content}}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      flag: 'true',
      hoverIndex: -1,
      list: [
        { name: '店铺概况',
          url: './static/icon/shop_overview.png'
        },
        { name: '知识店铺',
          url: './static/icon/shop.png',
          child: [
            {path: '', content: '店铺信息'},
            {path: '', content: '店铺装修'},
            {path: '', content: '店铺认证'},
            {path: '', content: '商品分组'},
            {path: '', content: '店铺公告'}
          ]},
        { name: '知识商品',
          url: './static/icon/goods.png',
          child: [
            {path: '', content: '会员'},
            {path: '', content: '大专栏'},
            {path: '', content: '专栏'},
            {path: '', content: '单品'},
            {path: '', content: '直播'}
          ]},
        { name: '讲师管理',
          url: './static/icon/teacher.png',
          child: [
            {path: '', content: '管理讲师'}
          ]
        },
        { name: '营销管理',
          url: './static/icon/marketing.png',
          child: [
            {path: '', content: '营销中心'},
            {path: '', content: '推广员'},
            {path: '', content: '优惠券'},
            {path: '', content: '优惠码'},
            {path: '', content: '新人有理'},
            {path: '', content: '多人拼团'},
            {path: '', content: '限时砍价'},
            {path: '', content: '显示秒杀'},
            {path: '', content: '好友助力'},
            {path: '', content: '支付有礼'}
          ]},
        { name: '用户管理',
          url: './static/icon/user.png',
          child: [
            {path: '', content: '用户列表'},
            {path: '', content: '群发信息'},
            {path: '', content: '投诉反馈'}
          ]
        },
        { name: '粉丝运营',
          url: './static/icon/fans.png',
          child: [
            {path: '', content: '粉丝对聊'},
            {path: '', content: '付费问答'},
            {path: '', content: '付费活动'},
            {path: '', content: '评论管理'},
            {path: '', content: '私聊管理'}
          ]
        },
        { name: '订单管理',
          url: './static/icon/order.png',
          child: [
            {path: '', content: '管理订单'}
          ]
        },
        { name: '资产管理',
          url: './static/icon/assets.png',
          child: [
            {path: '', content: '结算管理'},
            {path: '', content: '提现管理'}
          ]
        },
        { name: '数据分析',
          url: './static/icon/data.png',
          child: [
            {path: '', content: '交易分析'},
            {path: '', content: '用户分析'},
            {path: '', content: '订单分析'},
            {path: '', content: '收入分析'}
          ]
        },
        { name: '账号设置',
          url: './static/icon/account.png',
          child: [
            {path: '', content: '运营管理'},
            {path: '', content: '我的账号'}
          ]
        },
        { name: '我的服务',
          url: './static/icon/service.png',
          child: [
            {path: '', content: '我的服务'}
          ]
        }
      ]
    }
  },
  methods: {
    openChild (i) {
      // let listdom = this.$refs['chidnav_item']
      let listdom = document.getElementsByClassName('chidnav_item')
      for (let index = 0; index < listdom.length; index++) {
        // console.log(index)
        listdom[index].style.display = 'none'
      }
      if (!i) {
        return
      }
      let flagtext = this.flag ? 'block' : 'none'
      let dom = this.$refs['childnav' + i]
      for (let key = 0; key < dom.length; key++) {
        // console.log(dom[key])
        dom[key].style.display = flagtext
      }
    },
    hovernav (i) {
      console.log(i)
    }
  }
}
</script>

<style lang='less'>
.listitem {
  width: 2.7rem;
  height: 0.73rem;
  // min-width: 150px !important;
  line-height: 0.82rem;
  box-sizing: border-box;
  font-size: .16rem;
  padding-left: 1.05rem;
  color:#fff;
  position: relative;
  /* background: #666; */
}
.listitem:hover {
  background: #2674bc;
}
.navbar {
  box-sizing: border-box;
  width: 2.7rem;
  /* padding-top:0.3rem; */
  height: 10.8rem;
  background: #666;
  position: fixed;
  top: .6rem;
  left: 0;
}
.navbar .icon {
  width: 0.3rem;
  height: 0.3rem;
  display: block;
  position: absolute;
  top: 0.25rem;
  left: 0.45rem;
}
.navbar .open {
  width: .2rem;
  position: absolute;
  height: 0.4rem;
  right: .2rem;
  top: 0.28rem;
  background: url('../../assets/go.png') no-repeat;
}
.navbar .listitem .childnav{
  width: 2.0rem;
  /* height: .82rem; */
  // background: aqua;
  position: absolute;
  right: -2rem;
  top: 0;
   .chidnav_item{
    height: 0.82rem;
    width: 1.8rem;
    background:#666;
    display: none;
    text-align: center;
    a{
      color: #fff;
    }
   }
   .chidnav_item:hover{
     background:#107ddf;
   }
}
.navhover:hover .childnav .chidnav_item{
  display: block;
}
</style>
