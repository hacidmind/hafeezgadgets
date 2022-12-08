import React, { useState } from 'react';
import BlogList from '../pages/BlogList';
import oha from '../images/Oha.jpeg'
import Atama from '../images/Atama.jpeg'
import Edikaikong from '../images/edikaikong.jpeg'
import Efo from '../images/eforiro.jpeg'




const Blog = () => {
    const [blogs, setBlogs] = useState([
        {
            title: "Atama",
            body: "Abak Atama Soup Abak Atama Soup abak atama soup Abak Atama Soup Abak Atama Soup is a delicious soup popular amongst the Ibibios of Akwa Ibom State in Southern Nigeria. Its name is derived from the two dominant ingredients: Palm Fruit Concentrate (Abak) and Atama Leaves. The base palm fruit concentrate used in preparing Abak Atama makes it similar to the Banga soup of the Niger Delta origin and the Ofe Akwu of the Igbos but the difference is in the spices and vegetables used for each of these soups and stews. How to Cook Banga Soup/Stew This video is very similar to how to cook Abak Atama Soup. Ofe Owerri The palm fruit extract used in cooking Abak Atama Soup is quite different from the red palm oil used in cooking Nigerian food recipes. Palm Oil is pure oil extracted from the palm fruit pulp at high temperatures while the palm fruit extract used for the Abak Atama Soup is extracted at a very low temperatures and is a mixture of oil and water. Palm fruit oil extracted for Abak Atama Soup contains less saturated fat than palm oils.",
            stateOfOrigin: "Akwa Ibom",
            img: Atama,
            id: 1
        },
        {
            title: "Oha",
            body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita nihil et vero consequatur praesentium molestiae, eveniet ipsam voluptatem velit repellat assumenda vel atque doloremque nesciunt voluptatibus! Sapiente assumenda sequi distinctio.     Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam reprehenderit, mollitia nesciunt dicta aut maxime tempora nisi animi labore, possimus magnam. Mollitia dolor debitis quisquam et? Perspiciatis atque mollitia quod, in porro officiis, sequi a iure voluptate corrupti temporibus fugiat quisquam quis iste ipsa quaerat aspernatur. Et, molestiae nemo. Ut asperiores rem repellat error. Nesciunt repudiandae fuga adipisci iste? Nemo ab, libero obcaeapiente ipsam sequi, adipisci quisquam minima. Quasi labore sequi dolorum officiis quisquam? Totam vero autem in facere iure nostrum error saepe asperiores ipsam, assumenda suscipit ",
            stateOfOrigin: "Abia",
            img: oha,
            id: 2
        },
        {
            title: "Edikaikong",
            body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita nihil et vero consequatur praesentium molestiae, eveniet ipsam voluptatem velit repellat assumenda vel atque doloremque nesciunt voluptatibus! Sapiente assumenda sequi distinctio.     Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam reprehenderit, mollitia nesciunt dicta aut maxime tempora nisi animi labore, possimus magnam. Mollitia dolor debitis quisquam et? Perspiciatis atque mollitia quod, in porro officiis, sequi a iure voluptate corrupti temporibus fugiat quisquam quis iste ipsa quaerat aspernatur. Et, molestiae nemo. Ut asperiores rem repellat error. Nesciunt repudiandae fuga adipisci iste? Nemo ab, libero obcaecati qui enim deserunt animi iste, dignissimos fuga ratione labore corrupti! Sint ab harum cum veniam laborum, illum voluptatem sunt quia perferendis ipsa ad exercitationem aliquidsuscipit aperiam recusandae facilis quaerat ?",
            stateOfOrigin: "Akwa Ibom",
            img: Edikaikong,
            id: 3
        },
        {
            title: "Efo",
            body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita nihil et vero consequatur praesentium molestiae, eveniet ipsam voluptatem velit repellat assumenda vel atque doloremque nesciunt voluptatibus! Sapiente assumenda sequi distinctio.     Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam reprehenasperiores ipsam, assumenda suscipit aperiam recusandae facilis quaerat cum aliquid veniam veritatis dicta odit, sit eligendi quasi qui voluptates.sit tempore? Repellat?",
            stateOfOrigin: "Ijebu",
            img: Efo,
            id: 4
        }
    ])

    const handleDelete = (id) => {
        let deleteBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(deleteBlogs)
    }
    return (
        <div>
            <BlogList blogs={blogs} handleDelete={handleDelete} />
        </div>
    );
}

export default Blog;
