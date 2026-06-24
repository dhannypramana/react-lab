export default function PostDetailCommentIndex() {
    const params = useTransformedParams();
    return (
        <p>
            <span>
                Post Id (Comment Section):
                {params.postId}
            </span>
        </p>
    );
}
