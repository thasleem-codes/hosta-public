// import React, { useState } from "react";
// import { X, Share, Plus, Menu, Info, Globe } from "lucide-react";

// interface InstallModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   platform: "ios" | "android" | null;
// }

// const InstallModal: React.FC<InstallModalProps> = ({
//   isOpen,
//   onClose,
//   platform,
// }) => {
//   if (!isOpen) return null;

//   const iOSSteps = [
//     {
//       text: (
//         <>
//           Open{" "}
//           <a href="https://hospital-managements.vercel.app">
//             https://hospital-managements.vercel.app
//           </a>{" "}
//           in Safari
//         </>
//       ),
//       icon: <Globe className="w-5 h-5" />,
//     },
//     { text: "Tap the Share button", icon: <Share className="w-5 h-5" /> },
//     {
//       text: "Scroll down and tap 'Add to Home Screen'",
//       icon: <Plus className="w-5 h-5" />,
//     },
//     { text: "Tap 'Add' to confirm", icon: <Plus className="w-5 h-5" /> },
//   ];

//   const androidSteps = [
//     {
//       text: (
//         <>
//           Open{" "}
//           <a href="https://hospital-managements.vercel.app">
//             https://hospital-managements.vercel.app
//           </a>{" "}
//           in Chrome
//         </>
//       ),
//       icon: <Globe className="w-5 h-5" />,
//     },
//     { text: "Tap the menu button", icon: <Menu className="w-5 h-5" /> },
//     {
//       text: "Tap 'Install app' or 'Add to Home screen'",
//       icon: <Plus className="w-5 h-5" />,
//     },
//     {
//       text: "Follow the installation prompts",
//       icon: <Info className="w-5 h-5" />,
//     },
//   ];

//   const steps = platform === "ios" ? iOSSteps : androidSteps;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//       <div className="bg-white rounded-lg max-w-md w-full p-6">
//         <div className="flex justify-between items-center mb-4">
//           <h3 className="text-xl font-semibold">
//             Install on {platform === "ios" ? "iOS" : "Android"}
//           </h3>
//           <button
//             onClick={onClose}
//             className="text-gray-500 hover:text-gray-700"
//           >
//             <X className="w-6 h-6" />
//           </button>
//         </div>
//         <div className="space-y-4">
//           {steps.map((step, index) => (
//             <div key={index} className="flex items-center space-x-3">
//               <div className="bg-emerald-100 p-2 rounded-full">{step.icon}</div>
//               <p className="text-gray-700">{step.text}</p>
//             </div>
//           ))}
//         </div>
//         <div className="mt-6 text-sm text-gray-500">
//           <p>
//             Note: For the best experience, use{" "}
//             {platform === "ios" ? "Safari" : "Chrome"} browser to install the
//             app.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export const InstallPWA: React.FC = () => {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [platform, setPlatform] = useState<"ios" | "android" | null>(null);

//   const handleInstallClick = (platform: "ios" | "android") => {
//     setPlatform(platform);
//     setModalOpen(true);
//   };

//   return (
//     <>
//       <div className="mb-8 text-gray-600 text-center">
//         <p>Native apps coming soon to App Store and Play Store!</p>
//         <p className="mt-2">
//           Meanwhile, install our web app for the best experience:
//         </p>
//         <a
//           href="https://hospital-managements.vercel.app"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-emerald-600 hover:text-emerald-700 underline mt-2 inline-block"
//         >
//           <Globe className="w-4 h-4 inline mr-1" />
//           Visit Website
//         </a>
//       </div>
//       <div className="flex flex-wrap justify-center gap-6">
//         <button
//           onClick={() => handleInstallClick("ios")}
//           className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
//         >
//           <Share className="w-6 h-6" />
//           <span>Install on iOS</span>
//         </button>
//         <button
//           onClick={() => handleInstallClick("android")}
//           className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
//         >
//           <Plus className="w-6 h-6" />
//           <span>Install on Android</span>
//         </button>
//       </div>
//       <InstallModal
//         isOpen={modalOpen}
//         onClose={() => setModalOpen(false)}
//         platform={platform}
//       />
//     </>
//   );
// };

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
          <a href="https://hospital-managements.vercel.app">
            https://hospital-managements.vercel.app
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
