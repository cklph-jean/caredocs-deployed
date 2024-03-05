import className from "classnames"
import { Text } from "react-native"

export default function BigText({
    children,
    ...rest
}) {

    const bigTxtClasses = className(
        "text-[32px] font-[600] font-tt-commons-medium leading-[40px]",
        rest.className
    )
    return (
        <Text {...rest} className={bigTxtClasses}>
            {children}
        </Text>
    )
}
