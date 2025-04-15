import React from 'react';
import { Linkedin, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Enock Omondi</h3>
            <p className="text-gray-400">Creative & Tech Professional</p>
            <p className="text-gray-400">Nairobi, Kenya</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-2">
              <a href="tel:+254726436676" className="flex items-center text-gray-400 hover:text-white">
                <Phone size={18} className="mr-2" />
                +254 726 436 676
              </a>
              <a href="mailto:enockomondike@gmail.com" className="flex items-center text-gray-400 hover:text-white">
                <Mail size={18} className="mr-2" />
                enockomondike@gmail.com
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Enock Omondi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;