import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function About() {
  return (
    <View>
      <Text className="text-xl font-bold text-red-500">this shit here is about page</Text>
      <Link href={"/"}>Go to home Screen</Link>
    </View>
  );
}