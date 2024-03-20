import { View, Text } from 'react-native'
import React, { useState } from 'react'
import PopupModal from './PopUpModal'
import Button from './Button';

export default function DeleteConfirmationModal({ handleClose, handleOpen, showModal = false }) {
    const actionBar = (
        <View className="flex" style={{ gap: '11px' }}>
            <Button
                onPress={handleClose}
                danger >
                Delete
            </Button>

            <Button onPress={handleClose} danger outline rounded>
                Cancel
            </Button>
        </View>
    );

    const modal = (
        <PopupModal onClose={handleClose} actionBar={actionBar} className="w-[344px] px-[16px] pb-[16px]">
            <View className="py-[48px]" style={{ gap: "8px" }}>
                <Text className="font-sans font-[600] text-center text-[18px] text-black">
                    Are you sure?
                </Text>

                <Text className="font-[400] text-[#828282] text-center text-[14px]">
                    You will delete this Staff permanently
                </Text>
            </View>

        </PopupModal>
    );

    return (
        <View>
            {showModal && modal}
        </View>
    )
}