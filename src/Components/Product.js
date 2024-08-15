import { useParams } from "react-router-dom"

function Product ()
{
    const params= useParams();
    const {Name} =params;
    return(
        <div>
            hello
         <p>{Name}</p> 
        </div>
   

     
    );

}
export default Product