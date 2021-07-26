import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    // const categories =['One Punch', 'Samurai X', 'My Hero Academia'];

    const [categories, setCategories] = useState(['My Hero Academia']);

    const handleAdd = () => {        setCategories([...categories, 'Naruto'])
    }

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr></hr>
            <button onClick={handleAdd}>Naruto</button>
            <ul>
                
                {
                    //pasa por cada elemento (iterador)
                    categories.map( category =>
                        // return <li key={category}>{category}</li>
                        (<GifGrid category={category} key={category}/>)
                    )  
                }
            </ul>
        </div>
    )
}

GifExpertApp.propTypes = {

}

export default GifExpertApp
