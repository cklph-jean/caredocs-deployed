import WarningIcon from "../assets/svg/dashboard/facility/warning.svg";
import { View, Text, Image } from 'react-native'
import Button from './Button';
import ChevronRightIcon from '../assets/svg/dashboard/ChevronRight.svg';
import className from "classnames";
import { Fragment } from "react";

const ContentTitle = ({ icon, title, ...rest }) => {

    const classess = className(
        "text-primary lg:text-[22px] font-[600] font-tt-commons-medium leading-[28px]",
        rest.className
    )

    return (
        <>
            <Image source={icon} tintColor={'#26C8B8'} />
            <Text {...rest} className={classess}>
                {title}
            </Text>
        </>
    )
}

export default function ContentTiles({ content, ...rest }) {

    let renderedHeaders, renderedRows, renderedAdditionalRows;

    if (content.config) {
        renderedHeaders = content.config.map((column) => {
            if (column.header) {
                return <Fragment key={column.label}>{column.header()}</Fragment>;
            }

            return (
                <View className="table-cell text-start" key={column.label}>
                    <Text className="font-tt-commons-medium text-[14px] font-bolder">{column.label}</Text>
                </View>
            )
        });

        renderedRows = content.content.map((rowData) => {
            const renderedCells = content.config.map((column) => {
                return !column?.additionalRow && (
                    <View className="table-cell align-middle pt-[12px]" key={column.label}>
                        {column.render(rowData)}
                    </View>
                );
            });

            return (
                <Fragment key={content?.keyFn(rowData)}>
                    <View className="table-row">
                        {renderedCells}
                    </View>
                </Fragment>
            )
        });


        renderedAdditionalRows = content.content.map((rowData, index) => {
            return content.config.map((column, index) => {
                if ( column.additionalRow ) {
                    return rowData.additionalRows.map((item, index) => {
                        const renderedCells = column.render(item);
                        return <View className="table-row" key={index}>{renderedCells}</View>
                    })
                }
            })
        })

    }

    return (
        <View className="custom-shadow-md p-[24px] pb-[32px] bg-white rounded-[15px]" style={{ gap: '24px' }}>
            {/* Content Title */}
            <View className="flex-wrap flex-row items-center justify-between">
                <View className="flex-row items-center" style={{ gap: '16px' }}>
                    <ContentTitle icon={content.header.icon} title={content.header.title} />
                </View>

                <View className="flex-row items-center" style={{ gap: '8px' }}>
                    <Text className="lg:text-[14px] leading-5 font-thin">
                        See All
                    </Text>

                    <Button circle className="bg-purple/30 p-[2px]">
                        <Image source={ChevronRightIcon} />
                    </Button>
                </View>

            </View>

            {/* Content Body */}
            <View className="flex-col">
                <View className="rounded-[15px] px-[24px] py-[12px] custom-shadow-sm bg-white">
                    <View className="table">
                        {/* Table Header */}
                        <View className="table-row">
                            {renderedHeaders}
                        </View>
                        {/* Table Header */}

                        {/* Table Body */}

                        <View className="table-row-group">
                            {renderedRows}
                        </View>
                        {/* Table Body */}
                    </View>

                    <View className="table">
                        {renderedAdditionalRows}
                    </View>
                </View>
            </View>

        </View>
    )
}