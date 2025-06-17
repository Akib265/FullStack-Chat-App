// import React, { useState } from 'react'
// import { useAuthStore } from '../store/useAuthStore'
// import {Camera,User,Mail} from 'lucide-react';

// const ProfilePage = () => {
//   const {authUser, isUpdatingProfile,updateProfile } = useAuthStore();
//   const [selectedImage,setSelectedImage] = useState(null);

//   const handleImageUpload = async(e) =>{
//     const file = e.target.files[0];
//     if(!file) return;
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = async() =>{
//       const base64Image = reader.result;
//       //console.log(base64Image)
//       setSelectedImage(base64Image);
//       await updateProfile({profilePic : base64Image});

//     }
//   }

//   return (
//     <div className='min-h-screen p-20'>
//       <div className='max-w-2xl mx-auto p-4 py-8'>
//         <div className='bg-base-300 rounded-xl p-6 space-y-8'>
//           <div className="text-center">
//             <h1 className="text-2xl font-semibold ">Profile</h1>
//             <p className="mt-2">Your profile information</p>
//           </div>

//           {/*Avatar Upload Section */}
//           <div className="flex flex-col items-center gap-4">
//             <div className="relative">
//               <img
//                 src={selectedImage || authUser.profilePic || "/avatar.png"}
//                 alt="Profile"
//                 className="size-32 rounded-full object-cover border-4 "
//               />
//               <label
//                 htmlFor="avatar-upload"
//                 className={`
//                   absolute bottom-0 right-0 
//                   bg-base-content hover:scale-105
//                   p-2 rounded-full cursor-pointer 
//                   transition-all duration-200
//                   ${isUpdatingProfile ? "animate-pulse pointer-events-none" : ""}
//                 `}
//               >
//                 <Camera className="w-5 h-5 text-base-200" />
//                 <input
//                   type="file"
//                   id="avatar-upload"
//                   className="hidden"
//                   accept="image/*"
//                   onChange={handleImageUpload}
//                   disabled={isUpdatingProfile}
//                 />
//               </label>
//             </div>
//             <p className="text-sm text-zinc-400">
//               {isUpdatingProfile ? "Uploading..." : "Click the camera icon to update your photo"}
//             </p>
//           </div>

//           <div className="space-y-6">
//             <div className="space-y-1.5">
//               <div className="text-sm text-zinc-400 flex items-center gap-2">
//                 <User className="w-4 h-4" />
//                 Full Name
//               </div>
//               <p className="px-4 py-2.5 bg-base-200 rounded-lg border">{authUser?.fullName}</p>
//             </div>

//             <div className="space-y-1.5">
//               <div className="text-sm text-zinc-400 flex items-center gap-2">
//                 <Mail className="w-4 h-4" />
//                 Email Address
//               </div>
//               <p className="px-4 py-2.5 bg-base-200 rounded-lg border">{authUser?.email}</p>
//             </div>
//           </div>

//           <div className="mt-6 bg-base-300 rounded-xl p-6">
//             <h2 className="text-lg font-medium  mb-4">Account Information</h2>
//             <div className="space-y-3 text-sm">
//               <div className="flex items-center justify-between py-2 border-b border-zinc-700">
//                 <span>Member Since</span>
//                 <span>{authUser.createdAt?.split("T")[0]}</span>
//               </div>
//               <div className="flex items-center justify-between py-2">
//                 <span>Account Status</span>
//                 <span className="text-green-500">Active</span>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   )
// }

// export default ProfilePage


import React, { useState } from 'react'
import { useAuthStore } from '../store/useAuthStore'
import { Camera, User, Mail } from 'lucide-react';

const ProfilePage = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImage(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-10">
      <div className="max-w-2xl w-full bg-gray-800 bg-opacity-90 backdrop-blur-md rounded-2xl shadow-xl p-8 space-y-8">
        
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-200">Profile</h1>
          <p className="mt-2 text-gray-400">Your profile information</p>
        </div>

        {/* Avatar Upload Section */}
        <div className="flex flex-col items-center gap-4">
          <div className="relative group">
            <img
              src={selectedImage || authUser.profilePic || "/avatar.png"}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-gray-700 transition-all duration-300 group-hover:shadow-lg"
            />
            <label
              htmlFor="avatar-upload"
              className={`absolute bottom-1 right-1 bg-gray-700 p-2 rounded-full cursor-pointer transition-transform duration-200 hover:scale-105 ${
                isUpdatingProfile ? "animate-pulse pointer-events-none" : ""
              }`}
            >
              <Camera className="w-5 h-5 text-gray-300" />
              <input
                type="file"
                id="avatar-upload"
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
                disabled={isUpdatingProfile}
              />
            </label>
          </div>
          <p className="text-sm text-gray-400">
            {isUpdatingProfile ? "Uploading..." : "Click the camera icon to update your photo"}
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <div className="text-sm text-gray-400 flex items-center gap-2">
              <User className="w-4 h-4" />
              Full Name
            </div>
            <p className="px-4 py-2.5 bg-gray-700 rounded-lg border border-gray-600">{authUser?.fullName}</p>
          </div>

          <div className="space-y-2">
            <div className="text-sm text-gray-400 flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Email Address
            </div>
            <p className="px-4 py-2.5 bg-gray-700 rounded-lg border border-gray-600">{authUser?.email}</p>
          </div>
        </div>

        <div className="mt-6 bg-gray-800 bg-opacity-75 rounded-xl p-6 border border-gray-700">
          <h2 className="text-lg font-medium text-gray-200 mb-4">Account Information</h2>
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between py-2 border-b border-gray-600">
              <span className="text-gray-400">Member Since</span>
              <span className="text-gray-300">{authUser.createdAt?.split("T")[0]}</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-gray-400">Account Status</span>
              <span className="text-green-400">Active</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProfilePage;
