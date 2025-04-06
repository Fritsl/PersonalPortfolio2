import React, { useState } from "react";
import { Section } from "@/data/profile";
import ImagePreviewModal from "./ImagePreviewModal";
import megaRecordsLogo from "../assets/mega_records_logo.jpg";
import humanoidRobotImage from "../assets/humanoid_robot_expo.jpg";
import fritsIdahoImage from "../assets/frits_idaho_2014.jpg";
import longboardImage from "../assets/images/longboard_new.jpg";
import parakartImage from "../assets/images/parakart_new.png";
import ceramicsWorksImage from "../assets/images/ceramics_works.png";
import forestPhotoImage from "../assets/images/forest_photo.jpg";
import talesFromVoidImage from "../assets/images/tales_from_void.svg";
import arrangerKingPackshot from "../assets/images/Packshot.png";
import aiArtImage1 from "../assets/images/ai_art_1.png";
import aiArtImage2 from "../assets/images/ai_art_2.png";
import aiArtImage3 from "../assets/images/ai_art_3.png";
import aiArtImage4 from "../assets/images/ai_art_4.png";
import blenderLogo from "../assets/images/blender_logo.png";
import royalAcademyLogo from "../assets/images/royal_academy_logo.png";
import bareFeetGameImage from "../assets/images/bare_feet_game.png";
import unityLogo from "../assets/images/unity_logo.png";
import unrealLogo from "../assets/images/unreal_logo.png";
import drLogo from "../assets/images/dr_logo.png";
import letsMakeRobotsCollage from "../assets/images/letsmakerobots_collage.png";
import googleTrendsImage from "../assets/images/howtomakearobot.jpg";
import republicaImage from "../assets/images/frits_republica_digital_chef.png";
import venstreLogo from "../assets/images/venstre_logo.png";
import berlingskelogo from "../assets/images/berlingske_logo.jpg";
import thieleLogo from "../assets/images/thiele_logo.png";
import n8nLogo from "../assets/images/n8n_logo.png";
import optimeringSloganImage from "../assets/images/optimering_er_intet.png";

interface ContentSectionProps {
  section: Section;
}

export default function ContentSection({ section }: ContentSectionProps) {
  // State for image preview modal
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({
    src: '',
    alt: '',
    title: '',
    caption: '',
    source: ''
  });

  const openImageModal = (image: typeof selectedImage) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  // Special treatment for sections with additional references
  const isDroneSection = section.id === "drone-innovation";
  const isPatentSection = section.id === "patents-inventions";
  const isRoboticsSection = section.id === "robotics-community-education";
  const isMusicSection = section.id === "music-industry";
  const is3DPrintingSection = section.id === "3d-printing-consulting";
  const isMakeMagazineSection = section.id === "make-magazine-projects";
  const isLeisureSection = section.id === "leisure-activities";
  const isGameDevSection = section.id === "game-development";
  const isAISection = section.id === "ai-innovation";
  const isTeachingSection = section.id === "teaching-experience";
  const isWebEntrepreneurshipSection = section.id === "web-entrepreneurship";
  const isITLeadershipSection = section.id === "it-leadership";
  
  return (
    <React.Fragment>
      <section 
        id={section.id} 
        className="py-2 border-t border-wiki-border overflow-hidden"
        aria-labelledby={`heading-${section.id}`}
        itemScope 
        itemType="https://schema.org/CreativeWork"
      >
        <meta itemProp="about" content={`${section.title} achievements of Frits Lyneborg`} />
        <h2 id={`heading-${section.id}`} className="text-xl font-wiki-serif mb-2" itemProp="name">{section.title}</h2>
        
        {section.achievements.map((achievement, index) => (
          <div 
            key={index} 
            className="mb-4 overflow-hidden" 
            itemScope 
            itemType="https://schema.org/Thing"
            itemProp="hasPart"
          >
            <meta itemProp="identifier" content={`achievement-${section.id}-${index}`} />
            <meta itemProp="description" content={achievement.description} />
            <h3 
              id={`achievement-${section.id}-${index}`} 
              className="text-lg font-wiki-serif mb-1" 
              itemProp="name"
            >
              {achievement.title}
            </h3>

            <p className="text-base leading-relaxed">
              {achievement.description}
            </p>
          </div>
        ))}
      </section>
      
      <ImagePreviewModal 
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        image={selectedImage}
      />
    </React.Fragment>
  );
}