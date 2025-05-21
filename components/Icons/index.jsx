import { SvgXml } from "react-native-svg";

const playIcon = `<svg
      viewBox="-3 0 28 28"
      version="1.1"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        
        <title>play</title> <desc>Created with Sketch Beta.</desc>
        <defs> </defs>
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"        >
          
          <g
            id="Icon-Set-Filled"
            transform="translate(-419.000000, -571.000000)"
            fill="#000000"
          >
            
            <path
              d="M440.415,583.554 L421.418,571.311 C420.291,570.704 419,570.767 419,572.946 L419,597.054 C419,599.046 420.385,599.36 421.418,598.689 L440.415,586.446 C441.197,585.647 441.197,584.353 440.415,583.554"
              id="play"
            >
              
            </path>
          </g>
        </g>
      </g>
    </svg>`;

const pauseIcon = `<svg fill="#000000" viewBox="0 0 32 32" version="1.1">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        
        <title>pause</title>
        <path d="M5.92 24.096q0 0.832 0.576 1.408t1.44 0.608h4.032q0.832 0 1.44-0.608t0.576-1.408v-16.16q0-0.832-0.576-1.44t-1.44-0.576h-4.032q-0.832 0-1.44 0.576t-0.576 1.44v16.16zM18.016 24.096q0 0.832 0.608 1.408t1.408 0.608h4.032q0.832 0 1.44-0.608t0.576-1.408v-16.16q0-0.832-0.576-1.44t-1.44-0.576h-4.032q-0.832 0-1.408 0.576t-0.608 1.44v16.16z"></path>
      </g>
    </svg>`;

export const IconPlay = () => {
  return (
    <SvgXml
      xml={playIcon}
      width="24"
      height="24"
      fill="#000000"
      viewBox="-3 0 28 28"
      version="1.1"
    />
  );
};

export const IconPause = () => {
  return (
    <SvgXml
      xml={pauseIcon}
      width="24"
      height="24"
      fill="#000000"
      viewBox="0 0 32 32"
      version="1.1"
    />
  );
};
