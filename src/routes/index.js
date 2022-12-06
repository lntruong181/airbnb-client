import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Booking from '@/features/Booking/Booking';
import MainLayout from '@/layouts';

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
      </Routes>
    </Router>
  );
};
export default AirbnbRoutes;
