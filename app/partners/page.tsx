"use client";

import { useState } from "react";
import { ArrowRight, ArrowLeft, Building2, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function PartnersPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    partnerType: '',
    companyName: '',
    website: '',
    contactPerson: '',
    role: '',
    employeeCount: '',
    integrationDetails: ''
  });

  const updateForm = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setStep(s => Math.min(4, s + 1));
  const prevStep = () => setStep(s => Math.max(1, s - 1));

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await addDoc(collection(db, "partners"), {
        ...formData,
        status: 'pending',
        createdAt: serverTimestamp()
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      alert("Failed to submit application.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 pt-24 pb-24 text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-green-500/20 text-green-400 rounded-full mb-8 shadow-[0_0_40px_rgba(34,197,94,0.3)]">
          <CheckCircle2 className="w-12 h-12" />
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter">
          Application Received
        </h1>
        <p className="text-white/50 mb-12 leading-relaxed">
          Thank you for your interest in partnering with Gami Protocol. Our ecosystem team will review your application and be in touch shortly.
        </p>
        <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white font-mono text-sm uppercase tracking-widest underline underline-offset-4">
          <ArrowLeft className="w-4 h-4" /> Return Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 pt-12 pb-24">
      <div className="mb-12">
        <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white font-mono text-xs uppercase tracking-widest mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
          Partner Ecosystem
        </h1>
        <p className="text-white/50 font-light max-w-2xl">Join the network of top games, brands, and infrastructure providers building the future of engagement.</p>
      </div>

      <div className="flex gap-2 mb-8">
        {[1, 2, 3, 4].map((s) => (
          <div key={s} className={`h-2 flex-1 border border-black transition-colors ${s <= step ? 'bg-[#6E3CFB]' : 'bg-[#15151E]'}`} />
        ))}
      </div>

      <div className="bg-[#15151E] p-8 md:p-12 border-2 border-black shadow-[8px_8px_0px_0px_#6E3CFB]">
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="text-2xl font-bold text-white uppercase tracking-tighter mb-6">Partner Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {['Gaming', 'E-commerce', 'AI/Infra'].map(type => (
                <button
                  key={type}
                  onClick={() => { updateForm('partnerType', type); nextStep(); }}
                  className={`p-6 border-2 flex flex-col items-center gap-4 transition-all ${
                    formData.partnerType === type 
                      ? 'border-[#6E3CFB] bg-[#6E3CFB]/10 shadow-[4px_4px_0px_0px_#6E3CFB]' 
                      : 'border-white/10 hover:border-white/30 bg-black/50'
                  }`}
                >
                  <Building2 className={`w-8 h-8 ${formData.partnerType === type ? 'text-[#9C6CFF]' : 'text-white/40'}`} />
                  <span className="font-bold text-white uppercase tracking-widest text-xs">{type}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="text-2xl font-bold text-white uppercase tracking-tighter mb-6">Company Details</h2>
            <div className="space-y-4">
              <div>
                <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-2 block">Company Name</label>
                <input required value={formData.companyName} onChange={e => updateForm('companyName', e.target.value)} type="text" className="w-full bg-black/50 border border-white/10 p-4 text-white font-sans focus:outline-none focus:border-[#6E3CFB]" />
              </div>
              <div>
                <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-2 block">Website</label>
                <input required value={formData.website} onChange={e => updateForm('website', e.target.value)} type="url" className="w-full bg-black/50 border border-white/10 p-4 text-white font-sans focus:outline-none focus:border-[#6E3CFB]" placeholder="https://" />
              </div>
              <div>
                <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-2 block">Employee Count</label>
                <select value={formData.employeeCount} onChange={e => updateForm('employeeCount', e.target.value)} className="w-full bg-black/50 border border-white/10 p-4 text-white font-sans focus:outline-none focus:border-[#6E3CFB] appearance-none">
                  <option value="">Select size</option>
                  <option>1-10</option>
                  <option>11-50</option>
                  <option>51-200</option>
                  <option>201+</option>
                </select>
              </div>
            </div>
            <div className="flex justify-between pt-6">
              <button onClick={prevStep} className="px-6 py-3 font-mono text-sm uppercase tracking-widest text-white/50 hover:text-white">Back</button>
              <button 
                onClick={nextStep} 
                disabled={!formData.companyName || !formData.website}
                className="bg-white text-black px-8 py-3 font-bold uppercase text-sm tracking-widest border-2 border-black shadow-[4px_4px_0px_0px_#000000] active:shadow-none transition-transform active:translate-x-1 active:translate-y-1 disabled:opacity-50"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="text-2xl font-bold text-white uppercase tracking-tighter mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div>
                <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-2 block">Contact Person</label>
                <input required value={formData.contactPerson} onChange={e => updateForm('contactPerson', e.target.value)} type="text" className="w-full bg-black/50 border border-white/10 p-4 text-white font-sans focus:outline-none focus:border-[#6E3CFB]" />
              </div>
              <div>
                <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-2 block">Role / Title</label>
                <input required value={formData.role} onChange={e => updateForm('role', e.target.value)} type="text" className="w-full bg-black/50 border border-white/10 p-4 text-white font-sans focus:outline-none focus:border-[#6E3CFB]" />
              </div>
            </div>
            <div className="flex justify-between pt-6">
              <button onClick={prevStep} className="px-6 py-3 font-mono text-sm uppercase tracking-widest text-white/50 hover:text-white">Back</button>
              <button 
                onClick={nextStep}
                disabled={!formData.contactPerson || !formData.role}
                className="bg-white text-black px-8 py-3 font-bold uppercase text-sm tracking-widest border-2 border-black shadow-[4px_4px_0px_0px_#000000] active:shadow-none transition-transform active:translate-x-1 active:translate-y-1 disabled:opacity-50"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <h2 className="text-2xl font-bold text-white uppercase tracking-tighter mb-6">Integration Details</h2>
            <div className="space-y-4">
              <div>
                <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest mb-2 block">How do you plan to use Gami Protocol?</label>
                <textarea 
                  required 
                  value={formData.integrationDetails} 
                  onChange={e => updateForm('integrationDetails', e.target.value)} 
                  rows={5} 
                  className="w-full bg-black/50 border border-white/10 p-4 text-white font-sans focus:outline-none focus:border-[#6E3CFB]" 
                  placeholder="e.g. We want to reward users with XP for completing in-game quests..."
                />
              </div>
            </div>
            <div className="flex justify-between pt-6">
              <button onClick={prevStep} className="px-6 py-3 font-mono text-sm uppercase tracking-widest text-white/50 hover:text-white">Back</button>
              <button 
                onClick={handleSubmit}
                disabled={loading || !formData.integrationDetails}
                className="bg-[#6E3CFB] text-white px-8 py-3 font-bold uppercase text-sm tracking-widest border-2 border-black shadow-[4px_4px_0px_0px_#000000] active:shadow-none transition-transform active:translate-x-1 active:translate-y-1 disabled:opacity-50 flex items-center gap-2"
              >
                {loading ? 'Submitting...' : 'Submit Application'} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

