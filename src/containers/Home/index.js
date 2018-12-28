//const React = require("react");
import React from "react";
import Header from "../../components/Header";
import { connect } from "react-redux";

const mapStateToProps = (state)=>{
    return {
        name: state.name
    }
}

const Home = (props) => {
    return (<div className="haha">
        <Header/>
        <span>我是yxl-------ll我爱秀dsfsdfdf秀sdfsdf</span>
        <h1>welcome to home</h1>
        <button onClick={()=>{alert("hahaha")}}>Click</button>
        <div>{props.name}</div>
    </div>)
}

// module.exports = {
//     default: Home
// }
export default connect(mapStateToProps, null)(Home);