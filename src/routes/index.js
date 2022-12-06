import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainLayout from '@/layouts/MainLayout';
import DetailLayout from '@/layouts/DetailLayout';
import Booking from '@/features/Booking';

const AirbnbRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <MainLayout>
              <Booking />
            </MainLayout>
          }
        ></Route>
        <Route path='/rooms' element={<DetailLayout></DetailLayout>}></Route>
      </Routes>
    </Router>
  );
};
export default AirbnbRoutes;
