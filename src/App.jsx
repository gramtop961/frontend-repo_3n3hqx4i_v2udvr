import Hero from './components/Hero'
import InstallInstructions from './components/InstallInstructions'
import UsageExamples from './components/UsageExamples'
import CommandsReference from './components/CommandsReference'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      <nav className="sticky top-0 z-20 border-b border-gray-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-indigo-600" />
            <span className="font-semibold">hackpack-cli</span>
          </div>
          <div className="hidden items-center gap-6 text-sm md:flex">
            <a href="#install" className="text-gray-600 hover:text-gray-900">Install</a>
            <a href="#commands" className="text-gray-600 hover:text-gray-900">Commands</a>
            <a href="https://www.npmjs.com/package/hackpack-cli" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-gray-900">
              npm
            </a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <InstallInstructions />
        <UsageExamples />
        <CommandsReference />
      </main>

      <Footer />
    </div>
  )
}

export default App
