
// import { useEffect, useRef, useState } from "react";

// type Phase = "curtain" | "logo" | "fade" | "done";

// export function CurtainIntro() {
//   const [phase, setPhase] = useState<Phase>("curtain");
//   const videoRef = useRef<HTMLVideoElement>(null);

//   // Lock scrolling only while intro is visible
//   useEffect(() => {
//     if (phase === "done") {
//       document.body.style.overflow = "";
//       document.documentElement.style.overflow = "";
//     } else {
//       document.body.style.overflow = "hidden";
//       document.documentElement.style.overflow = "hidden";
//     }

//     return () => {
//       document.body.style.overflow = "";
//       document.documentElement.style.overflow = "";
//     };
//   }, [phase]);

//   // Show logo immediately when video ends
//   const handleVideoEnd = () => {
//     setPhase((current) =>
//       current === "curtain" ? "logo" : current
//     );
//   };

//   // Fallback if video end event does not fire
//   useEffect(() => {
//     if (phase !== "curtain") return;

//     const timer = window.setTimeout(() => {
//       setPhase("logo");
//     }, 8000);

//     return () => window.clearTimeout(timer);
//   }, [phase]);

//   // Keep logo visible before fading out
//   useEffect(() => {
//     if (phase !== "logo") return;

//     const timer = window.setTimeout(() => {
//       setPhase("fade");
//     }, 5500);

//     return () => window.clearTimeout(timer);
//   }, [phase]);

//   // Reveal main website after logo fades
//   useEffect(() => {
//     if (phase !== "fade") return;

//     const timer = window.setTimeout(() => {
//       setPhase("done");
//     }, 2200);

//     return () => window.clearTimeout(timer);
//   }, [phase]);

//   const skipIntro = () => {
//     setPhase("done");
//   };

//   if (phase === "done") return null;

//   const logoVisible = phase === "logo";
//   const fading = phase === "fade";

//   return (
//     <div
//       className="er-intro fixed inset-0 z-[100] overflow-hidden bg-black"
//       aria-hidden="true"
//     >
//       {/* BACKGROUND */}

//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#17100b_0%,#080604_55%,#000_100%)]" />

//       {/* GOLDEN AMBIENT LIGHT */}

//       <div
//         className={`absolute left-1/2 top-1/2 h-[65vw] w-[65vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(211,155,75,0.2),transparent_65%)] blur-3xl transition-opacity duration-[2500ms] ${
//           logoVisible ? "opacity-100" : "opacity-0"
//         }`}
//       />

//       {/* CURTAIN VIDEO */}

//       <video
//         ref={videoRef}
//         src="/vidssave.com Curtain Swing Open Animation 1080p.mp4"
//         autoPlay
//         muted
//         playsInline
//         preload="auto"
//         onEnded={handleVideoEnd}
//         onError={handleVideoEnd}
//         className={`absolute inset-0 z-20 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
//           phase === "curtain"
//             ? "opacity-100"
//             : "pointer-events-none opacity-0"
//         }`}
//       />

//       {/* ELECTRORAMA LOGO REVEAL */}

//       <div
//         className={`absolute inset-0 z-10 flex items-center justify-center px-5 transition-opacity duration-[2200ms] ease-in-out ${
//           fading ? "opacity-0" : "opacity-100"
//         }`}
//       >
//         <div
//           className={`relative flex flex-col items-center justify-center transition-[opacity,filter] duration-[4000ms] ease-in-out ${
//             logoVisible
//               ? "opacity-100 blur-0"
//               : "opacity-0 blur-sm"
//           }`}
//         >
//           {/* GOLDEN LIGHT BEHIND LOGO */}

//           <div
//             className={`absolute inset-0 -z-10 scale-150 rounded-full bg-[radial-gradient(circle,rgba(231,177,91,0.3),transparent_65%)] blur-3xl transition-opacity duration-[2500ms] ${
//               logoVisible ? "opacity-100" : "opacity-0"
//             }`}
//           />

//           {/* ACTUAL ELECTRORAMA LOGO */}

//           <div className="relative overflow-hidden">
//             <img
//               src="/Electrorama-logo-(PNG)-1.png"
//               alt="Electrorama"
//               onLoad={() => console.log("Electrorama logo loaded")}
//               onError={() =>
//                 console.error("Electrorama logo could not be loaded")
//               }
//               className="block max-h-[65vh] max-w-[90vw] object-contain "
//             />

//             {/* GOLDEN LIGHT SWEEP */}

//             <div
//               className={`pointer-events-none absolute inset-y-0 left-[-60%] w-[35%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/70 to-transparent blur-sm ${
//                 logoVisible
//                   ? "animate-[electrorama-shine_2.8s_ease-in-out_1.5s_1_forwards]"
//                   : "opacity-0"
//               }`}
//             />
//           </div>

