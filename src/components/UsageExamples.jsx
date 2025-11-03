import { BookOpen } from 'lucide-react'

export default function UsageExamples() {
  return (
    <section className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
          <BookOpen className="h-4 w-4" /> Examples
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
          Common workflows
        </h2>
        <p className="mt-3 max-w-3xl text-gray-600">
          Use generators to add features, APIs, and UI blocks. Everything is type-safe and wired end‑to‑end.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
            <h3 className="font-semibold text-gray-900">Generate a CRUD resource</h3>
            <pre className="mt-3 overflow-x-auto rounded-md bg-black p-4 text-sm text-white">
{`# Creates model, API routes, and UI pages\n$ hackpack generate resource task \\\n  --fields title:string,done:boolean,due:date`}
            </pre>
            <p className="mt-3 text-sm text-gray-600">
              This scaffolds database schema, REST endpoints, and a styled UI with forms and lists.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
            <h3 className="font-semibold text-gray-900">Add auth to your app</h3>
            <pre className="mt-3 overflow-x-auto rounded-md bg-black p-4 text-sm text-white">
{`# Email/password auth with sessions\n$ hackpack add auth --provider credentials`}
            </pre>
            <p className="mt-3 text-sm text-gray-600">
              Installs dependencies, sets up secure routes, and generates login/register pages.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
            <h3 className="font-semibold text-gray-900">Connect to a database</h3>
            <pre className="mt-3 overflow-x-auto rounded-md bg-black p-4 text-sm text-white">
{`# Choose from MongoDB, Postgres, or SQLite\n$ hackpack add db --driver mongo`}
            </pre>
            <p className="mt-3 text-sm text-gray-600">
              Creates a connection, environment variables, and helper utilities to query safely.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
            <h3 className="font-semibold text-gray-900">Deploy in one command</h3>
            <pre className="mt-3 overflow-x-auto rounded-md bg-black p-4 text-sm text-white">
{`# Build and deploy to your provider\n$ hackpack deploy --provider vercel`}
            </pre>
            <p className="mt-3 text-sm text-gray-600">
              Generates optimized builds and ships your app with zero configuration.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
