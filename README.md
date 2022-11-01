# 门户组件拆分说明文档

*随着首页门户项目的开发功能逐渐增加，门户首页部分页面的代码量越来越大，home.vue页面代码量已有3千到4千行代码量，随着后期开发的逐渐深入，功能会越来越大，为保证后续的可维护性，可持续性，稳定性，便于后续开发人员可以更容易的维护和持续开发迭代，我们对前端门户页面做了组件拆分和代码封装的处理，将代码量降至千行左右；并抽离了多个独立的组件出来。*



## 组件整体说明
*本次组件拆分将门户首页拆分为三大类共10多个细分组件，三大类共包括业务功能类、资讯任务类、界面设计类。此处将首页门户整体代码拆分为多个组件，是按照各个组件的处理的业务类型进行归类拆分，其中负责门户首页主页业务代码逻辑的有首页导航组件、核心指标组件、任务及常用功能组件；另外资讯/消息/通知类组件也是另外一大类；最后一类是界面上顶部、轮播图、底部的样式显示类或简单逻辑类的组件。具体组件列表如下：*

##### 业务功能类组件
- 1. 首页导航弹出框组件
- 2. 核心指标组件
- 3. 任务及常用功能组件

##### 资讯任务类组件
- 4. 通知公告组件
- 5. 计划任务组件
- 6. 咨询中心组件
- 7. 应用模块组件

##### 界面设置类组件
- 8. 轮播图组件
- 9. Header组件
- 10. Footer组件
- 11. 退出登录组件
- 12. 岗位切换组件
- 13. 修改密码组件

### 业务功能类组件 
*业务功能类组件，有系统中特定的业务逻辑和独立的功能，解决某类特定需求而独立抽离出来的组件*

