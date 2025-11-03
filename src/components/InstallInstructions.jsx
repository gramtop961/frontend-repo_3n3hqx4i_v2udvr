import { Copy, Download } from 'lucide-react'
import { useState } from 'react'

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)
  return (
    <button
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text)
          setCopied(true)
          setTimeout(() => setCopied(false), 1500)
        } catch {}
      }}
      className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-800 hover:bg-gray-50"
      aria-label="Copy to clipboard"
    >
      <Copy className="h-4 w-4" /> {copied ? 'Copied' : 'Copy'}
    </button>
  )
}

export default function InstallInstructions() {
  const npmCmd = 'npm i -g hackpack-cli'
  const pnpmCmd = 'pnpm add -g hackpack-cli'
  const yarnCmd = 'yarn global add hackpack-cli'

  return (
    <section id="install" className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
          <Download className="h-4 w-4" /> Installation
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
          Install hackpack-cli
        </h2>
        <p className="mt-3 max-w-3xl text-gray-600">
          Install globally to access the hackpack command anywhere. Requires Node 18+.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
            <div className="mb-2 text-sm font-semibold text-gray-700">npm</div>
            <pre className="rounded-md bg-black p-4 text-sm text-white">{npmCmd}</pre>
            <div className="mt-3"><CopyButton text={npmCmd} /></div>
          </div>
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
            <div className="mb-2 text-sm font-semibold text-gray-700">pnpm</div>
            <pre className="rounded-md bg-black p-4 text-sm text-white">{pnpmCmd}</pre>
            <div className="mt-3"><CopyButton text={pnpmCmd} /></div>
          </div>
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
            <div className="mb-2 text-sm font-semibold text-gray-700">yarn</div>
            <pre className="rounded-md bg-black p-4 text-sm text-white">{yarnCmd}</pre>
            <div className="mt-3"><CopyButton text={yarnCmd} /></div>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-gray-200 bg-white p-5">
          <h3 className="text-lg font-semibold text-gray-900">Quick start</h3>
          <pre className="mt-3 overflow-x-auto rounded-md bg-black p-4 text-sm text-white">
{`# Create a new app\n$ hackpack init my-app --stack react-fastapi\n\n# Start in development\n$ cd my-app\n$ npm run dev`}
          </pre>
        </div>
      </div>
    </section>
  )
}
