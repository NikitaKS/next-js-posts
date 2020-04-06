import * as React from "react";
import {IPost} from "../../helpers/types";

interface IProps {
    posts: IPost[]
}

const PostWrapper = (props: IProps) => {
    debugger
    const posts = props.posts.map((p) => {
        return <div key={p.id}>{p.title}</div>
    });
    return (
        <>
            {posts}
        </>
    )
};
export default (PostWrapper);
