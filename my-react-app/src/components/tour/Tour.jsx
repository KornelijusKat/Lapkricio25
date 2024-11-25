import { useState } from "react";
const Tour = ({id, image, info, name, price, removeTour}) =>{
    const [readmore, setReadMore] = useState(false);
    return(
        <>
            <article>
                <img src={image} alt={name}/>
                <div className="tour-info">
                    <h4>{name}</h4>
                    <h5 className='tour-info'>${price}</h5>
                    <p>
                        {readmore? info:`${info.substring(0,200)}...`}
                        <button onClick={()=>{setReadMore(!readmore)}}>
                            {readmore? 'show less': 'read more'}
                        </button>
                    </p>
                    <button className="delete-btn" onClick={()=>{removeTour(id)}}>
                        not interested
                    </button>
                </div>
            </article>
        </>
    )
}
export default Tour