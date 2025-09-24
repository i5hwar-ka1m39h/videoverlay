
import { Text, View } from "react-native";
import { Link } from "expo-router";
import { Image } from "expo-image";
import { ImageViewer } from "@/components/ImageViewer";
import { Button } from "@/components/Button";
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";
///mnt/hdd/lock_in/expo_apps/videoerlay/assets/images/background-image.png
const placeHolderImage = require("@/assets/images/background-image.png");

export default function Index() {
const [selectedImage, setSelectedImage] = useState<string| null>(null)
  const handleImagePick = async() =>{
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes:['images'],
      allowsEditing:true,
      quality:1
    })

    if(!result.canceled){
      console.log(result); 
      setSelectedImage(result.assets[0].uri)
    }else{
      alert("You didn't select any image")
    }
  }
  return (
    <View className="flex flex-col items-center justify-center gap-5">
      <View className="flex items-center justify-center">
       
        <ImageViewer imageSource={placeHolderImage} selectedImage={selectedImage}/>
        
         </View>
      <View className="flex flex-col items-center justify-center gap-2">
        <Button label="select any image" onPress={handleImagePick}/>
        <Button label="choose this image" />
      </View>
    </View>
  );
}
