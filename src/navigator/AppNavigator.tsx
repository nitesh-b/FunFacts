import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack"
import * as Screen from "../screens/index"
import { DarkMode, LightMode, colors } from "../theme/colors"
import TabNavigator from "./TabNavigator"
import { NavigationContainer } from "@react-navigation/native"
import { useColorScheme } from "react-native"
import { navigationRef, useBackButtonHandler } from "./navigationUtilities"

export type AppStackParamList = {

    Tab: undefined
}


export type AppStackScreenProps<T extends keyof AppStackParamList> = NativeStackScreenProps<
    AppStackParamList,
    T
>

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<AppStackParamList>()

const AppStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                navigationBarColor: colors.primary,
            }}
            initialRouteName="Tab"
        >
            <Stack.Screen name="Tab" component={TabNavigator} options={{ gestureEnabled: false }} />
        </Stack.Navigator>
    )
}

export interface NavigationProps
    extends Partial<React.ComponentProps<typeof NavigationContainer>> { }
export const AppNavigator = (props: NavigationProps) => {
    const colorScheme = useColorScheme()

    // useBackButtonHandler((routeName) => exitRoutes.includes(routeName))
    return (
        <NavigationContainer
            ref={navigationRef}
            theme={colorScheme === "dark" ? DarkMode : LightMode}
           
            
            {...props}
        >
            <AppStack />
        </NavigationContainer>
    )
}
