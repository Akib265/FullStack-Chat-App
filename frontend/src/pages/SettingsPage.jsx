// import { THEMES } from "../constants";
// import { useThemeStore } from "../store/useThemeStore";
// import { Send } from "lucide-react";

// const PREVIEW_MESSAGES = [
//   { id: 1, content: "Hey! How's it going?", isSent: true },
//   { id: 2, content: "I'm doing great! Just working on some new features.", isSent: false },
// ];

// const SettingsPage = () => {
//   const { theme, setTheme } = useThemeStore();

//   return (
//     <div className="min-h-screen container mx-auto px-4 pt-20 max-w-5xl">
//       <div className="space-y-6">
//         <div className="flex flex-col gap-1">
//           <h2 className="text-lg font-semibold">Theme</h2>
//           <p className="text-sm text-base-content/70">Choose a theme for your chat interface</p>
//         </div>

//         <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
//           {THEMES.map((t) => (
//             <button
//               key={t}
//               className={`
//                 group flex flex-col items-center gap-1.5 p-2 rounded-lg transition-colors
//                 ${theme === t ? "bg-base-200" : "hover:bg-base-200/50"}
//               `}
//               onClick={() => setTheme(t)}
//             >
//               <div className="relative h-8 w-full rounded-md overflow-hidden" data-theme={t}>
//                 <div className="absolute inset-0 grid grid-cols-4 gap-px p-1">
//                   <div className="rounded bg-primary"></div>
//                   <div className="rounded bg-secondary"></div>
//                   <div className="rounded bg-accent"></div>
//                   <div className="rounded bg-neutral"></div>
//                 </div>
//               </div>
//               <span className="text-[11px] font-medium truncate w-full text-center">
//                 {t.charAt(0).toUpperCase() + t.slice(1)}
//               </span>
//             </button>
//           ))}
//         </div>

//         {/* Preview Section */}
//         <h3 className="text-lg font-semibold mb-3">Preview</h3>
//         <div className="rounded-xl border border-base-300 overflow-hidden bg-base-100 shadow-lg">
//           <div className="p-4 bg-base-200">
//             <div className="max-w-lg mx-auto">
//               {/* Mock Chat UI */}
//               <div className="bg-base-100 rounded-xl shadow-sm overflow-hidden">
//                 {/* Chat Header */}
//                 <div className="px-4 py-3 border-b border-base-300 bg-base-100">
//                   <div className="flex items-center gap-3">
//                     <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-content font-medium">
//                       D
//                     </div>
//                     <div>
//                       <h3 className="font-medium text-sm">Developer</h3>
//                       <p className="text-xs text-base-content/70">Online</p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Chat Messages */}
//                 <div className="p-4 space-y-4 min-h-[200px] max-h-[200px] overflow-y-auto bg-base-100">
//                   {PREVIEW_MESSAGES.map((message) => (
//                     <div
//                       key={message.id}
//                       className={`flex ${message.isSent ? "justify-end" : "justify-start"}`}
//                     >
//                       <div
//                         className={`
//                           max-w-[80%] rounded-xl p-3 shadow-sm
//                           ${message.isSent ? "bg-primary text-primary-content" : "bg-base-200"}
//                         `}
//                       >
//                         <p className="text-sm">{message.content}</p>
//                         <p
//                           className={`
//                             text-[10px] mt-1.5
//                             ${message.isSent ? "text-primary-content/70" : "text-base-content/70"}
//                           `}
//                         >
//                           12:00 PM
//                         </p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Chat Input */}
//                 <div className="p-4 border-t border-base-300 bg-base-100">
//                   <div className="flex gap-2">
//                     <input
//                       type="text"
//                       className="input input-bordered flex-1 text-sm h-10"
//                       placeholder="Type a message..."
//                       value="This is a preview"
//                       readOnly
//                     />
//                     <button className="btn btn-primary h-10 min-h-0">
//                       <Send size={18} />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default SettingsPage;

import { THEMES } from "../constants";
import { useThemeStore } from "../store/useThemeStore";
import { Send } from "lucide-react";

const PREVIEW_MESSAGES = [
  { id: 1, content: "Hey! How's it going?", isSent: true },
  { id: 2, content: "I'm doing great! Just working on some new features.", isSent: false },
];

const SettingsPage = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="min-h-screen container mx-auto px-4 pt-20 max-w-5xl">
      <div className="space-y-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-semibold text-indigo-700">Theme Settings</h2>
          <p className="text-sm text-gray-600">Customize your chat experience</p>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
          {THEMES.map((t) => (
            <button
              key={t}
              className={`group p-2 rounded-lg transition shadow-md ${
                theme === t ? "bg-indigo-600 text-white" : "hover:bg-gray-200"
              }`}
              onClick={() => setTheme(t)}
            >
              <div className="relative h-8 w-full rounded-md overflow-hidden bg-gray-300" data-theme={t}></div>
              <span className="text-sm font-medium mt-1">{t}</span>
            </button>
          ))}
        </div>

        <h3 className="text-lg font-semibold mt-4 text-indigo-700">Chat Preview</h3>
        <div className="rounded-xl border border-gray-300 bg-white shadow-md">
          <div className="p-4 bg-gray-100">
            <div className="max-w-lg mx-auto">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-4 bg-indigo-600 text-white rounded-t-lg">Chat with Developer</div>
                <div className="p-4 space-y-3 bg-gray-50 min-h-[200px]">
                  {PREVIEW_MESSAGES.map((message) => (
                    <div key={message.id} className={`flex ${message.isSent ? "justify-end" : "justify-start"}`}>
                      <div className={`p-3 rounded-lg text-sm shadow ${message.isSent ? "bg-indigo-500 text-white" : "bg-gray-200"}`}>
                        {message.content}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 border-t bg-white flex gap-2">
                  <input type="text" className="flex-1 p-2 rounded border" placeholder="Type a message..." readOnly />
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded">
                    <Send />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
