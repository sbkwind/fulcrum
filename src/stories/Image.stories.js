import { useState } from 'react'
import Image from '../components/Image'

export default {
  title: 'fulcrum-ui/Image',
  component: Image
}

const src =
  'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fiqu.oss-cn-beijing.aliyuncs.com%2Fsetting%2F1%2Fsetting_1570889800.jpg&refer=http%3A%2F%2Fiqu.oss-cn-beijing.aliyuncs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630320043&t=b9be1ac6ad90d4659b9c241ee6a4fcd1'

const fallback =
  'https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/c2fdfc039245d68896bf0655afc27d1ed31b2485.jpg'

export const BaseImage = () => <Image src={src} alt='alt' height={400} />

export const Fallback = () => {
  return (
    <div>
      <h4>图片加载失败时，使用备用图片</h4>
      <Image
        src={123}
        alt='alt'
        fallback={<img src={fallback} alt='fallback' width={300} />}
      />
    </div>
  )
}

export const Preview = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <h4>点击图片预览</h4>
      <Image
        src={src}
        alt='alt'
        onClick={() => setVisible(true)}
        width={300}
        allowPreview
        previewOptions={{
          visible,
          onClose: () => setVisible(false)
        }}
      />
    </>
  )
}
