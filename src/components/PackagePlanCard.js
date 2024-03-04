import { FiCheck } from "react-icons/fi";
import Button from "./Button";
import Card from "./Card";
import { Text, FlatList, View } from "react-native";

export default function PackagePlanCard({
    data,
    onChoosePackage
}) {

    const handlePress = () => {
        onChoosePackage(data)
    }

    renderItem = ({ item }) => (
        <View className="p-3 flex flex-row items-center" style={{ gap: '12px' }}>
            <FiCheck
                className="w-[24px] h-[24px]"
            />
            <Text className="font-sans text-[14px]">{item.inclusion}</Text>
        </View>
    );

    return <>
        <Card className="flex flex-col p-[24px] justify-between items-start self-stretch shadow-2xl bg-white w-auto h-full rounded-[12px]">
            <View className="flex">
                <View className="flex flex-col border-b border-black/10 w-full" style={{ gap: '22px' }}>
                    <Text className="text-end">
                        {data.packageType}
                    </Text>

                    <Text className="text-[60px] text-bold font-tt-commons-medium">
                        {data.packagePrice} <Text className="capitalize font-tt-commons-medium text-[16px] leading-[22px] font-bolder">/ {data.packageDuration}</Text>
                    </Text>
                </View>

                <Text className="flex mt-[10px] mb-[14px] leading-5 font-sans font-[400] text-[14px]">
                    {data.packageDescription}
                </Text>

                <FlatList
                    data={data.packagePlanInclusions}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>

            <View className="mt-10 lg:mt-0">
                <Button primary onPress={handlePress} textClass="text-white font-tt-commons-medium" rounded>
                    Choose this package
                </Button>
            </View>
        </Card>
    </>
}
