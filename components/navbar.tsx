"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Calendar, ChevronDown, ChevronRight } from "lucide-react"

export default function Navbar() {

  if (process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true') {
    return (
      <div style={{ textAlign: 'center', padding: '50px', backgroundColor: '#f8d7da' }}>
        <h1 style={{ color: '#721c24',fontSize:"100px" } }>Site is under maintenance</h1>
        <p style={{fontSize:"100px"}}>Please check back later!</p>
      </div>
    );
  }
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [healthInsightsOpen, setHealthInsightsOpen] = useState(false);
  const [offlineOpen, setOfflineOpen] = useState(false);
  const [onlineOpen, setOnlineOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const [wellnessResourcesOpen, setWellnessResourcesOpen] = useState(false);
  const toggleWellnessResources = () => setWellnessResourcesOpen(!wellnessResourcesOpen);


  // onst [healthInsightsOpen, setHealthInsightsOpen] = useState(false);

  // const toggleMobileServices = () => setMobileServicesOpen((prev) => !prev);
  const toggleOffline = () => setOfflineOpen((prev) => !prev);
  const toggleOnline = () => setOnlineOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)
  const toggleMobileServices = () => setMobileServicesOpen(!mobileServicesOpen)
  const toggleHealthInsights = () => setHealthInsightsOpen((prev) => !prev);

  const servicesList = [
    { name: "CoreCare Physio", href: "/services/core-care", type: "offline" },
    { name: "Electrotherapy Healing", href: "/services/healing-with-electrotherapy", type: "offline" },
    { name: "Manual Therapy", href: "/services/manual-therapy-and-mobilisation", type: "offline" },
    { name: "Post-Surgery Rehab", href: "/services/post-surgery-rehabilitation", type: "offline" },
    { name: "Align & Thrive", href: "/services/align-and-thrive", type: "offline" },
    { name: "OrthoCare Physio", href: "/services/ortho-care", type: "offline" },
    { name: "Lifespan Physio", href: "/services/lifespan-pysiocare", type: "offline" },
    { name: "SheMoves Physio", href: "/services/she-moves", type: "offline" },
    { name: "PhysioConnect", href: "/services/physiotherapy", type: "online" },
    { name: "Back & Neck Pain Relief", href: "/services/back-neck-pain", type: "online" },
    { name: "Posture Correction", href: "/services/posture-correction", type: "online" },
    { name: "Workplace Wellness", href: "/services/Workplace-Wellness", type: "online" },
    { name: "Women’s Health Physio", href: "/services/women-health-therapy", type: "online" },
    { name: "Bach Flower Healing", href: "/services/holistic-healing", type: "online" },
    { name: "Home Exercise Plan", href: "/services/customize-home-exercise-plan", type: "online" },
    { name: "Stress & Posture Therapy", href: "/services/stress-and-posture-therapy", type: "online" },
  ]


  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    // { name: "Blog", href: "/blog" },
    // { name: "Podcast", href: "/podcast" },
    // { name: "Programs", href: "/programs" },
    // { name: "Shop", href: "/shop" },
    { name: "Library", href: "/library" },
    { name: "Nutrition", href: "/nutrition" },
    { name: "Gift", href: "/gift" },
    // { name: "Contact", href: "/contact" },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4 bg-white"}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/Logo.png" alt="Dr. Yogita Physiotherapy" width={50} height={50} className="mr-3 rounded-lg" />
          <div>
            <h1 className="text-xl font-bold text-gray-800">Dr. Yogita</h1>
            <p className="text-xs text-pink-600">Physiotherapy Clinic</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-evenly space-x-2">
          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`px-3 py-2 ${isScrolled ? "text-gray-700 hover:text-pink-800" : "text-black hover:text-pink-800"} transition-colors rounded-md text-sm font-medium`}
            >
              {link.name}
            </Link>
          ))}

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              className={`flex items-center px-3 py-2 text-sm font-medium transition ${isScrolled ? "text-gray-700 hover:text-pink-800" : "text-black hover:text-pink-800"}`}
            >
              Services
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>

            <AnimatePresence>
              {servicesDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg z-50"
                >
                  <div className="py-1">
                    {/* <div className="border-t my-1" /> */}
                    {["online", "offline"].map((type) => (
                      <div key={type} className="group relative">
                        <div className="flex justify-between items-center px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-800 cursor-pointer">
                          {type.charAt(0).toUpperCase() + type.slice(1)} Services
                          <ChevronRight className="h-4 w-4" />
                        </div>
                        <div className="absolute top-0 left-full w-56 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-200 z-50">
                          <div className="py-1">
                            {servicesList
                              .filter((s) => s.type === type)
                              .map((service) => (
                                <Link
                                  key={service.name}
                                  href={service.href}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-800"
                                >
                                  {service.name}
                                </Link>
                              ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Health Insights Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setHealthInsightsOpen(true)}
            onMouseLeave={() => setHealthInsightsOpen(false)}
          >
            <button
              className={`flex items-center px-3 py-2 text-sm font-medium transition ${isScrolled ? "text-gray-700 hover:text-pink-800" : "text-black hover:text-pink-800"}`}
            >
              Health Insights
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>

            <AnimatePresence>
              {healthInsightsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50"
                >
                  <div className="py-1">
                    {[
                      { name: "Blog", href: "/blog" },
                      { name: "Podcast", href: "/podcast" },
                      { name: "Programs", href: "/programs" },
                    ].map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-800"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Explore Dropdown for Shop, Library, Nutrition */}
          <div
            className="relative"
            onMouseEnter={() => setExploreOpen(true)}
            onMouseLeave={() => setExploreOpen(false)}
          >
            <button
              className={`flex items-center px-3 py-2 text-sm font-medium transition ${isScrolled ? "text-gray-700 hover:text-pink-800" : "text-black hover:text-pink-800"}`}
            >
              Shop
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>

            <AnimatePresence>
              {exploreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50"
                >
                  <div className="py-1">
                    {[
                      // { name: "Shop", href: "/shop" },
                      { name: "Library", href: "/library" },
                      { name: "Nutrition", href: "/nutrition" },
                    ].map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-800"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Remaining navLinks except Shop, Library, Nutrition, Blog, Podcast, Programs */}
          {navLinks
            .filter((link) =>
              !["Shop", "Library", "Nutrition", "Blog", "Podcast", "Programs"].includes(link.name)
            )
            .slice(2)
            .map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-2 ${isScrolled ? "text-gray-700 hover:text-pink-800" : "text-black hover:text-pink-800"} transition-colors rounded-md text-sm font-medium`}
              >
                {link.name}
              </Link>
            ))}

          <Link
            href="/booking"
            className={`px-3 py-2 ${isScrolled ? "text-gray-700 hover:text-pink-800" : "text-black hover:text-pink-800"} transition-colors rounded-md text-sm font-medium flex items-center`}
          >
            <Calendar className="mr-1 h-4 w-4" />
            Book Now
          </Link>
        </nav>



        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-gray-700 hover:text-pink-800 right-[50px]">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t mt-2"
          >
            <div className="px-4 py-3 space-y-3">
              {navLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-gray-700 hover:text-pink-600 hover:bg-pink-50"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              {/* Services Accordion */}
              <div>
                <button
                  onClick={toggleMobileServices}
                  className="w-full flex justify-between items-center px-3 py-2 rounded-md text-gray-700 hover:text-pink-600 hover:bg-pink-50"
                >
                  <span>Services</span>
                  <ChevronRight className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-90" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-2 mt-1 space-y-2"
                    >
                      {/* Offline Services */}
                      <div>
                        <button
                          onClick={toggleOffline}
                          className="w-full flex justify-between items-center px-3 py-2 text-sm text-gray-700 rounded-md hover:text-pink-600 hover:bg-pink-50"
                        >
                          <span>Offline Services</span>
                          <ChevronRight className={`h-4 w-4 transition-transform ${offlineOpen ? "rotate-90" : ""}`} />
                        </button>
                        <AnimatePresence>
                          {offlineOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="ml-3 max-h-40 overflow-y-auto pr-1 custom-scroll"
                            >
                              {servicesList
                                .filter((service) => service.type === "offline")
                                .map((service) => (
                                  <Link
                                    key={service.name}
                                    href={service.href}
                                    className="block px-3 py-2 text-sm text-gray-700 rounded-md hover:text-pink-600 hover:bg-pink-50"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {service.name}
                                  </Link>
                                ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Online Services */}
                      <div>
                        <button
                          onClick={toggleOnline}
                          className="w-full flex justify-between items-center px-3 py-2 text-sm text-gray-700 rounded-md hover:text-pink-600 hover:bg-pink-50"
                        >
                          <span>Online Services</span>
                          <ChevronRight className={`h-4 w-4 transition-transform ${onlineOpen ? "rotate-90" : ""}`} />
                        </button>
                        <AnimatePresence>
                          {onlineOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="ml-3 max-h-40 overflow-y-auto pr-1 custom-scroll"
                            >
                              {servicesList
                                .filter((service) => service.type === "online")
                                .map((service) => (
                                  <Link
                                    key={service.name}
                                    href={service.href}
                                    className="block px-3 py-2 text-sm text-gray-700 rounded-md hover:text-pink-600 hover:bg-pink-50"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {service.name}
                                  </Link>
                                ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Health Insights Accordion */}
              <div>
                <button
                  onClick={toggleHealthInsights}
                  className="w-full flex justify-between items-center px-3 py-2 text-sm text-gray-700 rounded-md hover:text-pink-600 hover:bg-pink-50"
                >
                  <span>Health Insights</span>
                  <ChevronRight className={`h-4 w-4 transition-transform ${healthInsightsOpen ? "rotate-90" : ""}`} />
                </button>
                <AnimatePresence>
                  {healthInsightsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="ml-3 max-h-40 overflow-y-auto pr-1 custom-scroll"
                    >
                      <Link
                        href="/blog"
                        className="block px-3 py-2 text-sm text-gray-700 rounded-md hover:text-pink-600 hover:bg-pink-50"
                        onClick={() => setIsOpen(false)}
                      >
                        Blog
                      </Link>
                      <Link
                        href="/podcast"
                        className="block px-3 py-2 text-sm text-gray-700 rounded-md hover:text-pink-600 hover:bg-pink-50"
                        onClick={() => setIsOpen(false)}
                      >
                        Podcast
                      </Link>
                      <Link
                        href="/programs"
                        className="block px-3 py-2 text-sm text-gray-700 rounded-md hover:text-pink-600 hover:bg-pink-50"
                        onClick={() => setIsOpen(false)}
                      >
                        Program
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Wellness Resources Accordion */}
              <div>
                <button
                  onClick={toggleWellnessResources}
                  className="w-full flex justify-between items-center px-3 py-2 text-sm text-gray-700 rounded-md hover:text-pink-600 hover:bg-pink-50"
                >
                  <span>Shop</span>
                  <ChevronRight className={`h-4 w-4 transition-transform ${wellnessResourcesOpen ? "rotate-90" : ""}`} />
                </button>
                <AnimatePresence>
                  {wellnessResourcesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="ml-3 max-h-40 overflow-y-auto pr-1 custom-scroll"
                    >
                      {[
                        // { name: "Shop", href: "/shop" },
                        { name: "Library", href: "/library" },
                        { name: "Nutrition", href: "/nutrition" },
                      ].map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          className="block px-3 py-2 text-sm text-gray-700 rounded-md hover:text-pink-600 hover:bg-pink-50"
                          onClick={() => setIsOpen(false)}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Remaining links */}
              {navLinks
                .filter(
                  (link) =>
                    !["Shop", "Library", "Nutrition"].includes(link.name) &&
                    !["Home", "About"].includes(link.name)
                )
                .map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block px-3 py-2 rounded-md text-gray-700 hover:text-pink-600 hover:bg-pink-50"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}

              {/* Book Now CTA */}
              <Link
                href="/booking"
                className="block bg-pink-500 hover:bg-pink-600 text-white text-center px-4 py-2 rounded-md text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                <Calendar className="inline-block mr-1 h-4 w-4" />
                Book Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>



    </header>
  )
}
