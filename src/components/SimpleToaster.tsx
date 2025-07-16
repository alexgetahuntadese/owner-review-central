import React, { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

export function SimpleToaster() {
  const { toasts } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`
            p-4 rounded-md shadow-lg max-w-sm
            ${toast.variant === 'destructive' 
              ? 'bg-red-500 text-white' 
              : 'bg-white text-gray-900 border'
            }
          `}
        >
          {toast.title && (
            <div className="font-semibold text-sm">{toast.title}</div>
          )}
          {toast.description && (
            <div className="text-sm opacity-90">{toast.description}</div>
          )}
        </div>
      ))}
    </div>
  );
}