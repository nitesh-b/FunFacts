// components/FunFactScreen.tsx
import React from 'react';
import { Button, ViewStyle, Dimensions, View, ImageBackground, Image } from 'react-native';
import { Screen } from '../components/Screen';
import { LottieAnimation } from '../components/LottieAnimation';
import { Text } from '../components/Text';
import { colors, radius, size, spacing } from '../theme';
import { AutoImage } from '../components/AutoImage';
import { randomHomeListItemArray } from '../mock';
import HomeListItem from '../components/HomeListItem';

export function Home(): React.JSX.Element {

  const onFailedToLoadImage = () => {

  }

  return (
    <>
      <LottieAnimation
        animationType='morning'
        style={$lottieViewStyle}
      />
      <Screen preset='scroll'
        style={{ paddingTop: 48 }}
        backgroundColor='transparent' >
        <View style={$rootContainer}>
          <View style={$topContainerStyle}>
            <View style={$factCounterContainerStyle}>
              <Text
                preset="BodySmall"
                text='Fact#' style={{ color: colors.onPrimary }} />
              <Text
                preset="H1"
                text='1' style={{ color: colors.onPrimary }} />
            </View>

            {/* Previous day info */}

            <ImageBackground
              source={{ uri: "https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Cheight=564%2Cq=70%2Csharpen=1%2Cwidth=952/wp-content/uploads/world-bee-day.jpg" }}
              style={[$previousDayInfoContainerStyle, {overflow: 'hidden', marginStart: size.md}]}
              onError={onFailedToLoadImage}
              resizeMode='cover'
            >
              <View style={[$previousDayInfoContainerStyle, {padding: spacing.sm}]}>
                <Text preset="H3" text='What national day is today?' color={colors.secondary} />
                <Text preset="H1"
                  numberOfLines={3}
                  ellipsizeMode='tail'

                  color={colors.onPrimary}
                  text='World Bee Day' />
              </View>
            </ImageBackground>
          </View>
          <View style={$todayInfoContainerStyle}>
            <Text preset="H1" text='Did you know?' />
            <Text preset="BodyLarge" text='Walt Disney currently holds the most Academy Awards at a lifetime total of 26.'/>
          </View>
          <View style={$aroundMeContainerStyle}>
            <Text preset="H2" text='What’s up around town?' color={colors.secondary} />
            {
              randomHomeListItemArray.map((item) =>(
                <HomeListItem 
                key={item.eventName}
                eventAddress = {item.eventAddress}
                eventDateTS={item.eventDateTS}
                eventName={item.eventName}
                />
              ))
            }
          </View>
        </View>
      </Screen>
    </>

  );
};


const $rootContainer: ViewStyle = {
  flex: 1,
  padding: 16
}

const $lottieViewStyle: ViewStyle = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
  position: 'absolute',
  zIndex: -1,
  opacity: 0.95
}

const $topContainerStyle: ViewStyle = {
  flex: 1,
  flexDirection: "row"
}

const $factCounterContainerStyle: ViewStyle = {
  flexDirection: "column",
  width: Dimensions.get("screen").width / 3,
  height: Dimensions.get("screen").width / 3,
  borderWidth: size.sm,
  borderRadius: Dimensions.get("screen").width / 6,
  borderStartColor: colors.primary,
  borderEndColor: colors.secondary,
  backgroundColor: colors.palette.overlay50,
  alignItems: "center",
  justifyContent: "center",


}
const $previousDayInfoContainerStyle: ViewStyle = {

  backgroundColor: colors.primary,
  opacity: 0.8,
  flex: 1,
  flexDirection: "column",
  borderRadius: radius.md,
  shadowColor: colors.backdrop,
  shadowOffset: { width: 2, height: 2 },
  shadowRadius: 3,
  shadowOpacity: 0.8,
  elevation: 5
}

const $todayInfoContainerStyle: ViewStyle = {
  marginTop: spacing.md,
  padding: spacing.xs,
  backgroundColor: colors.backdrop,
  flex: 1,
  flexDirection: "column",
  borderRadius: radius.md,
  shadowColor: colors.primary,
  shadowOffset: { width: 2, height: 2 },
  shadowRadius: 3,
  shadowOpacity: 0.8,
  elevation: 5
}


const $aroundMeContainerStyle: ViewStyle = {
  marginTop: spacing.md,
  padding: spacing.xs,
  backgroundColor: colors.translucent,
  flex: 1,
  flexDirection: "column",
  borderRadius: radius.md,

}


