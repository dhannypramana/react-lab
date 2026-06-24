export default function PostDetailCommentDetail() {
    const params = useTransformedParams();
    return (
        <>
            <p>
                Post Id:
                {params.postId}
            </p>

            <p>
                Comment Id:
                {params.commentId}
            </p>
        </>
    );
}
