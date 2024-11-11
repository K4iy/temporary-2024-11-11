import {v3, v4} from 'uuid';
//UUID version 4の文字列出力
export const createUuid = () =>{
    return v4();
};

export const sample=() =>{
    return "この関数は sample() です";
};