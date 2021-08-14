# fulcrum ui

![logo](https://raw.githubusercontent.com/sbkwind/fulcrum/main/fulcrum.jpeg)

`fulcrum` `[ˈfʊlkrəm]` `ui`，一个小型的React组件库(可能小的都不能算是一个组件库)

在线访问地址：[storybook](https://6117cac61975ba003a9bf87a-pegqhlavdx.chromatic.com/)

fulcrum译为支点，切入点，也可理解为一个互联网热词：抓手。之所以做这个组件库，是为了让自己找到做组件的“抓手”，入门组件设计。

本项目借鉴优秀的了`antd`🐶，采用了基础组件+二次封装(~~姑且这么叫吧，我也不知道这种方式的专业名字叫什么~~)的方式，就像`antd`依赖了`rc`库一样，本项目也封装了几个基础组件(src/components/internal)，这些组件没有样式，只满足基本的功能，在此基础上可以进一步开发。

~~PS：好像也就借鉴了这一条🐶~~

如果可能的话，这个项目会一直维护下去，也算是记录自己的学习成长过程。

TODO:


- [ ] 优化动画开始结束和组件显示隐藏的逻辑，包括动画开始前，动画结束后等钩子函数，可以将某些常用的操作封装到Transition组件中

- [ ] 优化组件对齐部分逻辑，提取Align组件

- [ ] 调研其他动画库，完善Transition组件

- [ ] 目前需要显示与隐藏的组件均采用了完全受控组件，对于某些组件，如Tooltip，父组件可能不关心Tooltip的显示和隐藏，可以改为非受控组件，但是仍然保留外部控制的接口

- [ ] 样式有点丑，把样式改漂亮些

storybook安装失败？
1. yarn add @storybook/cli --dev
2. yarn sb init
