import { NavigationState, createNavigationContainerRef } from "@react-navigation/native"
import { useRef, useEffect } from "react"
import { Platform, BackHandler } from "react-native"
import { AppStackParamList } from "./AppNavigator"


export const navigationRef = createNavigationContainerRef<AppStackParamList>()

/**
 * Gets the current screen from any navigation state.
 */
export function getActiveRouteName(
  state: ReturnType<typeof navigationRef.getRootState>,
): keyof AppStackParamList {
  const route = state.routes[state.index]

  // Found the active route -- return the name
  if (!route.state) return route.name as keyof AppStackParamList

  // Recursive call to deal with nested routers
  return getActiveRouteName(route.state as NavigationState<AppStackParamList>)
}


export function useBackButtonHandler(canExit: (routeName: string) => boolean) {
    // ignore if iOS ... no back button!
    if (Platform.OS === "ios") return
  
    // The reason we're using a ref here is because we need to be able
    // to update the canExit function without re-setting up all the listeners
    const canExitRef = useRef(canExit)
  
    useEffect(() => {
      canExitRef.current = canExit
    }, [canExit])
  
    useEffect(() => {
      // We'll fire this when the back button is pressed on Android.
      const onBackPress = () => {
        if (!navigationRef.isReady()) {
          return false
        }
  
        // grab the current route
        const routeName = getActiveRouteName(navigationRef.getRootState())
  
        // are we allowed to exit?
        if (canExitRef.current(routeName)) {
          // exit and let the system know we've handled the event
          BackHandler.exitApp()
          return true
        }
  
        // we can't exit, so let's turn this into a back action
        if (navigationRef.canGoBack()) {
          navigationRef.goBack()
          return true
        }
  
        return false
      }
  
      // Subscribe when we come to life
      BackHandler.addEventListener("hardwareBackPress", onBackPress)
  
      // Unsubscribe when we're done
      return () => BackHandler.removeEventListener("hardwareBackPress", onBackPress)
    }, [])
  }
  