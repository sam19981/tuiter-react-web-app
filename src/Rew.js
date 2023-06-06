import {BrowserRouter, Navigate,Link,useParams} from "react-router-dom";
function Rew() {
    const {qwe, wer} = useParams()
    return(<Link to={`/asd/${wer}/${qwe}`}>LINK B</Link>)
}
export default Rew