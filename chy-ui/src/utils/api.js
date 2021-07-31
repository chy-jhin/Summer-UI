// import store from '../store/store.js'
// import {post} from "../request/http.js"

// 节流
	// topath: throttling( () => {},1500)
export const _throttling = function(callback, interval = 1500) {
    let last;
    let timer;
    return function () {
        let _this = this;
        let args = arguments;
        let now = + new Date();
        if (last && now - last < interval) {
            clearTimeout(timer);
            timer = setTimeout(function () {
                last = now;
                callback.apply(_this, args);
            }, interval);
        } else {
            last = now;
            callback.apply(_this, args);
        }
    }
}

// 防抖
// 传入函数和时间限制,创建timer保存定时器,拿到当前函数的this作用域和参数数组,利用闭包传入返回函数式,用apply在本函数的作用域调用传入的函数,否则获取不到timer;
export const _debounce = function(callback, wait =  1500, immediate) {
	// callback 调用函数
	// wait 等待时间
	// immediate 是否立即执行
  let timer;
  return function () {
    let _this = this, //保存this指向
      args = arguments; //保存参数
    if (timer) clearTimeout(timer);
    if (immediate) {
      let callNow = !timer;
      timer = setTimeout(() => {
        timer = null;
      }, wait);
      if (callNow) callback.apply(_this, args);
    } else {
      timer = setTimeout(() => {
        callback.apply(_this, args);
      }, wait);
    }
  };
}


// 工具类
export const TestTel = function(tel) {
	let length = tel.split('').length;
	if (tel == false || length !== 11) {
		// uni.showToast({
		// 	title: "请正确输入电话号码",
		// 	icon: "none",
		// 	mask: true,
		// })
		alert("请正确输入电话号码");
		return false
	}
	return true;
}
// 获取时间年月日
export const getDate = function(type) {
	const date = new Date();
	let year = date.getFullYear();
	let month = date.getMonth() + 1;
	let day = date.getDate();
	if (type === 'start') {
		year = year - 60;
	} else if (type === 'end') {
		year = year + 2;
	}
	month = month > 9 ? month : '0' + month;
	day = day > 9 ? day : '0' + day;
	return `${year}-${month}-${day}`;
}
/**
 * 获取上一个页面的实例
 */
export const beforePage = function() {
	let pages = getCurrentPages(); //当前页面栈
	if (pages.length > 1) {
		let before = pages[pages.length - 2]; //获取上一个页面实例对象  
		return before.$vm;
	}
}


// 取两个数组对象的差集
export const _Array_difference = function(oldArray,newArray) {
	const oldIds = oldArray.map((item) => item.id);
	const data = newArray.filter(
	  (item) => !oldIds.includes(item.id)
	);
	return data;
}

// 取两个数组对象的交集
export const _Array_intersection = function(oldArray,newArray) {
	const oldIds = oldArray.map((item) => item.id);
	const data = newArray.filter(
	  (item) => oldIds.includes(item.id)
	);
	return data;
}
// 去两个对象交集
export const _ObjectMixed =  function (to, from, cb = false) {
	// 遍历对象属性然后深拷贝
	if (typeof (to) != 'object' || typeof (from) != 'object') return;
	for (let key in to) {
	  to[key] = from.hasOwnProperty(key) ? (typeof (from[key]) == 'object' ? JSON.parse(JSON.stringify(from[key])) : from[key]) : to[key];
	}
	if (cb) return to;
  }

