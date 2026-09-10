import React from 'react';
import { CheckCircle2, Info, AlertCircle } from 'lucide-react';

export default function Toast({ message, type = 'success' }) {
  if (!message) return null;

  const icons = {
    success: <CheckCircle2 size={18} color="var(--accent-emerald)" />,
    info: <Info size={18} color="var(--accent-cyan)" />,
    error: <AlertCircle size={18} color="var(--accent-rose)" />
  };

  return (
    <div className="toast-container" role="status" aria-live="polite">
      <div className="toast">
        {icons[type] || icons.success}
        <span>{message}</span>
      </div>
    </div>
  );
}
