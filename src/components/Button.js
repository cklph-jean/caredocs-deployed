import { Pressable, TouchableOpacity, Text, Alert, TouchableHighlight } from "react-native"
import className from "classnames";

export default function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    white,
    rounded,
    loading,
    hover,
    circle,
    textClass,
    ...rest
}) {
    const classes = className(
        "font-sans font-normal flex items-center transition duration-500 ease-in-out justify-center",
        {
            "opacity-80": loading,
            "border border-primary bg-primary text-white": primary && !outline,
            "border border-secondary bg-secondary text-white": secondary && !outline,
            "border border-success bg-success text-white": success,
            "border border-warning bg-warning text-black": warning,
            "border border-danger bg-danger text-white": danger && !outline,
            "border border-white bg-white text-black": white,
            "rounded": rounded,
            "rounded-full": circle,
            "": outline,
            "": outline && primary,
            "": outline && primary && hover,
            "": outline && secondary,
            "": outline && secondary && hover,
            "": outline && success,
            "": outline && warning,
            "": outline && danger,
            "": outline && danger && hover
        },
        rest.className
    );

    return (
        <TouchableHighlight {...rest} className={classes}>
            <Text className={textClass || 'text-white'}>{children}</Text>
        </TouchableHighlight>
    )
}
