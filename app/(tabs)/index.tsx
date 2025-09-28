import { ImageSourcePropType, View } from "react-native";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { ImageViewer } from "@/components/ImageViewer";
import { Button } from "@/components/Button";
import IconButton from "@/components/IconButton";
import CircleButton from "@/components/CircleButton";
import EmojiPicker from "@/components/EmojiPicker";
import EmojiList from "@/components/EmojiList";
import EmojiSticker from "@/components/EmojiSticker";
import {GestureHandlerRootView} from 'react-native-gesture-handler'
const placeHolderImage = require("@/assets/images/background-image.png");

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<
    ImageSourcePropType | undefined
  >(undefined);

  const handleImagePick = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert("You didn't select any image");
    }
  };

  const resetFn = () => {
    setShowAppOptions(false);
    setSelectedImage(null);
  };

  const addEmojiFn = () => {
    setIsModalOpen(true);
  };

  const saveFn = () => {
    alert("scammmm");
  };

  const closeModalFn = () => {
    setIsModalOpen(false);
  };

  return (
    <GestureHandlerRootView>   
    <View className="flex-1 items-center justify-center p-4">
      {/* Image viewer */}
      <View className="mb-6">
        <ImageViewer
          imageSource={placeHolderImage}
          selectedImage={selectedImage}
        />
        {pickedEmoji && (
          <EmojiSticker stickerSource={pickedEmoji} imageSize={40} />
        )}
      </View>

      {/* Action buttons */}
      {showAppOptions ? (
        <View className="flex-row items-center justify-center gap-4">
          <IconButton icon="refresh" onPress={resetFn} label="Reset" />
          <CircleButton onPress={addEmojiFn} />
          <IconButton icon="save-alt" label="Save" onPress={saveFn} />
        </View>
      ) : (
        <View className="gap-3">
          <Button label="Select an image" onPress={handleImagePick} />
          <Button
            label="Edit the image"
            onPress={() => setShowAppOptions(true)}
          />
        </View>
      )}

      {/* Emoji picker modal */}
      <EmojiPicker isVisible={isModalOpen} onClose={closeModalFn}>
        {/* Example child content */}
        <View className="flex-row flex-wrap justify-center gap-2">
          <EmojiList onCloseModal={closeModalFn} onSelect={setPickedEmoji} />
        </View>
      </EmojiPicker>
    </View>
    </GestureHandlerRootView> 
  );
}
