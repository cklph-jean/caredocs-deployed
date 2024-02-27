import className from "classnames";
import { View, Text, Image } from "react-native";

export default function InfoCard({
    imagePosition,
    imagePath,
    imageIcon,
    title,
    description,
    children,
    ...rest
}) {

    const classes = className(
        "flex font-sans shrink-0 bg-white px-[40px] py-[40px] rounded-[31px]",
        rest.className
    );

    const imgContainerClassess = className(
        "flex relative -z-10",
        {
            "w-[180px]": imagePosition == "right",
            "w-[279px]": imagePosition == "left"
        }
    )

    const imgClassess = className(
        "absolute w-[214px] h-[450px]",
        {
            "top-[-146px]": imagePosition == "right",
            "top-[-144px] right-[-110px]": imagePosition == "left"
        }
    )

    return (
        <View {...rest} className={classes}>
            <View className={`flex ${imagePosition == 'right' ? 'flex-row' : 'flex-row-reverse'} items-center`}>
                <View className="flex shrink" style={{ gap: '1px' }}>
                    {/* Title */}
                    <View className="flex flex-row items-center">
                        {title}
                    </View>
                    {/* End of Title */}


                    {/* Start of Description */}
                    <Text className="font-sans font-normal text-[20px] leading-[28px]">
                        {description}
                    </Text>
                    {/* End of Description */}
                </View>

                {/* Image ( Right or Left ) */}
                <View className={imgContainerClassess}>
                    <Image
                        source={imagePath}
                        className={imgClassess}
                        alt={'Login Person Image'}
                    />
                </View>
            </View>
        </View>
    )
}
