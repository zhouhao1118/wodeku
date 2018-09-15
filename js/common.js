//匀速运动
//参数1: 要运动的元素 参数2:目标位置(不用带单位) 参数3:每次移动的距离(不带像素) 参数4: 定时器触发的时间
// window.onload=function(){
    
// }
function move (ele, target,x,bang) {
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        var current = ele.offsetLeft;
        var step = x;
        step = target > current ? step: -step;
        if (Math.abs(current - target) >= Math.abs(step)) {
            current = current + step;
            ele.style.left = current + 'px';
        } else {
            ele.style.left = target + 'px';
            clearInterval(ele.timer);
        }
    }, bang)
}
//变速运动
function bsMove (ele, target) {
    //先清除旧的定时器,防止点击多次时加速运动
    clearInterval(ele.timer);
    ele.timer = setInterval(function() {
       var current = ele.offsetLeft;
    var step = (target - current) / 10;
    step = step > 0 ? Math.ceil(step) : Math.floor(step);
    current = current + step;
    ele.style.left = current + 'px';
    if (current === target) {
        clearInterval(ele.timer);
    }
    }, 20);
}
//获取id
function id (idName) {
    return document.getElementById(idName);
}
//创造元素,并添加进爹 参数1是要创建的标签名,调用时需要加引号   参数2是爹
function crt (sonName, father) {
    var ele = document.createElement(sonName);
    father.appendChild(ele);
    return ele;
}
//通过类名获取DOM对象的解决兼容性写法
function getByClass (cls, target) {
    target = target || document.body;
    var result = [];
    var temp = target.getElementsByTagName('*');
    for (var i = 0; i < temp.length; i++) {
        var tempClass = temp[i].className.split(' ');
        for (var j = 0; j < tempClass.length; j++) {
            if (tempClass[j] === cls) {
                result.push(tempClass[i]);
            break;
            }   
        }
    }
    return result;
}

// 交换类名 参数1: 要交换类名的DOM元素 参数2: 需要改的旧元素   参数3:新加的参数
function changeClassName (cls, search, target) {
    var oldClass = cls.className.split(' ');
    var index = oldClass.indexOf(search);
    oldClass[index] = target;
    cls.className = oldClass.join(' ');
}

