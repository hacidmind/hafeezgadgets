import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'

const NewBlog = () => {


    const [title, setTitle] = useState('')
    const [coo, setCoo] = useState('')
    const [body, setBody] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    let URL = "http://localhost:8000/blogs"

    const handleSubmit =(e)=>{
        e.preventDefault();

        // alert(`Title: ${title} COO: ${coo} Body: ${body}`)
        const blog = {title, coo, body}
        console.log(blog);

        setIsLoading(true)

        fetch(`${URL}`,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(blog)
        }).then(()=>{
            setIsLoading(false)
            navigate("/gadgets")
        })
    }

    return (
        <div className='container'>
            <h1 className='text-center'>Add Blog</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control" placeholder="Title" value={title} onChange={(e)=> setTitle(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Country Of Origin</label>
                    <input type="text" className="form-control" placeholder="Country Of Origin" value={coo} onChange={(e)=> setCoo(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Body</label>
                    <textarea className="form-control" rows="4" value={body} onChange={(e)=> setBody(e.target.value)}></textarea>
                </div>
                <div className="d-grid gap-2">
                {
                    !isLoading && <button className='btn btn-primary'>Submit</button>
                }
                {
                    isLoading && <button disabled className='btn btn-primary'>Adding Blog...</button>
                }
                    
                </div>
            </form>

        </div>
    );
}

export default NewBlog;
