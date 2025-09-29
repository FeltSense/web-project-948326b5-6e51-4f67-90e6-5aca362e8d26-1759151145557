'use client'

import React, { useState } from 'react'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      {/* Logo */}
      <div className="flex-shrink-0 flex items-center">
        <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg mr-3"></div>
        <span className="text-xl font-bold text-gray-900">Catalyst Creative Studio</span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <div className="ml-10 flex items-baseline space-x-8">
          <a href="#services" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">
            Services
          </a>
          <a href="#portfolio" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">
            Portfolio
          </a>
          <a href="#about" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">
            About
          </a>
          <a href="#case-studies" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">
            Case Studies
          </a>
          <a href="#blog" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">
            Blog
          </a>
          <a href="#contact" className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-purple-700 hover:to-pink-600 transition-all">
            Get Started
          </a>
        </div>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button className="text-gray-700 hover:text-purple-600 focus:outline-none focus:text-purple-600">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>

    {/* Mobile Navigation Menu */}
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mt-2">
        <a href="#services" className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium">
          Services
        </a>
        <a href="#portfolio" className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium">
          Portfolio
        </a>
        <a href="#about" className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium">
          About
        </a>
        <a href="#case-studies" className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium">
          Case Studies
        </a>
        <a href="#blog" className="text-gray-700 hover:text-purple-600 block px-3 py-2 text-base font-medium">
          Blog
        </a>
        <a href="#contact" className="bg-gradient-to-r from-purple-600 to-pink-500 text-white block px-3 py-2 rounded-lg text-base font-medium mt-4">
          Get Started
        </a>
      </div>
    </div>
  </div>
