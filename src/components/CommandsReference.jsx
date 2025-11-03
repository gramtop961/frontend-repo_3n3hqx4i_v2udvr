import { ListChecks } from 'lucide-react'

const commands = [
  {
    name: 'init',
    usage: 'hackpack init <dir> [--stack <name>]',
    desc: 'Create a new project in <dir>. Choose a starter stack (e.g., react-fastapi, next-express).',
  },
  {
    name: 'generate (g)',
    usage: 'hackpack generate <type> <name> [...flags]',
    desc: 'Code generator for resources, pages, components, api routes, hooks, and more.',
  },
  {
    name: 'add',
    usage: 'hackpack add <feature> [...flags]',
    desc: 'Install and configure features like auth, db, tailwind, eslint, testing, and deployment.',
  },
  {
    name: 'dev',
    usage: 'hackpack dev',
    desc: 'Run the project in development mode with live reload for both frontend and backend.',
  },
  {
    name: 'build',
    usage: 'hackpack build',
    desc: 'Create an optimized production build.',
  },
  {
    name: 'deploy',
    usage: 'hackpack deploy [--provider <name>]',
    desc: 'Deploy to providers like Vercel, Netlify, or Render with sensible defaults.',
  },
  {
    name: 'doctor',
    usage: 'hackpack doctor',
    desc: 'Validate environment requirements and fix common setup issues.',
  },
]

export default function CommandsReference() {
  return (
    <section id="commands" className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
          <ListChecks className="h-4 w-4" /> Commands
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">CLI reference</h2>
        <p className="mt-3 max-w-3xl text-gray-600">
          Every command supports --help for additional flags and examples.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {commands.map((cmd) => (
            <div key={cmd.name} className="rounded-xl border border-gray-200 bg-gray-50 p-5">
              <div className="text-sm font-semibold text-gray-900">{cmd.name}</div>
              <code className="mt-2 block rounded bg-black px-2 py-1 text-xs text-white">{cmd.usage}</code>
              <p className="mt-3 text-sm text-gray-600">{cmd.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-dashed border-gray-300 p-5 text-sm text-gray-500">
          Pro tip: Run hackpack --help to see all top‑level commands and global flags like --yes, --verbose, and --no-install.
        </div>
      </div>
    </section>
  )
}
