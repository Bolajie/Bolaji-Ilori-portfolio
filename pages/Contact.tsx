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
    if (!formState.name.trim()) { newErrors.name = 'Name required.'; isValid = false; }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formState.email || !emailRegex.test(formState.email)) { newErrors.email = 'Valid email required.'; isValid = false; }
    if (formState.message.trim().length < 10) { newErrors.message = 'Message too short — 10 chars minimum.'; isValid = false; }
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setToast(null);
    if (!validateForm()) { setToast({ message: 'Please fix the errors below.', type: 'error' }); return; }
    setIsSubmitting(true);
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000);
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({ ...formState, userId: 1 }),
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
        signal: controller.signal,
      });
      clearTimeout(timeoutId);
      if (!response.ok) throw new Error(`Server responded with ${response.status}`);
      await new Promise(resolve => setTimeout(resolve, 1200));
      setSubmitted(true);
      setToast({ message: 'Message sent successfully.', type: 'success' });
      setErrors({});
    } catch (err: any) {
      const msg = err.name === 'AbortError' ? 'Connection timeout. Try again.' : (err.message || 'Transmission failed.');
      setToast({ message: msg, type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 sm:pt-48 pb-32 bg-brand-deep min-h-screen relative">
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — info */}
          <div className="animate-reveal">
            <div className="flex items-center gap-2.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-rose animate-pulse" style={{ boxShadow: '0 0 8px rgba(225,29,72,0.7)' }}></span>
              <span className="section-label" style={{ color: 'var(--brand-rose)' }}>Communication Channel Open</span>
            </div>

            <h1 className="font-display font-black text-6xl sm:text-7xl md:text-8xl text-brand-cream mb-10 leading-none tracking-tight">
              Let's<br/><span className="text-gradient">Build</span><br/>Together.
            </h1>

            <p className="text-brand-muted text-lg sm:text-xl font-medium mb-14 leading-relaxed max-w-md">
              Currently accepting inquiries for{' '}
              <span className="text-brand-cream font-semibold">automation engineering</span>,
              no-code app development, and AI workflow projects.
            </p>

            <div className="space-y-4">
              {[
                {
                  label: 'Primary Email', val: 'ibolajie@gmail.com',
                  href: 'mailto:ibolajie@gmail.com',
                  icon: 'M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.58 6.062a2.25 2.25 0 01-2.316 0L2.25 6.75',
                  iconFill: false, iconBg: 'accent-gradient',
                },
                {
                  label: 'LinkedIn', val: 'in/ibolajie',
                  href: 'https://www.linkedin.com/in/ibolajie/',
                  icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
                  iconFill: true, iconBg: 'bg-[#0077b5]',
                },
              ].map((link, idx) => (
                <a key={idx} href={link.href} target="_blank" rel="noopener noreferrer"
                  className="group flex items-center gap-5 p-5 sm:p-6 bg-brand-surface border border-white/[0.06] rounded-2xl hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 active:scale-[0.98]"
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform flex-shrink-0 ${link.iconBg}`}>
                    <svg className="w-5 h-5" fill={link.iconFill ? 'currentColor' : 'none'} stroke={link.iconFill ? 'none' : 'currentColor'} viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d={link.icon} />
                    </svg>
                  </div>
                  <div className="overflow-hidden">
                    <p className="section-label mb-0.5">{link.label}</p>
                    <p className="font-display font-black text-base text-brand-cream group-hover:text-gradient transition-all truncate">{link.val}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="animate-reveal" style={{ animationDelay: '150ms' }}>
            <div className="bg-brand-surface border border-white/[0.06] p-8 sm:p-12 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-px accent-gradient opacity-50"></div>

              {submitted ? (
                <div className="text-center py-20 relative z-10 animate-reveal">
                  <div className="w-20 h-20 bg-emerald-500/10 text-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-emerald-500/20 animate-breathe">
                    <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display font-black text-3xl sm:text-4xl text-brand-cream mb-4 tracking-tight">Message Sent.</h3>
                  <p className="text-brand-muted text-base font-medium mb-10 leading-relaxed">
                    I'll respond within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormState({ name: '', email: '', message: '' }); setToast(null); setErrors({}); }}
                    className="section-label text-brand-orange hover:text-brand-cream transition-colors"
                  >
                    Send another →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  {[
                    { key: 'name',    label: 'Full Name',      type: 'text',  placeholder: 'e.g. Jane Architect',                  error: errors.name },
                    { key: 'email',   label: 'Email Address',  type: 'email', placeholder: 'your@email.com',                       error: errors.email },
                  ].map(field => (
                    <div key={field.key} className="space-y-2">
                      <label className="section-label">{field.label}</label>
                      <input
                        type={field.type}
                        disabled={isSubmitting}
                        placeholder={field.placeholder}
                        className={`w-full px-5 py-3.5 bg-black/30 border rounded-xl focus:outline-none focus:ring-2 transition-all text-brand-cream text-sm font-sans placeholder:text-brand-muted/40 disabled:opacity-50 disabled:cursor-not-allowed ${
                          field.error
                            ? 'border-rose-500/50 focus:border-rose-500 focus:ring-rose-500/15'
                            : 'border-white/[0.06] focus:border-brand-orange focus:ring-brand-orange/15'
                        }`}
                        value={(formState as any)[field.key]}
                        onChange={(e) => setFormState({ ...formState, [field.key]: e.target.value })}
                      />
                      {field.error && <p className="section-label animate-reveal" style={{ color: '#f87171' }}>{field.error}</p>}
                    </div>
                  ))}

                  <div className="space-y-2">
                    <label className="section-label">Message</label>
                    <textarea
                      rows={5}
                      disabled={isSubmitting}
                      placeholder="Describe what you're trying to automate or build..."
                      className={`w-full px-5 py-3.5 bg-black/30 border rounded-xl focus:outline-none focus:ring-2 transition-all text-brand-cream text-sm font-sans placeholder:text-brand-muted/40 resize-none disabled:opacity-50 disabled:cursor-not-allowed ${
                        errors.message
                          ? 'border-rose-500/50 focus:border-rose-500 focus:ring-rose-500/15'
                          : 'border-white/[0.06] focus:border-brand-orange focus:ring-brand-orange/15'
                      }`}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    />
                    {errors.message && <p className="section-label animate-reveal" style={{ color: '#f87171' }}>{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 accent-gradient text-white rounded-xl font-display font-black text-sm uppercase tracking-wider shadow-xl hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 disabled:scale-100 flex items-center justify-center gap-3 cursor-pointer disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div><span>Sending...</span></>
                    ) : (
                      <span>Send Message</span>
                    )}
                  </button>
                </form>
              )}

              <div className="absolute -top-16 -right-16 w-64 h-64 bg-brand-orange/5 rounded-full blur-[80px] pointer-events-none"></div>
              <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-brand-rose/5 rounded-full blur-[60px] pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
