export default function Page() {
  return (
  <main classNae="bg-white">
      <div className="h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Next.js with tailwind starter template.
          </p>
          <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
            Run <code className="bg-gray-200 px-2 py-1 rounded-md italic">npm install</code> first to install dependencies, then run <code className="bg-gray-200 px-2 py-1 rounded-md italic">npm run dev</code> to start server on <code className="bg-gray-200 px-2 py-1 rounded-md italic">localhost:3000</code>
          </p>
        </div>
    </div>
  </main>
  )
}