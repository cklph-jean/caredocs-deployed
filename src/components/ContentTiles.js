import { View, Text, Image } from 'react-native'
import WarningIcon from "../assets/svg/dashboard/facility/warning.svg";
import Button from './Button';
import ChevronRightIcon from '../assets/svg/dashboard/ChevronRight.svg';


export default function ContentTiles({ content, ...rest }) {

    return (
        <View className="custom-shadow-md p-[24px] pb-[32px] bg-white rounded-[15px]" style={{ gap: '24px' }}>
            {/* Content Title */}
            <View className="flex-row items-center justify-between">
                <View className="flex-row items-center" style={{ gap: '16px' }}>
                    {content.title}
                </View>

                <View className="flex-row items-center" style={{ gap: '8px' }}>
                    <Text className="text-[14px] leading-5 font-thin">
                        See All
                    </Text>

                    <Button circle className="bg-purple/30 p-[2px]">
                        <Image source={ChevronRightIcon} />
                    </Button>
                </View>

            </View>

            {/* Content Body */}
            <View className="flex-col">
                <View className="rounded-[15px] py-[12px] px-[24px] custom-shadow-sm bg-white">
                    <View className="table">
                        {/* Table Header */}
                        <View className="table-row">
                            <View className="table-cell w-[140px] text-start">
                                <Text className="font-tt-commons-medium text-[14px] font-bolder">Post Info</Text>
                            </View>

                            <View className="table-cell">
                                <Text className="font-tt-commons-medium text-[14px] font-bolder">Notes</Text>
                            </View>
                        </View>
                        {/* Table Header */}

                        {/* Table Body */}
                        <View className="table-row">
                            <View className="table-cell">
                                <View className="py-[12px]">
                                    <View className="flex-row w-full" style={{ gap: '10px' }}>
                                        <Text>10/02/2023</Text>
                                        <Text className="font-sans">10:11PM</Text>
                                    </View>

                                    <Text className="text-purple text-[14px] font-tt-commons-medium font-bold leading-5">
                                        Regarding
                                    </Text>

                                    <Text className="text-black text-[14px] font-tt-commons-medium font-bold leading-5">
                                        Williams Michael
                                    </Text>
                                </View>
                            </View>
                            <View className="table-cell">
                                <Text>
                                    Michael got tripped and for a week he needs to take a medication 2x a day to reduce his pain.
                                </Text>
                            </View>
                        </View>

                    </View>
                </View>
            </View>

        </View>
    )
}