import { Text } from 'react-native'
import React from 'react'

export default function PageTitleComponent({ title }) {
    return (
        <Text className="text-[28px] font-sans font-[600] leading-[34px]">{title}</Text>
    )
}