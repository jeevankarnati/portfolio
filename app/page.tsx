import { Logo } from "@/components/Logo";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white overflow-hidden relative selection:bg-purple-500/30">
      {/* Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />

      <main className="z-10 flex flex-col items-center text-center px-4 sm:px-8 max-w-4xl w-full">
        {/* Logo or Brand Placeholder */}
        <div className="mb-8 animate-fade-in-down">
          <Logo />
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-linear-to-b from-white to-white/60 animate-fade-in-up">
          Coming Soon
        </h1>

        {/* Subtext */}
        <p className="text-lg sm:text-xl text-zinc-400 mb-10 max-w-2xl animate-fade-in-up delay-100">
          I&apos;m currently crafting a new portfolio experience. Stay tuned for
          something amazing.
        </p>

        {/* Old Portfolio Link */}
        <div className="animate-fade-in-up delay-200">
          <a
            href="https://jeevan-karnati.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-zinc-300 hover:bg-white/10 hover:text-white transition-all hover:scale-105 active:scale-95"
          >
            View Previous Portfolio
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-8 text-sm text-zinc-600">
        &copy; {new Date().getFullYear()} Jeevan Karnati. All rights reserved.
      </footer>
    </div>
  );
}
