import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.scss'

export default function Index () {
  useLoad(() => {
    console.log('Page loaded.')
    console.log(process.env .TARO_APP_API)
  })

  return (
    <View className='index'>
      <Text>Hello world!</Text>
    </View>
  )
}
