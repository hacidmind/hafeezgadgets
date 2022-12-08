import GadgetBlogList from '../pages/GadgetBlogList';
import UseCustomHook from '../useCustomHook';

const GadgetBlog = () => {
    // let URL = "http://localhost:8000/blogs"

    let URL = "https://my-json-server.typicode.com/hacidmind/deviceDb/blogs";

    const { data: blogs, isLoading, isError } = UseCustomHook(`${URL}`)


    return (
        <div>
            {isLoading && <div className="spinner-grow text-secondary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>}
            {isError && <div>Error Fetching data </div>}
            {blogs && <GadgetBlogList blogs={blogs} />}
        </div>
    );
}

export default GadgetBlog;
