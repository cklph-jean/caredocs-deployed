import classNames from 'classnames';
import { Linking, Text, Pressable } from 'react-native';

export default function Link ({ url, navigation, screenName, text, ...rest }) {
  const handlePress = () => {
    if (navigation && screenName) {
      navigation.navigate(screenName);
    } else if (url) {
      Linking.openURL(url);
    }
  };

  const linkClasses = classNames(
    " font-normal text-[14px] underline leading-[20px]",
    rest.className
  )

  return (
    <Pressable onPress={handlePress}>
      <Text {...rest} className={linkClasses}>{text}</Text>
    </Pressable>
  );
};
