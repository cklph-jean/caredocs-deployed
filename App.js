import { View } from 'react-native';
import './index.css';
import MainWrapper from './src/layout/MainWrapper';


export default function App() {
  return (
    <View className="flex-1 justify-center">
      <MainWrapper />
    </View>
  )
}
