# lab6说明文档

##### 作者：17307130286 吴妍琪



### 各个正则表达式的解释 

##### 第二题：

- ###### 	移动电话号：\d{11}

  ​	解释：11个数字

- ###### 	邮箱：[a-zA-Z0-9_-]+@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+$

  ​	解释：@前表示用户名，支持大小写英文字母、数字、下划线、中划线；@后表示域名，支持大小写英文字母、数字。因为域名存在多级，所以用括弧+延展

##### 第三题：

- ###### 	/\b([a-z]+) \1\b/ig

  ​	解释：\b是匹配一个单词的边界；([a-z]+) 是匹配一个到多个小写字母；\1是引用第一个括号的内容；/ig 不区分大小写，并且全局搜索



### 继承不同方式的理解

1. 原型链：本质是将子类的原型设为父类的实例，由于查找属性或方法时会沿着原型链查找，所以完成了继承的效果。
2. 借助构造函数：本质是在子类实例中创建了父类属性。在子类构造函数内部调用父类构造函数，借用父类的构造函数，给子类属性初始化，完成继承
3. Object.create：创建一个新对象,使用父类作为提供新创建的对象的原型，规范了原型继承

### Map、Set、Array之间的区别和使用

1. Map：存储方式是<K,V>,要求K各不相同
2. Set：单值，要求里面元素唯一
3. Array：单值，不要求里面元素唯一



### 提交的github截图

![image](http://m.qpic.cn/psc?/V11g9oQL1QTOSS/ETWql2gUF22pNmiMBc.OAalkmxmGrO2bpXaKmCm5vmYwU3vuAs3DFac1N91ABVtNxsgCSR8bVll.tV0ZhKzuQhdxG0StoUCzn3UfEnyeJh8!/b&bo=wAY4BAAAAAADR5g!&rf=viewer_4)

### 完成的本地命令行截图

![](http://m.qpic.cn/psc?/V11g9oQL1QTOSS/NsnpM1uFKDYfpy9CWgdxxzblu1jgDnCO3YpMvaXUiN7AkfXpXP0aI1.7qfFx3cpy7567h3rcqFdUs1y*Q5UbrA!!/b&bo=IATgAwAAAAADB.U!&rf=viewer_4)