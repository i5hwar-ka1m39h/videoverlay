import { Stack, Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';



export default function Tablayout(){
    return(
       <Tabs screenOptions={{tabBarActiveTintColor:"#4287f5"}}>

        <Tabs.Screen name="index" options={{
            title:"Home", 
            tabBarIcon:({focused, color})=>(
                <Ionicons name={focused ? "home-sharp" : "home-outline"} color={color} size={24}/>
            )
        }}/>
        <Tabs.Screen name="about" options={{
            title:"About",
            tabBarIcon:({focused, color})=>(
                <Ionicons name={focused? "information-circle":"information-circle-outline"} color={color} size={24}/>
            )
        }}/>

       </Tabs>
    )
}