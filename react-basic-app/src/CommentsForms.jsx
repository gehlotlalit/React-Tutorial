// import { useState } from "react"

// export default function CommentsForms(){
//     let [formData, setFormData] = useState({
//         username: "",
//         remark: "",
//         rating: 5
//     });
//     let handleInputChange = (event) => {
//         setFormData((currData) => {
//              return { ...currData, [event.target.name]: event.target.value};
//         });
//     };
//     let handleSubmit = (event) => {
//         console.log(formData);
//         event.preventDefault();
//         setFormData({
//             username: "",
//             remark: "",
//             rating: 5
//         })
//     }
//     return(
//         <div>
//             <h4>give a comment!</h4>
//             <form onSubmit={handleSubmit}>

//             <label htmlFor="username">Username</label>
//             <input placeholder="username"
//                    type="text" 
//                    value={formData.username} 
//                    onChange={handleInputChange}
//                    id="username" 
//                    name="username"
//                     ></input>
//             <br></br><br />
//             <label htmlFor="remark">Remark</label>
//             <textarea  
//                    value={formData.remark} 
//                    placeholder="add few remarks"
//                    type="text"
//                    onChange={handleInputChange} 
//                    id="remark"
//                    name="remark" 
//                     >Remark</textarea>
//             <br></br><br />
//             <label htmlFor="rating">Rating</label>
//             <input 
//                   placeholder="rating" 
//                   type="number" min={1} max={5}  
//                   value={formData.rating}
//                   onChange={handleInputChange} 
//                   id="rating"
//                   name="rating"></input>
//             <br></br><br />
//             <button>Add Comment</button>
//             </form>
//         </div>
//     )
// }