import { Route, Routes } from "react-router-dom";
import IndexPage from "../pages/IndexPage/IndexPage";
import OompaDetailsPage from "../pages/OompaDetailsPage/OompaDetailsPage"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<IndexPage />}/>
            <Route path="/oompa/:id" element={<OompaDetailsPage />} />
        </Routes>
    )
}

export default AppRoutes;