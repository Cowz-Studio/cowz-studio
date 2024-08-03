import { useState } from "react";
import NavbarButtonIcons from "./NavbarButtonIcons";
const Navbar = () => {
  const [value, setValue] = useState("Navbar");
  return (
    <div className="flex flex-row gap-x-2 p-3 w-screen absolute text-black">
      <NavbarButtonIcons />
      <div className="flex grow border border-2 border-current items-center p-1">
        <svg
          fill="currentColor"
          height="18px"
          width="18px"
          version="1.1"
          id="Capa_1"
          viewBox="0 0 192.904 192.904"
          className="mr-2"
        >
          <g>
            <path
              d="M190.707,180.101l-47.079-47.077c11.702-14.072,18.752-32.142,18.752-51.831C162.381,36.423,125.959,0,81.191,0
          C36.422,0,0,36.423,0,81.193c0,44.767,36.422,81.187,81.191,81.187c19.689,0,37.759-7.049,51.831-18.75l47.079,47.077
          c1.464,1.465,3.384,2.197,5.303,2.197c1.919,0,3.839-0.732,5.303-2.197C193.637,187.778,193.637,183.03,190.707,180.101z
          M15,81.193C15,44.694,44.693,15,81.191,15c36.497,0,66.189,29.694,66.189,66.193c0,36.496-29.692,66.187-66.189,66.187
          C44.693,147.38,15,117.689,15,81.193z"
            />
          </g>
        </svg>
        <p className="text-xs uppercase">What is the 'Z' in Cowz?</p>
      </div>
    </div>
  );
};

export default Navbar;
