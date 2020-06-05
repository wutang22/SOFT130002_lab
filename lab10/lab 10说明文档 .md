# Lab10 说明文档

##### 作者：17307130286 吴妍琪



#### 第七题

------

- ##### pdo：

  做了什么：按照LastName的顺序以“ArtistID - LastName”的形式输出Artists表中的内容

  如何完成：1、利用config.php里面的内容建立连接；2、设置错误处理方式；3、根据书写的sql语句进行查询；4、处理查询的结果（打印）；5、关闭连接

- ##### mysqli

  做了什么：以 GenreName的顺序列出Genres表中的GenreName值，去作为选项

  如何完成：1、利用config.php里面的内容建立连接；2、检查是否连接成功，错误处理；3、根据书写的sql语句进行查询；4、处理查询的结果；5、释放结果集的内存，关闭连接



![image](http://m.qpic.cn/psc?/V11g9oQL1QTOSS/NsnpM1uFKDYfpy9CWgdxx.hn.rLYV9OioxStQphx3n4vpfR5U6F64QhFT2pi*XlHdH0U.2I3r*rKtkd8.OPL1Q!!/b&bo=wAY4BAAAAAADB9g!&rf=viewer_4)

![image](http://m.qpic.cn/psc?/V11g9oQL1QTOSS/ETWql2gUF22pNmiMBc.OAVRfvgRuCDnqLzoNvpxfI.Ee.i1*3AN8iww8rw0ZcocsC.5mfhYprYC0qYpZirNBcCVe4r.XwwS3FDY.GscMI2w!/b&bo=wAY4BAAAAAADN.g!&rf=viewer_4) 



#### 第八题

------

1. outputArtists()：对Artists表中以LastName为顺序的前30个元素，进行超链接
2. outputPaintings():在Paintings表中根据（1）中所设定的id来查找对应ArtistId的画
3. outputSinglePainting():将（2）中获取到的画作的信息提取出文件名，标题，描述，对应得找到图片，显示相关文字信息

![image](http://m.qpic.cn/psc?/V11g9oQL1QTOSS/ETWql2gUF22pNmiMBc.OAbUvTsztwmJU7UFfWqvCjL6gKlr6INfpRIiY7TbwC.Ht0o0CIbqjOe..nbdvqF3fv7DkIxb00fNnV.ZuD0oEHHw!/b&bo=wAY4BAAAAAADR5g!&rf=viewer_4)



#### 第九题：

------

- ##### 执行sql语句的方式：

1. 使用executeUpdate或者使用executeLargeUpdate方法来执行DDL和DML语句（statement.executeQuery(sql)；；；DDL语句返回的值为0；DML语句返回影响表格内容的行数）
2. 使用execute方法执行SQL语句（statement.execute(sql) [返回值是boolean]  +   getResultSet(): 返回执行查询语句所返回的ResultSet对象  +  getUpdateCount():返回DDL,DML语句所影响的记录行数。
3. 使用PreparedStatement执行SQL语句(conn.prepareStatement(sql) + 然后传入参数值，，常用于查询语句结构相同，参数不同时；会预编译SQL语句，由此带来一些优点比如高效，安全性更强)

- ##### 使用PreparedStatement的好处：

1. 预编译SQL语句，具有更高效的性能
2. 无须“拼接”SQL 语句，使得编程简单
3. 可以防止SQL 注入（也是由于预编译了，比如传入的参数是or true，只会把它当作一个字符串而不会进行where语句中逻辑上的判断），安全性更好

![image](http://m.qpic.cn/psc?/V11g9oQL1QTOSS/ETWql2gUF22pNmiMBc.OAa*qgi3381Y3xAifBy4ZDbeJ0EAknXYg9ZSdPmSu.8FjQtQzz3CqR1llhPR.7soewnsnR3I*8k.mar2b574U.gs!/b&bo=wAY4BAAAAAADR5g!&rf=viewer_4)



#### 第十题

------

- 做了什么：
  1. 按照GenreID顺序展示了图片，并且点击图片与GenreName都能跳转到详情页
- 如何完成（建立连接之类的略）：
  1. 按照GenreID顺序，查询得到按序的Genres表中的GenreId, GenreName, Description三列数据
  2. 对（1）的结果每一条，提取出GenreId找到文件图片，再对图片与GenreName（设定大小为h4等级）进行超链接，跳转到详情页（由genre.php文件根据传入的GenreId显示）

![image](http://m.qpic.cn/psc?/V11g9oQL1QTOSS/ETWql2gUF22pNmiMBc.OAQNAO40CbSrTqoG0jYdDiCoqswjql3faRAeow3XIQHUCThRbgP86A*kD6y5oaGcBWiq9ltsFk.tVHlxxZAPOsgs!/b&bo=wAY4BAAAAAADZ7g!&rf=viewer_4)

