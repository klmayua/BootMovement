import React from 'react';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <header className="bg-surface sticky top-0 z-50 border-b border-outline-variant">
      <div className="flex justify-between items-center w-full px-margin-mobile py-unit max-w-container-max mx-auto">
        <Link href="/" className="flex items-center gap-3">
          <img 
            alt="BOOT Party Logo" 
            className="h-10 w-auto" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBp-8TmVDqBQp77YAjpMPAZexS5Ke0oafYxe3Bnv0HwYZxLppGBx4mh1a88oGTYpdrP8Eiv7vTV1jM2hieOgekjPvBYQINcN9HW8QMmyEmwP6AlpKGGo9muJW3gzgNAe3pf6pkf2i25qTvH_vZJD4VCW21WVHugmgUUAaB4l56xqd98coisKAkOtDa_qJPaxPARUoh7LK0tKBm0tCG7EO5NrODLCwltURDR7osfH5mmCorlkvxW1IfIB3N1Ew7hPCmDL3V9WIHhr1wz"
          />
          <span className="font-headline-sm text-headline-sm font-bold text-primary">BOOT Movement</span>
        </Link>
        <div className="flex items-center gap-4">
          <button className="material-symbols-outlined text-primary p-2 hover:bg-surface-container-low transition-colors duration-200">notifications</button>
          <div className="w-8 h-8 rounded-full bg-primary-container overflow-hidden border border-outline-variant">
            <img 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrmfhr2latfGJ09GYDLnkpw9klilP8wgc2US8z5Ttasfx2NxMsikTUh3bg8lI-WDF7MlpGUOoFOu0NNHN9rhcJxRs7-xsJUyEFjI23LVdLDiwG3MX2rz-0f6WZ2bUQlvYAbTlB8g81A6Zid-a-5c5wtGM2iJy_mDOx64yrBwRz_mkSBpbh9_xH6s80WEelyAwkrVJgfAuBsVGIQGITXrUnMAkqZzxC71IDhAYjbOOn4XG7R2d9paGHAFynztX9QI8CAdCnpgKlg6ZI"
              alt="User Profile"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
