'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const PrivacyContext = createContext();

export function PrivacyProvider({ children }) {
  const [isPrivacyEnabled, setIsPrivacyEnabled] = useState(false);

  useEffect(() => {
    // Load state from localStorage on mount
    const savedPrivacy = localStorage.getItem('privacyMode');
    if (savedPrivacy) {
      setIsPrivacyEnabled(JSON.parse(savedPrivacy));
    }
  }, []);

  const togglePrivacy = () => {
    setIsPrivacyEnabled((prev) => {
      const newState = !prev;
      localStorage.setItem('privacyMode', JSON.stringify(newState));
      return newState;
    });
  };

  return (
    <PrivacyContext.Provider value={{ isPrivacyEnabled, togglePrivacy }}>
      {children}
    </PrivacyContext.Provider>
  );
}

export function usePrivacy() {
  return useContext(PrivacyContext);
}
