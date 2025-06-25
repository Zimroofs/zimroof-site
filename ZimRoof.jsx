// ZimRoof React Website
// This is a simple, mobile-friendly roofing website built in React with TailwindCSS and interactivity.
// Hosting-ready and downloadable as a ZIP.

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PhoneCall, MessageSquareText, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function ZimRoof() {
  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-700">ZimRoof</h1>
        <nav className="space-x-4 text-sm">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-[url('/roofing-hero.jpg')] bg-cover bg-center text-white py-32 px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Strong Roofs, Bright Homes</h2>
        <p className="text-lg mb-6">Supplying 0.4mm IBR Sheets in Any Colour — Fast, Affordable & Reliable.</p>
        <div className="space-x-4">
          <Button className="bg-green-600">Call Now</Button>
          <Button variant="outline" className="text-white border-white">Get Free Quote</Button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-gray-100 text-center" id="about">
        <h3 className="text-2xl font-semibold mb-8">Why Choose ZimRoof?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          <Card>
            <CardContent className="p-6">
              <h4 className="font-bold mb-2">📦 High Stock</h4>
              <p>We’re always ready to supply. No delays.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h4 className="font-bold mb-2">⏱️ Fast Delivery</h4>
              <p>Roofing sheets delivered within 24hrs.*</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h4 className="font-bold mb-2">🎨 Custom Colours</h4>
              <p>Pick the perfect colour for your home or project.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-12" id="products">
        <h3 className="text-2xl font-semibold text-center mb-8">Our Products</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          {["0.4mm IBR Sheets", "Roof Nails & Screws", "Gutter Systems"].map((product, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h4 className="font-bold mb-2">{product}</h4>
                <Button className="bg-blue-600">Request Price</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 bg-gray-100" id="gallery">
        <h3 className="text-2xl font-semibold text-center mb-8">Our Work</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
          {[1, 2, 3].map((num) => (
            <img
              key={num}
              src={`/gallery-${num}.jpg`}
              alt={`Gallery ${num}`}
              className="rounded-lg shadow"
            />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 text-center" id="contact">
        <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>
        <p className="mb-6">Let's discuss your roofing needs or send you a free quote.</p>
        <div className="flex flex-col items-center gap-4">
          <Button className="bg-green-600 flex items-center gap-2"><PhoneCall size={16}/> Call Us</Button>
          <Button className="bg-blue-600 flex items-center gap-2"><MessageSquareText size={16}/> WhatsApp Us</Button>
          <Button className="bg-gray-800 flex items-center gap-2"><MapPin size={16}/> View Location</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white text-center p-4">
        <p>ZimRoof © {new Date().getFullYear()} | Built for Zimbabwe</p>
      </footer>
    </div>
  );
}