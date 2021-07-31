<template>
  <div :class="[isBorder ? 'border' : '',isHover ? 'hover' : '', 'comBox']">
      <slot name="CardCover">
          <!-- 插槽内容(不同的组件展示) -->
      </slot>
      <slot name="CardHeader">
          <!-- 插槽内容(不同的组件展示) -->
      </slot>
      <div v-if="title != ''" class="title d-flex jc-sb"><span>{{title}}</span>  
      <!-- <span><i  @click="changeActive" class="iconfont icon-aixin" :class="isClick ? 'active' : '' "></i></span> -->
        </div>
      <div v-if="desc!=''" class="desc">{{desc}}</div>
      <slot name="CardFooter">
          <!-- 插槽内容(不同的组件展示) -->
      </slot>
  </div>
</template>

<script>
import { defineComponent,ref } from 'vue'
export default defineComponent({
    props:{
        title:{
            type:String,
            default:''
        },
        desc:{
            type:String,
            default:''
        },
        isBorder:{
            type:Boolean,
            default:true,
        },
        isHover:{
            type:Boolean,
            default:false,
        }
    },
    setup(){
        const isClick = ref(false)
        const changeActive = () => {
            isClick.value = !isClick.value;
        }
        return{
            isClick,
            changeActive
        }
    }
})
</script>

<style lang="scss" scoped>
.comBox{
    display: inline-block;
    width: 100%;
    min-height: 8rem;
    .iconfont{
        font-size: 0.8rem;
        transition: all .3s;
        cursor: pointer;
    }
    .active{
        color: red;
    }
    .title{
        font-size: 1rem;
        margin-bottom: 1rem;
    }
    .desc{
        font-size: 0.8rem;
        color: #666;
    }
}
.hover{
    &:hover{
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
    }
}
    .border{
        border: 1px solid #ddd;
        padding: 1rem 1.5rem;
    }

</style>