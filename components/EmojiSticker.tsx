import { Image } from "expo-image"
import { ImageSourcePropType, View } from "react-native"
type Props = {
    stickerSource:ImageSourcePropType;
    imageSize:number
}
const EmojiSticker = ({stickerSource, imageSize}:Props) => {
  return (
    <View style={{top:-350}}>
        <Image source={stickerSource} style={{width:imageSize, height:imageSize}}/>
    </View>
)
}

export default EmojiSticker