//添加文档类元素 能力检测 参数: 需要添加文本内容的元素
function getText (ele) {
    if (typeof ele.textContent !== 'undefined') {
        return ele.textContent;
    } else {
        return ele.innerText;
    }
}
//获取样式能力检测
function getStyle (ele, styleName) {
    if (typeof ele.currentStyle !== 'undefined') {
        return ele.currentStyle[styleName]
    } else {
        return ele.getComputedStyle(ele)[styleName];
    }
}
    var nav = id('#navlist').children[0];
        var navList = nav.children;
        var homepage = ['a','b','c','d','e','f','g','h'];
        var lis3 = id('#lis3');
        var c_a = lis3.children[0];
        var myyxk = id('#myyxk');
        var c_weix = id('#c_weix');
        var c_ph = id('#c_ph');

  var cityName = ['杭州站','上海站','广州站','成都站','北京站','武汉站', '苏州站', '南京站', '重庆站'];
  var act = ['活动', '签证', '游侠', '图片', '游记'];
  // var cZb = ['1日游', '2日游', '3日游', '海岛', '漂流', '溯溪', '古道传奇', '中秋满月趴', '花鸟岛旅游', '砚瓦岛'];
  // var cLocal = ['分享会', 'City Walk', '同城会', '全球WIFI', '旅拍写真'];
  // var cChina = ['云南', '广西', '贵州', '四川', '东北', '坝上', '新疆', '西北', '西藏', '额济纳','内蒙草原','湖南湖北','秦晋','太行山', '华北', '华南', '海南', '甘肃', '缙云'];
  // var cOversea = ['签证', '游轮', '东南亚', '日韩朝', '欧洲游', '美洲游', '中东非', '婆罗南亚', '全球海岛', '极地探险'];
  // var cPic = ['摄影作品', '摄影线路', '比赛专线', '摄影赛事', '摄影培训', '环境人像'];
  // var cGame = ['腾格里沙漠毅行', '神农架行走体验赛', '西山国际登山节', '城市坐标', '登山节'];
  // var cTheme = ['中秋国庆', '最美秋色', '户外游', '瑜伽行', '全球徒步', '出境海岛', '国内海岛', '游侠自驾', '骑行天下', '沙漠旅行'];
  // var cNbhd = ['目的地', '游侠客攻略', '游侠客视频', '圈子', '游飞侠', '资讯', '游侠客领队', '游侠报道'];
  var active = id('active');
  var search = id('search');
  var city = id('city');
  var cCtiy = id('current_city');
  var acBtn = id('acBtn');
  var navList = id('navlist');
  // var navItem = id('navitem');
  var nList = navList.children[0].children;
  for (var i = 0; i < cityName.length; i++) {
      var box = crt('div', city);
      box.className = 'city-box';
      box.innerText = cityName[i];
  }
  for (var i = 0; i < act.length; i++) {
      var box2 = crt('div', active);
      box2.className = 'active-box';
      box2.innerText = act[i];
  }
  nList[1].onmouseover = function () {
      changeClassName(this.children[3], 'hide', 'show');
  }
  nList[1].onmouseout = function () {
      changeClassName(this.children[3], 'show', 'hide');
  }
  nList[2].onmouseover = function () {
      changeClassName(this.children[2], 'hide', 'show');
  }
  nList[2].onmouseout = function () {
      changeClassName(this.children[2], 'show', 'hide');
  }
  nList[3].onmouseover = function () {
      changeClassName(this.children[2], 'hide', 'show');
  }
  nList[3].onmouseout = function () {
      changeClassName(this.children[2], 'show', 'hide');
  }
  nList[4].onmouseover = function () {
      changeClassName(this.children[2], 'hide', 'show');
  }
  nList[4].onmouseout = function () {
      changeClassName(this.children[2], 'show', 'hide');
  }
  nList[5].onmouseover = function () {
      changeClassName(this.children[2], 'hide', 'show');
  }
  nList[5].onmouseout = function () {
      changeClassName(this.children[2], 'show', 'hide');
  }
  nList[7].onmouseover = function () {
      changeClassName(this.children[3], 'hide', 'show');
  }
  nList[7].onmouseout = function () {
      changeClassName(this.children[3], 'show', 'hide');
  }
  nList[8].onmouseover = function () {
      changeClassName(this.children[3], 'hide', 'show');
  }
  nList[8].onmouseout = function () {
      changeClassName(this.children[3], 'show', 'hide');
  }
  nList[10].onmouseover = function () {
      changeClassName(this.children[2], 'hide', 'show');
  }
  nList[10].onmouseout = function () {
      changeClassName(this.children[2], 'show', 'hide');
  }
  lis3.onmouseover = function () {
      changeClassName(myyxk, 'hide', 'show');
      // changeClassName(c_a, '', 'myyxks');
  }
  lis3.onmouseout = function () {
      changeClassName(myyxk, 'show', 'hide');
  }
  c_ph.onmouseover = function () {
      changeClassName(c_ph.children[2], 'hide', 'show');
      changeClassName(c_ph.children[3], 'hide', 'show');
  }
  c_ph.onmouseout = function () {
      changeClassName(c_ph.children[2], 'show', 'hide');
      changeClassName(c_ph.children[3], 'show', 'hide');
  }
  c_weib.onmouseover = function () {
      changeClassName(c_weib.children[1], 'hide', 'show');
      changeClassName(c_weib.children[2], 'hide', 'show');
  }
  c_weib.onmouseout = function () {
      changeClassName(c_weib.children[1], 'show', 'hide');
      changeClassName(c_weib.children[2], 'show', 'hide');
  }
  cCtiy.onmouseover = function () {
      changeClassName(city, 'hide', 'show')
  }
  cCtiy.onmouseout = function () {
      changeClassName(city, 'show', 'hide')
  }
  city.onmouseover = function () {
      changeClassName(city, 'hide', 'show')
  }
  city.onmouseout = function () {
      changeClassName(city, 'show', 'hide')
  }
  acBtn.onmouseover = function () {
      changeClassName(active, 'hide', 'show');
  }
  acBtn.onmouseout = function () {
      changeClassName(active, 'show', 'hide');
  }