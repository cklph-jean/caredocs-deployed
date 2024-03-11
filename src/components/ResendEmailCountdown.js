import { useEffect, useState } from "react";
import useCountdownStore from "../store/apis/caredocs/countDownStore";
import { Text } from "react-native";

export default function ResendEmailCountdown({ reSent = false }) {
    const { secondsLeft, decrementSeconds, enableResend } = useCountdownStore();

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (secondsLeft > 0) {
                decrementSeconds();
            } else {
                clearInterval(intervalId);
                enableResend();
            }
        }, 1000);

        return () => clearInterval(intervalId);
    }, [secondsLeft, decrementSeconds, enableResend]);

    const formattedTime = <Text className="text-danger-500">{secondsLeft.toString().padStart(2, '0')}</Text>;

    return <>
        {
            reSent && <Text className="text-success-500 text-right">Email Re-sent!</Text>
        }
        <Text className="text-right text-gray-500 font-[400] font-sans ">
            {reSent && 'New'} Resend will be available in {formattedTime}s
        </Text>
    </>
};
