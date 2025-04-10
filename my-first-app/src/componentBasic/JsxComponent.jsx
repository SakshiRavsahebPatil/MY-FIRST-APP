
const JsxComponent = ()=>{
    let a =20 , b= 30;
    return(
        <div>
        <h2>This is JsxComponent</h2>
        <h2>Addition of Two Number is : {a+b}</h2>
        <h3>{a> 50 ? "A is greater than 50" : "A is less than 50"}</h3>
        </div>
    )
}
export default JsxComponent;