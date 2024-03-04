import './index.css';
import AuthProvider from './src/context/AuthContext';
import MainWrapper from './src/layout/MainWrapper';


export default function App() {
  return (
    // <View className="flex-1 justify-center overflow-auto">
    <AuthProvider>
      <MainWrapper />
    </AuthProvider>
    // </View>
  )
}