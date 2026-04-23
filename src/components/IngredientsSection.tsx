import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

// SVG diagram components for each ingredient mechanism

const GabaPathwayDiagram = () => (
  <svg viewBox="0 0 200 110" className="w-full h-auto" aria-hidden="true">
    {/* Neuron body */}
    <circle cx="50" cy="55" r="22" fill="none" stroke="hsl(38 82% 60% / 0.4)" strokeWidth="1.5" />
    <circle cx="50" cy="55" r="6" fill="hsl(38 82% 60% / 0.5)" />
    {/* Axon */}
    <line x1="72" y1="55" x2="120" y2="55" stroke="hsl(38 82% 60% / 0.5)" strokeWidth="1.5" />
    {/* Synapse */}
    <circle cx="130" cy="55" r="5" fill="hsl(38 82% 60% / 0.6)" />
    {/* GABA-A receptor */}
    <rect x="145" y="43" width="40" height="24" rx="4" fill="none" stroke="hsl(225 18% 58% / 0.4)" strokeWidth="1.5" />
    <text x="165" y="56" textAnchor="middle" fill="hsl(225 18% 58% / 0.8)" fontSize="8" fontFamily="DM Sans, sans-serif">GABA-A</text>
    {/* Inhibitory arrow */}
    <path d="M130 45 Q138 38 145 50" fill="none" stroke="hsl(38 82% 60% / 0.5)" strokeWidth="1" markerEnd="url(#arrowhead)" />
    {/* Mg2+ label */}
    <text x="50" y="59" textAnchor="middle" fill="hsl(40 25% 92% / 0.9)" fontSize="9" fontFamily="DM Sans, sans-serif">Mg²⁺</text>
    {/* Labels */}
    <text x="50" y="90" textAnchor="middle" fill="hsl(225 18% 58% / 0.7)" fontSize="8" fontFamily="DM Sans, sans-serif">Neuron</text>
    <text x="100" y="42" textAnchor="middle" fill="hsl(38 82% 60% / 0.7)" fontSize="7" fontFamily="DM Sans, sans-serif">Inhibitory</text>
    <defs>
      <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
        <path d="M0,0 L0,6 L6,3 z" fill="hsl(38 82% 60% / 0.5)" />
      </marker>
    </defs>
  </svg>
);

const TempRegDiagram = () => (
  <svg viewBox="0 0 200 110" className="w-full h-auto" aria-hidden="true">
    {/* Temperature curve */}
    <text x="10" y="15" fill="hsl(225 18% 58% / 0.7)" fontSize="8" fontFamily="DM Sans, sans-serif">Core Temp</text>
    {/* Y axis */}
    <line x1="30" y1="20" x2="30" y2="85" stroke="hsl(225 18% 58% / 0.3)" strokeWidth="1" />
    {/* X axis */}
    <line x1="30" y1="85" x2="190" y2="85" stroke="hsl(225 18% 58% / 0.3)" strokeWidth="1" />
    {/* Temperature curve - drops then recovers */}
    <path d="M30 35 Q70 38 90 50 Q110 62 130 68 Q155 72 175 60 Q185 55 190 50"
      fill="none" stroke="hsl(225 18% 58% / 0.4)" strokeWidth="1.5" strokeDasharray="4,3" />
    {/* With glycine curve */}
    <path d="M30 35 Q60 38 80 52 Q100 66 120 76 Q148 84 168 72 Q180 65 190 55"
      fill="none" stroke="hsl(38 82% 60% / 0.8)" strokeWidth="2" />
    {/* Sleep onset marker */}
    <line x1="90" y1="20" x2="90" y2="85" stroke="hsl(38 82% 60% / 0.2)" strokeWidth="1" strokeDasharray="3,3" />
    <text x="92" y="30" fill="hsl(38 82% 60% / 0.6)" fontSize="7" fontFamily="DM Sans, sans-serif">Sleep</text>
    <text x="92" y="38" fill="hsl(38 82% 60% / 0.6)" fontSize="7" fontFamily="DM Sans, sans-serif">Onset</text>
    {/* Labels */}
    <text x="170" y="50" fill="hsl(38 82% 60% / 0.8)" fontSize="7" fontFamily="DM Sans, sans-serif">+ Glycine</text>
    <text x="170" y="60" fill="hsl(225 18% 58% / 0.5)" fontSize="7" fontFamily="DM Sans, sans-serif">Baseline</text>
    {/* Arrow down */}
    <text x="118" y="90" fill="hsl(225 18% 58% / 0.6)" fontSize="7" fontFamily="DM Sans, sans-serif">Greater drop = deeper sleep</text>
  </svg>
);

