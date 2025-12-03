import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

const DatingBusinessCard = () => {
  const [particles, setParticles] = useState<
    Array<{ id: number; x: number; y: number; delay: number }>
  >([]);

  useEffect(() => {
    // Generate floating particles around center
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100 - 50, // -50 to 50
      y: Math.random() * 100 - 50, // -50 to 50
      delay: Math.random() * 0.5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gray-900">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/34969795/pexels-photo-34969795.jpeg')",
        }}
      >
        {/* Animated Dark Overlay with gradient shift */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70 animate-pulse-slow" />
      </div>

      {/* Floating Particles Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1.5 h-1.5 bg-rose-400 rounded-full blur-sm opacity-20"
            style={{
              left: "50%",
              top: "50%",
              animation: `float-particle 4s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`,
              transform: `translate(calc(-50% + ${particle.x}px), calc(-50% + ${particle.y}px))`,
            }}
          />
        ))}
      </div>

      {/* Glow Effect Circles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-pulse-slower"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Content - Centered */}
      <div className="relative z-10 w-full h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-3xl text-center text-white">
          {/* Badge - Animated entrance */}
          <div
            className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 animate-fade-in-down"
            style={{ animationDelay: "0.1s" }}
          >
            <Heart className="w-4 h-4 text-rose-400 animate-pulse-beat" />
            <span className="text-sm font-semibold text-white">
              Знайди своє кохання
            </span>
          </div>

          {/* Main Heading - Split word animation */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span
              className="block animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Зустріч, яка
            </span>
            <span
              className="block my-2 animate-scale-in-float"
              style={{ animationDelay: "0.4s" }}
            >
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient-shift">
                  змінить
                </span>
                {/* Glow effect under text */}
                <span className="absolute -bottom-2 left-0 right-0 h-2 bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 blur-lg opacity-40 animate-pulse" />
              </span>
            </span>
            <span
              className="block animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              твоє життя
            </span>
          </h1>

          {/* Subtitle - Fade and slide */}
          <p
            className="text-base sm:text-lg md:text-xl text-gray-200 mb-12 leading-relaxed max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            Приєднайся до мільйонів людей, які вже знайшли свою половинку.
            Найбільш надійна платформа для серйозних стосунків у Україні.
          </p>

          {/* CTA Button - Enhanced animations */}
          <button
            onClick={() => (window.location.href = "https://tone.affomelody.com/click?pid=123437&offer_id=266&l=1617186557")}
            className="relative inline-flex items-center justify-center px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-rose-500 via-pink-500 to-rose-500 text-white font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-rose-500/70 transition-all duration-300 transform hover:scale-110 group cursor-pointer"
            style={{
              animation:
                "fade-in-up 0.6s ease-out 1s forwards, bounce-slow 2s ease-in-out 1.6s infinite",
              opacity: 0,
            }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full blur opacity-0 group-hover:opacity-70 transition-opacity duration-300 animate-pulse" />
            <span className="relative flex items-center gap-2">
              <Heart
                className="w-5 h-5 fill-current group-hover:scale-125 transition-transform duration-300"
                style={{ animation: "heartbeat 1.2s ease-in-out infinite" }}
              />
              Знайди своє кохання
            </span>
          </button>

          {/* Footer Text - Fade in slowly */}
          <p
            className="text-xs sm:text-sm text-gray-400 mt-16 animate-fade-in-up"
            style={{ animationDelay: "1.2s" }}
          >
            💕
          </p>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-in-float {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes gradient-shift {
          0%, 100% {
            filter: drop-shadow(0 0 8px rgba(244, 114, 182, 0.4));
          }
          50% {
            filter: drop-shadow(0 0 16px rgba(244, 114, 182, 0.8));
          }
        }

        @keyframes float-particle {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 0.4;
          }
          50% {
            transform: translate(var(--tx, 0), var(--ty, 0)) scale(1.5);
          }
          90% {
            opacity: 0.4;
          }
          100% {
            transform: translate(calc(var(--tx, 0) * 2), calc(var(--ty, 0) * 2)) scale(0.5);
            opacity: 0;
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes heartbeat {
          0%, 100% {
            transform: scale(1);
          }
          25% {
            transform: scale(1.2);
          }
          50% {
            transform: scale(1);
          }
        }

        @keyframes pulse-beat {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.3);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes pulse-slower {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        .animate-fade-in-down {
          animation: fade-in-down 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-scale-in-float {
          animation: scale-in-float 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          opacity: 0;
        }

        .animate-gradient-shift {
          animation: gradient-shift 2s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .animate-heartbeat {
          animation: heartbeat 1.2s ease-in-out infinite;
        }

        .animate-pulse-beat {
          animation: pulse-beat 1.5s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-pulse-slower {
          animation: pulse-slower 4s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
};

export default DatingBusinessCard;
