//const React = require("react");
import React, { Component } from "react";
import Header from "../../components/Header";
import { connect } from "react-redux";
import { getHomeList } from "./store/actions";

const mapStateToProps = state => {
    return {
        list: state.home.newsList
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getHomeList() {
            dispatch(getHomeList())
        }
    }
};

@connect(mapStateToProps, mapDispatchToProps)
class Home extends Component{
    componentDidMount(){
        this.props.getHomeList();
    }
    getList() {
        const { list } = this.props;
        return list.map(item => <div key={item.id}>{item.title}</div>)
    }
    render(){
        return (<div className="haha">
            <Header/>
            <span>我是yxl-------ll我爱秀dsfsdfdf秀sdfsdf</span>
            <h1>welcome to home</h1>
            <button onClick={()=>{alert("hahaha")}}>Click</button>
            {this.getList()}
        </div>)
    }
}
export default Home;