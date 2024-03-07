import { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import InputField from './InputField';
import MasterCard from '../assets/svg/card 1.svg'
import StatusCard from './StatusCard'

export default function CardDetailsInput({ handleCardDetailsValue }) {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [errors, setErrors] = useState({});

    const handleChange = (setState, fieldName) => (event) => {
        const value = event.target.value;
        setState(value);

        // Perform validation
        const newErrors = { ...errors }; // Copy existing errors
        if (fieldName === 'cardNumber') {
            newErrors.cardNumber = !value.trim() ? 'Card number is required' : '';
        } else if (fieldName === 'expiryDate') {
            newErrors.expiryDate = !value.trim() ? 'Expiry date is required' : '';
        } else if (fieldName === 'cvv') {
            newErrors.cvv = !value.trim() ? 'CVV is required' : '';
        }

        // Update errors state
        setErrors(newErrors);
    };


    return <>
        <View>
            <InputField
                label="Card on detail"
                className="rounded-t-[5px]"
                value={cardNumber}
                onChange={handleChange(setCardNumber, 'cardNumber')}
                placeholder="Input your card number"
                icon={<Image source={MasterCard} />}
                customRadius={true}
            />
            <View className="grid grid-cols-2">
                <InputField
                    value={cvv}
                    className=" rounded-bl-[5px] "
                    onChange={handleChange(setCvv, 'cvv')}
                    placeholder="CVV"
                    customRadius={true}
                />
                <InputField
                    value={expiryDate}
                    className="rounded-br-[5px]"
                    onChange={handleChange(setExpiryDate, 'expiryDate')}
                    placeholder="Year"
                    customRadius={true}
                />

            </View>
            <View style={{gap:'5px'}}>
                {
                    errors.cardNumber !== undefined
                    && errors.cardNumber !== ''
                    && <StatusCard error message={errors.cardNumber} />
                }

                {
                    errors.cvv !== undefined
                    && errors.cvv !== ''
                    && <StatusCard error message={errors.cvv} />
                }

                {
                    errors.expiryDate !== undefined
                    && errors.expiryDate !== ''
                    && <StatusCard error message={errors.expiryDate} />
                }
            </View>
        </View>
    </>

    // return (
    //     <View>
    //         <InputField
    //             label="Card on detail"
    //             className="rounded-t-[5px]"
    //             value={cardNumber}
    //             onChange={handleChange(setCardNumber)}
    //             placeholder="Input your card number"
    //             icon={<Image source={MasterCard} />}
    //             customRadius={true}
    //         />
    //         {errors.cardNumber && <Text>{errors.cardNumber}</Text>}

    //         <View className="grid grid-cols-2">
    //             <InputField
    //                 value={cvv}
    //                 className=" rounded-bl-[5px] "
    //                 onChange={handleChange(setCvv)}
    //                 placeholder="CVV"
    //                 customRadius={true}
    //             />
    //             {errors.cvv && <Text>{errors.cvv}</Text>}
    //             <InputField
    //                 value={expiryDate}
    //                 className="rounded-br-[5px]"
    //                 onChange={handleChange(setExpiryDate)}
    //                 placeholder="Year"
    //                 customRadius={true}
    //             />
    //             {errors.expiryDate && <Text>{errors.expiryDate}</Text>}
    //         </View>
    //     </View>
    // )
}


// function CardDetailsInput1({ onChange, value, name, placeholder, error, disabled }) {
//     return (
//         <View className="">
//             <InputField
//                 className=""
//                 onChangeText={onChange}
//                 value={value}
//                 placeholder={placeholder}
//                 editable={!disabled}
//                 gap="no-gap"
//             />
//             {error && <Text className>{error}</Text>}
//         </View>
//     );
// };


