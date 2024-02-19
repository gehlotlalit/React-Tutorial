function handleClick(event){
    console.log("Hello");  
    console.log(event)
}
function handleMouseOver(){
    console.log("Bye");
}
function handleDblClick(){
    console.log("you Double click me");
}
export default function Button(){
    return(
        <div>
            <button onClick={handleClick}>Click Me!</button>
            <p onMouseOver={handleMouseOver}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita molestias ipsam veniam ab nobis aliquam corporis id nam? Optio, cum?</p>
            <h1 onDoubleClick={handleDblClick}>Ss college</h1>
        </div>
    );
}
