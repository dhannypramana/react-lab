export default function PostDetail() {
    const params = useTransformedParams();

    return (
        <p>
            <span>
                Post Id:
                {params.postId}
            </span>
        </p>
    );
}
