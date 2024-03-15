import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
        console.log('Data stored successfully');
    } catch (error) {
        console.log('Error storing data:', error);
    }
};

export const retrieveData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            return value;
        } else {
            console.log('No data found');
            return null;
        }
    } catch (error) {
        console.log('Error retrieving data:', error);
        return null;
    }
};

export const removeData = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
        console.log('Data removed successfully');
    } catch (error) {
        console.log('Error removing data:', error);
    }
};
