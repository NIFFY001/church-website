import React from "react";
import logonew from "/src/assets/logonew.png";
import church from "/src/assets/church.jpeg";
import lgs3 from "/src/assets/lgs3.jpeg";
import lgs4 from "/src/assets/lgs4.jpeg";
import hero1 from "/src/assets/hero1.mp4";
import { X, Menu, Facebook, Instagram, Youtube } from "lucide-react";

const ChurchWebsite = () => {
  const [currentPage, setCurrentPage] = React.useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // Navigation Links
  const navLinks = [
    { name: "Home", path: "home" },
    { name: "About", path: "about" },
    { name: "Giving", path: "giving" },
    { name: "Departments", path: "departments" },
  ];

  const HomePage = () => (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        <picture>
          <source srcSet={lgs4} type="image/jpeg" />
          <img
            src={lgs4}
            className="absolute inset-0 w-full h-full object-cover"
            alt="Description"
          />
        </picture>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative h-full flex flex-col justify-center items-center text-white text-center px-4 max-w-6xl mx-auto">
          <h1
            className="text-5xl md:text-7xl font-bold mb-10 tracking-widest e"
            style={{ fontFamily: "'Great Vibes', cursive", fontWeight: "700" }}
          >
            Welcome to Light Generations
          </h1>

          <button
            className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors animate-pulse"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Plan Your Visit
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <h1
          className=" font-bold md:text-[30px] uppercase tracking-widest "
          style={{
            fontFamily:
              "'Montserrat, Arial', Helvetica Neue, Helvetica, sans-serif",
          }}
        >
          Welcome to Light Generations!
          <div className="border-b w-full text-[#CCCCCC] mt-5 mb-7"></div>
        </h1>

        <div className="">
          <h2
            className=" tracking-widest text-center md:w-[500px] leading-relaxed "
            style={{
              fontFamily:
                "'Montserrat, Arial', Helvetica Neue, Helvetica, sans-serif",
            }}
          >
            This is RCCG Light Generations where God's light dwells. We are
            transformed by the light.
          </h2>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Sunday Service</h3>
            <p>10:00 AM - 11:30 AM</p>
          </div>
          <div className="text-center p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Bible Study</h3>
            <p>Wednesday 7:00 PM</p>
          </div>
          <div className="text-center p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Youth Group</h3>
            <p>Friday 6:30 PM</p>
          </div>
        </div>
      </div>
    </div>
  );

  const AboutPage = () => (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-8">
      <h1 className="text-4xl font-bold text-center">About Us</h1>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <img
            src={church}
            alt="Church building"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p className="text-gray-600">
            To share God's love, build a strong community of believers, and
            serve our neighbors with compassion and grace.
          </p>
          <h2 className="text-2xl font-semibold">Our Vision</h2>
          <p className="text-gray-600">
            To be a welcoming church that transforms lives through faith,
            fellowship, and service.
          </p>
        </div>
      </div>
    </div>
  );

  const GivingPage = () => (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-8">
      <h1 className="text-4xl font-bold text-center">Give</h1>
      <div className="max-w-2xl mx-auto space-y-6">
        <p className="text-center text-gray-600">
          Support our ministry and make a difference in our community through
          your generous giving.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-4">Online Giving</h3>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
              Give Now
            </button>
          </div>
          <div className="p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-4">Text to Give</h3>
            <p className="text-gray-600">Text GIVE to (555) 123-4567</p>
          </div>
        </div>
      </div>
    </div>
  );

  const DepartmentsPage = () => (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-8">
      <h1 className="text-4xl font-bold text-center">Our Departments</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            name: "Children's Ministry",
            description: "Nurturing young hearts in faith",
          },
          {
            name: "Youth Ministry",
            description: "Guiding teenagers in their spiritual journey",
          },
          {
            name: "Music Ministry",
            description: "Leading worship through song and praise",
          },
          { name: "Outreach", description: "Serving our local community" },
          {
            name: "Small Groups",
            description: "Growing together in faith and fellowship",
          },
          {
            name: "Prayer Team",
            description: "Interceding for our church and community",
          },
        ].map((dept, index) => (
          <div key={index} className="p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">{dept.name}</h3>
            <p className="text-gray-600">{dept.description}</p>
            <button className="mt-4 text-blue-600 hover:text-blue-700">
              Learn More →
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "about":
        return <AboutPage />;
      case "giving":
        return <GivingPage />;
      case "departments":
        return <DepartmentsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between ">
            {/* Logo Container */}
            <div className="flex-shrink-0 flex items-center ">
              <img
                src={logonew}
                alt="Church Logo"
                className="md:h-20 h-20 object-fit "
              />
            </div>

            {/* Desktop Navigation - Pushed to the right */}
            <div className="hidden md:flex items-center space-x-8 ml-auto">
              {navLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => setCurrentPage(link.path)}
                  className={`font-medium transition duration-300  ${
                    currentPage === link.path
                      ? ""
                      : "text-black hover:text-grey-600"
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-600 hover:text-gray-900 p-2"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.path}
                  onClick={() => {
                    setCurrentPage(link.path);
                    setMobileMenuOpen(false);
                  }}
                  className={`${
                    currentPage === link.path
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  } block w-full text-left px-3 py-2 rounded-md text-base font-medium`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">{renderPage()}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p className="mb-2">13, UNIMED Teaching Hospital Road</p>
              <p className="mb-2">Lipakala, Ondo, Nigeria</p>
              <p className="mb-2">0803 076 2506</p>
              <p className="mb-2">rccglightgenerationsexpression@gmail.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Service Times</h3>
              <p className="mb-2">Sunday Service: 8:00 AM</p>
              <p>Wednesday Service: 6:00 PM</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Facebook className="w-6 h-6" />
                <Instagram className="w-6 h-6" />
                <Youtube className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ChurchWebsite;
