const ChildComponent = (prop) => {
    console.log(prop);
    let {uname,age,image,skills} = prop;
    // prop.uname = "Vignesh";
    return (
        <>
        <h1>Child Component</h1>
        <p>Welcome {uname}</p>
        <img src={image} style={{width: 700, height: 500}}></img>
        <p>Skills: {skills}</p>
        <ul>
            {
                skills.map((sk,index)=>(
                   <li key={index}>{sk}</li>
                ))
            }
        </ul>
        </>
    )
}
export default ChildComponent;