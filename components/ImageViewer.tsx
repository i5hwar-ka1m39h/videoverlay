import { Image } from "expo-image";
import { ImageSourcePropType } from "react-native"

type Props = {
    imageSource:ImageSourcePropType;
    selectedImage:string | null;
}

export const ImageViewer = ({imageSource, selectedImage}:Props) => {
  const source = selectedImage ? {uri:selectedImage} : imageSource
  return <Image source={source} style={{width:320, height:440}} contentFit="contain"  />
}
