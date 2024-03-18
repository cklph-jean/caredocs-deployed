import { Image, Text, View } from "react-native";
import AdminLayout from "../../layout/AdminLayout";
import Button from "../../components/Button";
import FacilityBar from "../../components/Facilities/FacilityBar";
import ContentTiles from "../../components/ContentTiles";
import WarningIcon from "../../assets/svg/dashboard/facility/warning.svg";
import ResidentialNoteIcon from "../../assets/svg/dashboard/ResidentialNoteIcon.svg";
import CommunicationsIcon from "../../assets/svg/dashboard/CommunicationsIcon.svg";
import RegardingToPerson from "../../assets/svg/Person2.png";

const importantResidentialNoteData = [
    {
        id: 1,
        postInfo: {
            date: '10/02/2023',
            time: '10:11PM',
            type: 'Regarding',
            postAuthor: 'Williams Michael'
        },
        notes: 'Michael got tripped and for a week he needs to take a medication 2x a day to reduce his pain.'
    },
    {
        id: 2,
        postInfo: {
            date: '10/02/2023',
            time: '10:11PM',
            type: 'Regarding',
            postAuthor: 'Ezil Jose Santos'
        },
        notes: 'Ezil have to wake up at 6am, because his doctor comes by at 8am. He needs to be ready before conducting his routine exam.'
    },
    {
        id: 3,
        postInfo: {
            date: '10/02/2023',
            time: '10:11PM',
            type: 'Regarding',
            postAuthor: 'Ezil Jose Santos'
        },
        notes: 'Jose Lorem Ipsum. He needs to be ready before conducting his routine exam.'
    },
];

const importantCommunicationData = [
    {
        id: 1,
        postInfo: {
            date: '10/02/2023',
            time: '10:11PM',
            type: 'Note to',
            postAuthor: 'Everyone'
        },
        notes: 'Michael got tripped and for a week he needs to take a medication 2x a day to reduce his pain.'
    },
    {
        id: 2,
        postInfo: {
            date: '10/02/2023',
            time: '10:11PM',
            type: 'Regarding',
            postAuthor: 'Tony Ricardo'
        },
        notes: 'Ezil have to wake up at 6am, because his doctor comes by at 8am. He needs to be ready before conducting his routine exam.'
    },
    {
        id: 3,
        postInfo: {
            date: '10/02/2023',
            time: '10:11PM',
            type: 'Regarding',
            postAuthor: 'Sarah Barbarah'
        },
        notes: 'Jose Lorem Ipsum. He needs to be ready before conducting his routine exam.'
    },
]

const config = [
    {
        label: "Post Info",
        render: (data) => {
            return (
                <View className="pt-[12px] w-[140px]">
                    <View className="flex-row w-full" style={{ gap: '10px' }}>
                        <Text>{data.postInfo.date}</Text>
                        <Text className="font-sans">{data.postInfo.time}</Text>
                    </View>

                    <Text className="text-purple text-[14px] font-tt-commons-medium font-bold leading-5">
                        {data.postInfo.type}
                    </Text>

                    <Text className="text-black text-[14px] font-tt-commons-medium font-bold leading-5">
                        {data.postInfo.postAuthor}
                    </Text>
                </View>
            )
        },
    },
    {
        label: "Notes",
        render: (data) => {
            return (
                <Text>
                    {data.notes}
                </Text>
            )
        },
    },
];

const recentResidentialNote = [
    {
        id: 1,
        postInfo: {
            date: '10/02/2023',
            time: '10:11PM',
            postAuthor: 'By Maurine'
        },
        regardingTo: {
            img: RegardingToPerson,
            name: 'Williams Michael'
        },
        additionalRows: [
            {
                icon: ResidentialNoteIcon,
                title: 'Residential Notes:',
                data: "Michael came back and went to his room. He came out to take his dinner and medication. The staff assisted him to do laundry. After some time he came to take his bedtime medication and went to bed afterwards"
            },
        ]
    },
]

