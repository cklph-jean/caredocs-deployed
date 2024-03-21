import classNames from "classnames";
import { Image, Pressable, Text, View } from "react-native";

export default function DropdownButton({ img, fn, text, ...rest }) {
  const classes = classNames(
    "z-[999] flex flex-row w-[106px] py-[4px] px-[8px] rounded-[6px] mb-[4px] items-center font-tt-commons-medium font-bold",
    {
      "bg-[#EAFBF9] text-[#26C8B8]": text === "Edit",
      "bg-[#FDE8E8] text-[#EF4444]": text === "Delete",
    }
  );

  return (
    <Pressable {...rest} className={classes}>
      <Image source={img} className="mr-[6px]" />
      <Text className="font-sans font-bold">
        {text}
      </Text>
    </Pressable>
  );
}
