import { View, Image, Pressable } from "react-native";
import DropdownButton from "./DropdownButton";
import EllipsisGreen from "../assets/svg/EllipsisGreen.svg";
import DeleteIconRed from "../assets/svg/DeleteIconRed.svg";
import EditIconGreen from "../assets/svg/EditIconGreen.svg";
import { useState } from "react";

export default function EllipsesButton({ color = null, handleEditButton, handleDeleteButton }) {
  const [isShown, setIsShown] = useState(false);

  const handleClick = () => {
    setIsShown(!isShown);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsShown(false);
    }, 100);
  };


  return (
    <View className="relative z-[999]">
      <Pressable onPress={handleClick} onBlur={handleBlur}>
        <Image source={EllipsisGreen} tintColor={color ?? ''} />
      </Pressable>
      {isShown && (
        <View className="absolute top-[100%] right-[0px] pt-[8px] pr-[8px] pl-[8px] pb-[4px] bg-white rounded-[8px] custom-shadow">
          <DropdownButton img={EditIconGreen} text={"Edit"} onPress={handleEditButton} />
          <DropdownButton img={DeleteIconRed} text={"Delete"} onPress={handleDeleteButton} />
        </View>
      )}
    </View>
  )
}
