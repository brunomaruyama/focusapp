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

const iconCheck = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M16.5163 8.93451L11.0597 14.7023L8.0959 11.8984" stroke="#000000" stroke-width="2"></path><path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#000000" stroke-width="2"></path></g></svg>`;

const iconPencil = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M16.5 3.75L20.25 7.5C20.25 7.5 20.25 7.5 20.25 7.5L16.5 3.75Z" stroke="#000000" stroke-width="2"></path><path d="M3 21H8.25L18.75 10.5L13.5 5.25L3 15V21Z" stroke="#000000" stroke-width="2"></path></g></svg>`;

const iconTrash = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M6 7H18M9 7V5C9 4.44772 9.44772 4 10 4H14C14.5523 4 15 4.44772 15 5V7M6 7H18M6 7H18M6 7V19C6 19.5523 6.44772 20 7 20H17C17.5523 20 18 19.5523 18 19V7M10.5 11V17M13.5 11V17" stroke="#000000" stroke-width="2"></path></g></svg>`;

const iconPlus = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12 5V19" stroke="#b872ff" stroke-width="2"></path><path d="M5 12H19" stroke="#b872ff" stroke-width="2"></path></g></svg>`;

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

export const IconCheck = ({ completed }) => {
  return (
    <SvgXml
      xml={iconCheck}
      width="24"
      height="24"
      fill={completed ? "#00f4bf" : "none"}
      viewBox="0 0 24 24"
      version="1.1"
    />
  );
};

export const IconPencil = () => {
  return (
    <SvgXml
      xml={iconPencil}
      width="24"
      height="24"
      fill="#000000"
      viewBox="0 0 24 24"
      version="1.1"
    />
  );
};
export const IconTrash = () => {
  return (
    <SvgXml
      xml={iconTrash}
      width="24"
      height="24"
      fill="#000000"
      viewBox="0 0 24 24"
      version="1.1"
    />
  );
};
export const IconPlus = () => {
  return (
    <SvgXml
      xml={iconPlus}
      width="24"
      height="24"
      fill="#b872ff"
      viewBox="0 0 24 24"
      version="1.1"
    />
  );
};
