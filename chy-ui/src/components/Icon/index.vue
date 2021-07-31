<template>
  <div class="content">提供了一套常用的图标集合。</div>
  <div class="main">
    <div class="d-flex ai-fs jc-sb flex-wrap">
      <com-box
        class="demo"
        :title="'使用方法'"
        :desc="'直接通过设置类名为 icon-iconName 来使用 , 或使用:className传入类目即可。例如：'"
      >
        <template v-slot:comSolt>
          <div class="list d-flex">
            <div class="test">
              <Icon :className="'search'"></Icon>
            </div>
            <div class="test">
              <Icon :className="'dianzan'"></Icon>
            </div>
            <div class="test">
              <Icon :className="'帮助'"></Icon>
            </div>
          </div>
        </template>
      </com-box>

      <com-box class="demo" :title="'图标集合'" :isBorder="false">
        <template v-slot:comSolt>
          <div class="list listData d-flex flex-wrap">
            <div class="item" v-for="(item, index) in iconList" :key="index">
              <div class="picture">
                <Icon :className="item"></Icon>
              </div>
              <div class="name">icon-{{ item }}</div>
            </div>
          </div>
        </template>
      </com-box>
    </div>
  </div>
</template>

<script>
import Icon from "./icon.vue";
export default {
  setup() {
    const iconList = [
"search","dianzan","aixin","bianji","caidan","Dyanjing","anquan","bangzhu","buganxingqu","bofangjilu","chuangzuo","chenggong","ceshi","dianhua","dianzan","dingwei","dianying","ditu",
"diantong_guan","diantong_kai","dianyingpiao","dingdan","gengduo",'shanchu','faxian','shandian','gongyi','saoyisao','fuzhi','fenxiang','huatifuhao','shengyin','jianshao','guanzhu','mima','close',
"arrow-right","arrow-double-right","attachment","discount","hide","pdf","run-in","minus-bold","favorite-filling","add","help-filling","prompt-filling","warning-filling"    
    ];
    return {
      iconList,
    };
  },
  components: {
    Icon,
  },
};
</script>

<style lang="scss" scoped>
.main {
  &::before {
    content: "具体演示:";
    display: block;
    font-size: 1.2rem;
    color: #333;
    margin-bottom: 1.5rem;
  }
  .demo {
    width: 100%;
    margin: 0rem 0 1.5rem;

    .list {
      border: 1px solid #eee;
      margin-top: 1.5rem;
      // 图标集合样式
      .item {
        border-right: 1px solid #eee;
        border-bottom: 1px solid #eee;
        &:nth-child(6n) {
          border-right: none;
        }
        width: 16.6%;
        height: 10rem;
        padding: 1.5rem;
        .picture {
          transition: all 0.3s;
          cursor: pointer;
          text-align: center;
          .iconfont {
            font-size: 2rem;
          }
          &:hover {
            transform: scale(2);
          }
        }
        .name {
          margin-top: 1.5rem;
          font-size: 1rem;
          text-align: center;
        }
      }
      // 图标示例样式
      .test {
        margin: 1rem 1.5rem;
      }
    }
    .listData {
      border-bottom: none;
    }
  }
  .content {
    font-size: 0.7rem;
    color: #666;
    margin-bottom: 2rem;
  }
}
</style>