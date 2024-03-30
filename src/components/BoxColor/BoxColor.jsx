import "./BoxColor.css"

function BoxColor({r, g ,b}){
    
    return ( 
        <div style={{ backgroundColor:`rgb(${r}, ${g}, ${b})`}} className=" box  border border-dark" >
            <p>Rgb({r},{g},{b})</p>
            <p>Falta el exadecimal </p>
        </div>
    )
}

export default BoxColor