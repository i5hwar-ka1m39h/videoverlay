import { Image } from "expo-image";
import { useState } from "react";
import {
  FlatList,
  ImageSourcePropType,
  Platform,
  Pressable,
} from "react-native";


type Props = {
  onSelect: (image: ImageSourcePropType) => void;
  onCloseModal: () => void;
};

const EmojiList = ({ onSelect, onCloseModal }: Props) => {
  const [emoji] = useState<ImageSourcePropType[]>([
    require("../assets/images/emojis/emoji1.png"),
    require("../assets/images/emojis/emoji2.png"),
    require("../assets/images/emojis/emoji3.png"),
    require("../assets/images/emojis/emoji4.png"),
    require("../assets/images/emojis/emoji5.png"),
    require("../assets/images/emojis/emoji6.png"),
  ]);
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === "web"}
      contentContainerStyle={{
        alignItems:"center",
        justifyContent:"space-between",
        flexDirection:"row",
        paddingHorizontal:20
      }}
      data={emoji}
      renderItem={({ item, index }) => (
        <Pressable
          onPress={() => {
            onSelect(item);
            onCloseModal();
          }}
        >
          <Image
            source={item}
            key={index}
            style={{ width: 100, height: 100, margin: 20 }}
          />
        </Pressable>
      )}
    />
  );
};

export default EmojiList;
