import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroText,
  ViroTrackingStateConstants,
} from "@viro-community/react-viro";
import React, { useState } from "react";
import { StyleSheet } from "react-native";

const InitialScene = () => {
    const [text, setText] = useState("Initializing AR...");

    function onInitialized(state, reason) {
      console.log("guncelleme", state, reason);
      if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
        setText("Hello World!");
      } else if (state === ViroTrackingStateConstants.TRACKING_UNAVAILABLE) {
        // Handle loss of tracking
      }
    }

    return (
      <ViroARScene onTrackingUpdated={onInitialized}>
        <ViroText
          text={text}
          scale={[0.5, 0.5, 0.5]}
          position={[0, 0, -1]}
          style={styles.helloWorldTextStyle}
        />
      </ViroARScene>
    );
  };

export const Gallery = () => {

  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: InitialScene,
      }}
      style={styles.f1}
    />
  );
};

export default Gallery;

var styles = StyleSheet.create({
  f1: { flex: 1 },
  helloWorldTextStyle: {
    fontFamily: "Arial",
    fontSize: 30,
    color: "#ffffff",
    textAlignVertical: "center",
    textAlign: "center",
  },
});
