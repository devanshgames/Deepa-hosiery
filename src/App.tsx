import { useState } from 'react';
import { Menu, X } from 'lucide-react';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const navItems = ['Start', 'Story', 'Rates', 'Benefits', 'FAQ'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_091828_e240eb17-6edc-4129-ad9d-98678e3fd238.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Content Wrapper */}
        <div className="relative h-full flex flex-col">
          {/* Navigation */}
          <nav className="max-w-7xl mx-auto w-full px-8 py-6">
            <div className="flex items-center justify-between">
              {/* Brand */}
              <div className="text-2xl font-semibold text-gray-900">
                DEEPA HOSIERY
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-8">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-900 hover:text-gray-700 transition-colors font-medium"
                  >
                    {item}
                  </a>
                ))}
              </div>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-gray-900 hover:text-gray-700 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMobileMenuOpen && (
              <div className="md:hidden mt-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg p-6">
                <div className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-gray-900 hover:text-gray-700 transition-colors font-medium"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </nav>

          {/* Main Content Area */}
          <div className="flex-1 flex items-center justify-center px-8">
            <div className="text-center -mt-80">
              {/* Small Label */}
              <p className="text-sm font-semibold text-gray-600 tracking-wider mb-4 uppercase">
                PRODUCTS
              </p>

              {/* Large Heading */}
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-normal text-gray-500 leading-none tracking-tighter">
                BRA
              </h1>
              <h1
                className="text-6xl md:text-7xl lg:text-8xl font-normal leading-none tracking-tighter"
                style={{ color: '#202A36', marginTop: '-12px' }}
              >
                PANTIES
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-gray-600 mt-6 mb-6 max-w-2xl mx-auto">
                Your dedication deserves recognition.
              </p>

              {/* CTA Buttons */}
              <div className="flex items-center justify-center gap-4">
                <button className="px-4 py-2 rounded-full bg-gray-300 text-gray-800 font-medium hover:bg-gray-400 transition-colors">
                  Discover
                </button>
                <button
                  className="px-4 py-2 rounded-full text-white font-medium transition-colors"
                  style={{ backgroundColor: '#202A36' }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = '#1a2229')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = '#202A36')
                  }
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
