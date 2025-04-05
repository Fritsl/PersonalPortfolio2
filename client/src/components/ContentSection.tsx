import { Section } from "@/data/profile";

interface ContentSectionProps {
  section: Section;
}

export default function ContentSection({ section }: ContentSectionProps) {
  // Special treatment for sections with additional references
  const isDroneSection = section.id === "drone-innovation";
  const isPatentSection = section.id === "patents-inventions";
  
  return (
    <section id={section.id} className="py-4 border-t border-wiki-border">
      <h2 className="text-2xl font-wiki-serif mb-4">{section.title}</h2>
      
      {section.achievements.map((achievement, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xl font-wiki-serif mb-2">{achievement.title}</h3>
          <p className="text-base leading-relaxed">
            {achievement.description}
          </p>
          
          {/* Special video reference for the drone section */}
          {isDroneSection && (
            <div className="mt-3">
              <p className="text-sm italic">
                <a 
                  href="https://youtu.be/YWhO2vP2n9U?si=TtUGR--IVRuXJ4N-" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-wiki-blue wiki-external inline-flex items-center"
                >
                  Video documentation of autonomous drone demonstration (2011)
                </a>
              </p>
            </div>
          )}
          
          {/* Special patent reference for the patents section */}
          {isPatentSection && (
            <div className="mt-3">
              <p className="text-sm italic">
                <a 
                  href="https://patents.google.com/patent/WO2006051434A1/en" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-wiki-blue wiki-external inline-flex items-center"
                >
                  Patent WO2006051434A1: Method for Preventing Reception of Unwanted Electronic Messages
                </a>
              </p>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
