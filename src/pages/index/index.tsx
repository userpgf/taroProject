import { View, Text, AtButton } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'

export default function Index() {
  useLoad(() => {
    console.log('Page loaded.')
    console.log(process.env.TARO_APP_API)
  })

  return (


    <View>
      <Text>Hello world!</Text>
      <AtButton type="primary">I need Taro UI</AtButton>
      <Text>Taro UI 支持 Vue 了吗？</Text>
      <AtButton type="primary" circle>支持</AtButton>
      <Text>共建？</Text>
      <AtButton type="secondary" circle>来</AtButton>
    </View>

  )
}