const TryptophanPathwayDiagram = () => (
  <svg viewBox="0 0 200 110" className="w-full h-auto" aria-hidden="true">
    {/* Pathway chain */}
    {[
      { x: 15, label: "L-Trp", sub: "" },
      { x: 55, label: "5-HTP", sub: "" },
      { x: 100, label: "Serotonin", sub: "" },
      { x: 150, label: "Melatonin", sub: "" },
    ].map((node, i) => (
      <g key={i}>
        <rect x={node.x} y="35" width="34" height="28" rx="4"
          fill={i === 3 ? "hsl(38 82% 60% / 0.2)" : "hsl(228 25% 11%)"}
          stroke={i === 3 ? "hsl(38 82% 60% / 0.6)" : "hsl(225 18% 58% / 0.3)"}
          strokeWidth="1.5" />
        <text x={node.x + 17} y={node.sub ? "47" : "51"} textAnchor="middle"
          fill={i === 3 ? "hsl(38 82% 60%)" : "hsl(40 25% 92% / 0.8)"}
          fontSize="7.5" fontFamily="DM Sans, sans-serif">{node.label}</text>
        {i < 3 && (
          <path d={`M${node.x + 35} 49 L${node.x + 50} 49`}
            stroke="hsl(38 82% 60% / 0.5)" strokeWidth="1.5" markerEnd="url(#arr2)" />
        )}
      </g>
    ))}
    {/* P5P cofactor */}
    <text x="52" y="25" textAnchor="middle" fill="hsl(38 82% 60% / 0.6)" fontSize="7" fontFamily="DM Sans, sans-serif">P5P ↓</text>
    <text x="97" y="25" textAnchor="middle" fill="hsl(38 82% 60% / 0.6)" fontSize="7" fontFamily="DM Sans, sans-serif">P5P ↓</text>
    {/* Bottom note */}
    <text x="100" y="95" textAnchor="middle" fill="hsl(225 18% 58% / 0.7)" fontSize="7.5" fontFamily="DM Sans, sans-serif">Circadian melatonin synthesis</text>
    <defs>
      <marker id="arr2" markerWidth="5" markerHeight="5" refX="3" refY="2.5" orient="auto">
        <path d="M0,0 L0,5 L5,2.5 z" fill="hsl(38 82% 60% / 0.5)" />
      </marker>
    </defs>
  </svg>
);

const AlphaBrainwaveDiagram = () => (
  <svg viewBox="0 0 200 110" className="w-full h-auto" aria-hidden="true">
    {/* Brain wave patterns */}
    <text x="10" y="15" fill="hsl(225 18% 58% / 0.7)" fontSize="8" fontFamily="DM Sans, sans-serif">Alpha activity (8–12 Hz)</text>
    {/* Baseline (stressed) wave */}
    <text x="10" y="35" fill="hsl(225 18% 58% / 0.5)" fontSize="7" fontFamily="DM Sans, sans-serif">Baseline:</text>
    <path d="M55 35 Q58 28 62 35 Q66 42 70 35 Q74 28 78 35 Q82 42 86 35 Q90 28 94 35 Q98 42 102 35 Q106 28 110 35 Q114 42 118 35 Q122 28 126 35 Q130 42 134 35 Q138 28 142 35 Q146 42 150 35 Q154 28 158 35 Q162 42 166 35 Q170 28 174 35 Q178 42 182 35"
      fill="none" stroke="hsl(225 18% 58% / 0.3)" strokeWidth="1" />
    {/* With L-theanine wave (more regular, larger amplitude) */}
    <text x="10" y="65" fill="hsl(38 82% 60% / 0.8)" fontSize="7" fontFamily="DM Sans, sans-serif">+ Theanine:</text>
    <path d="M55 65 Q62 52 70 65 Q78 78 86 65 Q94 52 102 65 Q110 78 118 65 Q126 52 134 65 Q142 78 150 65 Q158 52 166 65 Q174 78 182 65"
      fill="none" stroke="hsl(38 82% 60% / 0.8)" strokeWidth="2" />
    {/* Legend */}
    <text x="10" y="95" fill="hsl(225 18% 58% / 0.6)" fontSize="7.5" fontFamily="DM Sans, sans-serif">Increased alpha = calm alertness → restful transition to sleep</text>
  </svg>
);

