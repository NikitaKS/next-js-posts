import * as React from "react";
import Header from "../components/header/Header";
import {withRedux} from "../redux/redux";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getNotes} from "../bll/ThunkCreators";
import PostWrapper from "../components/post/postWrapper";
import {AppState} from "../redux/store";

const Home = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state:AppState)=>state.root.)
    useEffect(()=>{
        dispatch(getNotes())
    },[]);
    return (
        <>
            <Header/>
            <PostWrapper posts={}/>
        </>
    )
};
export default withRedux(Home);
