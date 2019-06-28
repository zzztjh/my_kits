//这里面就是封装我们的常用的代码的js代码
var kits = {};
//封装一个获取指定区间的随机整数的方法
kits.randomInt = function (n, m) {
    return Math.floor(Math.random() * (m - n + 1) + n);
}
//封装一个随机十六进制的方法
kits.randomCol = function () {
    //把十六进制的所有数值放进一个数组里
    var arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    //前面的#是固定的 
    var Col = '#';
    //共6个数值 所以循环6次  出来六个随机数值
    for (var i = 0; i < 6; i++) {
        // 随机数值 * 数组的长度     0-16之间  向下取整
        var Rdom = Math.floor(Math.random() * arr.length)
        //把循环的六次数来的数值赋值给 Col 得到 #xxxxxx 的一串字符串;
        Col += arr[Rdom];
    }
    //赋值完成并返回数值
    return Col;
}