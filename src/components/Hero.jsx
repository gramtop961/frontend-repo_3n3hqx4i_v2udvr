import { Rocket, Terminal } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-blue-500/10 to-cyan-500/10" />
      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/60 px-3 py-1 text-sm text-indigo-700 backdrop-blur">
              <Terminal className="h-4 w-4" />
              hackpack-cli
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Ship full-stack starter apps in seconds
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              hackpack-cli is a fast, batteries-included CLI to scaffold modern projects with a best-practice setup. Pick a stack, generate features, and go from idea to running app instantly.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#install"
                className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 font-semibold text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <Rocket className="h-4 w-4" />
                Get Started
              </a>
              <a
                href="#commands"
                className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 font-semibold text-gray-800 hover:bg-gray-50"
              >
                View Commands
              </a>
            </div>
            <div className="mt-6 text-sm text-gray-500">
              • Zero-config • Type-safe • Framework-agnostic • Extensible generators
            </div>
          </div>
          <div className="rounded-xl border border-gray-200 bg-black/90 p-5 text-gray-100 shadow-xl">
            <div className="mb-3 text-xs text-gray-400">Terminal preview</div>
            <pre className="overflow-x-auto rounded-lg bg-black p-4 text-sm leading-relaxed">
{`$ npm i -g hackpack-cli
$ hackpack init my-app --stack react-fastapi
✔ Created my-app
✔ Installed deps
✔ Connected database
\nNext steps:\n  cd my-app\n  npm run dev\n`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}
