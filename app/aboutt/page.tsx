"use client";
import HeroSection from '@/components/HeroSection'
import ContactPage from '@/components/miniContact'
import MissionVisionSection from '@/components/ourMission'
import AboutPage from '@/components/ourStory'
import OurClients from '@/components/sticker';
import OurTeam from '@/components/team'
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
const About = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div>
      <HeroSection />
      <AboutPage />
      <OurClients />
      <OurTeam />
      
    </div>

  )
}

export default About