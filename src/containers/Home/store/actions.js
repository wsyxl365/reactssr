import axios from "axios";
import { secret } from "../../../config";
import { CHANGE_LIST } from "./contants";

const changeList = (list) => ({
    type: CHANGE_LIST,
    list
});
export const getHomeList = () => {
    return (dispatch) => {
        axios.get(`http://47.95.113.63/ssr/api/news.json?secret=${secret}`)
            .then((res)=>{
                const list = res.data.data;
                dispatch(changeList(list));
                console.log(list);
            })
    }
}