function Rating({ children }){
children = Math.round(children)

children = (children < 0) ? 0 : (children > 5) ? 5 : children;
//si children es menor de 0 es igual a 0
//si no es menor pasa al otro 
//si es mayor de 5 es igual 5 
//si no pasa a children 
let stars = [];//array de stars
for (let i = 0; i < 5; i++){

if (i < children) {//
    stars.push(<i key={i} className="fa fa-star"></i>)
} else {
    stars.push(<i key={i} className="fa-solid fa-star"></i>)
}


}
return <div className="rating">
    {stars}
</div>

}
//si i es mayor que children me pintas una negra sino blanca 
//asi en 5 vueltas

export default Rating