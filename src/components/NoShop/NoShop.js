import { Link } from "react-router-dom";
function NothingAdded(){
    return <>
<img src="data:image/jpeg;base64,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" alt="" />
<h2>No item added.  <Link to='/'>Please shop.</Link> </h2>
    </>
}
export {NothingAdded};