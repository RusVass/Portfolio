
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';

function AppRouter() {
    return (
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
    )
}

export default AppRouter;