const HPAAxisDiagram = () => (
  <svg viewBox="0 0 200 110" className="w-full h-auto" aria-hidden="true">
    {/* HPA axis chain */}
    <text x="100" y="12" textAnchor="middle" fill="hsl(225 18% 58% / 0.7)" fontSize="8" fontFamily="DM Sans, sans-serif">HPA Axis</text>
    {[
      { y: 22, label: "Hypothalamus" },
      { y: 48, label: "Pituitary" },
      { y: 74, label: "Adrenal → Cortisol" },
    ].map((node, i) => (
      <g key={i}>
        <rect x="55" y={node.y} width="90" height="18" rx="3"
          fill="hsl(228 25% 11%)" stroke="hsl(225 18% 58% / 0.3)" strokeWidth="1.2" />
        <text x="100" y={node.y + 12} textAnchor="middle"
          fill={i === 2 ? "hsl(0 75% 60% / 0.7)" : "hsl(40 25% 92% / 0.7)"}
          fontSize="7.5" fontFamily="DM Sans, sans-serif">{node.label}</text>
        {i < 2 && (
          <line x1="100" y1={node.y + 18} x2="100" y2={node.y + 26}
            stroke="hsl(225 18% 58% / 0.4)" strokeWidth="1.2" markerEnd="url(#arr3)" />
        )}
      </g>
    ))}
    {/* Ashwagandha inhibition */}
    <path d="M170 58 Q185 65 170 72" fill="none" stroke="hsl(38 82% 60% / 0.7)" strokeWidth="1.5" />
    <line x1="168" y1="65" x2="148" y2="65" stroke="hsl(38 82% 60% / 0.7)" strokeWidth="1.5" />
    <circle cx="168" cy="65" r="3" fill="hsl(38 82% 60% / 0.5)" />
    <text x="175" y="55" fill="hsl(38 82% 60% / 0.8)" fontSize="6.5" fontFamily="DM Sans, sans-serif">Ashwa-</text>
    <text x="175" y="63" fill="hsl(38 82% 60% / 0.8)" fontSize="6.5" fontFamily="DM Sans, sans-serif">gandha</text>
    <text x="175" y="71" fill="hsl(38 82% 60% / 0.8)" fontSize="6.5" fontFamily="DM Sans, sans-serif">blocks</text>
    <defs>
      <marker id="arr3" markerWidth="5" markerHeight="5" refX="3" refY="2.5" orient="auto">
        <path d="M0,0 L0,5 L5,2.5 z" fill="hsl(225 18% 58% / 0.4)" />
      </marker>
    </defs>
  </svg>
);

const GABAADiagram = () => (
  <svg viewBox="0 0 200 110" className="w-full h-auto" aria-hidden="true">
    {/* GABA-A receptor cross section */}
    <text x="100" y="12" textAnchor="middle" fill="hsl(225 18% 58% / 0.7)" fontSize="8" fontFamily="DM Sans, sans-serif">GABA-A Receptor</text>
    {/* Receptor pentagon */}
    <polygon points="100,25 130,48 118,78 82,78 70,48"
      fill="hsl(228 25% 11%)" stroke="hsl(225 18% 58% / 0.4)" strokeWidth="1.5" />
    {/* Ion channel */}
    <rect x="91" y="28" width="18" height="48" rx="2"
      fill="hsl(38 82% 60% / 0.08)" stroke="hsl(38 82% 60% / 0.2)" strokeWidth="1" />
    <text x="100" y="56" textAnchor="middle" fill="hsl(38 82% 60% / 0.6)" fontSize="7" fontFamily="DM Sans, sans-serif">Cl⁻</text>
    {/* Binding sites */}
    <circle cx="70" cy="48" r="5" fill="hsl(38 82% 60% / 0.3)" stroke="hsl(38 82% 60% / 0.6)" strokeWidth="1" />
    <circle cx="130" cy="48" r="5" fill="hsl(38 82% 60% / 0.3)" stroke="hsl(38 82% 60% / 0.6)" strokeWidth="1" />
    <text x="52" y="45" fill="hsl(38 82% 60% / 0.7)" fontSize="6.5" fontFamily="DM Sans, sans-serif">BZD</text>
    <text x="52" y="53" fill="hsl(38 82% 60% / 0.7)" fontSize="6.5" fontFamily="DM Sans, sans-serif">site</text>
    {/* Arrow from compound */}
    <path d="M170 48 L138 48" stroke="hsl(38 82% 60% / 0.6)" strokeWidth="1.5" markerEnd="url(#arr4)" />
    <text x="174" y="45" textAnchor="end" fill="hsl(38 82% 60% / 0.8)" fontSize="7" fontFamily="DM Sans, sans-serif">Apigenin /</text>
    <text x="174" y="54" textAnchor="end" fill="hsl(38 82% 60% / 0.8)" fontSize="7" fontFamily="DM Sans, sans-serif">Honokiol</text>
    <text x="100" y="98" textAnchor="middle" fill="hsl(225 18% 58% / 0.6)" fontSize="7" fontFamily="DM Sans, sans-serif">Cl⁻ influx → hyperpolarization → inhibition</text>
    <defs>
      <marker id="arr4" markerWidth="5" markerHeight="5" refX="3" refY="2.5" orient="auto">
        <path d="M0,0 L0,5 L5,2.5 z" fill="hsl(38 82% 60% / 0.6)" />
      </marker>
    </defs>
  </svg>
);

