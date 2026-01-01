"use client";

import React, { useState } from "react";
import Image from "next/image";
import Hero from "../components/hero"
import Features from "../components/features"
import Popular from "../components/popularSection"
import TrendingTours from "../components/tourSection"
import MainFeatures from "../components/mainFeatures"
import Testimonials from "../components/testimonials"
import FAQ from "../components/faq"
import Newsletter from "../components/newsletter";
import Footer from "../components/footer"


export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <Features />
      <Popular />
      <TrendingTours />
      <MainFeatures />
      <Testimonials />
      <FAQ />
      <Newsletter />
      <Footer />
    </div>
  );
}
