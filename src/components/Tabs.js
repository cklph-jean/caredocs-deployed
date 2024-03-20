import { Text, View } from "react-native";
import { Fragment, useState } from "react";
import Button from "./Button";
import className from "classnames";

export default function Tabs({ tabs, children }) {

    const [activeTab, setActiveTab] = useState(0);

    const handleActiveTab = (index) => {
        setActiveTab(index);
    }

    const renderedTabTitle = tabs.map((tab, index) => {

        buttonClasses = className(
            "p-5 text-center flex justify-center",
            {
                "border-b border-black/50": index == activeTab
            }
        )

        buttonTextClasses = className(
            "text-black ",
            {
                "font-tt-commons-medium font-[600]": index == activeTab,
            }
        )

        return <Fragment key={index}>
            <Button 
                disabled={tab.disabled}
                className={buttonClasses} 
                textClass={buttonTextClasses} 
                onPress={() => handleActiveTab(index)} > {tab.title} </Button>
        </Fragment>
    })

    return <>
        <View className="tab flex flex-col items-start" style={{ gap: '32px' }}>
            {/* Tab Header */}
            <View className="tab-header text-center self-center justify-center items-center border-b border-black/10 w-[341px]">
                <View className=" grid grid-cols-2" style={{gap:'16px'}}>
                    {renderedTabTitle}
                </View>
            </View>

            {/* Tab Body */}
            <View className="tab-content">
                <Text>
                    {tabs[activeTab].content}
                </Text>
            </View>
        </View>
    </>
}