const SerotoninDiagram = () => (
  <svg viewBox="0 0 200 110" className="w-full h-auto" aria-hidden="true">
    {/* Pre-synaptic neuron */}
    <ellipse cx="40" cy="55" rx="28" ry="22" fill="hsl(228 25% 11%)" stroke="hsl(225 18% 58% / 0.35)" strokeWidth="1.5" />
    <text x="40" y="52" textAnchor="middle" fill="hsl(40 25% 92% / 0.7)" fontSize="7" fontFamily="DM Sans, sans-serif">Pre-</text>
    <text x="40" y="61" textAnchor="middle" fill="hsl(40 25% 92% / 0.7)" fontSize="7" fontFamily="DM Sans, sans-serif">synaptic</text>
    {/* Serotonin dots */}
    {[95, 108, 121].map((x, i) => (
      <circle key={i} cx={x} cy={55} r="4" fill="hsl(38 82% 60% / 0.6)" />
    ))}
    {/* Reuptake transporter (blocked) */}
    <rect x="64" y="40" width="18" height="28" rx="3"
      fill="hsl(228 25% 11%)" stroke="hsl(225 18% 58% / 0.3)" strokeWidth="1.2" />
    <line x1="64" y1="54" x2="82" y2="54" stroke="hsl(0 75% 60% / 0.6)" strokeWidth="2" />
    <line x1="64" y1="54" x2="82" y2="54" stroke="transparent" strokeWidth="8" />
    {/* X through transporter */}
    <line x1="66" y1="42" x2="80" y2="66" stroke="hsl(38 82% 60% / 0.7)" strokeWidth="1.5" />
    <line x1="80" y1="42" x2="66" y2="66" stroke="hsl(38 82% 60% / 0.7)" strokeWidth="1.5" />
    <text x="73" y="78" textAnchor="middle" fill="hsl(38 82% 60% / 0.7)" fontSize="6.5" fontFamily="DM Sans, sans-serif">SERT blocked</text>
    <text x="73" y="86" textAnchor="middle" fill="hsl(38 82% 60% / 0.7)" fontSize="6.5" fontFamily="DM Sans, sans-serif">by Safranal</text>
    {/* Post-synaptic */}
    <ellipse cx="160" cy="55" rx="28" ry="22" fill="hsl(228 25% 11%)" stroke="hsl(225 18% 58% / 0.35)" strokeWidth="1.5" />
    <text x="160" y="52" textAnchor="middle" fill="hsl(40 25% 92% / 0.7)" fontSize="7" fontFamily="DM Sans, sans-serif">Post-</text>
    <text x="160" y="61" textAnchor="middle" fill="hsl(40 25% 92% / 0.7)" fontSize="7" fontFamily="DM Sans, sans-serif">synaptic</text>
    <text x="100" y="98" textAnchor="middle" fill="hsl(225 18% 58% / 0.6)" fontSize="7" fontFamily="DM Sans, sans-serif">↑ Synaptic serotonin → mood + sleep quality</text>
  </svg>
);

const CircadianDiagram = () => (
  <svg viewBox="0 0 200 110" className="w-full h-auto" aria-hidden="true">
    {/* 24h clock */}
    <circle cx="100" cy="58" r="38" fill="none" stroke="hsl(225 18% 58% / 0.25)" strokeWidth="1.5" />
    {/* Hour marks */}
    {[...Array(12)].map((_, i) => {
      const angle = (i * 30 - 90) * (Math.PI / 180);
      const x1 = 100 + 34 * Math.cos(angle);
      const y1 = 58 + 34 * Math.sin(angle);
      const x2 = 100 + 38 * Math.cos(angle);
      const y2 = 58 + 38 * Math.sin(angle);
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="hsl(225 18% 58% / 0.3)" strokeWidth="1" />;
    })}
    {/* Melatonin rise arc (9pm to 3am roughly = 270° to 90°) */}
    <path d="M100 20 A38 38 0 0 1 138 96" fill="none" stroke="hsl(38 82% 60% / 0.7)" strokeWidth="3" strokeLinecap="round" />
    {/* Moon icon */}
    <text x="100" y="62" textAnchor="middle" fill="hsl(38 82% 60% / 0.6)" fontSize="16">☽</text>
    {/* Labels */}
    <text x="100" y="12" textAnchor="middle" fill="hsl(225 18% 58% / 0.6)" fontSize="7" fontFamily="DM Sans, sans-serif">12pm</text>
    <text x="155" y="60" fill="hsl(225 18% 58% / 0.5)" fontSize="7" fontFamily="DM Sans, sans-serif">6pm</text>
    <text x="38" y="60" fill="hsl(225 18% 58% / 0.5)" fontSize="7" fontFamily="DM Sans, sans-serif">6am</text>
    <text x="100" y="105" textAnchor="middle" fill="hsl(38 82% 60% / 0.7)" fontSize="7" fontFamily="DM Sans, sans-serif">Melatonin peak (0.3mg reinforces signal)</text>
  </svg>
);

