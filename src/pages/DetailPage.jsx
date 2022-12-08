import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import UseCustomHook from '../useCustomHook';

const DetailPage = () => {
    const { id } = useParams()
    // let URL = `http://localhost:8000/blogs/${id}`
    let navigate = useNavigate()
    let URL = `https://my-json-server.typicode.com/hacidmind/deviceDb/blogs/${id}`;


    const { data: blog, isLoading, isError } = UseCustomHook(`${URL}`)

    const handleDelete = ()=>{
        fetch(`${URL}`,{
            method: "DELETE"
        }).then(()=>{
            navigate("/gadgets")
        })
    }

    return (
        <div className='container'>

            {isLoading && <div className="spinner-grow text-secondary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>}
            {isError && <div>Error Fetching data </div>}

            {blog && (<article>
                <h1>{blog.title}</h1>
                <div key={blog.id} className="blog-preview">

                    <img src={blog.pix} alt={blog.title} width="700" height="auto" />
                    <div><i>{blog.coo}</i></div>
                    <p>{blog.body}  </p>
                    <div>
                        <button onClick={handleDelete} className='btn btn-danger'>Delete Blog</button>
                    </div>
                </div> </article>)
            }
        </div>
    );
}

export default DetailPage;
