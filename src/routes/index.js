import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainLayout from '@/layouts/MainLayout';
import DetailLayout from '@/layouts/DetailLayout';
import Booking from '@/features/Booking';
import DetailRoom from '@/features/DetailRoom';
import { ROUTE } from '@/enum/routes.enums';

const AirbnbRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route
          path={ROUTE.HOME}
          element={
            <MainLayout>
              <Booking />
            </MainLayout>
          }
        ></Route>
        <Route
          path={ROUTE.DETAIL}
          element={
            <DetailLayout>
              <DetailRoom />
            </DetailLayout>
          }
        ></Route>
      </Routes>
    </Router>
  );
};
export default AirbnbRoutes;
