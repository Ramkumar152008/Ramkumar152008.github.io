import React, { useState, useEffect, useRef } from 'react';
import { X, KeyRound, AlertCircle, Eye, EyeOff } from 'lucide-react';
import { useProfile } from '../../context/ProfileContext';

export const PasswordModal: React.FC = () => {
  const { isPasswordModalOpen, closePasswordModal, unlockWithPassword } = useProfile();
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isPasswordModalOpen) {
      setPassword('');
      setError(null);
      setShowPassword(false);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isPasswordModalOpen]);

  if (!isPasswordModalOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) {
      setError('Please enter the access password.');
      return;
    }

    setLoading(true);
    const result = await unlockWithPassword(password.trim());
    setLoading(false);
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
          Administrator Authentication
        </h2>
        <p className="text-[14px] leading-relaxed text-text-secondary mb-6">
          Enter your administrative password to edit portfolio content.
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
              Password
            </label>
            <div className="relative">
              <input
                ref={inputRef}
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (error) setError(null);
                }}
                placeholder="Enter password..."
                className="w-full pl-4 pr-11 py-2.5 bg-offwhite border border-charcoal-border rounded-xl text-charcoal text-[15px] focus:outline-none focus:border-techblue focus:ring-2 focus:ring-techblue/20 transition-all font-mono"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-text-light hover:text-charcoal p-1 transition-colors"
                title={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
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
              disabled={loading}
              className="px-5 py-2.5 text-sm font-semibold text-white bg-techblue hover:bg-techblue-hover active:scale-[0.98] disabled:opacity-50 rounded-xl shadow-xs transition-all flex items-center gap-2"
            >
              <KeyRound className="w-4 h-4" />
              <span>{loading ? 'Verifying...' : 'Unlock Editor'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
