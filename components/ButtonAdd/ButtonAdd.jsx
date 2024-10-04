import { Text, TouchableOpacity } from "react-native";
import { s } from "./ButtonAd.style";
export function ButtonAdd({OnPress}){
    return (
    <TouchableOpacity OnPress={OnPress} style={s.btn}>
      <Text style={s.txt}>+ New todo</Text>
    </TouchableOpacity>
    );
}