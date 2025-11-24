"use client"

import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Failed to submit form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-card border border-border rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 text-white" style={{ backgroundColor: '#776644' }}>
              <h2 className="text-3xl font-bold mb-6">Let's Talk Data</h2>
              <p className="text-white/90 mb-8">
                Ready to transform your business with data? Reach out to us for a consultation.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 mt-1 opacity-90" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="opacity-90">rathin236@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 mt-1 opacity-90" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="opacity-90">(519) 729-9640</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 mt-1 opacity-90" />
                  <div>
                    <h3 className="font-semibold">Office</h3>
                    <p className="opacity-90">201 Tartan Street, Saint John, NB</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8 md:p-12 bg-background">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="h-12 w-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#776644' }}>
                    <Send className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Message Sent!</h3>
                  <p className="text-muted-foreground">We'll get back to you as soon as possible.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="hover:underline text-sm"
                    style={{ color: '#776644' }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-[#776644]/50"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-[#776644]/50"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-[#776644]/50"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center space-x-2 text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition-all disabled:opacity-70"
                    style={{ backgroundColor: '#776644' }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
