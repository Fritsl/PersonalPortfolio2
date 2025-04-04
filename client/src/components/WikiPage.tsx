import { PersonData } from "@/data/profile";
import TableOfContents from "./TableOfContents";
import ContentSection from "./ContentSection";
import WikiSidebar from "./WikiSidebar";
import References from "./References";
import fritsImage from "@assets/FritsLyneborg_workshop.jpg";

interface WikiPageProps {
  person: PersonData;
}

export default function WikiPage({ person }: WikiPageProps) {
  const today = new Date();
  const lastEditedDate = today.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="bg-white text-wiki-heading font-wiki-sans">
      {/* Header */}
      <header className="border-b border-wiki-border pb-2 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <h1 className="text-3xl md:text-4xl font-wiki-serif">{person.name}</h1>
        <div className="text-sm text-gray-600 mt-1">From Wikipedia, the free encyclopedia</div>
      </header>

      {/* Main content with sidebar layout */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row">
          {/* Main content */}
          <main className="flex-1 md:order-2">
            {/* Introduction Section */}
            <section className="py-4">
              <p className="text-base leading-relaxed">
                <strong>{person.name}</strong> {person.introduction}
              </p>
            </section>

            {/* Mobile image - visible only on small screens */}
            <div className="md:hidden my-4">
              <figure className="mb-2">
                <img 
                  src={fritsImage} 
                  alt="Frits Lyneborg giving a presentation" 
                  className="w-full border border-wiki-border"
                />
                <figcaption className="text-xs mt-1 text-center text-gray-600">
                  Lyneborg presenting at a technology workshop
                </figcaption>
              </figure>
            </div>

            {/* Table of Contents (mobile) - visible only on small screens */}
            <section className="md:hidden bg-wiki-light-gray p-4 border border-wiki-border rounded my-4 no-print">
              <TableOfContents sections={person.sections} />
            </section>

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

      {/* Footer */}
      <footer className="mt-8 border-t border-wiki-border py-4 text-sm text-gray-600 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            This page was last edited on {lastEditedDate}
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-wiki-blue hover:underline">View history</a>
            <a href="#" className="text-wiki-blue hover:underline">Sources</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
