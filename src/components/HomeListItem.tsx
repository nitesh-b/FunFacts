import { View } from "react-native"
import { Text } from "./Text"
import { AutoImage } from "./AutoImage"
import { colors, radius, spacing } from "../theme"

export interface HomeListItemProps{
    eventDateTS: number,
    eventName: string,
    eventAddress: string
}


const HomeListItem = (props: HomeListItemProps) => {
    const {eventAddress, eventDateTS, eventName} = props
    return (
            <View style={{ flex: 1, flexDirection: "row", borderColor: colors.translucent, borderWidth: 1, borderRadius: radius.xxs, margin:spacing.xxs, alignItems: "center", backgroundColor: colors.onPrimary}}>
                <View style={{ flexDirection: "column", marginStart: spacing.sm}}>
                    <Text preset="H3" text="24" />
                    <Text preset="BodySmall" text="May" />
                </View>
                <View style={{ flex: 1, flexDirection: "column",  marginStart: spacing.md}}>
                    <Text text={eventName}/>
                    <Text preset="BodySmallBold" text="Fri 11:00am - 11:00pm" />
                    <Text preset="BodySmall" text= {eventAddress} numberOfLines={2} />
                </View>

                <View>
                    <AutoImage
                        source={{ uri: 'https://i1.wp.com/gatherforbread.com/wp-content/uploads/2014/03/Whats-Happening-Weekend.jpg' }}
                        style= {{width:40, height:"80%", marginEnd: spacing.sm}}
                    />
                </View>

            </View>
    )
}

export default HomeListItem