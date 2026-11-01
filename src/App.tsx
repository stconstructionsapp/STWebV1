/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';
import { MobileStickyBar } from './components/MobileStickyBar';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { NarayaniVillasPage } from './pages/NarayaniVillasPage';
import { ConstructionUpdatesPage } from './pages/ConstructionUpdatesPage';
import { ContactPage } from './pages/ContactPage';
import { ReferAFriendPage } from './pages/ReferAFriendPage';
import { ChannelPartnersPage } from './pages/ChannelPartnersPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsDisclaimerPage } from './pages/TermsDisclaimerPage';
import { ArrowLeft } from 'lucide-react';

const PageContent: React.FC = () => {
  const { currentPath, navigate } = useRouter();

  // Route resolver
  const renderCurrentPage = () => {
    switch (currentPath) {
      case '/':
      case '':
      case '/index.html':
        return <HomePage />;
      case '/services':
        return <ServicesPage />;
      case '/about':
        return <AboutPage />;
      case '/projects':
        return <ProjectsPage />;
      case '/projects/narayani-villas':
        return <NarayaniVillasPage />;
      case '/construction-updates':
        return <ConstructionUpdatesPage />;
      case '/contact':
        return <ContactPage />;
      case '/refer-a-friend':
        return <ReferAFriendPage />;
      case '/channel-partners':
        return <ChannelPartnersPage />;
      case '/privacy-policy':
        return <PrivacyPolicyPage />;
      case '/terms-disclaimer':
        return <TermsDisclaimerPage />;
      default:
        return (
          <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center bg-white">
            <span className="font-serif text-6xl font-bold text-[#043728] mb-2">404</span>
            <h1 className="font-sans text-2xl font-bold text-slate-900 mb-2">Page Not Found</h1>
            <p className="text-sm text-slate-600 max-w-md mb-6">
              The requested page could not be located. You can navigate back to the ST Constructions homepage.
            </p>
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2 bg-[#043728] hover:bg-[#03291e] text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-[#EEBF67]" />
              <span>Return to Homepage</span>
            </button>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#0F172A]">
      <Header />
      <main className="flex-1">
        {renderCurrentPage()}
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileStickyBar />
      <EnquiryModal />
    </div>
  );
};

export default function App() {
  return (
    <RouterProvider>
      <PageContent />
    </RouterProvider>
  );
}
