import { Stack } from "expo-router"

// export default function MenuStack(){
//     return <Stack/>
// }


export default function MenuStack(){
    return (
        <Stack>
            <Stack.Screen name="index" options={{title:'Menu'}}/>
            {/* <Stack.Screen name="[id]" options={{title:'Details'}}/> */}
        </Stack>
    )
}