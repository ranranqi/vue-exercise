# vue-exercise
## 1，创建vue实例。
```
 <div id="app">
        {{message}}</br>
        {{(a < 2)? a : message}}
    </div>

    
    <script>
        var view = new Vue({
            el: '#app',
            data:{
                message: '开始学习vue',
                a: 5
            },
            created:function(){
                alert('vue实例刚创建，未挂载')
            },
            mounted:function(){
                alert('vue实例刚创建完成，刚刚挂载')
            }
        })
    </script>
```
### 访问vue实例的属性 --- 使用$符
  view.$el  
  view.$data
可得到对应的dom
### 访问data中的属性 --- 直接view.属性名
view.message  
## 2，文本插值。
### 使用双大括号{{...}}包裹data中的属性，它会自动将我们双向绑定的数据显示出来。
 > 1,在{{}}里可以进行简单的运算 ---{{a*2}}  
 2,也可以进行三远远算符 --- {{(a > 2)?messge:a}}  
 3,文本插值的形式，只支持单个表达式，不支持多个表达式语句和流控制。
