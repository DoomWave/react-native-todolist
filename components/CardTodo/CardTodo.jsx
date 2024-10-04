import { Image, Text, TouchableOpacity } from "react-native";
import { s } from "./CardTodo.style";
import checkImg from "../../assets/check";
export function CardTodo({todo}) {
    return <TouchableOpacity>
        <Text>{todo.title}</Text>
        <Image source={checkImg}/>
    </TouchableOpacity>;
}