const recentResidentialNoteConfig = [
    {
        label: "Post Info",
        render: (data) => {

            return (
                <View className="py-[12px] w-[140px]">
                    <View className="flex-row w-full" style={{ gap: '10px' }}>
                        <Text>{data.postInfo.date}</Text>
                        <Text className="font-sans">{data.postInfo.time}</Text>
                    </View>

                    <Text className="text-black text-[14px] font-tt-commons-medium font-bold leading-5">
                        {data.postInfo.postAuthor}
                    </Text>
                </View>
            )
        }
    },
    {
        label: "Regarding To",
        render: (data) => {
            return <>
                <View className="flex flex-row items-center flex-wrap" style={{ gap: '16px' }}>
                    <Image source={data.regardingTo.img} />

                    <Text className="text-black text-[14px] font-tt-commons-medium font-bold leading-5">
                        {data.regardingTo.name}
                    </Text>
                </View>
            </>
        }
    },
    {
        label: false, // additional rows
        additionalRow: true,
        render: (data) => {
            return (
                <View className="table-cell align-middle py-[12px]">
                    <View>
                        <View className="flex flex-row items-center te">
                            <Image source={data.icon} tintColor={'#B693F8'} style={{
                                resizeMode: 'contain',
                                height: '12px',
                                width: '12px',
                            }} />

                            <Text className="text-purple text-[14px] font-tt-commons-medium font-bold leading-5">
                                {data.title}
                            </Text>
                        </View>

                        <Text className="text-[14px] mt-[4px]">
                            {data.data}
                        </Text>
                    </View>
                </View>
            )
        }
    }
]

const recentCommunication = [
    {
        id: 1,
        postInfo: {
            date: '10/02/2023',
            time: '10:11PM',
            postAuthor: 'By Maurine O'
        },
        note: {
            to: 'Everyone',
            facility: 'Harmonious Place',
        },
        additionalRows: [
            {
                icon: ResidentialNoteIcon,
                title: 'Communication:',
                data: "Hi Sasha, Could you turn off the light when you available at the start of your shift? I forgot to do that when I was preparing to go back home"
            },
        ]
    },
]

const recentCommunicationConfig = [
    {
        label: "Post Info",
        render: (data) => {

            return (
                <View className="py-[12px] w-[140px]">
                    <View className="flex-row w-full" style={{ gap: '10px' }}>
                        <Text>{data.postInfo.date}</Text>
                        <Text className="font-sans">{data.postInfo.time}</Text>
                    </View>

                    <Text className="text-black text-[14px] font-tt-commons-medium font-bold leading-5">
                        {data.postInfo.postAuthor}
                    </Text>
                </View>
            )
        }
    },
    {
        label: "Note To",
        render: (data) => {
            return <>
                <View className="flex flex-wrap">
                    <Text className="text-black text-[14px] font-tt-commons-medium font-bold leading-5">
                        {data.note.to}
                    </Text>

                    <Text className="text-purple text-[14px] font-tt-commons-medium font-bold leading-5">
                        {data.note.facility}
                    </Text>
                </View>
            </>
        }
    },
    {
        label: false,
        additionalRow: true,
        render: (data) => {
            return (
                <View className="table-cell align-middle py-[12px]">
                    <View>
                        <View className="flex flex-row items-center te">
                            <Image source={data.icon} tintColor={'#B693F8'} style={{
                                resizeMode: 'contain',
                                height: '12px',
                                width: '12px',
                            }} />

                            <Text className="text-purple text-[14px] font-tt-commons-medium font-bold leading-5">
                                {data.title}
                            </Text>
                        </View>

                        <Text className="text-[14px] mt-[4px]">
                            {data.data}
                        </Text>
                    </View>
                </View>
            )
        }
    }
]

const keyFn = (data) => {
    return data.id;
};

export default function Dashboard() {

    const contentTiles = [
        {
            header: {
                title: "Important Residential Note",
                icon: WarningIcon
            },
            content: importantResidentialNoteData,
            config: config,
            keyFn: keyFn
        },
        {
            header: {
                title: "Important Communication",
                icon: WarningIcon
            },
            content: importantCommunicationData,
            config: config,
            keyFn: keyFn
        },
        {
            header: {
                title: "Recent Residential Note",
                icon: ResidentialNoteIcon
            },
            content: recentResidentialNote,
            config: recentResidentialNoteConfig,
            keyFn: keyFn
        },
        {
            header: {
                title: "Recent Communication",
                icon: CommunicationsIcon
            },
            content: recentCommunication,
            config: recentCommunicationConfig,
            keyFn: keyFn
        },
    ];

    return (
        <AdminLayout>
            <View className="flex flex-col" style={{ gap: '24px' }}>
                <View className="flex flex-row justify-between items-center">
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
                        contentTiles.map((content, index) => {
                            return <ContentTiles key={index} content={content} config={content?.config} keyFn={content?.keyFn} />
                        })
                    }
                </View>
            </View>
        </AdminLayout>
    )
}