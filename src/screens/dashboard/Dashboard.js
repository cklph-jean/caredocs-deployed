import { Image, Text, View } from "react-native";
import AdminLayout from "../../layout/AdminLayout";
import Button from "../../components/Button";
import FacilityBar from "../../components/Facilities/FacilityBar";
import ContentTiles from "../../components/ContentTiles";
import WarningIcon from "../../assets/svg/dashboard/facility/warning.svg";
import ResidentialNoteIcon from "../../assets/svg/dashboard/ResidentialNoteIcon.svg";
import CommunicationsIcon from "../../assets/svg/dashboard/CommunicationsIcon.svg";


const ContentTitle = ({ icon, title }) => {
    return (
        <>
            <Image source={icon} tintColor={'#26C8B8'} />
            <Text className="text-primary text-[22px] font-[600] font-tt-commons-medium leading-[28px]">
                {title}
            </Text>
        </>
    )
}

export default function Dashboard() {

    const contentTiles = [
        {
            title: <ContentTitle icon={WarningIcon} title="Important Residential Note" />,
            content: [{}]
        },
        {
            title: <ContentTitle icon={WarningIcon} title="Important Communication" />,
            content: [{}]
        },
        {
            title: <ContentTitle icon={ResidentialNoteIcon} title="Recent Residential Note" />,
            content: [{}]
        },
        {
            title: <ContentTitle icon={CommunicationsIcon} title="Recent Communication" />,
            content: [{}]
        },
    ];

    return (
        <AdminLayout>
            <View className="flex flex-col" style={{ gap: '24px' }}>
                <View className="flex flex-row justify-between">
                    {/* Title */}
                    <Text className="text-[28px] font-tt-commons-medium">
                        Dashboard
                    </Text>

                    {/* Toolbar Section */}
                    <View>
                        {/* Toolbar Buttons Here */}

                        <Button primary className="py-[12px] px[18px]" style={{ gap: '6px' }}>
                            <Text className="text-[14px] leading-[20px]">
                                Create Notes
                            </Text>
                        </Button>
                    </View>
                    {/* Toolbar Section */}
                </View>

                <View className="mt-[20px]">
                    <FacilityBar />
                </View>

                <View className="grid grid-cols-2" style={{ gap: '32px' }}>
                    {
                        contentTiles.map((item, index) => {
                            return <ContentTiles key={index} content={item} />
                        })
                    }
                </View>
            </View>
        </AdminLayout>
    )
}