
  <template>
  <div class="content">很多年前，人们还在用打孔纸卡输入。</div>
  <div class="main">
    <div class="d-flex ai-fs jc-sb flex-wrap">
      <com-box class="demo" :title="'基础用法'" >
        <template v-slot:comSolt>
          <div class="list">
              <n-time :time="0" />
              <br>
              <n-time :time="time" />
          </div>
        </template>
      </com-box>
      <com-box class="demo" :title="'相对时间'" >
        <template v-slot:comSolt>
          <div class="list">
              <n-time :time="0" :to="86400000" type="relative" />
              <br>
              <n-time :time="0" :to="864000000" type="relative" />
              <br>
              <n-time :time="0" :to="8640000000 " type="relative" />
          </div>
        </template>
      </com-box>
      <com-box class="demo" :title="'格式化'" :desc="'格式化时间'">
        <template v-slot:comSolt>
          <div class="list">
              <n-time :time="951350400000" format="yyyy-MM-dd" />
              <br>
              <n-time :time="951350400000" format="yyyy-MM-dd hh:mm" />
              <br>
              <n-time :time="951350400000" format="yyyy-MM-dd hh:mm:ss" />
          </div>
        </template>
      </com-box>
      <com-box class="demo" :title="'使用类型'" :desc="'date、datetime或者relative。'">
        <template v-slot:comSolt>
          <div class="list">
              <n-time :time="0" type="date" />
              <br>
              <n-time :time="time" type="datetime" />
              <br>
              <n-time :time="95000" type="relative" />
          </div>
        </template>
      </com-box>
    </div>
  </div>
  <div class="props">
    <div class="Bigtitle">Props</div>
    <com-table :title="'Time props'" :tableData="propsData"></com-table>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { NTime } from 'naive-ui'
import { useRouter } from "vue-router";
import ComBox from "../comBox.vue";
export default defineComponent({
  components: {
    NTime,
    ComBox,
  },
  setup(prop, ctx) {
    const propsData = [
      {
        name: "format",
        type: "default | primary | info | warning | error",
        default: "default",
        info: "控制按钮的外观样式",
      },
      {
        name: "time",
        type: "number | Date",
        default: "Date.now()",
        info: "要显示时间的时间戳",
      },
      {
        name: "to",
        type: "number | Date",
        default: "Date.now()",
        info: "相对时间",
      },
      {
        name: "type",
        type: "'relative' | 'date' | 'datetime'",
        default: "'datetime'",
        info: "控制Time显示时间的数据形式",
      },
      {
        name: "unix",
        type: "Boolean",
        default: "false",
        info: "是否为unix时间戳形式",
      },
    ]
    const time = new Date();
    return {
     propsData,
     time
    };
  },
});
</script>

<style lang="scss" scoped>
.content {
  font-size: 0.7rem;
  color: #666;
  margin-bottom: 2rem;
}
.list {
    margin-top: 1.5rem;
  * {
    margin: 1rem 0rem;
  }
}
.main {
  .demo {
    margin-right: 2rem;
    width: 45%;
    margin-bottom: 2rem;
  }
  &::before {
    content: "具体演示:";
    display: block;
    font-size: 1.2rem;
    color: #333;
    margin-bottom: 1.5rem;
  }
}
.props {
  .Bigtitle {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
}
</style>