import React, { useState } from 'react';
import Toast, { ToastProps } from '../components/Toast';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [toast, setToast] = useState<Pick<ToastProps, 'message' | 'type'> | null>(null);

  const validateForm = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};
    let isValid = true;

    if (!formState.name.trim()) {
      newErrors.name = 'Identity Protocol requires a name.';
      isValid = false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formState.email || !emailRegex.test(formState.email)) {
      newErrors.email = 'Invalid Routing Address detected.';
      isValid = false;
    }
    if (formState.message.trim().length < 10) {
      newErrors.message = 'Inquiry Scope too brief. Minimum 10 chars.';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setToast(null);

    if (!validateForm()) {
      setToast({ message: 'Input Validation Failed. Correction Required.', type: 'error' });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulating a real AJAX POST request to a contact endpoint
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000); // 8s timeout

      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          ...formState,
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}`);
      }
      
      // Simulate network latency for cinematic effect
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitted(true);
      setToast({ message: 'Uplink Established. Message Transmitted.', type: 'success' });
      setErrors({});
    } catch (err: any) {
      let errorMessage = 'Transmission disrupted. Check connection.';
      if (err.name === 'AbortError') {
        errorMessage = 'Connection timeout. Uplink unstable.';
      } else if (err.message) {
        errorMessage = err.message;
      }
      setToast({ message: errorMessage, type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 sm:pt-48 pb-32 bg-slate-950 min-h-screen relative">
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <div className="animate-reveal">
            <div className="inline-flex items-center space-x-2 bg-rose-500/10 px-4 py-1.5 rounded-full border border-rose-500/20 mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shadow-[0_0_10px_#e11d48] animate-pulse"></span>
              <span className="text-rose-500 text-[9px] font-black uppercase tracking-[0.3em]">Communication Uplink</span>
            </div>
            
            <h1 className="text-6xl sm:text-7xl md:text-[9rem] font-black text-white mb-12 leading-[0.82] tracking-tighter">
              Let's <br/> <span className="text-gradient">Architect</span> <br/> Growth.
            </h1>
            
            <p className="text-xl sm:text-2xl text-slate-400 mb-20 leading-relaxed font-medium max-w-xl">
              I am currently accepting inquiries for <span className="text-white">enterprise-grade automation</span>, data ecosystem design, and GTM engineering projects.
            </p>
            
            <div className="space-y-6">
              {[
                { label: 'Primary Email', val: 'ibolajie@gmail.com', icon: 'M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.58 6.062a2.25 2.25 0 01-2.316 0L2.25 6.75', href: 'mailto:ibolajie@gmail.com', color: 'orange' },
                { label: 'LinkedIn Professional', val: 'in/ibolajie', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z', href: 'https://www.linkedin.com/in/ibolajie/', color: 'rose' }
              ].map((link, idx) => (
                <a 
                  key={idx} 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-6 p-6 sm:p-8 bg-white/[0.02] border border-white/5 rounded-[2.5rem] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500 active:scale-[0.98]"
                >
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform ${link.color === 'orange' ? 'accent-gradient' : 'bg-[#0077b5]'}`}>
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill={link.label.includes('LinkedIn') ? 'currentColor' : 'none'} stroke={link.label.includes('Email') ? 'currentColor' : 'none'} viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d={link.icon}></path>
                    </svg>
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[9px] font-black text-slate-600 uppercase tracking-widest mb-1">{link.label}</p>
                    <p className="text-lg sm:text-xl font-black text-white group-hover:text-gradient transition-all truncate">{link.val}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="animate-reveal [animation-delay:200ms]">
            <div className="bg-slate-900 border border-white/5 p-8 sm:p-12 lg:p-20 rounded-[3rem] sm:rounded-[5rem] shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 accent-gradient opacity-50"></div>
               
               {submitted ? (
                 <div className="text-center py-24 relative z-10 animate-reveal">
                   <div className="w-24 h-24 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-10 border border-emerald-500/20 shadow-2xl animate-breathe">
                     <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                   </div>
                   <h3 className="text-4xl sm:text-5xl font-black text-white mb-6 tracking-tight">Transmission Successful.</h3>
                   <p className="text-slate-400 text-lg sm:text-xl font-medium mb-12">I have received your inquiry. A response will be generated within 24 hours.</p>
                   <button 
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: '', email: '', message: '' });
                      setToast(null);
                      setErrors({});
                    }}
                    className="text-orange-500 text-[10px] font-black uppercase tracking-[0.4em] hover:text-white transition-colors"
                   >
                     Reset Module _
                   </button>
                 </div>
               ) : (
                 <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-12 relative z-10">
                   
                   <div className="space-y-4">
                     <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] ml-4">Full Identity</label>
                     <input 
                       type="text"
                       disabled={isSubmitting}
                       placeholder="e.g. Johnathan Architect"
                       className={`w-full px-8 sm:px-10 py-6 sm:py-8 bg-black/40 border rounded-[2.5rem] focus:outline-none focus:ring-2 transition-all text-white font-bold placeholder:text-slate-700 disabled:opacity-50 disabled:cursor-not-allowed ${
                         errors.name 
                           ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20' 
                           : 'border-white/5 focus:border-orange-500 focus:ring-orange-500/50'
                       }`}
                       value={formState.name}
                       onChange={(e) => setFormState({...formState, name: e.target.value})}
                     />
                     {errors.name && (
                       <p className="text-red-500 text-[10px] font-black uppercase tracking-widest ml-4 animate-reveal">{errors.name}</p>
                     )}
                   </div>
                   
                   <div className="space-y-4">
                     <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] ml-4">Routing Email</label>
                     <input 
                       type="email"
                       disabled={isSubmitting}
                       placeholder="your@nexus.com"
                       className={`w-full px-8 sm:px-10 py-6 sm:py-8 bg-black/40 border rounded-[2.5rem] focus:outline-none focus:ring-2 transition-all text-white font-bold placeholder:text-slate-700 disabled:opacity-50 disabled:cursor-not-allowed ${
                         errors.email 
                           ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20' 
                           : 'border-white/5 focus:border-orange-500 focus:ring-orange-500/50'
                       }`}
                       value={formState.email}
                       onChange={(e) => setFormState({...formState, email: e.target.value})}
                     />
                     {errors.email && (
                       <p className="text-red-500 text-[10px] font-black uppercase tracking-widest ml-4 animate-reveal">{errors.email}</p>
                     )}
                   </div>

                   <div className="space-y-4">
                     <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] ml-4">Inquiry Scope</label>
                     <textarea 
                       rows={4}
                       disabled={isSubmitting}
                       placeholder="Describe the bottleneck we are solving..."
                       className={`w-full px-8 sm:px-10 py-6 sm:py-8 bg-black/40 border rounded-[3rem] focus:outline-none focus:ring-2 transition-all text-white font-bold placeholder:text-slate-700 resize-none disabled:opacity-50 disabled:cursor-not-allowed ${
                         errors.message 
                           ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20' 
                           : 'border-white/5 focus:border-orange-500 focus:ring-orange-500/50'
                       }`}
                       value={formState.message}
                       onChange={(e) => setFormState({...formState, message: e.target.value})}
                     ></textarea>
                     {errors.message && (
                       <p className="text-red-500 text-[10px] font-black uppercase tracking-widest ml-4 animate-reveal">{errors.message}</p>
                     )}
                   </div>

                   <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-8 sm:py-10 accent-gradient text-white rounded-[3rem] font-black text-xl sm:text-2xl uppercase tracking-[0.3em] shadow-2xl hover:scale-[1.02] active:scale-95 transition-all duration-500 disabled:opacity-50 disabled:scale-100 flex items-center justify-center space-x-4 cursor-pointer disabled:cursor-not-allowed"
                   >
                     {isSubmitting ? (
                       <>
                         <div className="w-6 h-6 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
                         <span>Synchronizing...</span>
                       </>
                     ) : (
                       <span>Initiate Contact</span>
                     )}
                   </button>
                 </form>
               )}
               
               {/* Ambient Background Visuals */}
               <div className="absolute -top-20 -right-20 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px]"></div>
               <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-rose-500/5 rounded-full blur-[100px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;