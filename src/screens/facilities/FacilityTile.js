import { Text, View, Image, Pressable } from "react-native";
import Person1 from "../../assets/svg/Person1.png";
import FacilityIcon from "../../assets/svg/Avatar.svg";
import EllipsesButton from "../../components/EllipsesButton";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import DeleteConfirmationModal from "../../components/DeleteConfirmationModal";
import useDeleteModal from "../../hooks/useDeleteModal";

export default function FacilityTile({ facility }) {
  const navigation = useNavigation();

  const { isDeleteModalShow, handleModalClose, handleModalOpen } = useDeleteModal();

  const handleDeleteFacility = () => {
      handleModalClose();

      navigation.navigate('facilities')
  }

  const renderedResidents =
    facility.residents.length > 6
      ? facility.residents.slice(0, 5)
      : facility.residents;
  const remainingResidents =
    facility.residents.length > 6 ? facility.residents.length - 5 : 0;

  return (
    <View className="w-[330px] rounded-[12px] py-[32px] px-[23px] bg-white mb-[24px]">
      <View className="flex flex-row justify-between items-center relative z-[1]">
        <View className="flex flex-row items-center">
          <Image source={FacilityIcon} />
          <View className="ml-[12px] flex-shrink flex flex-column justify-center w-[180px]">
            <Text className="text-[18px] font-sans font-[600] text-black-900 ">
              {facility.name}
            </Text>
            <Text className="text-gray-400 text-[14px] font-[600] font-sans">
              {facility.residents.length} Residents
            </Text>
          </View>
        </View>
        <Text>
          <EllipsesButton
            handleEditButton={() => navigation.navigate('edit-facility')}
            handleDeleteButton={handleModalOpen}
          />
        </Text>
      </View>
      <View className="flex flex-row  py-[16px] mt-[32px] mr-[-8.8px] relative z-[0]">
        {renderedResidents.map((item, index) => (
          <Image source={Person1} className="w-[40px] h-[40px] mr-[8.8px]" key={index} />
        ))}
        {remainingResidents > 0 ? (
          <Text className="w-[40px] h-[40px] border border-[#B693F8] text-[#B693F8] text-[16px] rounded-[6px] font-sans font-[600] justify-center flex items-center">
            +{remainingResidents}
          </Text>
        ) : (
          <View></View>
        )}
      </View>

      {
        isDeleteModalShow &&
        (
          <DeleteConfirmationModal
            handleClose={handleModalClose}
            handleDelete={handleDeleteFacility}
            showModal={isDeleteModalShow}
          />
        )
      }
    </View>
  );
}
