import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { PropsWithChildren } from "react";
import { Modal, Pressable, Text, View } from "react-native";

type Props = PropsWithChildren<{
  isVisible: boolean;
  onClose: () => void;
}>;

const EmojiPicker = ({ isVisible, onClose, children }: Props) => {
  return (
    <Modal
      animationType="slide"
      transparent
      visible={isVisible}
    >
      {/* Overlay (dim background) */}
      <View className="flex-1 justify-end ">
        {/* Modal content */}
        <View className="h-1/3 w-full rounded-t-2xl bg-gray-800 p-4">
          {/* Header */}
          <View className="flex-row items-center justify-between mb-3 bg-gray-500 p-2 rounded-2xl px-5">
            <Text className="text-white text-lg font-semibold">
              Choose a sticker
            </Text>
            <Pressable onPress={onClose}>
              <MaterialIcons name="close" color={"#fff"} size={24} />
            </Pressable>
          </View>

          {/* Children go here */}
          <View className="flex-1">{children}</View>
        </View>
      </View>
    </Modal>
  );
};

export default EmojiPicker;
