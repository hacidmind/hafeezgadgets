import React from 'react';
import {Link} from 'react-router-dom'

const GadgetBlogList = ({blogs}) => {
    return (
        <div>
             <h1 className='title'>Gadgets Blog</h1>
            {
                blogs.map((blog)=>(
                    <div key={blog.id} className="blog-preview">
                        <h2>{blog.title}</h2>
                        <img src={blog.pix} alt={blog.title} width="150" height="auto" />
                        <p>{blog.body.slice(0, 200)} <Link to={`/gadgets/${blog.id}`}>Read More.....</Link> </p>
                        <i>{blog.coo}</i>
                        {/* <div>
                            <button onClick={()=>{handleDelete(blog.id)}}>Delete Blog</button>
                        </div> */}
                    </div>
                ))
            }
        </div>
    );
}

export default GadgetBlogList;
