import React, {useState} from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const paddingSpace = 20; // Total whitespace (10px on each side)
const imageWidth = screenWidth - paddingSpace; // Adjusted image width

export const ImageComponent = ({imageUrl, index}) => {
  const [imageSizes, setImageSizes] = useState({});
  const [loading, setLoading] = useState(true);



  const onImageLoad = (event, uri) => { 
    setLoading(false);
    const { width, height } = event.nativeEvent.source;
    const aspectRatio = height / width;
    const adjustedHeight = imageWidth * aspectRatio;
    console.log(imageWidth, adjustedHeight);
    setImageSizes((prevSizes) => ({
      ...prevSizes,
      [uri]: { width: imageWidth, height: adjustedHeight },
    }));
  };

  return (
      <View key={index} style={styles.imageContainer}>
        <Image
          source={{ uri: imageUrl }}
          style={[loading ? styles.loadingImage : styles.image, imageSizes[imageUrl] ? { height: imageSizes[imageUrl].height } : undefined]}
          onLoad={(event) => onImageLoad(event, imageUrl)}
          onLoadEnd={() => setLoading(false)}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderWidth: 2,
    borderColor: 'black',
  },

  loadingImage: {
    width: 355,
    height: 236, 
  }
});

export default ImageComponent;