const CofactorDiagram = () => (
  <svg viewBox="0 0 200 110" className="w-full h-auto" aria-hidden="true">
    {/* P5P as hub */}
    <circle cx="100" cy="55" r="20" fill="hsl(38 82% 60% / 0.15)" stroke="hsl(38 82% 60% / 0.6)" strokeWidth="1.5" />
    <text x="100" y="52" textAnchor="middle" fill="hsl(38 82% 60%)" fontSize="9" fontFamily="DM Sans, sans-serif" fontWeight="bold">P5P</text>
    <text x="100" y="63" textAnchor="middle" fill="hsl(38 82% 60% / 0.7)" fontSize="7" fontFamily="DM Sans, sans-serif">(Vit B6)</text>
    {/* Output arrows */}
    {[
      { angle: -120, label: "GABA" },
      { angle: -60, label: "Serotonin" },
      { angle: 0, label: "Dopamine" },
      { angle: 60, label: "Histamine\nmetab." },
      { angle: 120, label: "Glycine\nsynth." },
      { angle: 180, label: "Taurine" },
    ].map(({ angle, label }, i) => {
      const rad = angle * (Math.PI / 180);
      const x1 = 100 + 22 * Math.cos(rad);
      const y1 = 55 + 22 * Math.sin(rad);
      const x2 = 100 + 48 * Math.cos(rad);
      const y2 = 55 + 48 * Math.sin(rad);
      const tx = 100 + 58 * Math.cos(rad);
      const ty = 55 + 58 * Math.sin(rad);
      return (
        <g key={i}>
          <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="hsl(225 18% 58% / 0.35)" strokeWidth="1" />
          <text x={tx} y={ty + 3} textAnchor="middle" fill="hsl(225 18% 58% / 0.7)" fontSize="6.5" fontFamily="DM Sans, sans-serif">{label.split("\n")[0]}</text>
          {label.includes("\n") && (
            <text x={tx} y={ty + 10} textAnchor="middle" fill="hsl(225 18% 58% / 0.7)" fontSize="6.5" fontFamily="DM Sans, sans-serif">{label.split("\n")[1]}</text>
          )}
        </g>
      );
    })}
  </svg>
);

const JujubeDiagram = () => (
  <svg viewBox="0 0 200 110" className="w-full h-auto" aria-hidden="true">
    {/* Jujubosides → GABA-A modulation */}
    <text x="100" y="12" textAnchor="middle" fill="hsl(225 18% 58% / 0.7)" fontSize="8" fontFamily="DM Sans, sans-serif">Jujuboside Mechanism</text>
    {/* Spine/nervous system */}
    <line x1="100" y1="22" x2="100" y2="88" stroke="hsl(225 18% 58% / 0.3)" strokeWidth="2" />
    {/* Nerve branches */}
    {[32, 48, 64, 80].map((y) => (
      <g key={y}>
        <line x1="100" y1={y} x2="75" y2={y} stroke="hsl(225 18% 58% / 0.25)" strokeWidth="1" />
        <line x1="100" y1={y} x2="125" y2={y} stroke="hsl(225 18% 58% / 0.25)" strokeWidth="1" />
      </g>
    ))}
    {/* Brain at top */}
    <ellipse cx="100" cy="18" rx="12" ry="8" fill="hsl(228 25% 11%)" stroke="hsl(225 18% 58% / 0.4)" strokeWidth="1.5" />
    {/* Jujuboside effects */}
    <rect x="135" y="30" width="52" height="15" rx="3" fill="hsl(38 82% 60% / 0.1)" stroke="hsl(38 82% 60% / 0.4)" strokeWidth="1" />
    <text x="161" y="41" textAnchor="middle" fill="hsl(38 82% 60% / 0.8)" fontSize="7" fontFamily="DM Sans, sans-serif">↑ GABA-A activity</text>
    <rect x="135" y="52" width="52" height="15" rx="3" fill="hsl(38 82% 60% / 0.1)" stroke="hsl(38 82% 60% / 0.4)" strokeWidth="1" />
    <text x="161" y="63" textAnchor="middle" fill="hsl(38 82% 60% / 0.8)" fontSize="7" fontFamily="DM Sans, sans-serif">↓ REM latency</text>
    <rect x="135" y="74" width="52" height="15" rx="3" fill="hsl(38 82% 60% / 0.1)" stroke="hsl(38 82% 60% / 0.4)" strokeWidth="1" />
    <text x="161" y="85" textAnchor="middle" fill="hsl(38 82% 60% / 0.8)" fontSize="7" fontFamily="DM Sans, sans-serif">↑ N3 duration</text>
    <path d="M125 38 L133 38" stroke="hsl(38 82% 60% / 0.4)" strokeWidth="1" />
    <path d="M125 60 L133 60" stroke="hsl(38 82% 60% / 0.4)" strokeWidth="1" />
    <path d="M125 82 L133 82" stroke="hsl(38 82% 60% / 0.4)" strokeWidth="1" />
  </svg>
);

