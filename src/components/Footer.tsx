import resumFile from "../assets/Chaaivisva_Resume.pdf";

export const Footer = () => {
    return (
      <footer className="bg-white text-black py-6 border-t-2  mt-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
          
          {/* Footer Title */}
          <h2 className="text-2xl font-bold">ChaaiNotes</h2>
  
          {/* Social Links */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://www.linkedin.com/in/chaai-visva-9527a7253/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="w-6 h-6" />
            </a>
            <a href="https://github.com/Chaaivisva" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-6 h-6" />
            </a>
          </div>
  
          {/* Resume Download Button */}
          <a href={resumFile} download className="mt-4 md:mt-0 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
            Download Resume
          </a>
  
        </div>
      </footer>
    );
  };
  