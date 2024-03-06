import { View, TextInput, Image } from 'react-native';
import InputField from './InputField';
import { useState } from 'react';
import MasterCard from '../assets/svg/card 1.svg'

{/* TODO: Create component for input field for card payment details.  */ }

function CardDetailsInput1({ onChange, value, name, placeholder, error, disabled }) {
    return (
        <View className="">
            <InputField
                className=""
                onChangeText={onChange}
                value={value}
                placeholder={placeholder}
                editable={!disabled}
                gap="no-gap"
            />
            {error && <Text className>{error}</Text>}
        </View>
    );
};

export default function CardDetailsInput({ handleCardDetailsValue }) {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');

    const handleChange = (setState) => (event) => {
        setState(event.target.value);
    }

    handleCardDetailsValue({
        'cardNumber': cardNumber,
        'expiryDate': expiryDate,
        'cvv': cvv
    });

    return (
        <View>
            <InputField
                label="Card on detail"
                className="rounded-t-[5px]"
                value={cardNumber}
                onChange={handleChange(setCardNumber)}
                placeholder="Input your card number"
                icon={<Image source={MasterCard} />}
                customRadius={true}
            />
            <View className="grid grid-cols-2">
                <InputField
                    value={cvv}
                    className=" rounded-bl-[5px] "
                    onChange={handleChange(setCvv)}
                    placeholder="CVV"
                    customRadius={true}
                />
                <InputField
                    value={expiryDate}
                    className="rounded-br-[5px]"
                    onChange={handleChange(setExpiryDate)}
                    placeholder="Year"
                    customRadius={true}
                />
            </View>
        </View>
    )
}

