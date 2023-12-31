import React, { useState } from "react";
import './Content.css';
import { useUserContext } from "../../App";

const Content = () => {
    const {Items, Add, Button} = useUserContext();
    const [course, setcourse] = useState("");

    return (
        <>
            <div className="body">
                <h1>Learn to Code</h1>
                <h2>With the world's largest web developer site.</h2>
                <select onChange={event => setcourse(event.target.value)} id="search">
                    <option>select</option>
                    <option>Web App Development</option>
                    <option>Front end Development</option>
                    <option>Data Analytics</option>
                    <option>Web Design</option>
                    <option>HTML</option>
                    <option>CSS</option>
                    <option>JavaScript</option>
                    <option>SQL </option>
                    <option>Python</option>
                    <option>React</option>
                    <option>C++</option>
                </select>
                { Items.filter(i => {
                    if (course === 'select') {
                        return true;
                    } 
                    else if (i.name.toLowerCase().includes(course.toLowerCase())) {
                        return true;
                    }
                    else{
                        return false;
                    }
                    }).map((product) => (
                    
                    <div key={product.id} className="image">
                        <img alt={product.name} src={product.image}/>
                        <p className="cost">{product.cost}</p>
                        <p>{product.learn}</p>
                        <h3 className="add" onClick={()=>{Add(product)}}>{Button(product)?"Remove":"Add to Cart"}</h3>
                    </div>
                ))}
            </div> 
        </>
    );
}

export default Content;