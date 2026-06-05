/* SVG icons used across the site. All inherit currentColor. */
const Icon = ({ name, size = 16, className = "" }) => {
  const props = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round", className };
  switch (name) {
    case "sun":      return <svg {...props}><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>;
    case "moon":     return <svg {...props}><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/></svg>;
    case "arrow":    return <svg {...props}><path d="M7 17 17 7M9 7h8v8"/></svg>;
    case "arrow-r":  return <svg {...props}><path d="M5 12h14M13 5l7 7-7 7"/></svg>;
    case "arrow-down": return <svg {...props}><path d="M12 5v14M5 12l7 7 7-7"/></svg>;
    case "chev":     return <svg {...props}><path d="m9 18 6-6-6-6"/></svg>;
    case "plus":     return <svg {...props}><path d="M12 5v14M5 12h14"/></svg>;
    case "pin":      return <svg {...props}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;
    case "bank":     return <svg {...props}><path d="M3 21h18M5 21V10M9 21V10M15 21V10M19 21V10M2 10h20L12 3 2 10z"/></svg>;
    case "mail":     return <svg {...props}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>;
    case "linkedin": return <svg {...props}><rect x="2" y="2" width="20" height="20" rx="3"/><path d="M7 10v7M7 7v.01M11 17v-4a3 3 0 0 1 6 0v4"/></svg>;
    case "github":   return <svg {...props}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>;
    case "orcid":    return <svg {...props}><circle cx="12" cy="12" r="10"/><path d="M8 8v8M8 6.5v.01M11 8h3a4 4 0 0 1 0 8h-3z"/></svg>;
    case "youtube":  return <svg {...props}><rect x="2" y="5" width="20" height="14" rx="3"/><path d="m10 9 5 3-5 3z" fill="currentColor"/></svg>;
    case "instagram":return <svg {...props}><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".5" fill="currentColor"/></svg>;
    case "external": return <svg {...props}><path d="M14 4h6v6M20 4 10 14M19 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5"/></svg>;
    case "guitar":   return <svg {...props}><path d="M11 11.5 17 5l3 3-6.5 6.5M9.5 12.5l2 2M7 17a3 3 0 1 1-3-3l1-1a3 3 0 0 1 3 3z"/></svg>;
    case "ball":     return <svg {...props}><circle cx="12" cy="12" r="9"/><path d="M12 3l3 5-3 4-3-4zM5 9l4 1 1 4-3 3M19 9l-4 1-1 4 3 3"/></svg>;
    case "chess":    return <svg {...props}><path d="M9 21h6M10 21v-3h4v3M8 18h8l-1-5h-6zM9 13c-2 0-3-1.5-3-3l3-1V7l-1-1 2-2h4l2 2-1 1v2l3 1c0 1.5-1 3-3 3"/></svg>;
    case "star":     return <svg {...props}><circle cx="12" cy="12" r="3"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(20 12 12)"/></svg>;
    case "globe":    return <svg {...props}><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a14 14 0 0 1 0 20M12 2a14 14 0 0 0 0 20"/></svg>;
    case "rocket":   return <svg {...props}><path d="M14 4s5 0 5 5c0 0 1 5-5 9l-5-5c4-6 5-9 5-9zM8 14l-3 1 1 4 4 1 1-3M6 14a3 3 0 0 0-3 3"/></svg>;
    case "download": return <svg {...props}><path d="M12 3v12M7 10l5 5 5-5M5 21h14"/></svg>;
    case "spark":    return <svg {...props}><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/></svg>;
    case "book":     return <svg {...props}><path d="M4 5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v15l-5-3-5 3z"/><path d="M16 6h2a2 2 0 0 1 2 2v12l-4-2.4"/></svg>;
    case "drone":    return <svg {...props}><rect x="9.5" y="9.5" width="5" height="5" rx="1"/><path d="M12 9.5V7M12 14.5V17M9.5 12H7M14.5 12H17"/><circle cx="5" cy="5" r="2.4"/><circle cx="19" cy="5" r="2.4"/><circle cx="5" cy="19" r="2.4"/><circle cx="19" cy="19" r="2.4"/></svg>;
    /* ---- Beyond-engineering set (clean, legible at small sizes) ---- */
    case "music":    return <svg {...props}><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>;
    case "team":     return <svg {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
    case "puzzle":   return <svg {...props}><path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.302.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.302-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z"/></svg>;
    case "planet":   return <svg {...props}><circle cx="12" cy="12" r="5"/><ellipse cx="12" cy="12" rx="10" ry="3.4" transform="rotate(25 12 12)"/></svg>;
    case "share":    return <svg {...props}><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 3.98"/></svg>;
    case "orbit":
      return (
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
          <defs>
            <linearGradient id="gRingMark" x1="20" y1="14" x2="78" y2="92" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#3F9A47"/>
              <stop offset="0.5" stopColor="#2E7D36"/>
              <stop offset="1" stopColor="#1C5A23"/>
            </linearGradient>
            <linearGradient id="gOrbitMark" x1="10" y1="40" x2="92" y2="70" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#54AD57"/>
              <stop offset="1" stopColor="#2C7A35"/>
            </linearGradient>
            <linearGradient id="gSMark" x1="40" y1="26" x2="58" y2="80" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#7AC169"/>
              <stop offset="0.55" stopColor="#5AA64E"/>
              <stop offset="1" stopColor="#3C8A3C"/>
            </linearGradient>
            <clipPath id="orbitFrontMark">
              <rect x="-90" y="55" width="280" height="180" transform="rotate(-18 50 55)"/>
            </clipPath>
          </defs>
          <ellipse cx="50" cy="55" rx="47" ry="18" fill="none" stroke="url(#gOrbitMark)" strokeWidth="5.6" transform="rotate(-18 50 55)"/>
          <circle cx="50" cy="53" r="32" fill="none" stroke="url(#gRingMark)" strokeWidth="8.4"/>
          <circle cx="50" cy="53" r="28" fill="none" stroke="#6BB86B" strokeWidth="1.3" opacity="0.45"/>
          <path d="M60 29 C46 27 40.5 43 51.5 50 C63 57 60 75 44.5 75" fill="none" stroke="url(#gSMark)" strokeWidth="8.4" strokeLinecap="round"/>
          <path d="M60 29 C46 27 40.5 43 51.5 50 C63 57 60 75 44.5 75" fill="none" stroke="#86C972" strokeWidth="1.6" strokeLinecap="round" opacity="0.5"/>
          <ellipse cx="50" cy="55" rx="47" ry="18" fill="none" stroke="url(#gOrbitMark)" strokeWidth="5.6" transform="rotate(-18 50 55)" clipPath="url(#orbitFrontMark)"/>
        </svg>
      );
    default:         return null;
  }
};

window.Icon = Icon;
