import LottieView from "lottie-react-native";
import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";

export type BgAnimationType = "day" | "night" | "morning"

export interface LottieAnimationProps{
  animationType : BgAnimationType
  style: ViewStyle
}

export function LottieAnimation( props: LottieAnimationProps) {
    let path
    switch (props.animationType){
        case "day":
            path = require("../../assets/lottie/day.json")
            break
        case "night":
            path = require("../../assets/lottie/night.json")
            break
            
        case "morning":
            path = require("../../assets/lottie/morning.json")
            break
            
    }

  return (
    <LottieView
    source={path}
    loop
    autoPlay 
    resizeMode="cover"
    style = {props.style}
  />
  )
}