# xml字符串转换json格式
可用于微信小程序xml字符串转换json格式

## 用法示例：
```javascript
var fs = require('fs');
var xml2json = require('xmlstring2json');
var xml = fs.readFileSync('./test/bookstore.xml', 'utf8');
console.log(JSON.stringify(xml2json(xml), null, 4));
```
bookstore.xml文件如下：
```xml
<?xml version="1.0" encoding="ISO-8859-1"?>
<bookstore>
    <book category="CHILDREN">
      <title>Harry Potter</title> 
      <author>J K. Rowling</author> 
      <year>2005</year> 
      <price>29.99</price> 
    </book>
    <book category="WEB">
      <title>Learning XML</title> 
      <author>Erik T. Ray</author> 
      <year>2003</year> 
      <price>39.95</price> 
    </book>
</bookstore>
```
输出如下：
```javascript
{
    "bookstore": {
        "book": [
            {
                "@category": "CHILDREN",
                "title": {
                    "#text": "Harry Potter"
                },
                "author": {
                    "#text": "J K. Rowling"
                },
                "year": {
                    "#text": "2005"
                },
                "price": {
                    "#text": "29.99"
                }
            },
            {
                "@category": "WEB",
                "title": {
                    "#text": "Learning XML"
                },
                "author": {
                    "#text": "Erik T. Ray"
                },
                "year": {
                    "#text": "2003"
                },
                "price": {
                    "#text": "39.95"
                }
            }
        ]
    }
}
```

## 安装
### npm方式安装
```
npm install --save xmlstring2json
```
### bower方式安装
```
bower install xmlstring2json
```

## 注意
该模块暂不检测xml格式合法性，即认为输入的xml都是合法的。如格式不合法，可能出现输出为空的情况。