const MagTauDiagram = () => (
  <svg viewBox="0 0 200 110" className="w-full h-auto" aria-hidden="true">
    {/* Mg-Taurate calming mechanism */}
    <text x="100" y="12" textAnchor="middle" fill="hsl(225 18% 58% / 0.7)" fontSize="8" fontFamily="DM Sans, sans-serif">Mg²⁺ + Taurine Synergy</text>
    {/* Two compounds combining */}
    <circle cx="55" cy="55" r="18" fill="hsl(228 25% 11%)" stroke="hsl(225 18% 58% / 0.3)" strokeWidth="1.5" />
    <text x="55" y="52" textAnchor="middle" fill="hsl(40 25% 92% / 0.8)" fontSize="7.5" fontFamily="DM Sans, sans-serif">Mg²⁺</text>
    <text x="55" y="62" textAnchor="middle" fill="hsl(225 18% 58% / 0.6)" fontSize="7" fontFamily="DM Sans, sans-serif">GABA-B</text>
    <text x="82" y="59" textAnchor="middle" fill="hsl(225 18% 58% / 0.4)" fontSize="10" fontFamily="DM Sans, sans-serif">+</text>
    <circle cx="110" cy="55" r="18" fill="hsl(228 25% 11%)" stroke="hsl(225 18% 58% / 0.3)" strokeWidth="1.5" />
    <text x="110" y="52" textAnchor="middle" fill="hsl(40 25% 92% / 0.8)" fontSize="7.5" fontFamily="DM Sans, sans-serif">Taurine</text>
    <text x="110" y="62" textAnchor="middle" fill="hsl(225 18% 58% / 0.6)" fontSize="7" fontFamily="DM Sans, sans-serif">GlyR + GABA</text>
    {/* Result */}
    <path d="M130 55 L148 55" stroke="hsl(38 82% 60% / 0.5)" strokeWidth="1.5" markerEnd="url(#arr5)" />
    <rect x="150" y="44" width="42" height="22" rx="3" fill="hsl(38 82% 60% / 0.1)" stroke="hsl(38 82% 60% / 0.5)" strokeWidth="1.2" />
    <text x="171" y="54" textAnchor="middle" fill="hsl(38 82% 60% / 0.9)" fontSize="7.5" fontFamily="DM Sans, sans-serif">Neuronal</text>
    <text x="171" y="63" textAnchor="middle" fill="hsl(38 82% 60% / 0.9)" fontSize="7.5" fontFamily="DM Sans, sans-serif">Calm</text>
    <text x="100" y="95" textAnchor="middle" fill="hsl(225 18% 58% / 0.6)" fontSize="7" fontFamily="DM Sans, sans-serif">Chelated form = superior bioavailability vs. oxide</text>
    <defs>
      <marker id="arr5" markerWidth="5" markerHeight="5" refX="3" refY="2.5" orient="auto">
        <path d="M0,0 L0,5 L5,2.5 z" fill="hsl(38 82% 60% / 0.5)" />
      </marker>
    </defs>
  </svg>
);

const SaffronDiagram = () => (
  <svg viewBox="0 0 200 110" className="w-full h-auto" aria-hidden="true">
    {/* Saffron dual mechanism */}
    <text x="100" y="12" textAnchor="middle" fill="hsl(225 18% 58% / 0.7)" fontSize="8" fontFamily="DM Sans, sans-serif">Saffron (Safranal + Crocin)</text>
    {/* Two pathways */}
    <rect x="10" y="25" width="75" height="30" rx="4" fill="hsl(228 25% 11%)" stroke="hsl(225 18% 58% / 0.3)" strokeWidth="1.2" />
    <text x="47" y="38" textAnchor="middle" fill="hsl(40 25% 92% / 0.8)" fontSize="7.5" fontFamily="DM Sans, sans-serif">Safranal</text>
    <text x="47" y="48" textAnchor="middle" fill="hsl(225 18% 58% / 0.6)" fontSize="7" fontFamily="DM Sans, sans-serif">SERT inhibition</text>
    <rect x="115" y="25" width="75" height="30" rx="4" fill="hsl(228 25% 11%)" stroke="hsl(225 18% 58% / 0.3)" strokeWidth="1.2" />
    <text x="152" y="38" textAnchor="middle" fill="hsl(40 25% 92% / 0.8)" fontSize="7.5" fontFamily="DM Sans, sans-serif">Crocin</text>
    <text x="152" y="48" textAnchor="middle" fill="hsl(225 18% 58% / 0.6)" fontSize="7" fontFamily="DM Sans, sans-serif">Antioxidant + mood</text>
    {/* Converge to result */}
    <line x1="47" y1="55" x2="87" y2="73" stroke="hsl(38 82% 60% / 0.4)" strokeWidth="1" />
    <line x1="152" y1="55" x2="113" y2="73" stroke="hsl(38 82% 60% / 0.4)" strokeWidth="1" />
    <rect x="70" y="74" width="60" height="20" rx="4" fill="hsl(38 82% 60% / 0.12)" stroke="hsl(38 82% 60% / 0.5)" strokeWidth="1.5" />
    <text x="100" y="84" textAnchor="middle" fill="hsl(38 82% 60%)" fontSize="7.5" fontFamily="DM Sans, sans-serif">Sleep quality</text>
    <text x="100" y="93" textAnchor="middle" fill="hsl(38 82% 60% / 0.8)" fontSize="7" fontFamily="DM Sans, sans-serif">+ mood stability</text>
  </svg>
);

