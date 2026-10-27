import React, { useState } from 'react';
import { X, Save, RotateCcw, Lock, Check, Sparkles } from 'lucide-react';
import { useProfile, ProfileData } from '../../context/ProfileContext';

export const EditProfileModal: React.FC = () => {
  const { profile, isEditModalOpen, closeEditModal, saveProfile, resetToDefaults, lockEditor } = useProfile();
  const [formData, setFormData] = useState<ProfileData>(profile);
  const [activeTab, setActiveTab] = useState<'hero' | 'caseStudies' | 'about' | 'contact'>('hero');
  const [savedToast, setSavedToast] = useState(false);

  // Sync if profile changes
  React.useEffect(() => {
    setFormData(profile);
  }, [profile, isEditModalOpen]);

  if (!isEditModalOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    saveProfile(formData);
    setSavedToast(true);
    setTimeout(() => setSavedToast(false), 2500);
  };

  const handleReset = () => {
    if (window.confirm('Reset all profile content back to original defaults?')) {
      resetToDefaults();
      setFormData(profile);
    }
  };

  const updateCaseStudy = (index: number, field: string, value: string) => {
    const updated = [...formData.caseStudies];
    updated[index] = { ...updated[index], [field]: value };
    setFormData({ ...formData, caseStudies: updated });
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-charcoal/50 backdrop-blur-xs animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeEditModal();
      }}
    >
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-2xl border border-charcoal-border shadow-2xl flex flex-col overflow-hidden animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-charcoal-border bg-offwhite">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-techblue text-white flex items-center justify-center font-bold text-sm">
              RK
            </div>
            <div>
              <h2 className="text-lg font-bold text-charcoal">Edit Portfolio Profile</h2>
              <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 inline-flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Authenticated (Ram123)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                lockEditor();
              }}
              className="p-2 text-text-muted hover:text-red-600 hover:bg-red-50 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors"
              title="Lock Editor & Logout"
            >
              <Lock className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Lock</span>
            </button>
            <button
              onClick={closeEditModal}
              className="p-2 text-text-muted hover:text-charcoal hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-charcoal-border px-6 bg-white gap-2 overflow-x-auto">
          {[
            { id: 'hero', label: 'Hero & Identity' },
            { id: 'caseStudies', label: 'Case Study Cards' },
            { id: 'about', label: 'About & Strategy' },
            { id: 'contact', label: 'Contact & Links' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`py-3 px-3 text-sm font-semibold border-b-2 whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'border-techblue text-techblue'
                  : 'border-transparent text-text-secondary hover:text-charcoal'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Form Body */}
        <form onSubmit={handleSave} className="flex-1 overflow-y-auto p-6 space-y-6">
          {savedToast && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-sm font-semibold flex items-center gap-2 animate-fade-in">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Changes saved successfully to your portfolio and local storage!</span>
            </div>
          )}

          {/* TAB 1: HERO */}
          {activeTab === 'hero' && (
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-charcoal mb-1">
                    Full Name (Main Page Title H1)
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2 bg-offwhite border border-charcoal-border rounded-xl text-sm focus:border-techblue focus:ring-1 focus:ring-techblue text-charcoal font-medium"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase text-charcoal mb-1">
                    Professional Title (Subsection H3)
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-3.5 py-2 bg-offwhite border border-charcoal-border rounded-xl text-sm focus:border-techblue focus:ring-1 focus:ring-techblue text-charcoal font-medium"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-charcoal mb-1">
                  Availability / Status Badge
                </label>
                <input
                  type="text"
                  value={formData.statusBadge}
                  onChange={(e) => setFormData({ ...formData, statusBadge: e.target.value })}
                  className="w-full px-3.5 py-2 bg-offwhite border border-charcoal-border rounded-xl text-sm focus:border-techblue focus:ring-1 focus:ring-techblue text-charcoal font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-charcoal mb-1">
                  2-Sentence Value Proposition (LLM Workflows, Guardrails, Evals)
                </label>
                <textarea
                  rows={3}
                  value={formData.valueProposition}
                  onChange={(e) => setFormData({ ...formData, valueProposition: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-offwhite border border-charcoal-border rounded-xl text-sm focus:border-techblue focus:ring-1 focus:ring-techblue text-charcoal leading-relaxed font-normal"
                  required
                />
                <p className="mt-1 text-xs text-text-muted">
                  Strict design spec: 16px body, 1.5–1.6 line height, charcoal text.
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: CASE STUDIES */}
          {activeTab === 'caseStudies' && (
            <div className="space-y-6">
              <p className="text-xs text-text-secondary">
                Configure the 2–3 case study cards displayed on the portfolio. Each card features a clean title, 1-line summary, Tech Blue metrics, and "View Case Study" button.
              </p>

              {formData.caseStudies.map((cs, index) => (
                <div key={cs.id || index} className="p-4 rounded-xl border border-charcoal-border bg-offwhite/50 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-techblue">
                      Case Study {index + 1}
                    </span>
                    <input
                      type="text"
                      value={cs.tag}
                      placeholder="Category Tag"
                      onChange={(e) => updateCaseStudy(index, 'tag', e.target.value)}
                      className="px-2.5 py-1 bg-white border border-charcoal-border rounded-md text-xs font-medium text-text-secondary"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal mb-1">Title (H3: 18px Semi-bold)</label>
                    <input
                      type="text"
                      value={cs.title}
                      onChange={(e) => updateCaseStudy(index, 'title', e.target.value)}
                      className="w-full px-3 py-1.5 bg-white border border-charcoal-border rounded-lg text-sm text-charcoal font-semibold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-charcoal mb-1">1-Line Summary (16px Regular)</label>
                    <input
                      type="text"
                      value={cs.summary}
                      onChange={(e) => updateCaseStudy(index, 'summary', e.target.value)}
                      className="w-full px-3 py-1.5 bg-white border border-charcoal-border rounded-lg text-sm text-charcoal"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-charcoal mb-1">
                        Callout Metrics (Tech Blue Focus)
                      </label>
                      <input
                        type="text"
                        value={cs.metrics}
                        onChange={(e) => updateCaseStudy(index, 'metrics', e.target.value)}
                        className="w-full px-3 py-1.5 bg-white border border-techblue-border rounded-lg text-sm text-techblue font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-charcoal mb-1">
                        Case Study Target Link
                      </label>
                      <input
                        type="text"
                        value={cs.link}
                        onChange={(e) => updateCaseStudy(index, 'link', e.target.value)}
                        className="w-full px-3 py-1.5 bg-white border border-charcoal-border rounded-lg text-sm font-mono text-text-secondary"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: ABOUT */}
          {activeTab === 'about' && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase text-charcoal mb-1">
                  About Section Header (H2: 26px Medium/Bold)
                </label>
                <input
                  type="text"
                  value={formData.aboutTitle}
                  onChange={(e) => setFormData({ ...formData, aboutTitle: e.target.value })}
                  className="w-full px-3.5 py-2 bg-offwhite border border-charcoal-border rounded-xl text-sm font-semibold text-charcoal"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-charcoal mb-1">
                  Paragraph 1 (Product Strategy & Guardrails)
                </label>
                <textarea
                  rows={4}
                  value={formData.aboutParagraph1}
                  onChange={(e) => setFormData({ ...formData, aboutParagraph1: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-offwhite border border-charcoal-border rounded-xl text-sm text-charcoal leading-relaxed"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-charcoal mb-1">
                  Paragraph 2 (Evaluations, SLAs, and Human-in-the-Loop)
                </label>
                <textarea
                  rows={4}
                  value={formData.aboutParagraph2}
                  onChange={(e) => setFormData({ ...formData, aboutParagraph2: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-offwhite border border-charcoal-border rounded-xl text-sm text-charcoal leading-relaxed"
                />
              </div>
            </div>
          )}

          {/* TAB 4: CONTACT & LINKS */}
          {activeTab === 'contact' && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase text-charcoal mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2 bg-offwhite border border-charcoal-border rounded-xl text-sm text-charcoal font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-charcoal mb-1">
                  LinkedIn Profile URL
                </label>
                <input
                  type="url"
                  value={formData.linkedin}
                  onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                  className="w-full px-3.5 py-2 bg-offwhite border border-charcoal-border rounded-xl text-sm text-charcoal font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-charcoal mb-1">
                  GitHub Profile URL
                </label>
                <input
                  type="url"
                  value={formData.github}
                  onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                  className="w-full px-3.5 py-2 bg-offwhite border border-charcoal-border rounded-xl text-sm text-charcoal font-mono"
                />
              </div>
            </div>
          )}

          {/* Footer Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-charcoal-border">
            <button
              type="button"
              onClick={handleReset}
              className="px-3.5 py-2 text-xs font-semibold text-text-secondary hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset to Defaults</span>
            </button>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={closeEditModal}
                className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-charcoal hover:bg-gray-100 rounded-xl transition-colors"
              >
                Close
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 text-sm font-semibold text-white bg-techblue hover:bg-techblue-hover active:scale-[0.98] rounded-xl shadow-xs transition-all flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                <span>Save Changes</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
