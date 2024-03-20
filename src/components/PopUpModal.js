import { useEffect } from "react";
import { FiX } from "react-icons/fi";
import ReactDOM from "react-dom";
import Button from "./Button";
import { View } from "react-native";

export default function PopUpModal({ onClose, children, actionBar, ...rest }) {
    useEffect(() => {

        document.body.classList.add('overflow-hidden')

        return () => {
            document.body.classList.remove('overflow-hidden')
        }
    }, []);

    return ReactDOM.createPortal(
        <View className="z-[1]">
            <View className="fixed inset-0 bg-gray-500 opacity-[50%]" onClick={onClose} />
            <View
                {...rest}
                className={`fixed top-1/2 left-1/2 transform -translate-1/2 rounded-[8px] bg-white shadow-md ${rest.className}`}
            >
                <Button className=" absolute top-[16px] right-[16px] z-[1]" onPress={onClose}>
                    <FiX className="text-gray-400 w-[24px] h-[24px]" />
                </Button>

                <View className="flex flex-col justify-between h-full mt-[8px]">
                    {children}
                    <View className="flex justify-end">{actionBar}</View>
                </View>
            </View>
        </View>,

        document.querySelector(".modal-container")
    );
}