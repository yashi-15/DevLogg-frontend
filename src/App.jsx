import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Header from './Header/Header'
import Landing from './Pages/Landing/Landing'
import SignIn from './Pages/SignIn/SignIn'
import Dashboard from './Pages/Dashboard/DashboardLayout';
import Feed from './Pages/Dashboard/Feed/Feed';
import Inbox from './Pages/Dashboard/Inbox/Inbox';
import {ConvoBox, DefaultConvoBox} from './Pages/Dashboard/Inbox/ConvoBox';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><div className='absolute inset-0'><Header /></div><Landing /></>} />
        <Route path="/signin" element={<SignIn />} />

        <Route path='/dashboard' element={<Dashboard />} >
          <Route path='/dashboard/feed' element={<Feed />} />
          <Route path='/dashboard/inbox' element={<Inbox />} >
            <Route index element={<DefaultConvoBox />} />
            <Route path='/dashboard/inbox/:id' element={<ConvoBox />} />
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
