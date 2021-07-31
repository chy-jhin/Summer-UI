<template>
  <div 
  :class="[
  `${size}`,
  `${type}`,
  disable ? 'disable' : '',
  radio ? 'radio' : '',
  'button']"
  @click="Todo"
  >
    <i v-if="icon" :class="['iconfont', `icon-${icon}`]"></i>
    <span :class="ghost ? 'ghost' : ''">
        <slot></slot>
        </span> 
    </div>
</template>

<script >
import {defineComponent} from 'vue'
export default defineComponent({
  props:{
    text:{
      type:String,
      default:'Tag标签'
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
    //   background-color: $val ; 
      background-color: transparent ; 
      border-color: $val !important;
    }

  }
  .transparent{
    background-color: transparent;
  }
  .default{
      padding: 0.2rem 0.3rem;
      color: #333;
  }

    .button{
      display: inline-block;
      font-size: 0.75rem;
      border: 1px solid #eee;
      user-select: none;
      transition: all .3s;
    }
    // button的props值
    .radio{
      border-radius: 20px;
    }
    .mini{
      padding: 0.1rem 0.2rem;
      font-size: 0.6rem;
    }
    .medium{
      padding: 0.2rem 0.3rem;
      font-size: 0.7rem;
    }
    .large{
      padding: 0.3rem 0.4rem;
      font-size: 0.8rem;
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