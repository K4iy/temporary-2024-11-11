import {v4} from 'uuid';
//UUID version 4の文字列出力
import {v7} from 'uuid';
export const createUuid = () =>{
    return v7();
};

export const sample=() =>{
    return "この関数は sample() です";
};