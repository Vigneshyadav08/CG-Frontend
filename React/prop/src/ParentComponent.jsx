import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
    let userName = 'vignesh';
    let age = 20;
    let image = "./images/saiVIGnesh.png"
    let skills = ['sleeping','writting','reading'];
    return (
        <div>
            <h1>Parent Component</h1>
            <ChildComponent uname={userName} age = {age} image = {image} skills={skills}/>
        </div>
    )
}
export default ParentComponent;