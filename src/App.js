import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./component/header/Header";
import {Route, Routes} from "react-router-dom";
import ProductList from "./component/productList/ProductList";
import Form from "./component/form/Form";

function App() {
    const {onToggleButton, tg} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [])

    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route index element={<ProductList />}/>
                <Route path={'form'} element={<Form />}/>
            </Routes>
            <button onClick={onToggleButton}>toggle</button>
        </div>
    );
}

export default App;
