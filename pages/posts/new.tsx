import * as React from "react";
import {FC} from "react";
import NewPostPage from "../../components/newPostPage/newPostPage";
import {useDispatch} from "react-redux";
import {addPost} from "../../redux/ThunkCreators";
import {IPost} from "../../helpers/types";
import {withRedux} from "../../redux/redux";
import {Container} from "../../globalStyles/globalStyles";

interface IProps {
}

const newPage: FC<IProps> = () => {
    const dispatch = useDispatch();
    const addNewPost = (newPost: IPost) => {
        dispatch(addPost(newPost))
    };
    return (
        <>
            <Container>
                <NewPostPage addNewPost={addNewPost}/>
            </Container>
        </>
    )
};
export default withRedux(newPage);
