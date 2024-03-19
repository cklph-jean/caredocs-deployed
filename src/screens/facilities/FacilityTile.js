import { Text, View, Image, Pressable } from "react-native";
import Person1 from "../../assets/svg/Person1.png";
import FacilityIcon from "../../assets/svg/Avatar.svg";
import EllipsesButton from "../../components/EllipsesButton";

export default function FacilityTile({ facility }) {
  const renderedResidents =
    facility.residents.length > 6
      ? facility.residents.slice(0, 5)
      : facility.residents;
  const remainingResidents =
    facility.residents.length > 6 ? facility.residents.length - 5 : 0;

  return (
    <View className="w-[330px] rounded-[12px] py-[32px] px-[23px] bg-white mb-[24px] mr-[24px]">
      <View className="flex flex-row justify-between items-center relative z-[1]">
        <View className="flex flex-row items-center">
          <Image source={FacilityIcon} />
          <View className="ml-[12px] flex-shrink flex flex-column justify-center w-[180px]">
            <Text className="text-[18px] font-[600] text-black-900 ">
              {facility.name}
            </Text>
            <Text className="text-gray-400">
              {facility.residents.length} Residents
            </Text>
          </View>
        </View>
        <EllipsesButton />
      </View>
      <View className="flex flex-row  py-[16px] mt-[32px] mr-[-8.8px] relative z-[0]">
        {renderedResidents.map((item) => (
          <Image source={Person1} className="w-[40px] h-[40px] mr-[8.8px]" />
        ))}
        {remainingResidents > 0 ? (
          <Text className="w-[40px] h-[40px] border border-[#B693F8] text-[#B693F8] font-[16px] rounded-[6px] justify-center flex items-center">
            +{remainingResidents}
          </Text>
        ) : (
          <View></View>
        )}
      </View>
    </View>
  );
}
