import classNames from "classnames";
import { Image, Pressable, Text } from "react-native";

export default function DropdownButton({ img, fn, text }) {
  const classes = classNames(
    "flex flex-row w-[106px] py-[4px] px-[8px] rounded-[6px] mb-[4px] items-center",
    {
      "bg-[#EAFBF9] text-[#26C8B8]": text === "Edit",
      "bg-[#FDE8E8] text-[#EF4444]": text === "Delete",
    }
  );

  return (
    <Pressable className={classes}>
      <Image source={img} className="mr-[6px]" />
      {text}
    </Pressable>
  );
}
