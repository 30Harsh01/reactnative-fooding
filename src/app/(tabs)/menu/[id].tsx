import { Stack, useLocalSearchParams } from 'expo-router'
import {View,Text} from 'react-native'

export default function ProductDetials(){
    const {id}=useLocalSearchParams()
    return(
        <View>
        <Stack.Screen options={{title: 'Details' + id}}/>  {/* another way of naming where I can use the variable also  */}

            <Text style={{fontSize:19}}>This is product details page {id}</Text>
        </View>
    )
}