//           {/* TAGLINE */}

//           <p
//             className={`mt-5 text-center font-display text-xs uppercase tracking-[0.45em] text-[#e8c58c] transition-opacity duration-[2500ms] delay-500 sm:text-base ${
//               logoVisible ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             SOUND • VISION • EXPERIENCE
//           </p>

//           {/* GOLDEN UNDERLINE */}

//           <div
//             className={`mt-6 h-px bg-gradient-to-r from-transparent via-[#e5b35e] to-transparent transition-all duration-[2000ms] delay-700 ${
//               logoVisible ? "w-64 sm:w-96" : "w-0"
//             }`}
//           />
//         </div>
//       </div>

//       {/* SKIP INTRO */}

//       <button
//         onClick={skipIntro}
//         className="absolute bottom-6 right-6 z-30 rounded-full border border-[#d8ad69]/50 bg-black/40 px-5 py-2.5 text-[10px] uppercase tracking-[0.25em] text-[#e8c58c] backdrop-blur-md transition hover:bg-[#d8ad69]/20"
//       >
//         Skip Intro →
//       </button>
//     </div>
//   );
// }


// 2nd with one vieo

import { useEffect, useRef, useState } from "react";

export function CurtainIntro() {
  const [finished, setFinished] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const finishTimer = useRef<number | null>(null);
  const finishing = useRef(false);

  // Lock scrolling during intro
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";

      if (finishTimer.current) {
        window.clearTimeout(finishTimer.current);
      }
    };
  }, []);

  // Start muted autoplay when video is ready
  const handleCanPlay = () => {
    const video = videoRef.current;
    if (!video || !video.paused) return;

    video.muted = true;

    video.play().catch((error) => {
      console.error("Video autoplay failed:", error);
    });
  };

  // Enable audio after visitor interaction
  const toggleSound = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (!soundEnabled) {
      video.muted = false;
      video.volume = 0.8;

      try {
        await video.play();
        setSoundEnabled(true);
      } catch (error) {
        video.muted = true;
        console.error("Audio playback failed:", error);
      }
    } else {
      video.muted = true;
      setSoundEnabled(false);
    }
  };

  // Finish intro smoothly
  const finishIntro = () => {
    if (finishing.current) return;

    finishing.current = true;
    setFadeOut(true);

    finishTimer.current = window.setTimeout(() => {
      videoRef.current?.pause();
      setFinished(true);

      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }, 1500);
  };

  if (finished) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] overflow-hidden bg-black transition-opacity duration-[1500ms] ease-in-out ${
        fadeOut
          ? "pointer-events-none opacity-0"
          : "opacity-100"
      }`}
    >
      {/* CURTAIN VIDEO */}
      <video
        ref={videoRef}
        src="/vidssave.com Curtain Swing Open Animation 1080p_1.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        onCanPlay={handleCanPlay}
        onEnded={finishIntro}
        onError={() => {
          console.error("Curtain video could not be loaded");
          finishIntro();
        }}
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          backfaceVisibility: "hidden",
          transform: "translateZ(0)",
        }}
      />

      {/* CINEMATIC DARK OVERLAY */}
      <div className="pointer-events-none absolute inset-0 bg-black/10" />

      {/* SOUND BUTTON */}
      <button
        onClick={toggleSound}
        className="absolute bottom-7 left-7 z-30 flex items-center gap-3 rounded-full border border-[#d8ad69]/50 bg-black/60 px-5 py-3 text-[10px] font-medium uppercase tracking-[0.25em] text-[#e8c58c] backdrop-blur-md transition-all duration-300 hover:border-[#e8c58c] hover:bg-[#d8ad69]/20"
      >
        {soundEnabled ? (
          <>
            <span>♫</span>
            Sound On
          </>
        ) : (
          <>
            <span>♪</span>
            Enable Sound
          </>
        )}
      </button>

      {/* SKIP INTRO */}
      <button
        onClick={finishIntro}
        className="absolute bottom-7 right-7 z-30 rounded-full border border-[#d8ad69]/50 bg-black/60 px-6 py-3 text-[10px] font-medium uppercase tracking-[0.25em] text-[#e8c58c] backdrop-blur-md transition-all duration-300 hover:border-[#e8c58c] hover:bg-[#d8ad69]/20"
      >
        Skip Intro →
      </button>
    </div>
  );
}



// import { useEffect, useRef, useState } from "react";

// type Phase = "curtain" | "logo" | "fade" | "done";

// export function CurtainIntro() {
//   const [phase, setPhase] = useState<Phase>("curtain");

//   const curtainVideoRef = useRef<HTMLVideoElement>(null);
//   const logoVideoRef = useRef<HTMLVideoElement>(null);

//   const phaseRef = useRef<Phase>("curtain");

//   useEffect(() => {
//     phaseRef.current = phase;
//   }, [phase]);

//   // Lock scrolling
//   useEffect(() => {
//     document.body.style.overflow = phase === "done" ? "" : "hidden";
//     document.documentElement.style.overflow =
//       phase === "done" ? "" : "hidden";

//     return () => {
//       document.body.style.overflow = "";
//       document.documentElement.style.overflow = "";
//     };
//   }, [phase]);

//   // Start curtain video
//   useEffect(() => {
//     if (phase !== "curtain") return;

//     const video = curtainVideoRef.current;
//     if (!video) return;

//     video.muted = true;

//     video.play().catch((error) => {
//       console.error("Curtain autoplay error:", error);
//     });
//   }, [phase]);

//   // Start logo video when its phase begins
//   useEffect(() => {
//     if (phase !== "logo") return;

//     const video = logoVideoRef.current;
//     if (!video) return;

//     let cancelled = false;

//     const playLogo = async () => {
//       try {
//         video.pause();
//         video.currentTime = 0;
//         video.muted = true; // Muted first so autoplay is permitted

//         await video.play();

//         if (cancelled) {
//           video.pause();
//           return;
//         }

//         // Try enabling the original video audio
//         video.muted = false;
//         video.volume = 1;

//         console.log("Logo video started");
//       } catch (error) {
//         console.error("Logo video could not start:", error);
//       }
//     };

//     if (video.readyState >= 2) {
//       playLogo();
//     } else {
//       video.addEventListener("canplay", playLogo, { once: true });
//       video.load();
//     }

//     return () => {
//       cancelled = true;
//       video.removeEventListener("canplay", playLogo);
//     };
//   }, [phase]);

//   // First video finished
//   const handleCurtainEnd = () => {
//     if (phaseRef.current !== "curtain") return;

//     curtainVideoRef.current?.pause();
//     phaseRef.current = "logo";
//     setPhase("logo");
//   };

//   // Second video finished
//   const handleLogoEnd = () => {
//     if (phaseRef.current !== "logo") return;

//     phaseRef.current = "fade";
//     setPhase("fade");
//   };

//   // Fade out
//   useEffect(() => {
//     if (phase !== "fade") return;

//     const timer = window.setTimeout(() => {
//       phaseRef.current = "done";
//       setPhase("done");
//     }, 2200);

//     return () => window.clearTimeout(timer);
//   }, [phase]);

//   // Skip intro
//   const skipIntro = () => {
//     curtainVideoRef.current?.pause();
//     logoVideoRef.current?.pause();

//     phaseRef.current = "done";
//     setPhase("done");
//   };

//   if (phase === "done") return null;

//   return (
//     <div className="er-intro fixed inset-0 z-[100] overflow-hidden bg-black">

//       {/* BACKGROUND */}
//       <div className="absolute inset-0 bg-black" />

//       {/* FIRST VIDEO - CURTAIN */}
//       <video
//         ref={curtainVideoRef}
//         src="/vidssave.com Curtain Swing Open Animation 1080p.mp4"
//         autoPlay
//         muted
//         playsInline
//         preload="auto"
//         onEnded={handleCurtainEnd}
//         onError={(e) => {
//           console.error("Curtain video error:", e.currentTarget.error);
//         }}
//         className={`absolute inset-0 z-20 h-full w-full object-cover transition-opacity duration-1000 ${
//           phase === "curtain"
//             ? "opacity-100"
//             : "pointer-events-none opacity-0"
//         }`}
//       />

//       {/* SECOND VIDEO - LOGO + MUSIC */}
//       <video
//         ref={logoVideoRef}
//         src="/Light sweep 01.mp4"
//         playsInline
//         preload="auto"
//         muted
//         onEnded={handleLogoEnd}
//         onError={(e) => {
//           console.error("Logo video error:", e.currentTarget.error);
//         }}
//         className={`absolute inset-0 z-20 h-full w-full object-contain bg-black transition-opacity duration-1000 ${
//           phase === "logo"
//             ? "opacity-100"
//             : "pointer-events-none opacity-0"
//         }`}
//       />

//       {/* FADE OUT */}
//       <div
//         className={`absolute inset-0 z-[25] bg-black transition-opacity duration-[2200ms] ${
//           phase === "fade"
//             ? "opacity-100"
//             : "pointer-events-none opacity-0"
//         }`}
//       />

//       {/* SKIP */}
//       <button
//         onClick={skipIntro}
//         className="absolute bottom-6 right-6 z-30 rounded-full border border-[#d8ad69]/50 bg-black/40 px-5 py-2.5 text-[10px] uppercase tracking-[0.25em] text-[#e8c58c] backdrop-blur-md transition hover:bg-[#d8ad69]/20"
//       >
//         Skip Intro →
//       </button>
//     </div>
//   );
// }
