import { ArrowRight } from 'lucide-react';
import { personalInfo } from '../../data/personalInfo';
import Container from '../ui/Container';
import Quote from '../ui/Quote';

export default function Hero() {
  return (
    <section id="home" className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I'm {personalInfo.name}
            </h1>
            <h2 className="text-2xl sm:text-3xl text-blue-100">
              {personalInfo.role}
            </h2>
            <p className="text-lg text-blue-50 max-w-lg">
              {personalInfo.bio}
            </p>
            <Quote 
              text="Programming is the closest thing we have to a superpower."
              author="Drew Houston"
            />
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg 
                         font-semibold hover:bg-blue-50 transition-colors"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 
                         rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Portfolio
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-full overflow-hidden border-4 border-white shadow-xl max-w-md mx-auto">
              <img
                src={personalInfo.photo}
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}