import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import AddBooking from './addBooking';
import CheckRoom from './checkRoom';
import Layout from '../components/Layout/Layout';

const Webpages = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/addbooking' element={<AddBooking />} />
          <Route path='/checkroom' element={<CheckRoom />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default Webpages;
