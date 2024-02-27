import classNames from "classnames";
import { TextInput } from 'react-native';

export default function Input({ value, placeholder, ...rest }) {
    const classes = classNames(
        rest.className,
        "px-[16px] py-[12px] mt-[4px] bg-white border-[1px] border-[#E6E6E6] rounded-[5px] w-[356px] text-[14px] placeholder-[#A0A0A0] placeholder:font-[400] placeholder:text-[14px] focus:outline-none block w-full h-[44px]",
    );

    return (
        <TextInput
            {...rest}
            className={classes}
            value={value}
            placeholder={placeholder}
        />
    )
}
