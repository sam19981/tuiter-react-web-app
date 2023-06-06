import Labs from "./labs";
import HelloWorld from "./labs/a3/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter, Navigate,Link} from "react-router-dom";
import {Routes, Route} from "react-router";
import Asd from "./Asd"
import Rew from "./Rew"

function App() {
    return(
        <BrowserRouter>
            <Link to="/qwe/21/14/wer">LINK A</Link>
            <Routes>
                <Route path="/qwe/:qwe/:wer/wer" element={<Rew/>}/>
                <Route path="/asd/:zxc/:xcv" element={<Asd/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default App;





