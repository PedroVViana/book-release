import React from 'react';
import { Icon } from '@iconify/react';
import instagramIcon from '@iconify-icons/fa-brands/instagram';
import twitterIcon from '@iconify-icons/fa-brands/twitter';
import youtubeIcon from '@iconify-icons/fa-brands/youtube';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-textMain py-8">
      <div className="container mx-auto text-center">
        <p className="text-lg">&copy; 2024 Nome do Livro. Todos os direitos reservados.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-textMain hover:text-pink-500 transition"
          >
            <Icon icon={instagramIcon} className="w-6 h-6" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-textMain hover:text-blue-500 transition"
          >
            <Icon icon={twitterIcon} className="w-6 h-6" />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-textMain hover:text-red-600 transition"
          >
            <Icon icon={youtubeIcon} className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
