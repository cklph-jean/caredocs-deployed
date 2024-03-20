import { Pressable, Text } from "react-native"
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
    disabled,
    ...rest
}) {

    const classes = className(
        " font-normal flex items-center transition duration-500 ease-in-out justify-center",
        {
            "opacity-80": loading,
            "border border-primary bg-primary text-white px-[18px] py-[12px] rounded-[5px]": primary && !outline,
            "border border-primary bg-white text-primary px-[18px] py-[12px] rounded-[5px]": secondary,
            "border border-success bg-success text-white": success,
            "border border-warning bg-warning text-black": warning,
            "border border-danger-500 bg-danger-500 text-white px-[18px] py-[12px] rounded-[5px]": danger && !outline,
            "border border-white bg-white text-black": white,
            "rounded": rounded,
            "rounded-full": circle,
            "border-primary/10 bg-primary/10": disabled,
            "": outline,
            "": outline && primary,
            "": outline && primary && hover,
            "": outline && secondary,
            "": outline && secondary && hover,
            "": outline && success,
            "": outline && warning,
            "border border-red-500 rounded-[5px] px-[18px] py-[12px] text-white": outline && danger,
            "": outline && danger && hover
        },
        rest.className
    );

    const textClasses = className(
        "flex items-center font-sans font-[600]",
        {
            "text-primary text-[14px]": secondary,
            "text-gray-400": disabled,
            "text-danger-500": danger && outline,
            "text-white": (danger && !outline || primary && !disabled),
        },
        rest.textClass
    )

    return (
        <Pressable {...rest} className={classes}>
            <Text className={textClasses}>{children}</Text>
        </Pressable>
    )
}
