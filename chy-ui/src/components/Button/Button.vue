<template>
  <div 
  :class="[
  `${size}`,
  `${type}`,
  disable ? 'disable' : '',
  radio ? 'radio' : '',
  ghost ? 'transparent' : '',
  'button']"
  @click="Todo"
  >
    <i v-if="icon" :class="['iconfont', `icon-${icon}`]"></i>
    <span :class="ghost ? 'ghost' : ''">
      <slot></slot>
      <!-- {{text}} -->
      </span> 
    </div>
</template>

<script >
import {defineComponent} from 'vue'
export default defineComponent({
  props:{
    text:{
      type:String,
      default:'Button组件'
    },
    type:{
      type:String,
      default:'default'
    },
    size:{
      type:String,
      default:'medium'
    },
    disable:{
      type:Boolean,
      default:false
    },
    icon:{
      type:String,
    },
    radio:{
      type:Boolean,
      default:false
    },
    ghost:{
      type:Boolean,
      default:false,
    },
    event:{
      type:Function,
    }
    // loading:{
    //   type:String,
    // },

  },
    setup(props,ctx){
      const Todo = () => {
        if(props.disable){
          console.log("disable")
          return false
        }
        if(props.event){
          props.event();
        }
      }
      return{
        Todo,
      }
    }
})
</script>

<style lang="scss" scoped>
  // button的type值
  $colorlist:(
    primary:#18a058,
    info:#2080f0,
    warning:#fcb040,
    error:#de576d,
  );

  @each $key,$val in $colorlist{
    .#{$key}{
      color: $val ;
      background-color: $val ; 
      color: #fff ;
      border-color: $val !important;
      &:hover{
        color: #fff;
        border-color: $val;
      }
      .ghost{
        background-color: transparent;
        color: $val;
      }
    }
  }
  .transparent{
    background-color: transparent;
  }
  .default{
      padding: 0.35rem 0.5rem;
      color: #333;
      &:hover{
        color: #008be1;
        border-color: #008be1;
      }
  }

    .button{
      display: inline-block;
      font-size: 0.75rem;
      border: 1px solid #eee;
      cursor: pointer;
      user-select: none;
      transition: all .3s;
      &:active{
            transform: scale(0.9);
    // background-color: darken($button-bg, 5%);
    // box-shadow: 0 2px 25px rgba(255, 0, 130, 0.2);
      }
    }
    // button的props值
    .radio{
      border-radius: 20px;
    }
    .mini{
      padding: 0.3rem 0.4rem;
      font-size: 0.6rem;
            .iconfont{
        font-size: 0.9rem;
      }
    }
    .medium{
      padding: 0.35rem 0.5rem;
      font-size: 0.75rem;
            .iconfont{
        font-size: 1rem;
      }
    }
    .large{
      padding: 0.55rem 0.6rem;
      font-size: 0.85rem;
            .iconfont{
        font-size: 1.2rem;
      }
    }
    .disable{
      opacity: 0.8;
      cursor: not-allowed;
      // pointer-events: none;
      &:hover{
        color: #333;
        border-color: #eee;
      }
      &:active{
        transform: scale(1);
      }
    }
</style>