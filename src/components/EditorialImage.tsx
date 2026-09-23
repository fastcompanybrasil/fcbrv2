import React from 'react';
import selenaRareBeautyImg from '../assets/selena-gomez-rare-beauty.jpg';

interface EditorialImageProps {
  type: string;
  className?: string;
  aspectRatio?: 'video' | 'square' | 'portrait' | 'wide' | 'auto';
  alt?: string;
}

export const EditorialImage: React.FC<EditorialImageProps> = ({
  type,
  className = '',
  aspectRatio = 'auto',
  alt = 'Fast Company Illustration'
}) => {
  const getAspectClass = () => {
    switch (aspectRatio) {
      case 'video': return 'aspect-[16/9]';
      case 'square': return 'aspect-square';
      case 'portrait': return 'aspect-[3/4]';
      case 'wide': return 'aspect-[21/9]';
      default: return '';
    }
  };

  // Render authentic editorial illustrations & images
  const renderSVG = () => {
    switch (type) {
      case 'rare-beauty-hero':
        return (
          <img
            src={selenaRareBeautyImg}
            alt={alt || "Selena Gomez fez da escuta a estratégia da Rare Beauty"}
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        );

      case 'best-dressed-hero':
        return (
          <svg viewBox="0 0 800 500" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="pol-shadow" x="-10%" y="-10%" width="125%" height="125%">
                <feDropShadow dx="2" dy="5" stdDeviation="4" floodOpacity="0.3" floodColor="#000" />
              </filter>
              <filter id="banner-shadow" x="-5%" y="-10%" width="110%" height="130%">
                <feDropShadow dx="0" dy="6" stdDeviation="6" floodOpacity="0.4" floodColor="#000" />
              </filter>
              <pattern id="card-noise" width="40" height="40" patternUnits="userSpaceOnUse">
                <rect width="40" height="40" fill="#f0eee9" />
                <circle cx="10" cy="10" r="1" fill="#dedad2" />
                <circle cx="30" cy="25" r="1.2" fill="#dedad2" />
                <circle cx="20" cy="35" r="0.8" fill="#dedad2" />
              </pattern>
            </defs>

            {/* Background bulletin board */}
            <rect width="800" height="500" fill="url(#card-noise)" />
            
            {/* Colorful underlying editorial magazine pages */}
            <rect x="250" y="40" width="340" height="380" fill="#2d3436" transform="rotate(-4 420 230)" opacity="0.85" />
            <rect x="200" y="100" width="380" height="240" fill="#e74c3c" transform="rotate(2 390 220)" opacity="0.9" />
            <rect x="220" y="120" width="350" height="220" fill="#f1c40f" transform="rotate(-2 390 230)" opacity="0.9" />
            <rect x="240" y="140" width="320" height="200" fill="#0984e3" transform="rotate(3 400 240)" opacity="0.85" />

            {/* Top Row Polaroids */}
            {/* Polaroid 1: Man in White Cape / Ornate White Garment (top-left) */}
            <g transform="translate(195, 25) rotate(-6)" filter="url(#pol-shadow)">
              <rect width="140" height="175" fill="#ffffff" rx="1" />
              <rect x="8" y="8" width="124" height="128" fill="#e8d8c3" />
              {/* Ornate ceremonial outfit */}
              <circle cx="70" cy="50" r="18" fill="#5c3826" />
              <path d="M25,136 C30,70 110,70 115,136 Z" fill="#fdfbf7" stroke="#e0c068" strokeWidth="2" />
              <path d="M50,75 L90,75 L70,125 Z" fill="#d4af37" />
              {/* Binder clip */}
              <rect x="62" y="-6" width="16" height="12" fill="#2d3436" rx="2" />
              <path d="M66,-6 L66,-12 L74,-12 L74,-6" fill="none" stroke="#636e72" strokeWidth="2" />
            </g>

            {/* Polaroid 2: Woman in black with sunglasses (top-center) */}
            <g transform="translate(355, 45) rotate(4)" filter="url(#pol-shadow)">
              <rect width="145" height="180" fill="#ffffff" rx="1" />
              <rect x="8" y="8" width="129" height="132" fill="#2d3436" />
              {/* Chic bangs & sunglasses */}
              <circle cx="72" cy="55" r="20" fill="#c49e7b" />
              <path d="M48,45 Q72,15 96,45 Q90,95 96,140 Q48,140 48,95 Z" fill="#8d5b4c" />
              <rect x="58" y="52" width="14" height="8" rx="2" fill="#000000" />
              <rect x="73" y="52" width="14" height="8" rx="2" fill="#000000" />
              <path d="M25,140 C35,90 105,90 115,140 Z" fill="#111111" />
              {/* Silver chain necklace */}
              <path d="M62,100 Q72,118 82,100" fill="none" stroke="#dcdde1" strokeWidth="2" />
              {/* Pushpin */}
              <circle cx="72" cy="4" r="5" fill="#e74c3c" />
              <circle cx="71" cy="3" r="1.5" fill="#ffffff" />
            </g>

            {/* Polaroid 3: Creative seated at desk/studio (top-center-right) */}
            <g transform="translate(500, 35) rotate(-3)" filter="url(#pol-shadow)">
              <rect width="140" height="175" fill="#ffffff" rx="1" />
              <rect x="8" y="8" width="124" height="128" fill="#f5f6fa" />
              {/* Seated creative figure */}
              <circle cx="70" cy="52" r="16" fill="#f3a683" />
              <path d="M45,45 Q70,25 95,45 Z" fill="#2f3542" />
              <path d="M35,136 C40,85 100,85 105,136 Z" fill="#f1f2f6" stroke="#ced6e0" />
              {/* Pushpin */}
              <circle cx="70" cy="4" r="5" fill="#f1c40f" />
              <circle cx="69" cy="3" r="1.5" fill="#ffffff" />
            </g>

            {/* Polaroid 4: Man in blue overcoat outdoors (top-right) */}
            <g transform="translate(620, 45) rotate(5)" filter="url(#pol-shadow)">
              <rect width="135" height="170" fill="#ffffff" rx="1" />
              <rect x="8" y="8" width="119" height="124" fill="#a4b0be" />
              {/* Running track red background slice */}
              <rect x="8" y="70" width="119" height="62" fill="#e15f41" opacity="0.7" />
              {/* Executive figure */}
              <circle cx="68" cy="48" r="18" fill="#e0a96d" />
              <path d="M46,40 Q68,20 90,40 Z" fill="#747d8c" />
              <path d="M30,132 C35,80 100,80 108,132 Z" fill="#1e3799" />
              {/* Binder clip */}
              <rect x="59" y="-6" width="16" height="12" fill="#2d3436" rx="2" />
              <path d="M63,-6 L63,-12 L71,-12 L71,-6" fill="none" stroke="#636e72" strokeWidth="2" />
            </g>

            {/* Bottom Row Polaroids */}
            {/* Polaroid 5: Woman in Denim with handbag (bottom-left) */}
            <g transform="translate(245, 270) rotate(-7)" filter="url(#pol-shadow)">
              <rect width="145" height="185" fill="#ffffff" rx="1" />
              <rect x="8" y="8" width="129" height="138" fill="#f5f5f5" />
              {/* Full body stylist in denim jacket */}
              <circle cx="72" cy="40" r="15" fill="#d2986f" />
              <path d="M52,35 Q72,15 92,35 Z" fill="#382218" />
              <rect x="52" y="60" width="40" height="42" fill="#4a69bd" rx="3" />
              <rect x="56" y="102" width="14" height="40" fill="#1e3799" />
              <rect x="74" y="102" width="14" height="40" fill="#1e3799" />
              {/* Orange Designer Handbag */}
              <rect x="86" y="88" width="20" height="22" fill="#eb4d4b" rx="2" />
              <path d="M91,88 C91,80 101,80 101,88" fill="none" stroke="#eb4d4b" strokeWidth="2" />
              {/* Pushpin */}
              <circle cx="72" cy="4" r="5" fill="#ffffff" stroke="#b2bec3" strokeWidth="1" />
            </g>

            {/* Polaroid 6: Woman in Vibrant Lime Suit in floral garden (bottom-center) */}
            <g transform="translate(415, 290) rotate(4)" filter="url(#pol-shadow)">
              <rect width="160" height="195" fill="#ffffff" rx="1" />
              <rect x="8" y="8" width="144" height="148" fill="#badc58" />
              {/* Garden floral background */}
              <circle cx="30" cy="120" r="14" fill="#ffffff" opacity="0.9" />
              <circle cx="45" cy="135" r="12" fill="#f9ca24" opacity="0.8" />
              <circle cx="125" cy="125" r="15" fill="#ffffff" opacity="0.9" />
              {/* Woman in neon chartreuse tailored suit */}
              <circle cx="80" cy="45" r="17" fill="#6d4c41" />
              <path d="M55,40 Q80,18 105,40 Q100,85 102,110 Q58,110 58,85 Z" fill="#2d3436" />
              <rect x="60" y="70" width="40" height="45" fill="#6ab04c" rx="4" />
              <rect x="63" y="115" width="15" height="38" fill="#6ab04c" />
              <rect x="82" y="115" width="15" height="38" fill="#6ab04c" />
              {/* Pushpin */}
              <circle cx="80" cy="4" r="5" fill="#22a6b3" />
            </g>

            {/* Polaroid 7: Man in Black Suit in Architecture hallway (bottom-right) */}
            <g transform="translate(575, 305) rotate(-3)" filter="url(#pol-shadow)">
              <rect width="145" height="180" fill="#ffffff" rx="1" />
              <rect x="8" y="8" width="129" height="134" fill="#dfdfdf" />
              {/* Classical archway */}
              <path d="M25,142 L25,50 Q72,15 120,50 L120,142 Z" fill="#f0f0f0" stroke="#cccccc" strokeWidth="1" />
              {/* Tailored modern black suit */}
              <circle cx="72" cy="45" r="16" fill="#e0a96d" />
              <path d="M52,38 Q72,20 92,38 Z" fill="#57606f" />
              <path d="M40,142 C45,82 100,82 105,142 Z" fill="#1e272e" />
              <rect x="68" y="78" width="8" height="24" fill="#ffffff" />
              {/* Pushpin */}
              <circle cx="72" cy="4" r="5" fill="#eb4d4b" />
            </g>

            {/* ========================================================= */}
            {/* Center Green Ribbon Banner: "BEST DRESSED IN BUSINESS 2026" */}
            {/* ========================================================= */}
            <g transform="translate(290, 200) rotate(-2)" filter="url(#banner-shadow)">
              {/* Rich green banner ribbon */}
              <rect x="0" y="0" width="370" height="84" fill="#135d38" rx="3" stroke="#0e4328" strokeWidth="2" />
              <rect x="3" y="3" width="364" height="78" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />

              {/* Pins at banner corners */}
              <circle cx="8" cy="8" r="4" fill="#d4af37" />
              <circle cx="362" cy="8" r="4" fill="#d4af37" />
              <circle cx="8" cy="76" r="4" fill="#d4af37" />
              <circle cx="362" cy="76" r="4" fill="#d4af37" />

              {/* Left Oval Seal: "FC" */}
              <g transform="translate(18, 14)">
                <ellipse cx="26" cy="28" rx="24" ry="24" fill="#0d4629" stroke="#d4af37" strokeWidth="1.5" />
                <text x="26" y="34" fill="#f5deb3" fontFamily="serif" fontSize="18" fontWeight="bold" fontStyle="italic" textAnchor="middle">FC</text>
              </g>

              {/* Main Typography: "BEST DRESSED IN BUSINESS" */}
              <text x="75" y="44" fill="#ffffff" fontFamily="Impact, 'Arial Black', sans-serif" fontSize="34" letterSpacing="1" fontWeight="900">
                BEST DRESSED
              </text>
              <text x="270" y="70" fill="#f5deb3" fontFamily="serif" fontSize="19" fontStyle="italic" fontWeight="bold">
                IN
              </text>
              <text x="295" y="72" fill="#ffffff" fontFamily="Impact, 'Arial Black', sans-serif" fontSize="28" letterSpacing="1" fontWeight="900">
                BUSINESS
              </text>

              {/* Year "2026" */}
              <rect x="238" y="70" width="36" height="12" fill="#0d4629" rx="1" />
              <text x="242" y="80" fill="#d4af37" fontFamily="sans-serif" fontSize="9" fontWeight="bold">2026</text>
            </g>
          </svg>
        );

      case 'navy-laser':
        return (
          <svg viewBox="0 0 200 115" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="115" fill="#0b192c" />
            {/* Stars */}
            <circle cx="20" cy="18" r="1" fill="#ffffff" opacity="0.8" />
            <circle cx="80" cy="14" r="1.5" fill="#ffffff" opacity="0.7" />
            <circle cx="150" cy="25" r="1" fill="#ffffff" opacity="0.9" />
            <circle cx="180" cy="10" r="1.2" fill="#ffffff" opacity="0.6" />
            {/* Warship Silhouette */}
            <polygon points="10,88 170,88 190,80 180,75 140,73 135,58 120,56 115,40 100,40 95,56 70,60 65,74 10,80" fill="#1e3e62" />
            {/* Radar / Mast */}
            <line x1="108" y1="40" x2="108" y2="28" stroke="#4a628a" strokeWidth="2" />
            <line x1="100" y1="32" x2="116" y2="32" stroke="#4a628a" strokeWidth="1.5" />
            {/* High Power Laser Weapon Beam */}
            <circle cx="140" cy="72" r="3.5" fill="#00ffff" />
            <line x1="140" y1="72" x2="195" y2="20" stroke="#00ffff" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="140" y1="72" x2="195" y2="20" stroke="#ffffff" strokeWidth="1" />
            {/* Laser Target Impact Flash */}
            <circle cx="195" cy="20" r="7" fill="#00ffff" opacity="0.6" />
            <circle cx="195" cy="20" r="2.5" fill="#ffffff" />
            {/* Ocean Waves */}
            <rect x="0" y="88" width="200" height="27" fill="#001a33" />
            <path d="M0,94 Q20,92 40,94 T80,94 T120,94 T160,94 T200,94" fill="none" stroke="#00ffff" strokeWidth="1" opacity="0.4" />
            <path d="M0,102 Q25,100 50,102 T100,102 T150,102 T200,102" fill="none" stroke="#1e3e62" strokeWidth="1.5" />
          </svg>
        );

      case 'meeting-faking':
        return (
          <svg viewBox="0 0 200 115" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="115" fill="#f8fafc" />
            {/* Conference Room Window */}
            <rect x="15" y="10" width="170" height="55" rx="4" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1" />
            <line x1="100" y1="10" x2="100" y2="65" stroke="#cbd5e1" strokeWidth="1" />
            <line x1="15" y1="38" x2="185" y2="38" stroke="#cbd5e1" strokeWidth="1" />
            {/* Conference Table */}
            <ellipse cx="100" cy="98" rx="85" ry="20" fill="#3b82f6" opacity="0.8" />
            <ellipse cx="100" cy="95" rx="80" ry="18" fill="#1d4ed8" />
            {/* Meeting Attendees Silhouettes */}
            {/* Person 1 - Left nodding */}
            <circle cx="45" cy="72" r="9" fill="#f59e0b" />
            <path d="M30,95 Q45,82 60,95 Z" fill="#d97706" />
            {/* Person 2 - Center presentation */}
            <circle cx="100" cy="65" r="10" fill="#ec4899" />
            <path d="M82,90 Q100,76 118,90 Z" fill="#db2777" />
            {/* Speech bubble / fake nod */}
            <rect x="115" y="48" width="40" height="16" rx="3" fill="#ffffff" stroke="#94a3b8" strokeWidth="1" />
            <text x="121" y="60" fill="#334155" fontSize="7.5" fontWeight="bold">"Agreed!"</text>
            {/* Person 3 - Right */}
            <circle cx="155" cy="72" r="9" fill="#10b981" />
            <path d="M140,95 Q155,82 170,95 Z" fill="#059669" />
          </svg>
        );

      case 'ai-correct-target':
        return (
          <svg viewBox="0 0 200 115" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="115" fill="#1e1e24" />
            {/* Concentric Target Circles */}
            <circle cx="100" cy="58" r="48" fill="#f97316" />
            <circle cx="100" cy="58" r="38" fill="#f8fafc" />
            <circle cx="100" cy="58" r="28" fill="#0ea5e9" />
            <circle cx="100" cy="58" r="18" fill="#facc15" />
            <circle cx="100" cy="58" r="9" fill="#ef4444" />
            <circle cx="100" cy="58" r="3" fill="#ffffff" />
            {/* Crosshairs */}
            <line x1="100" y1="6" x2="100" y2="109" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeDasharray="3,3" />
            <line x1="45" y1="58" x2="155" y2="58" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeDasharray="3,3" />
            {/* Laser Precision Arrow Hit */}
            <line x1="145" y1="20" x2="102" y2="56" stroke="#ffffff" strokeWidth="2.5" />
            <polygon points="100,58 107,51 104,60" fill="#ffffff" />
            <circle cx="100" cy="58" r="2" fill="#ef4444" />
          </svg>
        );

      case 'climate-cities-map':
        return (
          <svg viewBox="0 0 200 115" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="115" fill="#0f172a" />
            {/* Stylized US Map Mesh */}
            <path d="M25,35 Q40,26 65,29 Q95,22 135,27 Q175,32 180,50 Q175,76 160,94 Q120,98 90,94 Q60,89 35,76 Q20,58 25,35 Z" fill="#1e293b" stroke="#334155" strokeWidth="1.5" />
            {/* 157 Active Climate Action Cities Glowing Dots */}
            <circle cx="45" cy="45" r="3.5" fill="#22c55e" />
            <circle cx="45" cy="45" r="7" fill="#22c55e" opacity="0.3" />
            <circle cx="50" cy="68" r="3" fill="#22c55e" />
            <circle cx="75" cy="54" r="2.5" fill="#22c55e" />
            <circle cx="95" cy="42" r="3.5" fill="#22c55e" />
            <circle cx="95" cy="42" r="8" fill="#22c55e" opacity="0.3" />
            <circle cx="110" cy="62" r="3" fill="#22c55e" />
            <circle cx="130" cy="50" r="4" fill="#22c55e" />
            <circle cx="145" cy="44" r="3.5" fill="#22c55e" />
            <circle cx="155" cy="40" r="4.5" fill="#22c55e" />
            <circle cx="155" cy="40" r="9" fill="#22c55e" opacity="0.3" />
            <circle cx="150" cy="80" r="3" fill="#22c55e" />
            {/* Green network arcs */}
            <path d="M45,45 Q95,32 155,40" fill="none" stroke="#22c55e" strokeWidth="1" strokeDasharray="2,2" opacity="0.7" />
            <path d="M50,68 Q95,54 130,50" fill="none" stroke="#22c55e" strokeWidth="1" strokeDasharray="2,2" opacity="0.7" />
            <text x="18" y="108" fill="#22c55e" fontSize="8" fontWeight="bold" fontFamily="Poppins, sans-serif">157 CITIES RENEWABLE</text>
          </svg>
        );

      case 'regenerative-agri':
        return (
          <svg viewBox="0 0 300 180" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
            <rect width="300" height="180" fill="#fef3c7" />
            {/* Morning Sky & Sun */}
            <circle cx="230" cy="50" r="35" fill="#fde047" opacity="0.8" />
            {/* Distant Hills */}
            <path d="M0,110 Q80,80 160,105 T300,95 L300,180 L0,180 Z" fill="#84cc16" opacity="0.5" />
            <path d="M0,125 Q90,100 180,120 T300,110 L300,180 L0,180 Z" fill="#65a30d" opacity="0.7" />
            {/* Wheat / Crop Field Rows */}
            <path d="M0,140 Q100,130 200,145 T300,135 L300,180 L0,180 Z" fill="#4d7c0f" />
            {/* Family of Farmers Silhouette */}
            <g transform="translate(60, 80)">
              {/* Father */}
              <circle cx="40" cy="20" r="8" fill="#1e293b" />
              <path d="M25,35 L55,35 L50,80 L30,80 Z" fill="#1e293b" />
              {/* Daughter */}
              <circle cx="65" cy="35" r="6" fill="#1e293b" />
              <path d="M55,47 L75,47 L70,80 L60,80 Z" fill="#1e293b" />
            </g>
            {/* Drone / Tech Grid Overlay */}
            <circle cx="190" cy="35" r="4" fill="#0284c7" />
            <line x1="184" y1="35" x2="196" y2="35" stroke="#0284c7" strokeWidth="1.5" />
            <line x1="190" y1="35" x2="140" y2="130" stroke="#0284c7" strokeWidth="1" strokeDasharray="3,3" opacity="0.6" />
            <line x1="190" y1="35" x2="220" y2="135" stroke="#0284c7" strokeWidth="1" strokeDasharray="3,3" opacity="0.6" />
          </svg>
        );

      case 'retro-terminal':
        return (
          <svg viewBox="0 0 300 180" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
            <rect width="300" height="180" fill="#0a1a0f" />
            {/* CRT Monitor Curvature */}
            <rect x="15" y="15" width="270" height="150" rx="10" fill="#051208" stroke="#1b4d24" strokeWidth="3" />
            {/* Glowing Phosphor Scanlines */}
            <line x1="25" y1="35" x2="275" y2="35" stroke="#22c55e" strokeWidth="0.5" opacity="0.3" />
            <line x1="25" y1="55" x2="275" y2="55" stroke="#22c55e" strokeWidth="0.5" opacity="0.3" />
            <line x1="25" y1="75" x2="275" y2="75" stroke="#22c55e" strokeWidth="0.5" opacity="0.3" />
            <line x1="25" y1="95" x2="275" y2="95" stroke="#22c55e" strokeWidth="0.5" opacity="0.3" />
            {/* Terminal Text */}
            <text x="35" y="50" fill="#4ade80" fontFamily="monospace" fontSize="13" fontWeight="bold">&gt; LEADERSHIP_v2026.INIT</text>
            <text x="35" y="75" fill="#22c55e" fontFamily="monospace" fontSize="11">&gt; SYNERGY: DEPRECATED</text>
            <text x="35" y="100" fill="#22c55e" fontFamily="monospace" fontSize="11">&gt; AUTONOMY: 100%</text>
            <text x="35" y="125" fill="#4ade80" fontFamily="monospace" fontSize="11">&gt; AI_COLLABORATION: ACTIVE</text>
            {/* Blinking Cursor */}
            <rect x="35" y="135" width="10" height="14" fill="#4ade80" />
          </svg>
        );

      case 'bot-traffic':
        return (
          <svg viewBox="0 0 300 180" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
            <rect width="300" height="180" fill="#0f172a" />
            {/* Cyber Network Grid */}
            <defs>
              <pattern id="botgrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="300" height="180" fill="url(#botgrid)" />
            {/* Server Rack Node */}
            <rect x="40" y="40" width="70" height="100" rx="4" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
            <line x1="50" y1="60" x2="100" y2="60" stroke="#38bdf8" strokeWidth="2" />
            <line x1="50" y1="75" x2="100" y2="75" stroke="#38bdf8" strokeWidth="2" />
            <circle cx="55" cy="95" r="3" fill="#ef4444" />
            <circle cx="68" cy="95" r="3" fill="#22c55e" />
            <circle cx="81" cy="95" r="3" fill="#38bdf8" />
            {/* Bot Influx Waves */}
            <path d="M120,90 Q180,40 250,70" fill="none" stroke="#ef4444" strokeWidth="3" />
            <path d="M120,95 Q180,95 250,95" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="4,4" />
            <path d="M120,100 Q180,150 250,120" fill="none" stroke="#ef4444" strokeWidth="3" />
            {/* Bot Icon */}
            <rect x="230" y="70" width="45" height="40" rx="6" fill="#ef4444" />
            <circle cx="242" cy="85" r="4" fill="#ffffff" />
            <circle cx="263" cy="85" r="4" fill="#ffffff" />
            <rect x="244" y="97" width="17" height="4" rx="2" fill="#ffffff" />
            <line x1="252" y1="70" x2="252" y2="60" stroke="#ef4444" strokeWidth="2" />
            <circle cx="252" cy="58" r="3" fill="#ef4444" />
          </svg>
        );

      case 'sub-ivy-league':
        return (
          <svg viewBox="0 0 300 200" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="ivy-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4c1d95" />
                <stop offset="100%" stopColor="#be185d" />
              </linearGradient>
            </defs>
            <rect width="300" height="200" fill="url(#ivy-grad)" />
            {/* Classic University Pillars / Colonnade */}
            <path d="M40,160 L40,60 L60,60 L60,160 Z" fill="#ffffff" opacity="0.3" />
            <path d="M80,160 L80,60 L100,60 L100,160 Z" fill="#ffffff" opacity="0.3" />
            <path d="M120,160 L120,60 L140,60 L140,160 Z" fill="#ffffff" opacity="0.3" />
            <path d="M30,60 L150,60 L90,25 Z" fill="#ffffff" opacity="0.4" />
            {/* Glowing Google AI Network Mesh */}
            <circle cx="210" cy="80" r="35" fill="none" stroke="#f43f5e" strokeWidth="3" />
            <circle cx="210" cy="80" r="6" fill="#fbbf24" />
            <circle cx="170" cy="120" r="5" fill="#38bdf8" />
            <circle cx="250" cy="130" r="5" fill="#4ade80" />
            <line x1="210" y1="80" x2="170" y2="120" stroke="#ffffff" strokeWidth="2" />
            <line x1="210" y1="80" x2="250" y2="130" stroke="#ffffff" strokeWidth="2" />
          </svg>
        );

      case 'sub-health-maxxing':
        return (
          <svg viewBox="0 0 300 200" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
            <rect width="300" height="200" fill="#450a0a" />
            {/* Deep Crimson Tunnel Perspective */}
            <polygon points="0,0 120,80 180,80 300,0" fill="#7f1d1d" opacity="0.5" />
            <polygon points="0,200 120,120 180,120 300,200" fill="#7f1d1d" opacity="0.5" />
            <polygon points="0,0 120,80 120,120 0,200" fill="#991b1b" opacity="0.4" />
            <polygon points="300,0 180,80 180,120 300,200" fill="#991b1b" opacity="0.4" />
            {/* Glowing Exit Portal */}
            <ellipse cx="150" cy="100" rx="30" ry="20" fill="#fca5a5" />
            {/* Human Silhouette crawling out */}
            <circle cx="145" cy="95" r="6" fill="#1c1917" />
            <path d="M135,108 L155,105 L160,118 L130,118 Z" fill="#1c1917" />
            {/* ECG Pulse Overlay */}
            <path d="M30,150 L100,150 L115,120 L130,175 L145,140 L160,150 L270,150" fill="none" stroke="#ef4444" strokeWidth="2.5" />
          </svg>
        );

      case 'sub-walmart-ceo':
        return (
          <svg viewBox="0 0 300 200" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="wal-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0369a1" />
                <stop offset="100%" stopColor="#0f766e" />
              </linearGradient>
            </defs>
            <rect width="300" height="200" fill="url(#wal-grad)" />
            {/* Retail Grid Dots (representing 5,200 stores) */}
            <g fill="#ffffff" opacity="0.25">
              <circle cx="40" cy="40" r="2" /><circle cx="70" cy="40" r="2" /><circle cx="100" cy="40" r="2" />
              <circle cx="40" cy="70" r="2" /><circle cx="70" cy="70" r="2" /><circle cx="100" cy="70" r="2" />
              <circle cx="40" cy="100" r="2" /><circle cx="70" cy="100" r="2" /><circle cx="100" cy="100" r="2" />
            </g>
            {/* Walmart Spark Icon Subtle Outline */}
            <path d="M230,40 L230,60 M215,48 L245,52 M220,60 L240,40" stroke="#facc15" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
            {/* John Furner Portrait Silhouette */}
            <g transform="translate(110, 40)">
              <ellipse cx="40" cy="35" rx="20" ry="24" fill="#ffedd5" />
              <path d="M22,32 Q40,14 58,32 Q50,22 30,22 Z" fill="#475569" />
              <path d="M5,75 L25,60 L40,85 L55,60 L75,75 L85,160 L0,160 Z" fill="#0f172a" />
              <polygon points="32,60 48,60 40,95" fill="#ffffff" />
              <polygon points="38,70 42,70 44,110 40,118 36,110" fill="#0284c7" />
            </g>
          </svg>
        );

      case 'colunista-fred-gelli':
        return (
          <svg viewBox="0 0 320 200" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="bio-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#042f2e" />
                <stop offset="60%" stopColor="#064e3b" />
                <stop offset="100%" stopColor="#022c22" />
              </linearGradient>
              <linearGradient id="spiral-glow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="50%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#a3e635" />
              </linearGradient>
            </defs>
            <rect width="320" height="200" fill="url(#bio-grad)" />
            {/* Hexagonal Biomimetic Matrix */}
            <g stroke="#10b981" strokeWidth="0.8" opacity="0.25" fill="none">
              <polygon points="50,40 65,30 80,40 80,60 65,70 50,60" />
              <polygon points="80,40 95,30 110,40 110,60 95,70 80,60" />
              <polygon points="65,70 80,60 95,70 95,90 80,100 65,90" />
              <polygon points="210,120 225,110 240,120 240,140 225,150 210,140" />
              <polygon points="240,120 255,110 270,120 270,140 255,150 240,140" />
            </g>
            {/* Golden Ratio Nautilus Spiral Architecture */}
            <g transform="translate(160, 100)">
              <circle cx="0" cy="0" r="70" fill="none" stroke="url(#spiral-glow)" strokeWidth="2.5" opacity="0.85" />
              <path d="M0,0 Q35,-10 45,25 Q55,60 10,70 Q-40,75 -60,35 Q-75,-15 -35,-55 Q15,-80 65,-50" fill="none" stroke="#6ee7b7" strokeWidth="3" strokeLinecap="round" />
              <path d="M0,0 Q20,-5 25,15 Q30,35 5,40 Q-25,45 -35,20 Q-45,-10 -20,-30" fill="none" stroke="#a3e635" strokeWidth="2" strokeLinecap="round" opacity="0.9" />
              {/* Core nucleus spark */}
              <circle cx="0" cy="0" r="6" fill="#fef08a" />
              <circle cx="0" cy="0" r="16" fill="#10b981" opacity="0.3" />
            </g>
            {/* Minimalist Botanical Leaf Silhouette */}
            <path d="M260,170 Q280,120 310,100 Q290,140 260,170 Z" fill="#34d399" opacity="0.4" />
          </svg>
        );

      case 'colunista-ana-bavon':
        return (
          <svg viewBox="0 0 320 200" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="ana-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1c1917" />
                <stop offset="100%" stopColor="#292524" />
              </linearGradient>
            </defs>
            <rect width="320" height="200" fill="url(#ana-bg)" />
            {/* Overlapping Plural Perspectives & Diversity Color Fields */}
            <g transform="translate(60, 20)">
              {/* Profile 1: Warm Terracotta */}
              <path d="M40,150 L40,80 Q40,30 85,30 Q120,30 120,70 L120,150 Z" fill="#ea580c" opacity="0.85" />
              {/* Profile 2: Deep Ultramarine Cobalt */}
              <path d="M90,150 L90,60 Q90,15 140,15 Q180,15 180,65 L180,150 Z" fill="#2563eb" opacity="0.85" style={{ mixBlendMode: 'screen' }} />
              {/* Profile 3: Radiant Golden Ochre */}
              <circle cx="150" cy="75" r="45" fill="#f59e0b" opacity="0.9" style={{ mixBlendMode: 'screen' }} />
              {/* Profile 4: Coral Pink Accent */}
              <path d="M10,150 Q10,90 55,90 Q90,90 90,150 Z" fill="#f43f5e" opacity="0.75" />
              {/* Central Prism Intersection */}
              <circle cx="115" cy="70" r="14" fill="#ffffff" opacity="0.95" />
            </g>
            {/* Dynamic Minimalist Horizon Line */}
            <line x1="20" y1="175" x2="300" y2="175" stroke="#78716c" strokeWidth="1" strokeDasharray="4 4" />
          </svg>
        );

      case 'colunista-mm-izidoro':
        return (
          <svg viewBox="0 0 320 200" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
            <rect width="320" height="200" fill="#121212" />
            {/* Street Culture Concrete Grid & Spray Stencil Aesthetics */}
            <line x1="0" y1="140" x2="320" y2="140" stroke="#262626" strokeWidth="2" />
            {/* Bold Acid Lime Geometric Block */}
            <polygon points="30,30 140,30 115,165 5,165" fill="#a3e635" />
            {/* Raw Black Stencil Cutouts */}
            <rect x="35" y="50" width="60" height="12" fill="#121212" />
            <rect x="30" y="70" width="75" height="12" fill="#121212" />
            <rect x="25" y="90" width="50" height="12" fill="#121212" />
            {/* Stylized Minimalist Turntable / Vinyl Groove Circle */}
            <g transform="translate(210, 95)">
              <circle cx="0" cy="0" r="60" fill="none" stroke="#ffffff" strokeWidth="1.5" opacity="0.3" />
              <circle cx="0" cy="0" r="45" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.5" strokeDasharray="6 4" />
              <circle cx="0" cy="0" r="30" fill="none" stroke="#a3e635" strokeWidth="2" />
              <circle cx="0" cy="0" r="12" fill="#f43f5e" />
              <circle cx="0" cy="0" r="4" fill="#ffffff" />
            </g>
            {/* Street Spray Drops */}
            <circle cx="160" cy="45" r="3" fill="#a3e635" />
            <circle cx="175" cy="55" r="2" fill="#a3e635" />
            <circle cx="150" cy="70" r="4" fill="#ffffff" opacity="0.6" />
          </svg>
        );

      case 'colunista-silvana-bahia':
        return (
          <svg viewBox="0 0 320 200" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="silvana-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e1035" />
                <stop offset="50%" stopColor="#2e1065" />
                <stop offset="100%" stopColor="#0f0728" />
              </linearGradient>
              <linearGradient id="gold-amber" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="60%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>
            </defs>
            <rect width="320" height="200" fill="url(#silvana-bg)" />
            {/* Ancestral Geometric Totem & Cyber Braided Circuitry */}
            <g transform="translate(160, 100)">
              {/* Diamond Matrix */}
              <polygon points="0,-75 65,0 0,75 -65,0" fill="none" stroke="url(#gold-amber)" strokeWidth="2" />
              <polygon points="0,-55 45,0 0,55 -45,0" fill="none" stroke="#ec4899" strokeWidth="1.5" opacity="0.8" />
              <polygon points="0,-35 28,0 0,35 -28,0" fill="#a855f7" fillOpacity="0.3" stroke="#a855f7" strokeWidth="1" />
              {/* Central Glowing Processor Seed */}
              <circle cx="0" cy="0" r="10" fill="url(#gold-amber)" />
              {/* Circuit Bus Lines to Periphery */}
              <line x1="-65" y1="0" x2="-130" y2="0" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5 3" />
              <line x1="65" y1="0" x2="130" y2="0" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5 3" />
              <line x1="0" y1="-75" x2="0" y2="-90" stroke="#ec4899" strokeWidth="2" />
              <line x1="0" y1="75" x2="0" y2="90" stroke="#ec4899" strokeWidth="2" />
              {/* Cyber Nodes */}
              <circle cx="-130" cy="0" r="4" fill="#06b6d4" />
              <circle cx="130" cy="0" r="4" fill="#06b6d4" />
            </g>
          </svg>
        );

      case 'colunista-brasilidade-gringa':
        return (
          <svg viewBox="0 0 320 200" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="sonic-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#18181b" />
                <stop offset="100%" stopColor="#09090b" />
              </linearGradient>
            </defs>
            <rect width="320" height="200" fill="url(#sonic-bg)" />
            {/* Sonic Waveforms / Audio Branding Geometry */}
            <g transform="translate(160, 100)">
              {/* Concentric Sonic Resonance Waves */}
              <circle cx="0" cy="0" r="85" fill="none" stroke="#f97316" strokeWidth="1.2" opacity="0.3" strokeDasharray="8 4" />
              <circle cx="0" cy="0" r="65" fill="none" stroke="#fbbf24" strokeWidth="2" opacity="0.6" />
              <circle cx="0" cy="0" r="45" fill="none" stroke="#ea580c" strokeWidth="2.5" opacity="0.8" />
              <circle cx="0" cy="0" r="25" fill="#f97316" opacity="0.9" />
              <circle cx="0" cy="0" r="8" fill="#ffffff" />
            </g>
            {/* Equalizer Frequency Bars */}
            <g fill="#f59e0b" opacity="0.7">
              <rect x="30" y="85" width="4" height="30" rx="2" />
              <rect x="42" y="70" width="4" height="60" rx="2" />
              <rect x="54" y="60" width="4" height="80" rx="2" fill="#f97316" />
              <rect x="66" y="80" width="4" height="40" rx="2" />
              <rect x="250" y="80" width="4" height="40" rx="2" />
              <rect x="262" y="60" width="4" height="80" rx="2" fill="#f97316" />
              <rect x="274" y="70" width="4" height="60" rx="2" />
              <rect x="286" y="85" width="4" height="30" rx="2" />
            </g>
          </svg>
        );

      case 'colunista-overview-effect':
        return (
          <svg viewBox="0 0 320 200" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="overview-sky" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#7dd3fc" />
                <stop offset="45%" stopColor="#e0e7ff" />
                <stop offset="70%" stopColor="#fed7aa" />
                <stop offset="100%" stopColor="#fbcfe8" />
              </linearGradient>
              <linearGradient id="overview-sand" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#d6cfc4" />
                <stop offset="100%" stopColor="#b8aba0" />
              </linearGradient>
            </defs>
            {/* Horizon Sky */}
            <rect width="320" height="130" fill="url(#overview-sky)" />
            {/* Sandy Plains Ground */}
            <rect y="130" width="320" height="70" fill="url(#overview-sand)" />
            
            {/* Red Perspective Threads */}
            <g stroke="#ef4444" strokeWidth="1.2" opacity="0.95">
              <line x1="72" y1="78" x2="252" y2="88" />
              <line x1="72" y1="78" x2="160" y2="98" />
              <line x1="252" y1="88" x2="160" y2="98" />
              <line x1="72" y1="84" x2="160" y2="108" />
              <line x1="252" y1="94" x2="160" y2="108" />
              <line x1="72" y1="78" x2="320" y2="120" />
              <line x1="252" y1="88" x2="0" y2="115" />
              <line x1="72" y1="88" x2="252" y2="98" />
              <line x1="160" y1="102" x2="0" y2="90" />
              <line x1="160" y1="102" x2="320" y2="92" />
            </g>

            {/* Left Figure in Black Suit */}
            <g transform="translate(56, 52)">
              <ellipse cx="16" cy="18" rx="7" ry="9" fill="#18181b" />
              <path d="M7,28 L25,28 L30,86 L2,86 Z" fill="#09090b" />
              <path d="M9,86 L14,124 L6,124 Z" fill="#18181b" />
              <path d="M21,86 L26,124 L18,124 Z" fill="#18181b" />
              {/* Shoes */}
              <ellipse cx="10" cy="125" rx="5" ry="2.5" fill="#78350f" />
              <ellipse cx="23" cy="125" rx="5" ry="2.5" fill="#78350f" />
            </g>

            {/* Right Figure in Black Suit */}
            <g transform="translate(240, 68)">
              <ellipse cx="12" cy="14" rx="5.5" ry="7" fill="#18181b" />
              <path d="M4,22 L20,22 L24,70 L0,70 Z" fill="#09090b" />
              <path d="M6,70 L10,102 L4,102 Z" fill="#18181b" />
              <path d="M16,70 L20,102 L14,102 Z" fill="#18181b" />
              <ellipse cx="7" cy="103" rx="4" ry="2" fill="#09090b" />
              <ellipse cx="17" cy="103" rx="4" ry="2" fill="#09090b" />
            </g>

            {/* Distant Center Figure */}
            <g transform="translate(154, 88)">
              <circle cx="6" cy="7" r="3.5" fill="#18181b" />
              <rect x="2" y="11" width="8" height="24" fill="#09090b" />
              <line x1="4" y1="35" x2="4" y2="48" stroke="#09090b" strokeWidth="2.5" />
              <line x1="8" y1="35" x2="8" y2="48" stroke="#09090b" strokeWidth="2.5" />
            </g>
          </svg>
        );

      case 'colunista-rock-in-rio':
        return (
          <svg viewBox="0 0 320 200" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="rir-bg" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1e3a8a" />
                <stop offset="40%" stopColor="#172554" />
                <stop offset="100%" stopColor="#0b1120" />
              </linearGradient>
              <radialGradient id="rir-glow" cx="50%" cy="45%" r="40%">
                <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8" />
                <stop offset="60%" stopColor="#dc2626" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#172554" stopOpacity="0" />
              </radialGradient>
            </defs>
            {/* Dark stadium concert background */}
            <rect width="320" height="200" fill="url(#rir-bg)" />
            
            {/* Glow Behind Globe */}
            <circle cx="160" cy="95" r="75" fill="url(#rir-glow)" />

            {/* Geodesic Metallic Globe Framework */}
            <g stroke="#f87171" strokeWidth="2.2" fill="none" opacity="0.95">
              <circle cx="160" cy="95" r="54" />
              <ellipse cx="160" cy="95" rx="54" ry="24" />
              <ellipse cx="160" cy="95" rx="54" ry="42" />
              <ellipse cx="160" cy="95" rx="24" ry="54" />
              <line x1="160" y1="41" x2="160" y2="149" />
              <line x1="106" y1="95" x2="214" y2="95" />
              {/* Diagonal struts */}
              <line x1="122" y1="56" x2="198" y2="134" strokeWidth="1.5" />
              <line x1="122" y1="134" x2="198" y2="56" strokeWidth="1.5" />
            </g>

            {/* Rock In Rio Neon Red Graffiti Tag */}
            <g transform="translate(112, 32)">
              <path 
                d="M10,22 Q24,6 45,18 Q65,4 82,16 Q95,2 108,18 Q90,26 65,22 Q40,30 20,24 Z" 
                fill="#ef4444" 
                filter="drop-shadow(0px 2px 6px #b91c1c)" 
              />
              <text 
                x="54" 
                y="20" 
                fill="#ffffff" 
                fontFamily="Impact, sans-serif" 
                fontSize="18" 
                fontWeight="900" 
                fontStyle="italic"
                textAnchor="middle" 
                letterSpacing="1"
              >
                Rock in Rio
              </text>
            </g>

            {/* Cheering Concert Crowd Silhouettes */}
            <path 
              d="M0,200 L0,155 Q20,135 35,160 Q45,120 60,165 Q70,140 85,150 Q95,115 110,158 Q125,130 140,165 Q150,110 165,160 Q180,125 195,168 Q210,118 225,160 Q240,135 255,162 Q270,110 285,165 Q300,140 320,152 L320,200 Z" 
              fill="#050811" 
            />
            {/* Raised hands and arms */}
            <g stroke="#050811" strokeWidth="5" strokeLinecap="round">
              <line x1="30" y1="170" x2="28" y2="128" />
              <line x1="28" y1="128" x2="24" y2="120" />
              <line x1="65" y1="165" x2="68" y2="122" />
              <line x1="102" y1="170" x2="105" y2="112" />
              <line x1="145" y1="165" x2="148" y2="118" />
              <line x1="175" y1="165" x2="172" y2="114" />
              <line x1="218" y1="170" x2="215" y2="116" />
              <line x1="250" y1="165" x2="254" y2="124" />
              <line x1="290" y1="170" x2="288" y2="118" />
            </g>
          </svg>
        );

      case 'colunista-cadeira-maternidade':
        return (
          <svg viewBox="0 0 320 200" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="split-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ca8a04" />
                <stop offset="50%" stopColor="#eab308" />
                <stop offset="50.1%" stopColor="#0284c7" />
                <stop offset="100%" stopColor="#0891b2" />
              </linearGradient>
            </defs>
            <rect width="320" height="200" fill="url(#split-bg)" />

            {/* Left Colorful Notebook/Pencil Graphic Accents */}
            <g transform="translate(18, 55)">
              <rect x="0" y="0" width="18" height="65" fill="#b91c1c" rx="2" />
              <rect x="6" y="8" width="6" height="50" fill="#09090b" />
              <polygon points="24,15 38,10 46,65 32,70" fill="#15803d" />
            </g>

            {/* White Plastic Chair Motif in Background */}
            <g transform="translate(195, 20)" opacity="0.6">
              <path d="M10,95 Q15,10 50,15 Q85,20 80,95 Z" fill="#ffffff" />
              {/* Chair back ventilation slots */}
              <line x1="30" y1="35" x2="28" y2="80" stroke="#0891b2" strokeWidth="4" strokeLinecap="round" />
              <line x1="45" y1="35" x2="45" y2="80" stroke="#0891b2" strokeWidth="4" strokeLinecap="round" />
              <line x1="60" y1="35" x2="62" y2="80" stroke="#0891b2" strokeWidth="4" strokeLinecap="round" />
            </g>

            {/* Central Realistic Handshake */}
            <g transform="translate(70, 40)">
              {/* Left Wrist & Forearm */}
              <path d="M0,62 Q35,52 65,48 L75,70 Q45,78 0,85 Z" fill="#f87171" opacity="0.4" />
              <path d="M5,60 Q35,50 68,48 L80,72 Q45,82 5,86 Z" fill="#fed7aa" />
              
              {/* Right Wrist & Forearm */}
              <path d="M190,62 Q160,52 130,48 L120,72 Q150,82 190,86 Z" fill="#fed7aa" />

              {/* Interlocking Fingers Clasp */}
              <ellipse cx="100" cy="55" rx="30" ry="24" fill="#fbcfe8" />
              <path d="M72,50 Q105,32 128,52 Q115,76 88,72 Z" fill="#ea580c" opacity="0.15" />
              {/* Fingers curled */}
              <rect x="80" y="44" width="22" height="12" rx="6" fill="#fbcfe8" stroke="#f43f5e" strokeWidth="1.5" />
              <rect x="82" y="58" width="24" height="12" rx="6" fill="#fbcfe8" stroke="#f43f5e" strokeWidth="1.5" />
              <rect x="85" y="72" width="22" height="12" rx="6" fill="#fbcfe8" stroke="#f43f5e" strokeWidth="1.5" />
              <rect x="100" y="46" width="20" height="28" rx="8" fill="#ffedd5" stroke="#f43f5e" strokeWidth="1.5" />
            </g>
          </svg>
        );

      case 'colunista-desinvencao-pobreza':
        return (
          <svg viewBox="0 0 320 200" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="silver-frame" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e4e4e7" />
                <stop offset="50%" stopColor="#a1a1aa" />
                <stop offset="100%" stopColor="#71717a" />
              </linearGradient>
              <linearGradient id="bug-neon" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#facc15" />
                <stop offset="40%" stopColor="#a3e635" />
                <stop offset="80%" stopColor="#22c55e" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
            {/* Outer Baroque Picture Frame */}
            <rect width="320" height="200" fill="url(#silver-frame)" stroke="#52525b" strokeWidth="4" />
            <rect x="12" y="10" width="296" height="180" fill="none" stroke="#27272a" strokeWidth="2" />
            <rect x="18" y="15" width="284" height="170" fill="#18181b" />

            {/* Inner Black-and-White Favela / Colonial Azulejo Texture */}
            <g fill="#71717a" opacity="0.45">
              {/* Portuguese tiles / Favela grid */}
              <pattern id="favela-tile" width="24" height="24" patternUnits="userSpaceOnUse">
                <rect width="24" height="24" fill="#27272a" stroke="#52525b" strokeWidth="0.8" />
                <circle cx="12" cy="12" r="6" fill="#3f3f46" />
                <path d="M0,0 L24,24 M24,0 L0,24" stroke="#52525b" strokeWidth="0.5" />
              </pattern>
              <rect x="18" y="15" width="284" height="170" fill="url(#favela-tile)" />
            </g>

            {/* Vibrant Neon Iridescent Grasshopper on Foreground */}
            <g transform="translate(130, 48)">
              {/* Antennae */}
              <path d="M40,32 Q25,12 10,8" stroke="#a3e635" strokeWidth="2" fill="none" />
              <path d="M42,30 Q30,5 20,2" stroke="#facc15" strokeWidth="2" fill="none" />
              
              {/* Head & Thorax */}
              <polygon points="40,35 60,25 75,36 55,48" fill="url(#bug-neon)" stroke="#15803d" strokeWidth="1.2" />
              <circle cx="48" cy="32" r="4.5" fill="#facc15" stroke="#14532d" strokeWidth="1" />
              
              {/* Long Cyber Wings / Body */}
              <polygon points="65,28 150,42 145,58 75,44" fill="url(#bug-neon)" stroke="#15803d" strokeWidth="1.5" />
              <path d="M72,34 L142,48 M76,40 L138,52" stroke="#ffffff" strokeWidth="1" opacity="0.6" />

              {/* Powerful Hind Leg */}
              <polyline points="72,44 110,12 128,75 140,82" stroke="url(#bug-neon)" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <polyline points="62,48 78,82 88,88" stroke="#a3e635" strokeWidth="3" strokeLinecap="round" fill="none" />
              <polyline points="50,48 55,78 62,82" stroke="#a3e635" strokeWidth="3" strokeLinecap="round" fill="none" />
            </g>
          </svg>
        );

      case 'sub-personal-brand':
        return (
          <svg viewBox="0 0 300 200" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
            <rect width="300" height="200" fill="#18181b" />
            {/* Monochromatic Geometric Badge */}
            <rect x="25" y="25" width="250" height="150" fill="none" stroke="#3f3f46" strokeWidth="2" />
            <circle cx="150" cy="85" r="45" fill="#27272a" />
            {/* Group Leader Portraits Silhouettes */}
            <circle cx="115" cy="90" r="18" fill="#e4e4e7" />
            <circle cx="185" cy="90" r="18" fill="#a1a1aa" />
            <circle cx="150" cy="80" r="22" fill="#facc15" />
            <text x="150" y="150" fill="#ffffff" fontFamily="Poppins, sans-serif" fontSize="14" fontWeight="800" textAnchor="middle" letterSpacing="1">196-POINT GUIDE</text>
          </svg>
        );

      case 'ai-transformation-wave':
        return (
          <svg viewBox="0 0 240 160" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
            <rect width="240" height="160" fill="#020617" />
            <defs>
              <linearGradient id="wave-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="50%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
            </defs>
            <path d="M0,90 C50,40 100,140 150,80 C180,45 210,120 240,60 L240,160 L0,160 Z" fill="url(#wave-grad)" opacity="0.8" />
            <path d="M0,110 C60,70 120,150 180,95 C200,80 220,130 240,85 L240,160 L0,160 Z" fill="#0284c7" opacity="0.6" />
          </svg>
        );

      case 'scale-lightbulb':
        return (
          <svg viewBox="0 0 240 160" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
            <rect width="240" height="160" fill="#0c4a6e" />
            {/* Blueprint grid lines */}
            <defs>
              <pattern id="bpgrid" width="16" height="16" patternUnits="userSpaceOnUse">
                <path d="M 16 0 L 0 0 0 16" fill="none" stroke="#0284c7" strokeWidth="0.8" opacity="0.4" />
              </pattern>
            </defs>
            <rect width="240" height="160" fill="url(#bpgrid)" />
            {/* Glowing Golden Lightbulb */}
            <circle cx="120" cy="70" r="32" fill="#fef08a" opacity="0.9" />
            <circle cx="120" cy="70" r="45" fill="#facc15" opacity="0.25" />
            {/* Filament */}
            <path d="M110,75 L115,55 L125,55 L130,75" fill="none" stroke="#ca8a04" strokeWidth="2.5" />
            {/* Base */}
            <rect x="110" y="98" width="20" height="14" rx="2" fill="#94a3b8" />
            <rect x="113" y="112" width="14" height="6" rx="2" fill="#64748b" />
          </svg>
        );

      case 'brand-identity-cards':
        return (
          <svg viewBox="0 0 320 200" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
            {/* Vibrant Indigo Background */}
            <rect width="320" height="200" fill="#4338ca" />
            
            {/* 6 Grid Panels with Thin White Borders */}
            <g stroke="#ffffff" strokeWidth="2.5" fill="none">
              {/* Outer border & dividers */}
              <rect x="25" y="20" width="270" height="160" />
              <line x1="115" y1="20" x2="115" y2="180" />
              <line x1="205" y1="20" x2="205" y2="180" />
              <line x1="25" y1="100" x2="295" y2="100" />
            </g>

            {/* Panel 1 (Top Left): Megaphone with hearts */}
            <g transform="translate(30, 25)">
              <rect width="80" height="70" fill="#3730a3" opacity="0.4" />
              {/* Arm/Hand */}
              <path d="M10,70 L25,48 L35,55 L20,70 Z" fill="#fed7aa" />
              {/* Megaphone */}
              <polygon points="30,42 62,28 62,60 30,48" fill="#ffffff" />
              <rect x="24" y="38" width="8" height="14" rx="2" fill="#ec4899" />
              {/* Hearts */}
              <circle cx="68" cy="28" r="3.5" fill="#f43f5e" />
              <circle cx="74" cy="36" r="3" fill="#f43f5e" />
            </g>

            {/* Panel 2 (Top Center): Hand holding envelope/note */}
            <g transform="translate(120, 25)">
              <rect width="80" height="70" fill="#ea580c" />
              {/* Forearm & Hand */}
              <path d="M40,70 L40,46 Q40,40 45,40 Q50,40 50,46 L50,70 Z" fill="#fcd34d" />
              {/* White card with handwriting */}
              <rect x="30" y="32" width="30" height="18" rx="2" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
              <path d="M36,40 Q40,36 45,40 T54,40" stroke="#475569" strokeWidth="1.5" fill="none" />
            </g>

            {/* Panel 3 (Top Right): Hand doing OK gesture */}
            <g transform="translate(210, 25)">
              <rect width="80" height="70" fill="#db2777" />
              {/* Hand in black sleeve */}
              <rect x="32" y="55" width="22" height="15" fill="#0f172a" />
              {/* OK Fingers in peach skin */}
              <circle cx="43" cy="42" r="7" fill="none" stroke="#fed7aa" strokeWidth="4" />
              <line x1="47" y1="36" x2="47" y2="28" stroke="#fed7aa" strokeWidth="3" strokeLinecap="round" />
              <line x1="51" y1="38" x2="52" y2="30" stroke="#fed7aa" strokeWidth="3" strokeLinecap="round" />
              <line x1="55" y1="42" x2="57" y2="33" stroke="#fed7aa" strokeWidth="3" strokeLinecap="round" />
            </g>

            {/* Panel 4 (Bottom Left): Hand holding smartphone */}
            <g transform="translate(30, 105)">
              <rect width="80" height="70" fill="#d97706" />
              {/* Hand in white sleeve */}
              <rect x="28" y="55" width="26" height="15" fill="#ffffff" />
              <path d="M34,55 L38,36 L52,36 L56,55 Z" fill="#fed7aa" />
              {/* Smartphone */}
              <rect x="42" y="24" width="22" height="38" rx="3" fill="#ffffff" stroke="#0f172a" strokeWidth="2" />
              <circle cx="53" cy="30" r="2" fill="#0f172a" />
            </g>

            {/* Panel 5 (Bottom Center): Hand pointing with digital cursor line */}
            <g transform="translate(120, 105)">
              <rect width="80" height="70" fill="#bae6fd" />
              {/* Hand in black sleeve */}
              <rect x="30" y="55" width="26" height="15" fill="#0f172a" />
              {/* Pointing Hand */}
              <path d="M35,55 L38,40 L45,30 L48,40 L52,55 Z" fill="#fed7aa" />
              {/* Cursor / Arrow */}
              <line x1="45" y1="30" x2="65" y2="22" stroke="#0f172a" strokeWidth="2" strokeDasharray="3 2" />
              <polygon points="66,20 62,26 68,26" fill="#0f172a" />
            </g>

            {/* Panel 6 (Bottom Right): Hand holding orange smiley tag */}
            <g transform="translate(210, 105)">
              <rect width="80" height="70" fill="#4338ca" />
              {/* Hand in black sleeve */}
              <rect x="30" y="55" width="25" height="15" fill="#0f172a" />
              <path d="M36,55 L38,42 L52,42 L54,55 Z" fill="#fed7aa" />
              {/* Orange tag with smiley / eye */}
              <rect x="25" y="34" width="26" height="18" rx="3" fill="#f97316" />
              <circle cx="33" cy="41" r="2" fill="#ffffff" />
              <circle cx="43" cy="41" r="2" fill="#ffffff" />
              <path d="M33,46 Q38,50 43,46" stroke="#ffffff" strokeWidth="1.5" fill="none" />
            </g>
          </svg>
        );

      case 'keyboard-keys':
        return (
          <svg viewBox="0 0 240 160" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
            <rect width="240" height="160" fill="#18181b" />
            {/* Mechanical Keyboard Keycaps */}
            <rect x="25" y="35" width="55" height="50" rx="6" fill="#27272a" stroke="#3f3f46" strokeWidth="2" />
            <text x="52" y="65" fill="#ffffff" fontSize="16" fontWeight="bold" textAnchor="middle">AI</text>
            <rect x="90" y="35" width="55" height="50" rx="6" fill="#3f3f46" stroke="#52525b" strokeWidth="2" />
            <text x="117" y="67" fill="#facc15" fontSize="20" fontWeight="bold" textAnchor="middle">✦</text>
            <rect x="155" y="35" width="55" height="50" rx="6" fill="#27272a" stroke="#3f3f46" strokeWidth="2" />
            <text x="182" y="65" fill="#ffffff" fontSize="14" fontWeight="bold" textAnchor="middle">CMD</text>
            {/* Bottom row keys */}
            <rect x="40" y="95" width="150" height="40" rx="6" fill="#18181b" stroke="#3f3f46" strokeWidth="2" />
            <text x="115" y="120" fill="#a1a1aa" fontSize="11" fontWeight="bold" textAnchor="middle">SPACE</text>
          </svg>
        );

      case 'sentient-gap-bust':
        return (
          <svg viewBox="0 0 240 160" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
            <rect width="240" height="160" fill="#0f172a" />
            {/* Classical Sculpture Bust Head with Brain Cutout */}
            <g transform="translate(70, 20)">
              {/* Marble Head Profile */}
              <path d="M30,110 L30,95 Q20,80 25,60 Q35,20 65,20 Q95,20 95,50 Q95,80 85,95 L85,110 Z" fill="#e2e8f0" />
              {/* Glowing Red/Crimson Brain Neural Gap */}
              <circle cx="68" cy="45" r="16" fill="#ef4444" />
              <path d="M56,45 Q68,32 78,45 Q70,55 56,45 Z" fill="#f87171" />
              <circle cx="68" cy="45" r="22" fill="#ef4444" opacity="0.3" />
            </g>
          </svg>
        );

      case 'sustainable-fashion':
        return (
          <svg viewBox="0 0 240 150" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="cosmic-border" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e1b4b" />
                <stop offset="40%" stopColor="#431407" />
                <stop offset="70%" stopColor="#701a75" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
              <linearGradient id="sky-meadow" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#bfdbfe" />
                <stop offset="45%" stopColor="#fef08a" />
                <stop offset="55%" stopColor="#84cc16" />
                <stop offset="100%" stopColor="#15803d" />
              </linearGradient>
            </defs>
            <rect width="240" height="150" fill="url(#cosmic-border)" />
            {/* Embers/sparkles */}
            <circle cx="25" cy="20" r="1.5" fill="#f97316" opacity="0.8" />
            <circle cx="15" cy="80" r="2" fill="#ec4899" opacity="0.7" />
            <circle cx="35" cy="130" r="1.5" fill="#eab308" opacity="0.9" />
            <circle cx="225" cy="30" r="2" fill="#f97316" opacity="0.8" />
            <circle cx="215" cy="110" r="1.5" fill="#ec4899" opacity="0.8" />

            {/* Inner Picture Window with dark frame */}
            <g transform="translate(45, 15)">
              <rect width="150" height="120" fill="url(#sky-meadow)" stroke="#09090b" strokeWidth="2.5" />
              
              {/* Distant trees on horizon */}
              <ellipse cx="25" cy="55" rx="20" ry="12" fill="#365314" opacity="0.8" />
              <ellipse cx="60" cy="52" rx="25" ry="14" fill="#3f6212" opacity="0.85" />
              <ellipse cx="120" cy="54" rx="30" ry="12" fill="#1e3a8a" opacity="0.7" />

              {/* Rolling meadow grasses */}
              <path d="M0,70 Q40,62 80,72 T150,68 L150,120 L0,120 Z" fill="#16a34a" />
              <path d="M0,85 Q60,78 110,88 T150,82 L150,120 L0,120 Z" fill="#15803d" />

              {/* Woman in rust-orange/coral dress walking away into the landscape */}
              <g transform="translate(75, 48)">
                {/* Dark brown hair */}
                <ellipse cx="7" cy="10" rx="3.5" ry="5" fill="#451a03" />
                {/* Back of shoulders */}
                <path d="M2,14 L12,14 L15,38 L0,38 Z" fill="#ea580c" />
                {/* Flowing skirt */}
                <path d="M0,38 Q-4,58 -8,68 Q7,65 14,68 Q18,58 14,38 Z" fill="#f97316" />
                {/* Subtle wind ripples */}
                <path d="M-2,46 Q5,55 12,48" stroke="#fdba74" strokeWidth="1" fill="none" />
              </g>
            </g>
          </svg>
        );

      case 'linkedin-verify':
        return (
          <svg viewBox="0 0 240 150" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="blue-duotone" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e3a8a" />
                <stop offset="50%" stopColor="#1d4ed8" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
            </defs>
            <rect width="240" height="150" fill="url(#blue-duotone)" />
            
            {/* Minimalist Desk & Laptop Base */}
            <path d="M30,135 L210,135 L230,150 L10,150 Z" fill="#0f172a" opacity="0.4" />
            <rect x="70" y="80" width="100" height="55" rx="3" fill="#0284c7" opacity="0.5" stroke="#93c5fd" strokeWidth="1.5" />
            {/* Laptop screen glow */}
            <rect x="75" y="84" width="90" height="47" fill="#bfdbfe" opacity="0.3" />

            {/* Hands holding smartphone */}
            <g transform="translate(105, 45)">
              {/* Smartphone */}
              <rect x="5" y="10" width="36" height="65" rx="5" fill="#0f172a" stroke="#ffffff" strokeWidth="1.5" />
              <rect x="8" y="15" width="30" height="52" rx="2" fill="#60a5fa" />
              {/* Verified Badge on phone screen */}
              <circle cx="23" cy="38" r="9" fill="#0284c7" />
              <path d="M19,38 L22,41 L27,35" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              
              {/* Left hand gripping */}
              <path d="M-6,30 Q3,32 5,38 L5,50 Q-2,54 -12,45 Z" fill="#93c5fd" />
              {/* Right hand gripping */}
              <path d="M42,28 Q44,38 41,52 Q48,52 56,42 Z" fill="#93c5fd" />
            </g>

            {/* Ambient tech glow particles */}
            <circle cx="35" cy="40" r="2" fill="#bfdbfe" opacity="0.7" />
            <circle cx="210" cy="50" r="2.5" fill="#bfdbfe" opacity="0.6" />
          </svg>
        );

      case 'measles-map':
        return (
          <svg viewBox="0 0 240 150" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="measles-core" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="35%" stopColor="#f97316" />
                <stop offset="70%" stopColor="#db2777" />
                <stop offset="100%" stopColor="#6b21a8" />
              </radialGradient>
            </defs>
            <rect width="240" height="150" fill="#2e1065" />
            {/* Background thermal noise & cellular textures */}
            <circle cx="120" cy="85" r="75" fill="#a855f7" opacity="0.25" />
            <circle cx="130" cy="85" r="52" fill="url(#measles-core)" opacity="0.95" />
            
            {/* Cellular organic spikes & membrane texture */}
            <g stroke="#fef08a" strokeWidth="1.5" opacity="0.7">
              <circle cx="130" cy="85" r="46" fill="none" strokeDasharray="3 3" />
              <circle cx="130" cy="85" r="34" fill="none" strokeDasharray="4 2" />
              <circle cx="130" cy="85" r="20" fill="#fef08a" opacity="0.35" />
            </g>

            {/* Small floating satellite vesicles */}
            <circle cx="50" cy="40" r="14" fill="#ec4899" opacity="0.8" />
            <circle cx="50" cy="40" r="6" fill="#fef08a" />
            <circle cx="200" cy="45" r="10" fill="#f97316" opacity="0.7" />
            <circle cx="190" cy="115" r="12" fill="#d946ef" opacity="0.6" />
            <circle cx="65" cy="120" r="8" fill="#facc15" opacity="0.8" />
          </svg>
        );

      case 'exec-ceos-ai':
        return (
          <svg viewBox="0 0 240 150" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
            <rect width="240" height="150" fill="#090d16" />
            {/* Modern Chess Strategy in Bold Minimalist Shapes */}
            <rect x="25" y="115" width="190" height="4" fill="#1e293b" />
            {/* Minimalist King Silhouette in Gold */}
            <path d="M120,40 L120,30 M115,35 L125,35 M112,50 Q120,45 128,50 L124,115 L116,115 Z" stroke="#f59e0b" strokeWidth="2.5" fill="#f59e0b" fillOpacity="0.2" />
            <circle cx="120" cy="25" r="3" fill="#f59e0b" />
            {/* Geometric Constellation / AI Nodes */}
            <circle cx="70" cy="55" r="6" fill="#06b6d4" />
            <circle cx="170" cy="65" r="6" fill="#10b981" />
            <circle cx="185" cy="95" r="4" fill="#06b6d4" />
            <circle cx="55" cy="95" r="4" fill="#10b981" />
            <line x1="70" y1="55" x2="120" y2="50" stroke="#06b6d4" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
            <line x1="170" y1="65" x2="120" y2="50" stroke="#10b981" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
            <line x1="70" y1="55" x2="55" y2="95" stroke="#06b6d4" strokeWidth="1" opacity="0.4" />
            <line x1="170" y1="65" x2="185" y2="95" stroke="#10b981" strokeWidth="1" opacity="0.4" />
          </svg>
        );

      case 'ai-grief':
        return (
          <svg viewBox="0 0 240 150" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grief-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e1b4b" />
                <stop offset="100%" stopColor="#311042" />
              </linearGradient>
            </defs>
            <rect width="240" height="150" fill="url(#grief-bg)" />
            {/* Luminous Warm Heart / Empathy Waves */}
            <circle cx="120" cy="75" r="45" fill="#f43f5e" opacity="0.15" />
            <circle cx="120" cy="75" r="30" fill="#fb7185" opacity="0.25" />
            {/* Minimalist Heart */}
            <path d="M120,88 C105,72 90,60 90,48 C90,38 98,32 108,32 C114,32 118,35 120,38 C122,35 126,32 132,32 C142,32 150,38 150,48 C150,60 135,72 120,88 Z" fill="#f43f5e" />
            {/* Sound / Pulse Ripples */}
            <path d="M50,75 Q85,55 120,75 T190,75" stroke="#fed7aa" strokeWidth="2" fill="none" opacity="0.8" />
            <path d="M65,75 Q92,62 120,75 T175,75" stroke="#fbcfe8" strokeWidth="1.5" fill="none" opacity="0.6" />
          </svg>
        );

      case 'lived-experience':
        return (
          <svg viewBox="0 0 240 150" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
            <rect width="240" height="150" fill="#0f172a" />
            {/* Overlapping Translucent Prismatic Rings */}
            <circle cx="95" cy="75" r="42" fill="#06b6d4" opacity="0.6" style={{ mixBlendMode: 'screen' }} />
            <circle cx="145" cy="75" r="42" fill="#ec4899" opacity="0.6" style={{ mixBlendMode: 'screen' }} />
            <circle cx="120" cy="50" r="38" fill="#f59e0b" opacity="0.6" style={{ mixBlendMode: 'screen' }} />
            {/* Central intersection highlight */}
            <circle cx="120" cy="68" r="10" fill="#ffffff" opacity="0.9" />
            {/* Minimalist silhouette figure in white */}
            <path d="M115,118 L125,118 L124,96 L116,96 Z" fill="#ffffff" />
            <circle cx="120" cy="90" r="4.5" fill="#ffffff" />
          </svg>
        );

      case 'supply-chain-home':
        return (
          <svg viewBox="0 0 240 150" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
            <rect width="240" height="150" fill="#f8fafc" />
            {/* Isometric Architecture: Sustainable Modular Home */}
            <g transform="translate(60, 25)">
              {/* Base Soil / Grass Layer */}
              <polygon points="60,105 125,75 60,45 -5,75" fill="#86efac" />
              <polygon points="-5,75 60,105 60,115 -5,85" fill="#15803d" />
              <polygon points="60,105 125,75 125,85 60,115" fill="#166534" />
              {/* Home Walls (Terracotta / Natural Wood) */}
              <polygon points="25,65 65,85 65,45 25,25" fill="#ea580c" />
              <polygon points="65,85 100,68 100,28 65,45" fill="#c2410c" />
              {/* Green Roof with Solar Cells */}
              <polygon points="20,25 65,45 105,25 60,5" fill="#0284c7" />
              {/* Modern Minimalist Window */}
              <polygon points="35,62 55,72 55,50 35,40" fill="#bae6fd" />
            </g>
          </svg>
        );

      case 'remote-work':
        return (
          <svg viewBox="0 0 240 150" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="morning-sky" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f43f5e" />
                <stop offset="45%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#fed7aa" />
              </linearGradient>
            </defs>
            <rect width="240" height="150" fill="#18181b" />
            {/* Studio Window looking at mountains */}
            <g transform="translate(40, 15)">
              <rect width="160" height="90" fill="url(#morning-sky)" rx="2" />
              {/* Mountain Silhouettes */}
              <polygon points="-10,90 40,45 90,90" fill="#4338ca" opacity="0.8" />
              <polygon points="60,90 115,35 170,90" fill="#312e81" opacity="0.9" />
              <polygon points="20,90 75,55 130,90" fill="#1e1b4b" />
              {/* Window Panes */}
              <rect width="160" height="90" fill="none" stroke="#27272a" strokeWidth="4" rx="2" />
              <line x1="80" y1="0" x2="80" y2="90" stroke="#27272a" strokeWidth="3" />
            </g>
            {/* Desk Surface with Laptop & Ceramic Coffee Mug */}
            <rect x="20" y="110" width="200" height="40" fill="#27272a" />
            {/* Laptop */}
            <rect x="95" y="102" width="50" height="28" rx="2" fill="#52525b" />
            <polygon points="90,130 150,130 155,134 85,134" fill="#71717a" />
            {/* Ceramic Coffee Mug */}
            <rect x="55" y="112" width="14" height="16" rx="2" fill="#f97316" />
            <path d="M69,115 Q75,119 69,123" fill="none" stroke="#f97316" strokeWidth="2" />
          </svg>
        );

      case 'high-performing':
        return (
          <svg viewBox="0 0 240 150" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
            <rect width="240" height="150" fill="#09090b" />
            {/* Prismatic Light Beam Refraction */}
            <line x1="20" y1="75" x2="105" y2="75" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" />
            {/* Glass Prism Triangle */}
            <polygon points="105,40 145,110 65,110" fill="#38bdf8" fillOpacity="0.25" stroke="#38bdf8" strokeWidth="2" />
            {/* Chromatic Dispersed Rays */}
            <polygon points="125,75 230,35 230,48" fill="#ef4444" opacity="0.9" />
            <polygon points="125,75 230,48 230,60" fill="#f97316" opacity="0.9" />
            <polygon points="125,75 230,60 230,73" fill="#eab308" opacity="0.9" />
            <polygon points="125,75 230,73 230,86" fill="#22c55e" opacity="0.9" />
            <polygon points="125,75 230,86 230,99" fill="#06b6d4" opacity="0.9" />
            <polygon points="125,75 230,99 230,112" fill="#6366f1" opacity="0.9" />
          </svg>
        );

      case 'phone-bricking':
        return (
          <svg viewBox="0 0 240 150" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
            <rect width="240" height="150" fill="#18181b" />
            {/* Neon Translucent Acrylic Lock Box */}
            <g transform="translate(70, 20)">
              {/* Outer Glowing Yellow Acrylic Box */}
              <rect x="10" y="10" width="80" height="95" rx="8" fill="#facc15" fillOpacity="0.3" stroke="#facc15" strokeWidth="3" />
              {/* Inside Locked Smartphone */}
              <rect x="25" y="25" width="50" height="68" rx="6" fill="#09090b" stroke="#71717a" strokeWidth="1.5" />
              {/* Screen Digital Lock Timer */}
              <rect x="30" y="32" width="40" height="52" rx="3" fill="#1c1917" />
              <text x="50" y="55" fill="#facc15" fontSize="11" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
                02:45
              </text>
              <circle cx="50" cy="70" r="5" fill="none" stroke="#22c55e" strokeWidth="2" />
            </g>
          </svg>
        );

      case 'icelandair-plane':
        return (
          <svg viewBox="0 0 240 150" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="aurora-sky" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#022c22" />
                <stop offset="50%" stopColor="#064e3b" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
            </defs>
            <rect width="240" height="150" fill="url(#aurora-sky)" />
            {/* Emerald Aurora Wave */}
            <path d="M0,60 Q60,20 120,50 T240,30" fill="none" stroke="#34d399" strokeWidth="12" opacity="0.4" />
            <path d="M0,70 Q70,35 140,60 T240,45" fill="none" stroke="#6ee7b7" strokeWidth="6" opacity="0.6" />
            {/* Snowy Glacier Peaks */}
            <polygon points="-10,150 40,110 80,150" fill="#e0f2fe" opacity="0.8" />
            <polygon points="50,150 110,95 170,150" fill="#f0f9ff" opacity="0.9" />
            <polygon points="140,150 200,105 250,150" fill="#e0f2fe" opacity="0.8" />
            {/* Airplane Silhouette */}
            <g transform="translate(130, 45) rotate(-8)">
              {/* Fuselage */}
              <ellipse cx="25" cy="10" rx="28" ry="5.5" fill="#ffffff" />
              {/* Wings */}
              <polygon points="18,10 8,-8 28,10" fill="#cbd5e1" />
              <polygon points="18,10 8,24 28,10" fill="#94a3b8" />
              {/* Tail fin */}
              <polygon points="45,10 52,-3 48,10" fill="#facc15" />
            </g>
          </svg>
        );

      case 'doordash-settlement':
        return (
          <svg viewBox="0 0 240 150" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
            <rect width="240" height="150" fill="#18181b" />
            {/* Urban Grid Lines */}
            <line x1="20" y1="130" x2="220" y2="130" stroke="#3f3f46" strokeWidth="3" />
            {/* City Silhouette */}
            <rect x="30" y="70" width="25" height="60" fill="#27272a" />
            <rect x="65" y="50" width="30" height="80" fill="#3f3f46" />
            <rect x="175" y="60" width="35" height="70" fill="#27272a" />
            {/* Courier on Electric Bicycle */}
            <g transform="translate(100, 75)">
              {/* Bicycle Wheels */}
              <circle cx="15" cy="40" r="14" fill="none" stroke="#e4e4e7" strokeWidth="2.5" />
              <circle cx="55" cy="40" r="14" fill="none" stroke="#e4e4e7" strokeWidth="2.5" />
              {/* Bike Frame */}
              <path d="M15,40 L32,40 L45,22 L25,22 Z M32,40 L45,22 M55,40 L40,15" stroke="#ef4444" strokeWidth="3" fill="none" />
              {/* Red Delivery Backpack */}
              <rect x="18" y="10" width="16" height="20" rx="3" fill="#dc2626" />
              {/* Rider */}
              <circle cx="28" cy="4" r="5" fill="#fef08a" />
              <path d="M26,10 L35,22" stroke="#ffffff" strokeWidth="3" />
            </g>
            {/* Golden Coins Flowing */}
            <circle cx="175" cy="35" r="9" fill="#f59e0b" stroke="#fef08a" strokeWidth="2" />
            <text x="175" y="39" fill="#78350f" fontSize="10" fontWeight="black" textAnchor="middle">$</text>
            <circle cx="195" cy="48" r="7" fill="#f59e0b" stroke="#fef08a" strokeWidth="1.5" />
          </svg>
        );

      case 'amd-trillion':
        return (
          <svg viewBox="0 0 240 150" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="gold-chip" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="45%" stopColor="#eab308" />
                <stop offset="100%" stopColor="#ca8a04" />
              </linearGradient>
            </defs>
            <rect width="240" height="150" fill="#09090b" />
            {/* Circuit Grid Rays */}
            <g stroke="#3b82f6" strokeWidth="1" opacity="0.4">
              <line x1="20" y1="75" x2="70" y2="75" />
              <line x1="170" y1="75" x2="220" y2="75" />
              <line x1="120" y1="15" x2="120" y2="40" />
              <line x1="120" y1="110" x2="120" y2="135" />
            </g>
            {/* Semiconductor Processor Die */}
            <rect x="75" y="35" width="90" height="80" rx="8" fill="#18181b" stroke="url(#gold-chip)" strokeWidth="3" />
            <rect x="88" y="48" width="64" height="54" rx="4" fill="url(#gold-chip)" />
            {/* $1 Trillion Etching */}
            <text x="120" y="82" fill="#09090b" fontSize="22" fontWeight="900" fontFamily="sans-serif" textAnchor="middle" letterSpacing="0.5">
              $1T
            </text>
          </svg>
        );

      case 'influencer-strings':
        return (
          <svg viewBox="0 0 240 150" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
            <rect width="240" height="150" fill="#1e1b4b" />
            {/* Puppet Control Cross on Top */}
            <line x1="85" y1="20" x2="155" y2="20" stroke="#f43f5e" strokeWidth="2.5" />
            <line x1="120" y1="10" x2="120" y2="30" stroke="#f43f5e" strokeWidth="2.5" />
            {/* Glowing Digital Strings */}
            <line x1="90" y1="20" x2="95" y2="60" stroke="#fda4af" strokeWidth="1" strokeDasharray="3 2" />
            <line x1="150" y1="20" x2="145" y2="60" stroke="#fda4af" strokeWidth="1" strokeDasharray="3 2" />
            <line x1="120" y1="30" x2="120" y2="60" stroke="#fda4af" strokeWidth="1" strokeDasharray="3 2" />
            {/* Suspended Smartphone Screen */}
            <g transform="translate(95, 55)">
              <rect width="50" height="75" rx="5" fill="#0f172a" stroke="#ffffff" strokeWidth="1.5" />
              <rect x="5" y="8" width="40" height="60" rx="2" fill="#818cf8" />
              {/* Avatar face inside */}
              <circle cx="25" cy="28" r="10" fill="#fef08a" />
              <path d="M12,54 C12,42 38,42 38,54 Z" fill="#ec4899" />
            </g>
          </svg>
        );

      case 'social-security':
        return (
          <svg viewBox="0 0 240 150" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
            <rect width="240" height="150" fill="#f8fafc" />
            {/* Minimalist Demographic & Retirement Horizon */}
            <circle cx="120" cy="55" r="30" fill="#fef08a" opacity="0.6" />
            <polygon points="30,130 90,85 150,130" fill="#cbd5e1" />
            <polygon points="100,130 160,75 220,130" fill="#0284c7" opacity="0.8" />
            <line x1="20" y1="130" x2="220" y2="130" stroke="#0f172a" strokeWidth="3" />
            {/* Stepped Progress Curve */}
            <polyline points="40,115 80,100 120,80 160,50 200,35" fill="none" stroke="#16a34a" strokeWidth="3" />
            <circle cx="200" cy="35" r="5" fill="#16a34a" />
          </svg>
        );

      case 'jensen-huang':
        return (
          <svg viewBox="0 0 160 110" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
            <rect width="160" height="110" fill="#052e16" />
            {/* Nvidia Green Stage Glow */}
            <circle cx="80" cy="50" r="50" fill="#16a34a" opacity="0.3" />
            {/* Jensen Huang Figure */}
            <g transform="translate(50, 20)">
              {/* Head with iconic hair and glasses */}
              <ellipse cx="30" cy="22" rx="14" ry="17" fill="#fed7aa" />
              <path d="M16,18 Q30,5 44,18 Q40,10 20,10 Z" fill="#475569" />
              {/* Glasses */}
              <rect x="20" y="19" width="8" height="5" rx="1" fill="none" stroke="#000000" strokeWidth="1.5" />
              <rect x="31" y="19" width="8" height="5" rx="1" fill="none" stroke="#000000" strokeWidth="1.5" />
              {/* Iconic Black Leather Jacket */}
              <path d="M5,42 L20,38 L30,55 L40,38 L55,42 L58,85 L2,85 Z" fill="#09090b" />
              {/* Zipper */}
              <line x1="30" y1="55" x2="30" y2="85" stroke="#71717a" strokeWidth="2" />
            </g>
          </svg>
        );

      case 'candy-corn-perfume':
        return (
          <svg viewBox="0 0 160 110" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
            <rect width="160" height="110" fill="#fffbeb" />
            {/* Glass Perfume Bottle */}
            <g transform="translate(55, 15)">
              <rect x="15" y="28" width="22" height="48" rx="4" fill="#ffffff" stroke="#d97706" strokeWidth="2" />
              {/* Candy Corn Tricolor Layers */}
              <rect x="17" y="30" width="18" height="14" fill="#ffffff" />
              <rect x="17" y="44" width="18" height="15" fill="#f97316" />
              <rect x="17" y="59" width="18" height="15" fill="#facc15" />
              {/* Spray Nozzle */}
              <rect x="22" y="18" width="8" height="10" fill="#d97706" />
              <line x1="22" y1="21" x2="16" y2="18" stroke="#d97706" strokeWidth="2" />
            </g>
          </svg>
        );

      case 'trophy-award':
        return (
          <svg viewBox="0 0 180 120" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="trophy-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#374151" />
                <stop offset="50%" stopColor="#475569" />
                <stop offset="100%" stopColor="#1e293b" />
              </linearGradient>
              <linearGradient id="silver-cup" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#e2e8f0" />
                <stop offset="40%" stopColor="#ffffff" />
                <stop offset="70%" stopColor="#94a3b8" />
                <stop offset="100%" stopColor="#64748b" />
              </linearGradient>
              <linearGradient id="arm-skin" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fbd38d" />
                <stop offset="100%" stopColor="#dd6b20" />
              </linearGradient>
            </defs>
            <rect width="180" height="120" fill="url(#trophy-bg)" />
            {/* Subtle background studio spotlight */}
            <circle cx="110" cy="50" r="55" fill="#ffffff" opacity="0.08" />

            {/* Arm holding the trophy tilted upwards from bottom-left */}
            <g transform="translate(15, 10) rotate(-14 70 60)">
              {/* Forearm & Wrist */}
              <path d="M5,115 L45,65 L60,75 L15,120 Z" fill="url(#arm-skin)" />
              {/* Hand gripping base */}
              <ellipse cx="50" cy="67" rx="11" ry="9" fill="#ed8936" />
              <path d="M44,60 C44,55 58,55 60,63 L55,75 Z" fill="#dd6b20" />
              <rect x="48" y="58" width="16" height="6" rx="3" fill="#fbd38d" />
              <rect x="47" y="65" width="16" height="6" rx="3" fill="#fbd38d" />

              {/* Trophy Base (Black marble rectangular block) */}
              <rect x="48" y="54" width="34" height="28" rx="2" fill="#18181b" stroke="#27272a" strokeWidth="1" />
              <rect x="52" y="62" width="26" height="12" fill="#d4af37" opacity="0.9" />

              {/* Trophy Stem */}
              <rect x="61" y="44" width="8" height="11" fill="url(#silver-cup)" />
              <ellipse cx="65" cy="54" rx="9" ry="3" fill="#64748b" />

              {/* Trophy Cup Body */}
              <path d="M50,18 L80,18 C80,38 72,45 65,45 C58,45 50,38 50,18 Z" fill="url(#silver-cup)" />
              <ellipse cx="65" cy="18" rx="15" ry="4" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />

              {/* Left Trophy Handle */}
              <path d="M50,22 C40,24 40,36 53,38" fill="none" stroke="#cbd5e1" strokeWidth="3.5" strokeLinecap="round" />
              {/* Right Trophy Handle */}
              <path d="M80,22 C90,24 90,36 77,38" fill="none" stroke="#cbd5e1" strokeWidth="3.5" strokeLinecap="round" />
            </g>
          </svg>
        );

      case 'books-happiness':
        return (
          <svg viewBox="0 0 180 120" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
            {/* Background wall & wood shelf */}
            <rect width="180" height="92" fill="#fbf7ee" />
            <rect y="92" width="180" height="28" fill="#d97706" />
            <rect y="92" width="180" height="3" fill="#b45309" />

            {/* Left: Plant in textured white pot */}
            <g transform="translate(14, 46)">
              {/* Pot */}
              <polygon points="6,46 26,46 28,24 4,24" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
              <path d="M4,28 L28,28 M5,34 L27,34 M6,40 L26,40" stroke="#cbd5e1" strokeWidth="1" opacity="0.6" />
              {/* Succulent green spiky leaves */}
              <path d="M16,24 C14,10 6,6 4,4 C10,12 14,18 16,24 Z" fill="#15803d" />
              <path d="M16,24 C16,8 16,0 17,-2 C18,8 18,16 16,24 Z" fill="#16a34a" />
              <path d="M16,24 C18,10 26,6 28,4 C22,12 18,18 16,24 Z" fill="#15803d" />
              <path d="M16,24 C12,14 10,8 8,7 C12,15 15,20 16,24 Z" fill="#22c55e" />
              <path d="M16,24 C20,14 22,8 24,7 C20,15 17,20 16,24 Z" fill="#22c55e" />
            </g>

            {/* Center: Row of 7 colorful books standing vertically */}
            <g transform="translate(52, 22)">
              {/* Book 1 - Emerald Green */}
              <rect x="0" y="10" width="10" height="60" fill="#047857" rx="1" />
              <line x1="2" y1="14" x2="2" y2="66" stroke="#065f46" strokeWidth="1" />

              {/* Book 2 - Warm Ochre Yellow */}
              <rect x="11" y="6" width="11" height="64" fill="#eab308" rx="1" />
              <line x1="13" y1="10" x2="13" y2="66" stroke="#ca8a04" strokeWidth="1" />

              {/* Book 3 - Lemon Yellow */}
              <rect x="23" y="12" width="10" height="58" fill="#facc15" rx="1" />

              {/* Book 4 - Cobalt Blue */}
              <rect x="34" y="4" width="12" height="66" fill="#1d4ed8" rx="1" />
              <text x="40" y="40" fill="#ffffff" fontSize="4.5" fontWeight="bold" transform="rotate(-90 40 40)">HAPPINESS</text>

              {/* Book 5 - Blush / Salmon Pink */}
              <rect x="47" y="14" width="11" height="56" fill="#f472b6" rx="1" />

              {/* Book 6 - Vibrant Coral Orange */}
              <rect x="59" y="8" width="11" height="62" fill="#ea580c" rx="1" />
              <text x="65" y="40" fill="#ffffff" fontSize="4.5" fontWeight="bold" transform="rotate(-90 65 40)">DESIGN</text>

              {/* Book 7 - Deep Mustard */}
              <rect x="71" y="10" width="10" height="60" fill="#d97706" rx="1" />
            </g>

            {/* Right: Vintage retro round alarm clock */}
            <g transform="translate(142, 54)">
              {/* Two top bells */}
              <circle cx="10" cy="4" r="4" fill="#ca8a04" />
              <circle cx="24" cy="4" r="4" fill="#ca8a04" />
              <rect x="15" y="2" width="4" height="4" fill="#a16207" />
              {/* Clock body */}
              <circle cx="17" cy="19" r="16" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
              {/* Clock face */}
              <circle cx="17" cy="19" r="13" fill="#ffffff" />
              {/* Numbers / Ticks */}
              <line x1="17" y1="9" x2="17" y2="12" stroke="#451a03" strokeWidth="1" />
              <line x1="27" y1="19" x2="24" y2="19" stroke="#451a03" strokeWidth="1" />
              <line x1="17" y1="29" x2="17" y2="26" stroke="#451a03" strokeWidth="1" />
              <line x1="7" y1="19" x2="10" y2="19" stroke="#451a03" strokeWidth="1" />
              {/* Hands showing ~10:10 */}
              <line x1="17" y1="19" x2="13" y2="13" stroke="#1c1917" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="17" y1="19" x2="22" y2="15" stroke="#1c1917" strokeWidth="1" strokeLinecap="round" />
              <circle cx="17" cy="19" r="1.5" fill="#451a03" />
              {/* Legs */}
              <line x1="9" y1="32" x2="6" y2="38" stroke="#ca8a04" strokeWidth="2" strokeLinecap="round" />
              <line x1="25" y1="32" x2="28" y2="38" stroke="#ca8a04" strokeWidth="2" strokeLinecap="round" />
            </g>
          </svg>
        );

      case 'paramount-wbd':
        return (
          <svg viewBox="0 0 320 200" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
            {/* Dark Typography Background */}
            <rect width="320" height="200" fill="#18181b" />
            <g fill="#27272a" fontSize="22" fontWeight="900" fontFamily="Poppins, sans-serif" opacity="0.6">
              <text x="0" y="30">WARNER BROS</text>
              <text x="140" y="60">DISCOVERY</text>
              <text x="-20" y="110">HBO MAX CNN</text>
              <text x="100" y="150">WARNER BROS</text>
              <text x="-10" y="190">DISCOVERY SKY</text>
            </g>

            {/* Warner Bros Shield Sticker (Left) */}
            <g transform="translate(15, 25)">
              <path 
                d="M15,10 L75,10 L75,60 C75,95 45,120 45,120 C45,120 15,95 15,60 Z" 
                fill="#facc15" 
                stroke="#ca8a04" 
                strokeWidth="4" 
              />
              <path 
                d="M22,16 L68,16 L68,58 C68,88 45,110 45,110 C45,110 22,88 22,58 Z" 
                fill="#1d4ed8" 
              />
              <text x="45" y="70" fill="#facc15" fontSize="32" fontWeight="900" fontFamily="Impact, sans-serif" textAnchor="middle">
                WB
              </text>
            </g>

            {/* Paramount Skydance Circular Sticker (Center-Right) */}
            <g transform="translate(130, 20)">
              {/* Outer Shadow & White Border */}
              <circle cx="85" cy="80" r="76" fill="#ffffff" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.5))" />
              <circle cx="85" cy="80" r="72" fill="#0284c7" />
              
              {/* Ring of 16 White Stars */}
              {[...Array(13)].map((_, i) => {
                const angle = (Math.PI * 0.9) + (i * (Math.PI * 1.2) / 12);
                const cx = 85 + 56 * Math.cos(angle);
                const cy = 76 + 56 * Math.sin(angle);
                return (
                  <polygon 
                    key={i} 
                    points={`${cx},${cy - 4} ${cx + 2.5},${cy + 3.5} ${cx - 3.5},${cy - 1.2} ${cx + 3.5},${cy - 1.2} ${cx - 2.5},${cy + 3.5}`} 
                    fill="#ffffff" 
                  />
                );
              })}

              {/* Snow-capped Mountain */}
              <polygon points="85,38 35,118 135,118" fill="#ffffff" />
              <polygon points="85,38 65,70 85,82 105,70" fill="#f0f9ff" />
              <polygon points="85,82 72,118 98,118" fill="#e0f2fe" opacity="0.6" />

              {/* Paramount Script Text */}
              <text 
                x="85" 
                y="74" 
                fill="#0f172a" 
                fontSize="20" 
                fontWeight="900" 
                fontStyle="italic" 
                fontFamily="Georgia, serif" 
                textAnchor="middle"
              >
                Paramount
              </text>

              {/* A Skydance Corporation Subtext */}
              <rect x="36" y="96" width="98" height="15" rx="3" fill="#ffffff" opacity="0.95" />
              <text 
                x="85" 
                y="107" 
                fill="#0369a1" 
                fontSize="6" 
                fontWeight="900" 
                fontFamily="Poppins, sans-serif" 
                textAnchor="middle" 
                letterSpacing="0.8"
              >
                A SKYDANCE CORPORATION
              </text>
            </g>
          </svg>
        );

      case 'novo-nordisk':
        return (
          <svg viewBox="0 0 320 200" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="novo-sky" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#bae6fd" />
                <stop offset="100%" stopColor="#7dd3fc" />
              </linearGradient>
              <linearGradient id="novo-building" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="40%" stopColor="#eab308" />
                <stop offset="100%" stopColor="#ca8a04" />
              </linearGradient>
            </defs>
            {/* Sky Background */}
            <rect width="320" height="200" fill="url(#novo-sky)" />

            {/* Curved Glass Building Facade */}
            <g transform="translate(130, -20)">
              <path d="M0,0 Q80,60 190,40 L190,220 L0,220 Z" fill="#1e293b" />
              {/* Illuminated Window Bands */}
              <path d="M10,20 Q80,75 190,55" stroke="url(#novo-building)" strokeWidth="18" fill="none" opacity="0.85" />
              <path d="M10,55 Q80,110 190,90" stroke="url(#novo-building)" strokeWidth="18" fill="none" opacity="0.75" />
              <path d="M10,90 Q80,145 190,125" stroke="url(#novo-building)" strokeWidth="18" fill="none" opacity="0.85" />
              <path d="M10,125 Q80,180 190,160" stroke="url(#novo-building)" strokeWidth="18" fill="none" opacity="0.75" />
              {/* Window grid vertical slats */}
              {[...Array(12)].map((_, i) => (
                <line key={i} x1={20 + i * 15} y1="0" x2={15 + i * 15} y2="220" stroke="#0f172a" strokeWidth="2.5" />
              ))}
            </g>

            {/* Monolithic Blue Plaque Sign (Foreground Left) */}
            <g transform="translate(16, 20)">
              {/* Shadow */}
              <polygon points="12,175 105,175 118,185 20,185" fill="#0f172a" opacity="0.3" />
              
              {/* Deep Royal Blue Sign */}
              <rect x="15" y="10" width="105" height="165" rx="2" fill="#00358e" stroke="#1d4ed8" strokeWidth="1.5" />
              {/* Inner bezel */}
              <rect x="22" y="18" width="91" height="149" fill="#002b75" />

              {/* Apis Bull / Antelope Silhouette */}
              <g transform="translate(32, 60)" fill="#ffffff">
                <circle cx="8" cy="12" r="5" />
                {/* Curved Horns */}
                <path d="M7,8 Q4,0 0,-4 Q4,2 8,6" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                <path d="M10,8 Q13,0 17,-4 Q13,2 9,6" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                {/* Body & Legs */}
                <path d="M6,16 L18,16 Q24,20 22,30 L20,38 L16,38 L17,26 L9,26 L6,38 L2,38 L5,20 Z" />
              </g>

              {/* 'novo' Text in modern lowercase */}
              <text 
                x="62" 
                y="90" 
                fill="#ffffff" 
                fontSize="20" 
                fontWeight="800" 
                fontFamily="Poppins, sans-serif" 
                letterSpacing="-0.5"
              >
                novo
              </text>
            </g>
          </svg>
        );

      case 'paula-scher-map':
        return (
          <svg viewBox="0 0 320 200" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
            <rect width="320" height="200" fill="#ffffff" />
            
            {/* Hypnotic Blue Topographic Wave Lines */}
            <g stroke="#1d4ed8" strokeWidth="2.4" fill="none" opacity="0.95">
              {[...Array(14)].map((_, i) => {
                const r = 25 + i * 14;
                return (
                  <ellipse 
                    key={i} 
                    cx="160" 
                    cy="100" 
                    rx={r * 1.5} 
                    ry={r} 
                    transform={`rotate(${i % 2 === 0 ? 4 : -3} 160 100)`}
                  />
                );
              })}
              {/* Extra undulating wave lines */}
              <path d="M0,20 Q80,50 160,20 Q240,-10 320,20" />
              <path d="M0,45 Q80,75 160,45 Q240,15 320,45" />
              <path d="M0,160 Q80,130 160,160 Q240,190 320,160" />
              <path d="M0,185 Q80,155 160,185 Q240,215 320,185" />
            </g>

            {/* Central Squished Organic Map Badge */}
            <g transform="translate(70, 42)">
              {/* Organic Blue Silhouette */}
              <path 
                d="M10,40 Q25,8 60,14 Q90,5 125,12 Q160,18 170,50 Q178,85 155,98 Q120,118 75,108 Q30,112 12,85 Q-2,60 10,40 Z" 
                fill="#1e40af" 
                stroke="#172554" 
                strokeWidth="3" 
              />
              {/* Hand-drawn Stencil Lettering */}
              <text 
                x="90" 
                y="45" 
                fill="#ffffff" 
                fontSize="18" 
                fontWeight="900" 
                fontFamily="Impact, Poppins, sans-serif" 
                letterSpacing="1" 
                textAnchor="middle"
              >
                WOMEN
              </text>
              <text 
                x="90" 
                y="70" 
                fill="#ffffff" 
                fontSize="18" 
                fontWeight="900" 
                fontFamily="Impact, Poppins, sans-serif" 
                letterSpacing="0.5" 
                textAnchor="middle"
              >
                DEMOCRACY
              </text>
              {/* Star / asterisk tag */}
              <text x="145" y="32" fill="#ffffff" fontSize="12" fontWeight="bold">ON THE</text>
              <text x="145" y="44" fill="#ffffff" fontSize="10" fontWeight="bold">EDGE OF</text>
            </g>
          </svg>
        );

      case 'thought-bubble-purpose':
        return (
          <svg viewBox="0 0 320 200" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
            {/* Pastel Powder Pink Background */}
            <rect width="320" height="200" fill="#fbcfe8" />
            
            {/* Crisp Cloud-Shaped Thought Bubble in Center */}
            <g transform="translate(85, 30)">
              {/* Cloud body */}
              <path 
                d="M45,105 C30,105 18,92 18,76 C8,74 0,64 0,52 C0,38 10,26 24,24 C28,10 40,0 56,0 C72,0 85,9 90,22 C96,16 105,12 115,12 C132,12 146,25 148,42 C155,45 160,53 160,62 C160,74 150,84 138,85 C138,98 126,108 112,108 C102,108 94,103 88,96 C80,102 70,105 60,105 Z" 
                fill="#ffffff" 
                stroke="#09090b" 
                strokeWidth="4" 
                strokeLinejoin="round" 
              />
              
              {/* Thought bubbles descending to the left */}
              <circle cx="28" cy="118" r="9" fill="#ffffff" stroke="#09090b" strokeWidth="3.5" />
              <circle cx="16" cy="132" r="5.5" fill="#ffffff" stroke="#09090b" strokeWidth="3" />
            </g>
          </svg>
        );

      case 'lake-ontario-cap':
        return (
          <svg viewBox="0 0 320 200" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="split-cap" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f4f4f5" />
                <stop offset="49.9%" stopColor="#e4e4e7" />
                <stop offset="50%" stopColor="#dc2626" />
                <stop offset="100%" stopColor="#b91c1c" />
              </linearGradient>
            </defs>
            {/* Split White & Bold Red Background */}
            <rect width="320" height="200" fill="url(#split-cap)" />

            {/* Dark Navy Baseball Cap */}
            <g transform="translate(100, 45)">
              {/* Cap Crown Dome */}
              <path 
                d="M15,80 C15,25 45,5 90,5 C135,5 155,35 155,80 Z" 
                fill="#0f172a" 
                stroke="#020617" 
                strokeWidth="2" 
              />
              {/* Curved Brim / Visor */}
              <path 
                d="M5,80 C15,92 50,105 95,105 C140,105 168,92 175,80 C150,88 110,92 90,92 C65,92 25,88 5,80 Z" 
                fill="#090d16" 
              />
              {/* Crown Top Button */}
              <ellipse cx="90" cy="5" rx="6" ry="3.5" fill="#1e293b" />
              
              {/* Crown Seams */}
              <path d="M90,5 Q70,40 50,80" stroke="#1e293b" strokeWidth="1.5" fill="none" opacity="0.6" />
              <path d="M90,5 Q110,40 130,80" stroke="#1e293b" strokeWidth="1.5" fill="none" opacity="0.6" />

              {/* Embroidered Text: Lake Ontario */}
              <text 
                x="88" 
                y="46" 
                fill="#ffffff" 
                fontSize="12" 
                fontWeight="700" 
                fontFamily="Georgia, serif" 
                textAnchor="middle"
              >
                Lake
              </text>
              <text 
                x="88" 
                y="62" 
                fill="#ffffff" 
                fontSize="14" 
                fontWeight="800" 
                fontFamily="Georgia, serif" 
                textAnchor="middle"
              >
                Ontario
              </text>
            </g>
          </svg>
        );

      default: {
        // Diverse, creative, minimalist artworks following Fast Company's design standard
        const hash = Math.abs(type.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0));
        const variant = hash % 6;

        switch (variant) {
          case 0:
            // Geometric Sun & Prismatic Horizon (Terracotta, Peach, Charcoal)
            return (
              <svg viewBox="0 0 240 150" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id={`grad-0-${type}`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#18181b" />
                    <stop offset="100%" stopColor="#27272a" />
                  </linearGradient>
                </defs>
                <rect width="240" height="150" fill={`url(#grad-0-${type})`} />
                <circle cx="150" cy="75" r="48" fill="#ea580c" />
                <polygon points="30,150 110,65 190,150" fill="#f97316" opacity="0.85" />
                <polygon points="120,150 180,85 240,150" fill="#fdba74" opacity="0.7" />
                <line x1="20" y1="130" x2="220" y2="130" stroke="#f4f4f5" strokeWidth="1.5" strokeDasharray="6 4" />
                <circle cx="65" cy="40" r="10" fill="#38bdf8" />
              </svg>
            );

          case 1:
            // Modern Bauhaus Archway & Chromatic Angles (Cobalt, Gold, Rose)
            return (
              <svg viewBox="0 0 240 150" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
                <rect width="240" height="150" fill="#0f172a" />
                <path d="M45,150 L45,65 Q45,20 90,20 Q135,20 135,65 L135,150 Z" fill="#2563eb" opacity="0.9" />
                <circle cx="160" cy="70" r="42" fill="#f59e0b" opacity="0.85" style={{ mixBlendMode: 'screen' }} />
                <polygon points="80,150 170,40 220,150" fill="#ec4899" opacity="0.65" style={{ mixBlendMode: 'screen' }} />
                <circle cx="90" cy="65" r="12" fill="#ffffff" />
              </svg>
            );

          case 2:
            // Minimalist Organic Biomorphic Flow (Emerald, Mint, Forest)
            return (
              <svg viewBox="0 0 240 150" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id={`grad-2-${type}`} x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#064e3b" />
                    <stop offset="100%" stopColor="#022c22" />
                  </linearGradient>
                </defs>
                <rect width="240" height="150" fill={`url(#grad-2-${type})`} />
                <path d="M-20,120 Q60,30 140,80 T260,60 L260,160 L-20,160 Z" fill="#059669" opacity="0.8" />
                <path d="M20,150 Q100,60 180,110 T260,90 L260,160 L20,160 Z" fill="#10b981" opacity="0.85" />
                <circle cx="170" cy="50" r="32" fill="#a3e635" opacity="0.85" />
                <circle cx="70" cy="45" r="6" fill="#fef08a" />
              </svg>
            );

          case 3:
            // Cyber Kinetic Waves & Digital Pulse (Deep Violet, Electric Cyan, Magenta)
            return (
              <svg viewBox="0 0 240 150" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
                <rect width="240" height="150" fill="#1e1035" />
                <g stroke="#06b6d4" strokeWidth="2" fill="none" opacity="0.85">
                  <path d="M10,75 Q60,25 120,75 T230,75" />
                  <path d="M10,95 Q70,45 130,95 T230,95" stroke="#d946ef" strokeWidth="1.5" />
                  <path d="M10,55 Q50,5 110,55 T230,55" stroke="#a855f7" strokeWidth="1.2" strokeDasharray="4 4" />
                </g>
                <circle cx="120" cy="75" r="16" fill="#f43f5e" />
                <circle cx="120" cy="75" r="28" fill="#f43f5e" opacity="0.25" />
                <circle cx="50" cy="35" r="4" fill="#06b6d4" />
                <circle cx="190" cy="115" r="4" fill="#06b6d4" />
              </svg>
            );

          case 4:
            // Modern Swiss Architecture & Color Blocking (Crimson, Ivory, Slate)
            return (
              <svg viewBox="0 0 240 150" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
                <rect width="240" height="150" fill="#18181b" />
                <rect x="25" y="25" width="85" height="100" fill="#e11d48" />
                <circle cx="155" cy="75" r="45" fill="#f43f5e" opacity="0.2" />
                <rect x="85" y="45" width="115" height="60" fill="#ffffff" opacity="0.9" />
                <rect x="110" y="60" width="95" height="65" fill="#0284c7" opacity="0.85" />
                <line x1="25" y1="135" x2="215" y2="135" stroke="#71717a" strokeWidth="2" />
              </svg>
            );

          default:
            // Prismatic Refraction & High-Tech Horizon (Warm Amber, Deep Space Blue)
            return (
              <svg viewBox="0 0 240 150" className="w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg">
                <rect width="240" height="150" fill="#090d16" />
                <polygon points="120,25 210,125 30,125" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
                <line x1="20" y1="75" x2="120" y2="75" stroke="#ffffff" strokeWidth="3" />
                <line x1="120" y1="75" x2="220" y2="40" stroke="#f97316" strokeWidth="2.5" />
                <line x1="120" y1="75" x2="220" y2="65" stroke="#eab308" strokeWidth="2.5" />
                <line x1="120" y1="75" x2="220" y2="90" stroke="#10b981" strokeWidth="2.5" />
                <line x1="120" y1="75" x2="220" y2="115" stroke="#06b6d4" strokeWidth="2.5" />
                <circle cx="120" cy="75" r="7" fill="#ffffff" />
              </svg>
            );
        }
      }
    }
  };

  return (
    <div className={`relative overflow-hidden bg-neutral-100 ${getAspectClass()} ${className}`} aria-label={alt}>
      {renderSVG()}
    </div>
  );
};
