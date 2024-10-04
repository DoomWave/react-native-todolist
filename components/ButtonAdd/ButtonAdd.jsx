import { Text, TouchableOpacity } from "react-native";
import { s } from "./ButtonAd.style";

export function ButtonAdd(){
    return <TouchableOpacity style={s.btn}>
        <Text style={s.txt}>+ New todo</Text>
    </TouchableOpacity>
}