import * as React from "react";
import Header from "../components/header/Header";
import {withRedux} from "../redux/redux";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import PostWrapper from "../components/post/postWrapper";
import {AppState} from "../redux/store";
import {getPosts} from "../bll/ThunkCreators";

const Home = (props:any) => {
    const dispatch = useDispatch();
    const posts = useSelector((state: AppState) => state.root.posts);
    useEffect(() => {
        dispatch(getPosts())
    }, []);
    return (
        <>
            <Header/>
            {/*<PostWrapper posts={posts}/>*/}
        </>
    )
};
export default (Home);
