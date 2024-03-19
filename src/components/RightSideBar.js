import { View } from 'react-native'

export default function RightSideBar({ children }) {
    return (
        <View className="px-[32px] w-[311px] bg-white custom-shadow-md">
            <View className="sticky top-0 flex justify-center h-full items-center" style={{ gap: 64 }}>
                {children}
            </View>
        </View>
    )
}