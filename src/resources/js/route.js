import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Home from './pages/Home';
import Folder from './pages/Folder';
import NotFound from './pages/NotFound';
import NavBar from './components/NavBar/NavBar';
import Notification from './components/common/Notification';
import FolderStatusManagement from './components/FolderStatusManagement/FolderStatusManagement';
import Item from "./pages/Item";

const App = () => {
    return (
        <div>
          <Notification>
            <FolderStatusManagement>
                <NavBar />
                <Routes>
                    <Route path='/app/home' element={ <Home /> } />
                    <Route path='/app/home/folders/:folderId/items' element={ <Folder /> } />
                    <Route path='/app/home/folders/:folderId/items/:itemId' element={<Item/>}/>
                    <Route path="*" element={ <NotFound /> } />
                </Routes>
            </FolderStatusManagement>
          </Notification>
        </div>
    );
}

  ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('app'))
