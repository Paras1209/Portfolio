import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail as MailIcon, Linkedin as LinkedinIcon, Github as GithubIcon, Send as SendIcon } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init('NC6y4xC4L1PhNDUIz');
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const templateParams = {
        to_name: 'Paras', // Your name
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        reply_to: formData.email, // This ensures you can reply to the sender
      };

      await emailjs.send(
        'service_sn70fll',
        'template_0erj89d',
        templateParams,
        'NC6y4xC4L1PhNDUIz'
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-400">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <MailIcon className="w-6 h-6 text-cyan-400" />
              <a href="mailto:kanojiaparas582@gmail.com" className="text-gray-300 hover:text-cyan-400 transition-colors">
                kanojiaparas582@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <LinkedinIcon className="w-6 h-6 text-cyan-400" />
              <a 
                href="https://www.linkedin.com/in/dtu-paras-kanojia/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                LinkedIn Profile
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <GithubIcon className="w-6 h-6 text-cyan-400" />
              <a 
                href="https://github.com/Paras1209" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                GitHub Profile
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-800 p-8 rounded-xl shadow-xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400"
                placeholder="Your message..."
              />
            </div>
            
            <div className="space-y-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                {!isSubmitting && <SendIcon className="w-5 h-5" />}
              </motion.button>
              
              {submitStatus === 'success' && (
                <p className="text-green-400 text-center">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-400 text-center">Failed to send message. Please try again.</p>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};