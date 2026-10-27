import React, { useState, useEffect, useRef } from 'react';
import { Lock, X, KeyRound, AlertCircle } from 'lucide-react';
import { useProfile } from '../../context/ProfileContext';

export const PasswordModal: React.FC = () => {
  const { isPasswordModalOpen, closePasswordModal, unlockWithPassword } = useProfile();
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isPasswordModalOpen) {
      setPassword('');
      setError(null);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isPasswordModalOpen]);

  if (!isPasswordModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) {
      setError('Please enter the access password.');
      return;
    }

    const result = unlockWithPassword(password.trim());
    if (!result.success) {
      setError(result.message);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="password-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/40 backdrop-blur-xs animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) closePasswordModal();
      }}
    >
      <div className="relative w-full max-w-md bg-white rounded-2xl border border-charcoal-border shadow-xl p-6 sm:p-8 animate-slide-up">
        {/* Close Button */}
        <button
          onClick={closePasswordModal}
          className="absolute top-5 right-5 p-1.5 text-text-muted hover:text-charcoal hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Icon */}
        <div className="w-12 h-12 rounded-xl bg-techblue-subtle border border-techblue-border flex items-center justify-center mb-4">
          <KeyRound className="w-6 h-6 text-techblue" />
        </div>

        {/* Title & Description */}
        <h2 id="password-modal-title" className="text-[22px] font-semibold text-charcoal tracking-tight mb-2">
          Profile Editor Authentication
        </h2>
        <p className="text-[14px] leading-relaxed text-text-secondary mb-6">
          Editing profile details requires administrative authentication. Enter the passkey to continue.
        </p>

        {/* Error Alert */}
        {error && (
          <div className="mb-5 p-3 rounded-xl bg-red-50 border border-red-200 flex items-center gap-2.5 text-sm text-red-700 animate-fade-in">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
            <span>{error}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5">
              Enter Password
            </label>
            <div className="relative">
              <input
                ref={inputRef}
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (error) setError(null);
                }}
                placeholder="Enter password..."
                className="w-full px-4 py-2.5 bg-offwhite border border-charcoal-border rounded-xl text-charcoal text-[15px] focus:outline-none focus:border-techblue focus:ring-2 focus:ring-techblue/20 transition-all font-mono"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-text-light">
                <Lock className="w-4 h-4" />
              </div>
            </div>
            <p className="mt-2 text-xs text-text-muted">
              Security hint: <span className="font-mono font-medium text-charcoal bg-gray-100 px-1.5 py-0.5 rounded">Ram123</span>
            </p>
          </div>

          <div className="flex items-center justify-end gap-3 pt-3">
            <button
              type="button"
              onClick={closePasswordModal}
              className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-charcoal hover:bg-gray-100 rounded-xl transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 text-sm font-semibold text-white bg-techblue hover:bg-techblue-hover active:scale-[0.98] rounded-xl shadow-xs transition-all flex items-center gap-2"
            >
              <KeyRound className="w-4 h-4" />
              <span>Unlock Editor</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
