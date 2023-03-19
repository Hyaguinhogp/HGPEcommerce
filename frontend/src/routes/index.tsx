import { Routes, Route, Navigate } from "react-router-dom"
import Categories from "../pages/Categories"
import Home from '../pages/Home'
import Store from "../pages/Store"

const RoutesMain = () => {
    return (
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/store' element={<Store />} />
            <Route path='/categories' element={<Categories />} />
            <Route path='*' element={<Navigate to='/home' />} />
        </Routes>
    )
}

export default RoutesMain
