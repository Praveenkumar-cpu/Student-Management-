import './App.css';
import StudentComponent from './components/StudentComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListStudentComponent from './components/ListStudentComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <>
            <BrowserRouter>
                <HeaderComponent />
                <Routes>
                    <Route path='/' element={<ListStudentComponent />}></Route>
                    <Route path='/students' element={<ListStudentComponent />}></Route>
                    <Route path='/add-student' element={<StudentComponent />}></Route>
                    <Route path='/edit-student/:id' element={<StudentComponent />}></Route>
                </Routes>
                <FooterComponent />
            </BrowserRouter>
        </>
    );
}

export default App;