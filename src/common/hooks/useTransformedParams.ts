export const useTransformedParams = () => {
    const params = useParams();
    return Object.fromEntries(
        Object.entries(params).map(([key, value]) => [
            key.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase()),
            value,
        ]),
    );
};
