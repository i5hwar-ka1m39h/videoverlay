import { View, Pressable, Text } from "react-native"

type Prop = {
    label :string;
    onPress? :() => void;
}


export const Button = ({label, onPress}:Prop) => {
  return (
    <View>
        <Pressable onPress={onPress} className="border bg-gray-400 rounded-lg p-5">
            <Text className="text-2xl font-semibold text-center">{label}</Text>
        </Pressable>
    </View>
  )
}
