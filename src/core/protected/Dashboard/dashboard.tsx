import React, {Suspense} from 'react'
import AppHeader from './Header/Header'
import Sidebar from './Sidebar/sidebar'
import AppFooter from './Footer/footer'
import "../../../assets/dashboard/scss/style.scss"
import FallbackLoader from '../../../components/React/FallBackLoader/FallBackLoader'

const Dashboard = () => {
  return (
    <Suspense fallback={<FallbackLoader/>}>
    <div>
      <Sidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          {/* <AppContent /> */}
        </div>
        <AppFooter />
      </div>
    </div>
    </Suspense>
  )
}

export default Dashboard;
