

// Status Card is used for simple displaying status messages like Error, Warning, Success, etc.

import classNames from "classnames"
import { FiXCircle, FiCheckCircle, FiAlertCircle, FiInfo } from 'react-icons/fi'
import { View, Text } from "react-native";
import Card from "./Card";

const defaultIcons = {
    'error': <FiXCircle className="text-danger-500 w-[20px] h-[20px]" strokeWidth={3} />,
    'success': <FiCheckCircle className="text-white w-[20px] h-[20px]" strokeWidth={3} />,
    'warning': <FiAlertCircle className="text-black w-[20px] h-[20px]" strokeWidth={3} />,
    'info': <FiInfo className="text-white w-[20px] h-[20px]" strokeWidth={3} />,
};

export default function StatusCard({
    error,
    warning,
    success,
    info,
    message,
    icon,
    children,
    ...rest
}) {

    const statusCardClasses = classNames(
        "flex flex-row items-center p-[12px] self-stretch rounded-[4px]",
        {
            "border border-danger-500 bg-danger-50": error,
            "border border-success bg-success": success,
            "border border-primary bg-primary": info,
            "border border-primary bg-primary": warning,
        }
    )

    const statusCardTextClasses = classNames(
        "font-tt-commons-medium text-[12px]",
        {
            "text-danger-500": error,
            "text-white": success,
            "text-white": info,
            "text-white": warning,
        }
    )

    let defaultIcon = "";
    if (error) {
        defaultIcon = defaultIcons['error'];
    }

    if (success) {
        defaultIcon = defaultIcons['success']
    }

    if (warning) {
        defaultIcon = defaultIcons['warning']
    }

    if (info) {
        defaultIcon = defaultIcons['info']
    }

    return (
        <Card {...rest} className={statusCardClasses} style={{ gap: '8px' }}>
            {icon || defaultIcon}
            <Text className={statusCardTextClasses}>{message}</Text>
        </Card>
    )
}
