import className from 'classnames';
import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { View, Picker, Text, Pressable } from 'react-native';

export default function DropdownSelect({ 
        options, 
        onSelect, 
        label, 
        showLabelOnTop = false,
        selected = null, 
        ...rest 
    }) {
    
    const [selectedOption, setSelectedOption] = useState(selected);
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const handleSelectOption = (option) => {
        setSelectedOption(option);
        setDropdownVisible(false);
        onSelect(option);
    };

    const dropdownSelectClasses = className(
        "text-[14px] leading-[20px] text-gray-400 font-[400]  px-[16px] py-[12px] bg-white border-[1px] border-[#E6E6E6] focus:outline-none block w-full h-[44px] relative z-[1]",
        {
            "rounded-[5px]": !dropdownVisible,
            "rounded-t-[5px]": dropdownVisible,
        }
    )

    return (
        <View style={{gap:4}}>
            {
                showLabelOnTop && <Text className="text-[14px] text-[#828282]">
                    {label}
                </Text>
            }
            <View {...rest} className={dropdownSelectClasses}>

                <Pressable
                    onPress={() => setDropdownVisible(!dropdownVisible)}
                >
                    <Text className="text-[14px] leading-[20px] text-gray-500 font-[400]">{selectedOption ? selectedOption.label : '- ' + label + ' -'}</Text>
                </Pressable>

                {
                    dropdownVisible && (
                        <View className="absolute rounded-bl-[5px] rounded-br-[5px] border-gray-50 top-full right-0 left-0 w-full bg-white p-5 z-[1] max-h-80 h-[200px] overflow-y-auto" style={{ gap: '12px' }}>
                            {options.map((option, index) => (
                                <Pressable
                                    key={option.value + index}
                                    onPress={() => handleSelectOption(option)}
                                    className="py-2"
                                >
                                    <Text className="text-[14px] text-gray-500">{option.label}</Text>
                                </Pressable>
                            ))}
                        </View>
                    )
                }

                <Pressable
                    className="absolute inset-y-0 right-0 flex flex-row items-center p-[14px] text-secondary"
                    onPress={() => setDropdownVisible(!dropdownVisible)} >
                    <View>
                        {
                            !dropdownVisible ? <FiChevronDown className='w-[20px] h-[20px]' /> : <FiChevronUp className='w-[20px] h-[20px]' />
                        }
                    </View>
                </Pressable>
            </View>
        </View>
    );
};