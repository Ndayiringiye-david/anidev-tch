import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import { Topbar, Navbar, Footer } from './components/layout'
import { LocaleProvider } from './i18n/LocaleContext'
import HomePage from './pages/Home'
import PlaceholderPage from './pages/PlaceholderPage'
import ContactPage from './pages/Contact'
import ServicesPage from './pages/Services'
import WhoWeAre from './pages/WhoWeAre'
import InsightsPage from './pages/Insights'
import PartnershipPage from './pages/Partnership'
import ApplyPage from './pages/Apply'
import TestimonialsPage from './pages/Testimonials'

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white font-[Poppins]">
      <Topbar />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <LocaleProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/who-we-are" element={<WhoWeAre />} />
            <Route path="/why-us" element={<PlaceholderPage title="Why Choose Us" />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/products" element={<PlaceholderPage title="Our Products" />} />
            <Route path="/products/devbox" element={<PlaceholderPage title="DevBox" />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/apply-now" element={<ApplyPage />} />
            <Route path="/become-a-partner" element={<PartnershipPage />} />
            <Route path="*" element={<PlaceholderPage title="Page Not Found" />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </LocaleProvider>
  )
}