#### 首页导航弹出框组件
首页导航弹框组件，包含菜单的快捷添加、删除、按类别查询等功能，负责处理首页导航的业务逻辑处理。
![首页导航弹出框组件](https://img-blog.csdnimg.cn/78f3e1c7053e4f90a378d597fdc3eb60.png#pic_left =350x)
##### 导航弹出框组件的抽离
###### 1). HTML代码
![HTML代码](https://img-blog.csdnimg.cn/e4957a58bb2f485faa2bd2db26172b81.png#pic_left =500x)
将弹框组件相关的HTML放置在Template区域。

###### 2). 设置相应的组件属性Props
![在这里插入图片描述](https://img-blog.csdnimg.cn/02ee76239be248bf8ef767c0c9936a14.png#pic_left =500x)
在Template区域中，按照业务需求，将需要传参的属性值，设置在props中，便于后续调用此组件的父级组件中，可以将这些参数值传递进来。

***部分属性介绍：***

 - *menuInfo，传入初始菜单信息对象，同时menuInfo的值会被监听，实时设置为curMenuInfo，通过遍历curMenuInfo，将生产Tab栏下面多层级结构的菜单列表界面。*
 - *allFnListData，菜单Tab栏数组。*
 - *collectArrow，菜单Tab栏左右箭头对象，用于管理Tab栏左右箭头的动态显示和隐藏。*
 - *collectionObj，弹框顶部的被收藏菜单数组，用于显示收藏过得菜单。*
 - *menuMap，用于存放不同路径作为Key时，对应的当前菜单信息，当点击面包屑时，可以通过面包屑的路径获取到对应的菜单信息对象。*
 - *colNameArray、colIdArray，被收藏的菜单的菜单名称/ID数组，用于后续计算当前选中的菜单是否被收藏过。如果收藏过则被选择时，显示取消收藏；反之，则显示添加收藏。*


###### 3). 编写相应业务逻辑代码
Methods区域，为此组件主要的业务逻辑处理的代码区域，其中比较主要的业务逻辑代码介绍如下：

***部分业务逻辑代码***
![首页导航弹框业务逻辑代码](https://img-blog.csdnimg.cn/c4f347b5d6a14a65b122d7ed6f04b181.png#pic_left =500x)

 - *close，关闭此弹框组件。*
 - *menuLeftArrowFn，点击顶部收藏菜单左侧的箭头，用于菜单栏的向左滚动。*
 - *menuRightArrowFn，点击顶部收藏菜单右侧的箭头，用于菜单栏的向右滚动。*
 - *changeDraggle，收藏菜单栏，菜单发生拖拽的事件。*
 - *searchMenuContent，顶部菜单详情，执行菜单搜索时的处理函数。*
 - *searchWordClean，清空菜单搜索输入框内容的处理函数。*
 - *menuFindChildren，菜单Tab栏，点击Tab栏切换菜单详情的处理函数。*
 - *freshSubMenu，点击菜单面包屑，根据面包屑路径显示子菜单内容的处理函数。*
 - *subFn，取消收藏处理函数。*
 - *addModuleFn，添加收藏处理函数。*

#### 核心指标组件
核心指标组件，包含上网电量、电站数据等集维系统相关指标数据的显示等业务逻辑。
![核心指标组件](https://img-blog.csdnimg.cn/adcca791dbc448cebec887ecd671d82d.png#pic_left =500x)
###### 组件说明
![在这里插入图片描述](https://img-blog.csdnimg.cn/f0329d55a5df437bb781185c79c22fa2.png#pic_left =500x)

*核心指标组件，当前由于没有对应后端接口，当前仅仅是前端静态页面，主页为HTML内容*


#### 任务及常用功能组件

> 负责显示首页菜单、查询首页导航，以及待办、待阅、收藏等信息的组件。

任务栏功能：
![任务栏功能](https://img-blog.csdnimg.cn/022554af05474a08a6d4917a4a9facba.png#pic_left =400x)
常用功能：
![常用功能](https://img-blog.csdnimg.cn/7be9c4a053684fc6a02c47b6e3d28c66.png#pic_left =200x)
##### 任务及常用功能组件的抽离
###### 1). HTML代码
***部分HTML代码片段***
![HTML代码片段](https://img-blog.csdnimg.cn/5b3ee6f1832b48ceb38bdbb2fedef8b0.png#pic_left =500x)
将组件相关的HTML放置在Template区域。

###### 2). 设置相应的组件属性Props
***部分属性介绍：***
![属性介绍](https://img-blog.csdnimg.cn/f1a6383004274812ac79f4e82de6b722.png#pic_left =500x)

 - *taskObj，任务Tab栏对象。*
 - *todoTaskArr，待办任务数组对象。*
 - *toReadArr，待阅任务数组对象。*
 - *flowTaskArr，跟踪任务数组对象。*
 - *collectionTaskArr，收藏任务数组对象。*
 - *notificationArr，通知任务数组对象。*
 - *meetingArr，计划任务数组对象。*
 - *collectionObj，右侧收藏栏菜单数组对象。*

###### 3). 编写相应业务逻辑代码
***部分业务逻辑代码***
![业务逻辑代码](https://img-blog.csdnimg.cn/e52b1895c0a94901b3e918a94ef79f49.png#pic_left =500x)

 - *toDoTaskFn，点击任务Tab栏，切换Tab栏下面任务详情的处理函数*
 - *taskDetail，点击任务列表明细，跳转URL进入任务明细的处理函数*
 - *usedTools，左侧常用功能栏，点击被收藏菜单，跳转URL进入相应业务界面的处理函数*

### 资讯任务类组件
*资讯任务类组件，是负责处理显示新闻、通知、公告、日历日程等通知类信息显示的业务逻辑的组件*

> 此类组件，主要是显示通知/消息类信息列表，然后点击列表明细进行URL跳转，没有过多独立的业务逻辑，此处选择第一个通知公告类组件，作为代表进行介绍，其他类似组件思路是一致的，不再赘述。

#### 通知公告组件
负责显示通知、公告、通报类消息的组件
![通知公告组件](https://img-blog.csdnimg.cn/d04276bfccaf43a2b8d4453ccf1527bc.png#pic_left =500x)
##### 通知公告组件的抽离
###### 1). HTML代码
***部分HTML代码片段***
![HTML代码片段](https://img-blog.csdnimg.cn/5e39bf5ac56c492ca576d8cf93dae474.png#pic_left =500x)

###### 2). 设置相应的组件属性Props
***部分属性介绍：***
![属性介绍](https://img-blog.csdnimg.cn/0213611369184827b881af0fdda91af9.png#pic_left =500x)
- *messageBoardMore，通知公告栏列表信息对象*


###### 3). 编写相应业务逻辑代码
***部分业务逻辑代码***
![业务逻辑代码](https://img-blog.csdnimg.cn/567fc6b53d5d42818f203cdd9b4537f7.png#pic_left =500x)
- *messageUnRead，查询未读的通知公告并展示。*
- *messageBoardDetail，点击通知公告列表明细，并跳转到公告详情。*
- *messageBoardMore，点击通知公告的更多按钮的处理事件函数。*


#### 应用模块组件
负责显示当前拥有的各子系统模块的组件，并可以通过组件跳转到对应模块。
![应用模块组件](https://img-blog.csdnimg.cn/88ba373635eb4092996a926d7200600a.png#pic_left =300x)


#### 咨询中心组件
负责显示公司新闻、文化活动、专题专栏、主席之声等资讯类消息的业务组件
![咨询中心组件](https://img-blog.csdnimg.cn/b7506c27f400455ebc7c0b2b327e447e.png#pic_center)


#### 计划任务组件
负责显示当前计划信息、日历、日程安排等信息的组件
![计划任务组件](https://img-blog.csdnimg.cn/e17fdbf4592e492283e4f8c4b3b48ddb.png#pic_center)




### 界面设置类组件
*界面设置类组件，是负责处理界面消息效果、界面通用设置、顶部底部显示、轮播图展示、顶部切换岗位、修改个人密码等基础显示或设置的组件，此类组件功能较为单一，业务逻辑简单，不做过多介绍。*

#### 轮播图组件
负责显示首页顶部处的轮播图、心灵鸡汤等信息的组件
![轮播图组件](https://img-blog.csdnimg.cn/84095e711a184347ae66e1b98567e770.png#pic_left =400x)


#### Header组件
负责显示首页顶部位置的组件
![顶部组件](https://img-blog.csdnimg.cn/f0e95cae15724f08a84362a5c929e41b.png#pic_left =400x)


#### Footer组件
负责显示首页底部位置的组件
![在这里插入图片描述](https://img-blog.csdnimg.cn/f2dbfce41a064465b48704b12e4dfd10.png#pic_left =450x)



#### 退出登录组件
负责显示退出登录弹框、执行退出登录功能的组件
![退出登录](https://img-blog.csdnimg.cn/bebd53bbd77b46f2940ea42b650ae62e.png#pic_left =200x)


#### 岗位切换组件
负责显示岗位切换弹框、执行岗位切换功能的组件
![在这里插入图片描述](https://img-blog.csdnimg.cn/baeb6dcf74094058bbce7f52cbdd768d.png#pic_left =275x)

#### 修改密码组件
负责显示修改密码弹框、执行修改密码功能的组件
![修改密码](https://img-blog.csdnimg.cn/f3330afa47e3434ba64403aa1a2d2789.png#pic_left =200x)


## 代码封装说明

### navigation.js文件 

> 首页导航相应业务逻辑代码，路径/{项目所在目录}/src/utils/navigation.js

*负责处理首页导航菜单栏各项业务功能的代码逻辑，原来此代码在首页门户的HOME.vue的代码中，各种代码混合在一起，不好区分，由于首页导航的处理逻辑相对较多故将首页导航的业务逻辑单独抽离出来，后续处理首页导航仅需在navigation.js里处理相应业务逻辑即可。具体业务处理如下：*


1). 子菜单Inactive设置
```js
const menuInactive = (menuInfo) => {
    ...
}
```
*对某模块下各项子菜单设置active/inactive的处理*

2). 菜单模块切换时，子菜单显示时的动画设置
```js
const navAnimateSwitch = (state) => {
    state.navAnimate = 'ld ld-fade-in';
    ...
}
```
*当菜单模块切换或进行菜单查询功能时，首页导航的菜单界面显示内容要重新显示，当重新显示时，如果需要设置动画，通过此函数配置*

3). 设置菜单Map，便于后面通过key获取子菜单对象，因为后面需要通过点击菜单面包屑显示相应子菜单内容，每个面包屑都有对应路径，故此处设置了菜单Map
```js 
const forwardSubMenu = (state, item , subItem , index) => {
    ...
}
```
*由于需要通过点击面包屑的方式，刷新面包屑对应路径下子菜单的路径的显示，故此函数设置菜单/子菜单Map，可以通过面包屑的路径作为Key获取对应子菜单数组*


4). 菜单模块下，点击面包屑，然后刷新对应路径下显示的子菜单的功能
```js 
const refreshSubMenu = (state, titleText, textIndex, fullName, applicationName, index) => {
    ...
}
```
*点击面包屑，然后刷新对应路径下显示的子菜单的功能*

5). 常用功能左右滑动框的下标自适应显示
```js
const carouselAdaption = (state) => {
    ...
}
```

6). 执行菜单查询功能，并将最新菜单内容显示在菜单弹框界面
```js
const searchMenu = (state, callback) => { // 搜索输入内容
    ... 
}
```

7). 将菜单内容设置在菜单弹框
```js
const setupMenuInfo = (state, res, resultMenu) => {
    ...
}
```

8). 菜单模块Tab栏左右箭头显示及隐藏处理函数
```js
const initTabSwitchEvent = (timestamp = 1500 , initFlag = false) => { // 动态隐藏Tabs栏的左右箭头
    ...
}
```
当Tab栏在最左侧时，隐藏左侧箭头；当Tab栏在最右侧时，隐藏右侧箭头。


## 总结
![在这里插入图片描述](https://img-blog.csdnimg.cn/813bfcfdf82b404bab906d4a1393d583.png#pic_left =500x)

> 本次首页门户的代码拆分主要是将首页导航的业务逻辑抽离为单独的组件，同时为了保证整体代码的可读性，故将页面各类业务相对独立的代码都抽离为了单独的组件，按照业务类型，整体分为几大类，其中首页导航的业务逻辑相对较多，其余的组件业务逻辑相对较少，通过本次组件的抽离，我们可以看见原来上千行的HTML代码片段，已经只有100多行，而且各项组件负责处理的业务逻辑独立，整体代码片段的可读性得到了较大的提高，便于后期我们的持续开发。