const ingredients = [
  {
    name: "Magnesium Bisglycinate",
    dose: "1,500 mg",
    spec: "Generic fully-reacted, ≥10% elemental",
    desc: "The most bioavailable form of magnesium. Modulates GABA-A receptors and is a required cofactor for melatonin synthesis. Deficiency directly impairs slow wave sleep — and 40% of adults are deficient.",
    Diagram: GabaPathwayDiagram,
    diagramTitle: "GABAergic inhibition pathway",
  },
  {
    name: "Magnesium Taurate",
    dose: "1,000 mg",
    spec: "Generic ~10% elemental",
    desc: "Pairs magnesium with taurine to simultaneously activate GABA-B receptors and glycine receptors. Taurine independently acts as an inhibitory neurotransmitter, amplifying the calming effect of magnesium through a separate mechanism.",
    Diagram: MagTauDiagram,
    diagramTitle: "Mg²⁺ + taurine synergy",
  },
  {
    name: "Glycine USP",
    dose: "2,000 mg",
    spec: "≥99% pharmaceutical grade",
    desc: "Glycine activates NMDA receptors in the suprachiasmatic nucleus — the brain's master clock — triggering cutaneous vasodilation and a drop in core body temperature. Research shows this measurably improves slow wave sleep depth and reduces next-day fatigue.",
    Diagram: TempRegDiagram,
    diagramTitle: "Core temperature regulation",
  },
  {
    name: "L-Tryptophan USP",
    dose: "500 mg",
    spec: "Fermentation-derived, Peak-X tested",
    desc: "The direct dietary precursor to serotonin and melatonin. Tryptophan → 5-HTP → serotonin → N-acetylserotonin → melatonin. P5P (vitamin B6 active form) catalyzes each enzymatic step. Without adequate tryptophan, your body cannot produce enough melatonin endogenously.",
    Diagram: TryptophanPathwayDiagram,
    diagramTitle: "Melatonin biosynthesis pathway",
  },
  {
    name: "L-Theanine",
    dose: "200 mg",
    spec: "Generic ≥98% L-isomer",
    desc: "Promotes alpha brain wave activity — the pattern associated with relaxed alertness and the ideal mental state for sleep onset. Also reduces cortisol and blunts the stimulant effects of caffeine. Multiple RCTs demonstrate improvement in sleep quality scores.",
    Diagram: AlphaBrainwaveDiagram,
    diagramTitle: "Alpha brainwave induction",
  },
  {
    name: "Ashwagandha Root Extract",
    dose: "600 mg",
    spec: "5% withanolides by HPLC",
    desc: "The most extensively studied adaptogen for sleep. Withanolides downregulate the HPA axis, reducing cortisol secretion and the stress-driven arousal that delays sleep onset. Multiple meta-analyses confirm improvements in sleep quality, onset latency, and total sleep time.",
    Diagram: HPAAxisDiagram,
    diagramTitle: "HPA axis cortisol suppression",
  },
  {
    name: "Magnolia Bark Extract",
    dose: "200 mg",
    spec: "2% honokiol + magnolol by HPLC",
    desc: "Honokiol and magnolol are potent GABA-A modulators that bind the benzodiazepine site without inducing tolerance or dependence. Honokiol also inhibits cortisol receptor binding. Together they provide anxiolysis and sleep promotion through two independent pathways.",
    Diagram: GABAADiagram,
    diagramTitle: "GABA-A receptor modulation",
  },
  {
    name: "Jujube Seed Extract",
    dose: "300 mg",
    spec: "Ziziphus jujuba var. spinosa, 2% jujubosides HPLC",
    desc: "Jujubosides modulate GABA-A receptor activity and reduce neuronal excitability in the hippocampus. Used in Traditional Chinese Medicine for centuries, validated by modern RCTs showing reduced REM latency and increased N3 (slow wave) sleep duration.",
    Diagram: JujubeDiagram,
    diagramTitle: "GABAergic sedation + N3 enhancement",
  },
  {
    name: "Chamomile Extract",
    dose: "200 mg",
    spec: "1.2% apigenin by HPLC",
    desc: "Apigenin is a flavonoid that binds the benzodiazepine site on GABA-A receptors — the same site as prescription sedatives, but without the tolerance, dependence, or REM suppression. It acts via partial agonism, providing gentle inhibitory tone.",
    Diagram: GABAADiagram,
    diagramTitle: "Benzodiazepine-site GABA-A binding",
  },
  {
    name: "Saffron Extract",
    dose: "28 mg",
    spec: "2% safranal by HPLC, ISO 3632 compliant",
    desc: "Safranal inhibits serotonin reuptake (SERT), maintaining serotonergic tone needed for melatonin synthesis and emotional stability at sleep onset. Crocin, another saffron constituent, has antioxidant properties that reduce sleep-disrupting inflammation. RCTs show improvements in sleep quality comparable to low-dose antidepressants.",
    Diagram: SaffronDiagram,
    diagramTitle: "Serotonin reuptake inhibition",
  },
  {
    name: "Melatonin USP",
    dose: "0.5 mg",
    spec: "Pharmaceutical grade",
    desc: "This is the dose validated by MIT research as optimal for circadian signaling. Most supplements contain 5–10 mg, which causes receptor downregulation, rebound insomnia, and morning grogginess. 0.5 mg reinforces your natural melatonin rise without suppressing endogenous production.",
    callout: "Most supplements use 10–30× this dose. More is not better — it's counterproductive.",
    Diagram: CircadianDiagram,
    diagramTitle: "Circadian melatonin signaling",
  },
  {
    name: "Pyridoxal-5-Phosphate (P5P)",
    dose: "5 mg",
    spec: "Active form of Vitamin B6",
    desc: "P5P is the biologically active form of vitamin B6 and the rate-limiting cofactor for neurotransmitter synthesis. It is required for the enzymatic conversion of tryptophan to serotonin, glutamate to GABA, and several other pathways directly relevant to sleep. Without sufficient P5P, tryptophan and other sleep ingredients underperform.",
    Diagram: CofactorDiagram,
    diagramTitle: "Neurotransmitter synthesis cofactor",
  },
];

