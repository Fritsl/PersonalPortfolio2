import { PersonData } from "@/data/profile";
import TableOfContents from "./TableOfContents";
import ContentSection from "./ContentSection";
import WikiSidebar from "./WikiSidebar";
import References from "./References";
import EmailLink from "./EmailLink";
import fritsImage from "@assets/FritsLyneborg_workshop.jpg";
import fritsPortrait from "@assets/PXL_20240528_100052148.PORTRAIT.jpg";
import { FaLinkedin } from "react-icons/fa";

interface WikiPageProps {
  person: PersonData;
}

export default function WikiPage({ person }: WikiPageProps) {
  // Using a fixed date rather than the current date to avoid the page looking constantly updated
  const lastEditedDate = "April 5, 2025";

  return (
    <article className="bg-white text-wiki-heading font-wiki-sans" itemScope itemType="https://schema.org/Person">
      {/* Schema.org metadata */}
      <meta itemProp="name" content={person.name} />
      <meta itemProp="alternateName" content="Frits Lyneborg" />
      <meta itemProp="description" content={person.introduction.substring(0, 200) + '...'} />
      <meta itemProp="jobTitle" content={person.details.fields} />
      <meta itemProp="nationality" content={person.details.nationality} />
      <meta itemProp="knowsAbout" content={person.details.knownFor} />
      {person.details.birthYear && <meta itemProp="birthDate" content={person.details.birthYear} />}
      <meta itemProp="url" content={window.location.href} />
      <link itemProp="sameAs" href="https://www.linkedin.com/in/frits-lyneborg/" />
      
      {/* Additional structured data for skills and achievements */}
      <meta itemProp="hasOccupation" content={person.details.fields.split(',').join(', ')} />
      <meta itemProp="alumniOf" content="IT University of Copenhagen" />
      
      {/* Header */}
      <header className="border-b border-wiki-border pb-2 max-w-6xl mx-auto px-2 sm:px-4 lg:px-6 mt-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-wiki-serif" id="main-heading">{person.name}</h1>
          <div className="flex items-center gap-3">
            <EmailLink showText={false} hideTextOnMobile={true} />
            <a 
              href="https://www.linkedin.com/in/frits-lyneborg/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1 text-wiki-blue hover:text-blue-700 transition-colors"
              aria-label="View Frits Lyneborg's LinkedIn profile"
            >
              <FaLinkedin className="text-xl" />
              <span className="hidden sm:inline text-sm">LinkedIn Profile</span>
            </a>
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-1">Throughout my career, I've consistently identified transformative technologies before mainstream adoption—from open source web solutions in 2003, anti-spam systems in 2005, and robotics communities in 2008 to autonomous drones in 2010 and early LLM creative implementations in 2023. Today, AI and automation are the most disruptive technologies in the market, and they have my full focus.</p>
      </header>

      {/* Main content with sidebar layout */}
      <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex flex-col md:flex-row">
          {/* Main content */}
          <main className="flex-1 md:order-2 overflow-x-auto">
            {/* Introduction Section */}
            <section className="py-2" aria-labelledby="introduction-section">
              <h2 id="introduction-section" className="sr-only">Introduction</h2>
              <p className="text-base leading-relaxed" itemProp="description">
                <strong itemProp="givenName">{person.name}</strong> {person.introduction}
              </p>
            </section>

            {/* Mobile image and TOC side by side on small screens */}
            <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-3 my-3">
              <figure className="sm:order-2" itemScope itemType="https://schema.org/ImageObject">
                <div className="border border-wiki-border">
                  <img 
                    src={fritsImage} 
                    alt="Frits Lyneborg giving a presentation" 
                    className="w-full"
                    loading="eager"
                    itemProp="contentUrl"
                  />
                </div>
                <figcaption className="text-xs mt-1 text-center text-gray-600" itemProp="caption">
                  Lyneborg presenting at a technology workshop
                </figcaption>
                <meta itemProp="name" content="Frits Lyneborg at a technology workshop" />
                <meta itemProp="description" content="Frits Lyneborg presenting at a technology workshop about innovation and robotics" />
              </figure>
              
              {/* Table of Contents (mobile) */}
              <section className="bg-wiki-light-gray border border-wiki-border rounded p-2 sm:order-1 no-print z-10 text-sm">
                <strong className="block mb-1">Contents</strong>
                <TableOfContents sections={person.sections} />
              </section>
            </div>

            {/* Content Sections */}
            {person.sections.map((section) => (
              <ContentSection key={section.id} section={section} />
            ))}

            {/* References */}
            <References references={person.references} />
          </main>

          {/* Sidebar with TOC - visible only on medium and larger screens */}
          <WikiSidebar person={person} />
        </div>
      </div>

      {/* Recent portrait */}
      <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-6 mt-4 mb-4 border-t border-wiki-border pt-4">
        <figure className="flex flex-col md:flex-row items-center gap-6" itemScope itemType="https://schema.org/ImageObject">
          <div className="border border-wiki-border bg-wiki-light-gray md:w-1/3" style={{ maxWidth: '350px' }}>
            <img 
              src={fritsPortrait} 
              alt="Recent portrait of Frits Lyneborg (2024)" 
              className="w-full"
              loading="lazy"
              itemProp="contentUrl"
            />
          </div>
          <figcaption className="text-sm md:w-2/3 text-center md:text-left text-gray-600" itemProp="caption">
            <p className="mb-1">Recent portrait of Frits Lyneborg (2024)</p>
            <p className="text-xs italic">Frits continues to lead innovative technology projects and advise businesses on implementation of disruptive technologies, with a focus on automation and AI.</p>
          </figcaption>
          <meta itemProp="name" content="Frits Lyneborg portrait 2024" />
          <meta itemProp="description" content="Recent professional portrait photograph of Frits Lyneborg taken in 2024" />
        </figure>
      </div>

      {/* Footer */}
      <footer className="mt-4 border-t border-wiki-border py-2 text-xs text-gray-600 max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-2 md:mb-0">
            This page was last edited on {lastEditedDate}
          </div>
          <div className="flex items-center gap-4">
            <EmailLink />
            <a 
              href="https://www.linkedin.com/in/frits-lyneborg/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1 text-wiki-blue hover:text-blue-700 transition-colors"
              aria-label="View Frits Lyneborg's LinkedIn profile"
            >
              <FaLinkedin className="text-sm" />
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </div>
      </footer>
    </article>
  );
}
