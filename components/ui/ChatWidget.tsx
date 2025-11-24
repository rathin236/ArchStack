"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, Loader2, ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"
import ReactMarkdown from 'react-markdown'

type Message = {
  role: 'user' | 'assistant' | 'system'
  content: string
}

export function ChatWidget() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hello! I am the ArchStack AI assistant. Ask me anything about our data consulting services.' }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showLeadForm, setShowLeadForm] = useState(false)
  const [leadData, setLeadData] = useState({ name: '', email: '', phone: '' })
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(leadData),
      })
      
      setMessages(prev => [...prev, { 
        role: 'system', 
        content: `Thank you ${leadData.name}! I've notified Rathin. He'll get back to you at ${leadData.email} soon.` 
      }])
      setShowLeadForm(false)
      setLeadData({ name: '', email: '', phone: '' })
    } catch (error) {
      console.error('Failed to submit lead:', error)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setInput('')
    setIsLoading(true)

    // Auto-expand if not already
    if (!isExpanded) setIsExpanded(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      })

      if (!response.ok) throw new Error('Failed to fetch response')

      const data = await response.json()
      
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply }])
      
      const interestedKeywords = ['interested', 'want to', 'would like', 'need help', 'consultation', 'get started', 'contact', 'talk to', 'speak with']
      if (interestedKeywords.some(keyword => userMessage.toLowerCase().includes(keyword))) {
        setTimeout(() => {
          setMessages(prev => [...prev, { 
            role: 'system', 
            content: "I'd love to connect you with Rathin! Could you share your contact details?" 
          }])
          setShowLeadForm(true)
        }, 1000)
      }
    } catch (error) {
      console.error('Error:', error)
      setMessages(prev => [...prev, { role: 'assistant', content: "I'm sorry, I'm having trouble connecting right now. Please try again later." }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed top-20 left-0 right-0 z-40 w-full">
      {/* Compact Chat Bar */}
      <motion.div 
        className="bg-white border-b border-border shadow-sm"
        initial={false}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-3">
            <form onSubmit={handleSubmit} className="flex-1 flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onFocus={() => setIsExpanded(true)}
                placeholder="Ask me anything about ArchStack's services..."
                className="flex-1 bg-secondary/30 border border-input rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-muted-foreground/60"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-primary text-primary-foreground p-2 rounded-full hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-muted-foreground hover:text-primary transition-colors p-1"
            >
              {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Expandable Messages Panel */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden border-t border-border"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 max-h-[60vh] overflow-y-auto bg-secondary/5">
                <div className="space-y-4">
                  {messages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={cn(
                        "flex",
                        msg.role === 'user' ? "justify-end" : "justify-start"
                      )}
                    >
                      <div
                        className={cn(
                          "max-w-[75%] rounded-xl px-4 py-2.5 shadow-sm",
                          msg.role === 'user'
                            ? "bg-primary text-primary-foreground"
                            : msg.role === 'system'
                            ? "bg-primary/10 text-foreground border border-primary/20"
                            : "bg-white text-foreground border border-border/50"
                        )}
                      >
                        {msg.role === 'assistant' ? (
                          <div className="prose prose-sm max-w-none [&>*]:text-foreground [&>*]:leading-relaxed">
                            <ReactMarkdown
                              components={{
                                p: ({node, ...props}) => <p className="mb-2 last:mb-0" {...props} />,
                                ul: ({node, ...props}) => <ul className="list-disc ml-4 mb-2 space-y-1" {...props} />,
                                ol: ({node, ...props}) => <ol className="list-decimal ml-4 mb-2 space-y-1" {...props} />,
                                li: ({node, ...props}) => <li className="mb-0.5" {...props} />,
                                strong: ({node, ...props}) => <strong className="font-semibold" {...props} />,
                                em: ({node, ...props}) => <em className="italic" {...props} />,
                                code: ({node, ...props}) => <code className="bg-secondary/50 px-1.5 py-0.5 rounded text-xs font-mono" {...props} />,
                              }}
                            >
                              {msg.content}
                            </ReactMarkdown>
                          </div>
                        ) : (
                          <div className="text-sm leading-relaxed">{msg.content}</div>
                        )}
                      </div>
                    </div>
                  ))}
                  
                  {/* Lead Form */}
                  {showLeadForm && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="max-w-md bg-white border border-primary/30 rounded-xl p-4 shadow-md"
                    >
                      <h3 className="font-semibold text-foreground mb-3 text-sm">Share Your Details</h3>
                      <form onSubmit={handleLeadSubmit} className="space-y-3">
                        <input
                          type="text"
                          required
                          value={leadData.name}
                          onChange={(e) => setLeadData(prev => ({ ...prev, name: e.target.value }))}
                          placeholder="Your Name"
                          className="w-full px-3 py-2 text-sm rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                        <input
                          type="email"
                          required
                          value={leadData.email}
                          onChange={(e) => setLeadData(prev => ({ ...prev, email: e.target.value }))}
                          placeholder="Your Email"
                          className="w-full px-3 py-2 text-sm rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                        <input
                          type="tel"
                          value={leadData.phone}
                          onChange={(e) => setLeadData(prev => ({ ...prev, phone: e.target.value }))}
                          placeholder="Phone (optional)"
                          className="w-full px-3 py-2 text-sm rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                        <button
                          type="submit"
                          className="w-full bg-primary text-primary-foreground px-3 py-2 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors shadow-sm"
                        >
                          Submit
                        </button>
                      </form>
                    </motion.div>
                  )}
                  
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-white text-foreground rounded-xl px-4 py-2.5 text-sm flex items-center gap-2 shadow-sm border border-border/50">
                        <Loader2 className="h-4 w-4 animate-spin text-primary" />
                        Thinking...
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
