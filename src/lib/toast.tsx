"use client";

import { useState, useEffect } from "react";

type Toast = {
  id: string;
  message: string;
  duration?: number;
};

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (message: string, duration = 3000) => {
    const id = Math.random().toString(36).substr(2, 9);
    const toast: Toast = { id, message, duration };

    setToasts((prev) => [...prev, toast]);

    if (duration > 0) {
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, duration);
    }

    return id;
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return { toasts, addToast, removeToast };
}

type ToastContainerProps = {
  toasts: Toast[];
  onRemove: (id: string) => void;
};

export function ToastContainer({ toasts, onRemove }: ToastContainerProps) {
  return (
    <div className="fixed bottom-6 right-6 space-y-3 pointer-events-none z-50">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="bg-primary text-background px-6 py-3 rounded-lg shadow-md animate-fade-in pointer-events-auto cursor-pointer hover:bg-link-hover transition-colors duration-250"
          onClick={() => onRemove(toast.id)}
        >
          <p className="text-sm md:text-base font-medium">{toast.message}</p>
        </div>
      ))}
    </div>
  );
}