</nav>
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 overflow-hidden">
  {/* Animated Background Elements */}
  <div className="absolute inset-0">
    <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-500/15 to-yellow-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-2xl animate-bounce"></div>
  </div>

  {/* Grid Pattern Overlay */}
  <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%236C5CE7" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>

  <div className="relative z-10 container mx-auto px-6 py-20 flex items-center min-h-screen">
    <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
      
      {/* Left Content */}
      <div className="space-y-8">
        {/* Brand Badge */}
        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full">
          <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mr-3 animate-pulse"></div>
          <span className="text-purple-300 text-sm font-medium">Creative Transformation Specialists</span>
        </div>

        {/* Main Headline */}
        <div className="space-y-4">
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              Catalyst
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Creative Studio
            </span>
          </h1>
          
          <div className="flex items-center space-x-4">
            <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
            <p className="text-xl text-purple-200 font-light">Igniting Brand Evolution</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
          We don't just create campaigns—we architect brand transformations that spark market disruption. 
          From viral social strategies to conversion-crushing creative, we're the catalyst your brand needs 
          to break through the noise and dominate your industry.
        </p>

        {/* Stats */}
        <div className="flex space-x-8 py-6">
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">300%</div>
            <div className="text-sm text-gray-400">Avg ROI Increase</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent">50M+</div>
            <div className="text-sm text-gray-400">Impressions Generated</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">24hr</div>
            <div className="text-sm text-gray-400">Campaign Turnaround</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
            <span className="relative z-10">Start Your Transformation</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-cyan-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button className="group px-8 py-4 border-2 border-purple-500/50 rounded-xl font-semibold text-purple-300 hover:text-white hover:border-purple-400 transition-all duration-300 hover:bg-purple-500/10 backdrop-blur-sm">
            <span className="flex items-center justify-center">
              View Our Creative Portfolio
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Right Visual Element */}
      <div className="relative">
        <div className="relative w-full h-96 lg:h-[500px]">
          {/* Creative Visualization */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-3xl backdrop-blur-sm border border-purple-500/30 overflow-hidden">
            
            {/* Floating Creative Elements */}
            <div className="absolute top-8 left-8 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl animate-float"></div>
            <div className="absolute top-20 right-12 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full animate-float delay-500"></div>
            <div className="absolute bottom-20 left-12 w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-3xl animate-float delay-1000"></div>
            <div className="absolute bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl animate-float delay-1500"></div>
            
            {/* Central Creative Hub */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-white/20 to-purple-500/20 rounded-full backdrop-blur-md border border-white/30 flex items-center justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-cyan-400 rounded-full animate-spin-slow flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
            </div>

            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 500">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6C5CE7" stopOpacity="0.6"/>
                  <stop offset="100%" stopColor="#00CEC9" stopOpacity="0.6"/>
                </linearGradient>
              </defs>
              <path d="M80 80 Q200 150 320 120" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse"/>
              <path d="M80 420 Q200 350 320 380" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse delay-500"/>
              <path d="M200 250 Q300 200 350 300" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-pulse delay-1000"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Bottom Scroll Indicator */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <div className="w-6 h-10 border-2 border-purple-400/50 rounded-full flex justify-center">
      <div className="w-1 h-3 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full mt-2 animate-pulse"></div>
    </div>
  </div>
</section>

<style jsx>{`
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(5deg); }
  }
  
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
  .animate-spin-slow {
    animation: spin-slow 20s linear infinite;
  }
`}</style>
      
      {/* Services Section */}
      <section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
        Catalyst Creative Studio Services
      </h2>
      <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
        Award-winning creative solutions that deliver proven ROI through strategic brand thinking and cutting-edge design trends
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Brand Strategy & Identity</h3>
        <p className="text-gray-600">
          Catalyst Creative Studio develops comprehensive brand strategies that position your business for market leadership through strategic thinking and award-winning creative execution.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Digital Marketing Campaigns</h3>
        <p className="text-gray-600">
          Our full-service creative team at Catalyst Creative Studio delivers data-driven digital campaigns that generate proven ROI across all marketing channels.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Creative Design & Content</h3>
        <p className="text-gray-600">
          Catalyst Creative Studio stays ahead of cutting-edge design trends to create compelling visual content that engages audiences and drives conversions.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance Analytics & Optimization</h3>
        <p className="text-gray-600">
          Track and optimize your marketing investments with Catalyst Creative Studio's comprehensive analytics solutions that ensure measurable results and continuous improvement.
        </p>
      </div>
    </div>

    <div className="text-center mt-12">
      <p className="text-lg text-gray-700 mb-6">
        Ready to accelerate your brand's growth with Catalyst Creative Studio?
      </p>
      <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
        Start Your Project
      </button>
    </div>
  </div>
</section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
        What Our Clients Say
      </h2>
      <p className="mt-4 text-lg text-gray-600">
        Trusted by leading brands to deliver exceptional marketing results
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Testimonial 1 */}
      <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center mb-6">
          <img
            src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80"
            alt="Sarah Chen"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="ml-4">
            <h4 className="text-lg font-semibold text-gray-900">Sarah Chen</h4>
            <p className="text-sm text-gray-600">Marketing Director, TechFlow Inc.</p>
          </div>
        </div>
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-700 leading-relaxed">
          "Catalyst Creative Studio transformed our brand identity and digital presence completely. Their strategic approach to our rebranding campaign resulted in a 150% increase in lead generation within just three months."
        </p>
      </div>

      {/* Testimonial 2 */}
      <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center mb-6">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80"
            alt="Marcus Rodriguez"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="ml-4">
            <h4 className="text-lg font-semibold text-gray-900">Marcus Rodriguez</h4>
            <p className="text-sm text-gray-600">CEO, GreenLeaf Organics</p>
          </div>
        </div>
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-700 leading-relaxed">
          "Working with Catalyst Creative Studio was a game-changer for our product launch. Their integrated marketing campaign across social media and content marketing drove our highest quarterly sales ever."
        </p>
      </div>

      {/* Testimonial 3 */}
      <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center mb-6">
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150&q=80"
            alt="Emily Thompson"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="ml-4">
            <h4 className="text-lg font-semibold text-gray-900">Emily Thompson</h4>
            <p className="text-sm text-gray-600">VP Marketing, FinanceFirst</p>
          </div>
        </div>
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-gray-700 leading-relaxed">
          "The team at Catalyst Creative Studio doesn't just execute campaigns—they become true partners in your success. Their data-driven approach helped us achieve a 200% ROI on our digital advertising spend."
        </p>
      </div>
    </div>
  </div>
</section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Company Info */}
      <div className="col-span-1 md:col-span-2">
        <h3 className="text-2xl font-bold text-orange-400 mb-4">Catalyst Creative Studio</h3>
        <p className="text-gray-300 mb-4 max-w-md">
          Igniting brands with innovative marketing solutions. We transform ideas into powerful campaigns that drive results and inspire action.
        </p>
        <div className="space-y-2 text-gray-300">
          <p className="flex items-center">
            <svg className="w-5 h-5 mr-3 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            123 Creative Blvd, Suite 400, New York, NY 10001
          </p>
          <p className="flex items-center">
            <svg className="w-5 h-5 mr-3 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            (555) 123-4567
          </p>
          <p className="flex items-center">
            <svg className="w-5 h-5 mr-3 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            hello@catalystcreative.com
          </p>
        </div>
      </div>

      {/* Services */}
      <div>
        <h4 className="text-lg font-semibold mb-4 text-orange-400">Services</h4>
        <ul className="space-y-2 text-gray-300">
          <li><a href="#" className="hover:text-orange-400 transition-colors">Brand Strategy</a></li>
          <li><a href="#" className="hover:text-orange-400 transition-colors">Digital Marketing</a></li>
          <li><a href="#" className="hover:text-orange-400 transition-colors">Creative Design</a></li>
          <li><a href="#" className="hover:text-orange-400 transition-colors">Content Creation</a></li>
          <li><a href="#" className="hover:text-orange-400 transition-colors">Social Media</a></li>
        </ul>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="text-lg font-semibold mb-4 text-orange-400">Company</h4>
        <ul className="space-y-2 text-gray-300">
          <li><a href="#" className="hover:text-orange-400 transition-colors">About Us</a></li>
          <li><a href="#" className="hover:text-orange-400 transition-colors">Our Work</a></li>
          <li><a href="#" className="hover:text-orange-400 transition-colors">Careers</a></li>
          <li><a href="#" className="hover:text-orange-400 transition-colors">Blog</a></li>
          <li><a href="#" className="hover:text-orange-400 transition-colors">Contact</a></li>
        </ul>
      </div>
    </div>

    {/* Social Media & Copyright */}
    <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
      <div className="flex space-x-6 mb-4 md:mb-0">
        <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
          </svg>
        </a>
        <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
          </svg>
        </a>
        <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
          </svg>
        </a>
        <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
      </div>
      <p className="text-gray-400 text-sm">
        © {new Date().getFullYear()} Catalyst Creative Studio. All rights reserved.
      </p>
    </div>
  </div>
</footer>
    </main>
  )
}