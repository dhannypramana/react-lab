import routes from '~react-pages';

export default function App() {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            {useRoutes(routes)}
        </Suspense>
    );
}
