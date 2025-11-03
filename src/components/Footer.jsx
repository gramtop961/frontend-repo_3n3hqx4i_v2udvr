export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-gray-600">
        <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} hackpack-cli. Built for speed and developer happiness.
          </p>
          <div className="flex items-center gap-4">
            <a href="#install" className="hover:text-gray-900">Install</a>
            <a href="#commands" className="hover:text-gray-900">Commands</a>
            <a href="https://www.npmjs.com/package/hackpack-cli" target="_blank" rel="noreferrer" className="hover:text-gray-900">
              npm
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
