import { Pressable, View, Text} from "react-native"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
type Props = {
    icon: keyof typeof MaterialIcons.glyphMap;
    onPress : () => void;
    label:string;
}

const IconButton = ({icon, label, onPress}:Props) => {
  return (
    <View className="flex items-center justify-center bg-gray-400 p-2 rounded-2xl w-24">
        <Pressable onPress={onPress}>
            <MaterialIcons name={icon} size={30} color={'#fff'}/>
            <Text>{label}</Text>
        </Pressable>
    </View>
)
}

export default IconButton