const IngredientsSection = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="ingredients" className="py-24 md:py-36 px-6 noise-overlay relative">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="text-xs tracking-[0.3em] uppercase text-slate-muted font-sans mb-4">The Formula</p>
          <h2 className="font-serif text-3xl md:text-5xl font-light mb-4">
            Slow Wave v3.
          </h2>
          <p className="text-slate-muted text-sm md:text-base font-sans max-w-2xl leading-relaxed mb-4">
            12 ingredients. Zero filler. 6.53g per serving of active compounds, each at the dose used in human clinical trials.
          </p>
          <div className="flex flex-wrap gap-4 mb-16 md:mb-20">
            <span className="text-xs font-sans tracking-wide text-slate-muted border border-border rounded-sm px-3 py-1.5">
              Click any ingredient to see the mechanism
            </span>
          </div>
        </ScrollReveal>

        <div className="space-y-0">
          {ingredients.map((ing, i) => {
            const isOpen = expanded === i;
            return (
              <ScrollReveal key={i} delay={Math.min(i * 0.04, 0.3)}>
                <div className={`border-t border-border transition-colors duration-300 ${isOpen ? "bg-secondary/40" : "hover:bg-secondary/20"}`}>
                  {/* Row header — always visible */}
                  <button
                    className="w-full text-left py-5 md:py-6 px-0 grid grid-cols-1 md:grid-cols-[1fr_auto_2fr_auto] gap-2 md:gap-8 items-center cursor-pointer group"
                    onClick={() => setExpanded(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <h3 className="font-serif text-lg md:text-xl text-foreground group-hover:text-gold transition-colors duration-300">{ing.name}</h3>
                    <span className="text-gold text-sm font-sans font-medium tracking-wide whitespace-nowrap">{ing.dose}</span>
                    <div>
                      <p className="text-slate-muted text-sm font-sans leading-relaxed line-clamp-2 md:line-clamp-none">{ing.desc.split(".")[0]}.</p>
                      {ing.callout && !isOpen && (
                        <p className="mt-1.5 text-xs text-gold/75 font-sans italic border-l-2 border-gold/30 pl-3 hidden md:block">
                          {ing.callout}
                        </p>
                      )}
                    </div>
                    <span className={`text-gold/60 text-xl font-sans transition-transform duration-300 ${isOpen ? "rotate-45" : ""} self-start mt-1 shrink-0`}>
                      +
                    </span>
                  </button>

                  {/* Expanded content */}
                  {isOpen && (
                    <div className="pb-8 grid md:grid-cols-2 gap-8 items-start px-0">
                      {/* Full description */}
                      <div>
                        <p className="text-slate-muted text-sm font-sans leading-relaxed mb-4">{ing.desc}</p>
                        {ing.callout && (
                          <p className="text-xs text-gold/80 font-sans italic border-l-2 border-gold/30 pl-3">
                            {ing.callout}
                          </p>
                        )}
                        <div className="mt-4 pt-4 border-t border-border/60">
                          <p className="text-[11px] tracking-[0.15em] uppercase text-slate-muted font-sans mb-1">Specification</p>
                          <p className="text-xs text-foreground/70 font-sans">{ing.spec}</p>
                        </div>
                      </div>
                      {/* Mechanism diagram */}
                      <div className="bg-background/60 rounded-sm border border-border p-4">
                        <p className="text-[11px] tracking-[0.15em] uppercase text-slate-muted font-sans mb-3">{ing.diagramTitle}</p>
                        <ing.Diagram />
                      </div>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
          <div className="border-t border-border" />
        </div>

        {/* Totals */}
        <ScrollReveal delay={0.1}>
          <div className="mt-10 md:mt-14 p-6 md:p-8 border border-gold/20 rounded-sm bg-gold/[0.04]">
            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-slate-muted font-sans mb-2">Total active powder</p>
                <p className="font-serif text-3xl text-foreground font-light">6.53g</p>
                <p className="text-slate-muted text-xs font-sans mt-1">per serving</p>
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-slate-muted font-sans mb-2">Active ingredients</p>
                <p className="font-serif text-3xl text-foreground font-light">12</p>
                <p className="text-slate-muted text-xs font-sans mt-1">zero proprietary blends</p>
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-slate-muted font-sans mb-2">Fillers</p>
                <p className="font-serif text-3xl text-gold font-light">Zero</p>
                <p className="text-slate-muted text-xs font-sans mt-1">no maltodextrin, silicon dioxide, etc.</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default IngredientsSection;
