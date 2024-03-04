import classNames from "classnames";
import { View } from "react-native";

export default function Card({
    children,
    ...rest
}) {

    // conditional class here
    const cardClasses = classNames(
        "rounded",
        rest.className
    )

    return (
        <View {...rest} className={cardClasses}>
            {children}
        </View>
    )
}
