import { View, Text } from 'react-native'
import { Fragment } from 'react'

export default function Table({ data, config, keyFn }) {

    const renderedHeaders = config.map((column, index) => {
        if (column.header) {
            return <Fragment key={column.label}>{column.header()}</Fragment>;
        }

        const paddingLeft = index == 0 ? 'pl-[24px]' : '';
        const paddingRight = index == config.length - 1 ? 'pr-[24px]' : '';

        return (
            <View className={`table-cell align-middle text-left py-[12px] ${paddingLeft} ${paddingRight}`} key={column.label}>
                <Text className=" font-tt-commons-medium font-bold">{column.label}</Text>
            </View>
        );
    });

    const renderedRows = data.map((rowData) => {
        const renderedCells = config.map((column, index) => {

            const leftClass = index == 0 ? 'pl-[24px] rounded-l-[12px]' : '';
            const rightClass = index == config.length - 1 ? 'pr-[24px] rounded-r-[12px]' : '';
    
            return (
                <View className={`table-cell align-middle py-[24px] bg-white ${leftClass} ${rightClass}`} key={column.label}>
                    <Text>{column.render(rowData)}</Text>
                </View>
            );
        });

        return (
            <View className="table-row text-left " key={keyFn(rowData)} align="center">
                {renderedCells}
            </View>
        );
    });

    return (
        <View className="table table-auto border-spacing-y-[12px]">
            <View className="table-header-group">
                <View className="table-row">
                    {renderedHeaders}
                </View>
            </View>
            <View className="table-row-group ">
                {renderedRows}
            </View>
        </View>
    );
}