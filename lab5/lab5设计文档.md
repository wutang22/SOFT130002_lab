# wbe lab5文档

#### 作者：17307130286 吴妍琪



#### 函数知识点与解决过程：

1. ##### showWindowHref()函数

   - 首先获得url的值，利用split函数切割得到后面参数部分
   - 对参数部分再根据“？”切割，得到参数数组
   - 遍历，找到name部分，截取获得值，赋值给url_result

2. ##### timeTest()函数

   - 利用setInterval(timeTest,5000);函数来每5秒执行一次timeTest；设置全局变量count来记数执行次数
   - 在执行翻倍操作前先判断是否过了整分（我理解的是比如12:40：47开始，12:41:00就得停下）。如果过了，利用clearInterval函数停止
   - 否则mul的值翻倍，计数加一，比较计数是否达到10次，达到则停止

3. ##### arrSameStr()函数

   - 利用split（“”）函数将每个字符划分成数组；
   - 创建对象，对象的属性名为字符，值为出现次数
   - 对数组遍历，将数组中的每个字符出现统计到对象中去（没有，新建属性；有，对应属性值加一）
   - 遍历对象，找到出现次数最多的一个字符与出现次数



#### 完成效果截图：

![image](https://github.com/wutang22/SOFT130002_lab/blob/master/lab5/img/lab5_img.png)



#### github提交截图：

![image](https://github.com/wutang22/SOFT130002_lab/blob/master/lab5/img/github.png)