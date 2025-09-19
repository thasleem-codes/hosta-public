

import React, { useState } from "react";
import { X, Share, Globe, Plus, Download } from "lucide-react";

interface InstallModalProps {
  isOpen: boolean;
  onClose: () => void;
  platform: "ios" | "android" | null;
}

const InstallModal: React.FC<InstallModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const iOSSteps = [
    {
      text: (
        <>
          Open{" "}
          <a href="https://hosta-chi.vercel.app/" className="text-blue-500 underline">
            https://hosta-chi.vercel.app
          </a>{" "}
          in Safari
        </>
      ),
      icon: <Globe className="w-5 h-5" />,
    },
    { text: "Tap the Share button", icon: <Share className="w-5 h-5" /> },
    {
      text: "Scroll down and tap 'Add to Home Screen'",
      icon: <Plus className="w-5 h-5" />,
    },
    { text: "Tap 'Add' to confirm", icon: <Plus className="w-5 h-5" /> },
  ];

  const steps = iOSSteps;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Install on iOS</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="bg-emerald-100 p-2 rounded-full">{step.icon}</div>
              <p className="text-gray-700">{step.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 text-sm text-gray-500">
          <p>
            Note: For the best experience, use Safari browser to install the
            app.
          </p>
        </div>
      </div>
    </div>
  );
};

export const InstallPWA: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-6">
        {/* iOS Install - keeps modal */}
        <button
          onClick={() => setModalOpen(true)}
          className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
        >
          <Download className="w-6 h-6" />
          <span>Install on iOS</span>
        </button>

        {/* Android - Direct to Play Store */}
        <a
          href="https://play.google.com/store/apps/details?id=com.zorrowtech.hostamanager"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
        >
          <Download className="w-6 h-6" />
          <span>Get it on Play Store</span>
        </a>
      </div>

      <InstallModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        platform="ios"
      />
    </>
  );
};
