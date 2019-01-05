import { createStore, applyMiddleware, combineReducers }from "redux";
import thunk from "redux-thunk";
import { reducer as homeReducer } from "../containers/Home/store";
// const reducer = (state = {name: "yxl"}, action) => {
//     return state;
// };
const reducer = combineReducers({
    home: homeReducer
});
/**
 * 这里不可以直接导出store，否则每个用户使用的都是同一个store了，需要返回一个
 * 方法，每次return不同的store
 * @returns {Store<{name: string} & StateExt, Action> & {dispatch: any}}
 */
const getStore = () => {
    return createStore(reducer, applyMiddleware(thunk));
}
export default getStore;