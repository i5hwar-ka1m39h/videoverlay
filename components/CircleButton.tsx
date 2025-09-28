import { Pressable, View } from "react-native"
import MaterialIcons from "@expo/vector-icons/MaterialIcons"

type Props = {
    onPress:()=>void
}

const CircleButton = ({onPress}:Props) => {
  return (
    <View>
        <Pressable onPress={onPress} className="rounded-full  p-3 bg-gray-500 text-white ">
            <MaterialIcons name="add" size={38} color={'#fff'}/>
        </Pressable>
    </View>
)
}

export default CircleButton