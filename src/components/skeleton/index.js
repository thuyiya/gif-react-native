import React, { useRef, useEffect } from "react";
import { Easing, Animated } from "react-native";
import PropTypes from "prop-types";
import { Colors } from "_styles";

const Skeleton = ({ width, height, marginTop }) => {
  const opacityAnim = useRef(new Animated.Value(0.5)).current;

  useEffect(() => {
    const loop = Animated.loop(
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 1000,
        easing: Easing.ease,
        useNativeDriver: true,
      })
    );

    loop.start();

    return () => loop.stop();
  }, []);

  return (
    <Animated.View
      style={{
        backgroundColor: Colors.SECONDARY,
        height: height || "100%",
        width: width || "100%",
        marginTop: marginTop || 0,
        opacity: opacityAnim,
      }}
    ></Animated.View>
  );
};

Skeleton.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginTop: PropTypes.number,
};

export default Skeleton;
