import Empty from '../components/Empty'

export default {
  title: 'fulcrum-ui/Empty',
  component: Empty
}

export const BaseEmpty = () => {
  return (
    <div
      style={{
        width: 300,
        height: 300,
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Empty />
    </div>
  )
}

export const CustomImage = () => {
  return (
    <div
      style={{
        width: 300,
        height: 300,
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Empty
        imageStyle={{ width: 200, height: 200 }}
        image='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Faliyunzixunbucket.oss-cn-beijing.aliyuncs.com%2Fjpg%2F65e50d4fd3bd91bdcfcbdb7281b8b3ab.jpg%3Fx-oss-process%3Dimage%2Fresize%2Cp_100%2Fauto-orient%2C1%2Fquality%2Cq_90%2Fformat%2Cjpg%2Fwatermark%2Cimage_eXVuY2VzaGk%3D%2Ct_100&refer=http%3A%2F%2Faliyunzixunbucket.oss-cn-beijing.aliyuncs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631529472&t=0ebaa8dd8f38458ebc0896e8b2027bc8'
      />
    </div>
  )
}

export const CustomDesciption = () => {
  return (
    <div
      style={{
        width: 300,
        height: 300,
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Empty description='暂无数据。。。' />
    </div>
  )
}

export const CustomFooter = () => {
  return (
    <div
      style={{
        width: 300,
        height: 300,
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Empty description='暂无数据。。。'>
        <p>可以使用children添加自定义内容</p>
      </Empty>
    </div>
  )
}
