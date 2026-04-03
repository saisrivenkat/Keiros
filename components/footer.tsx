import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-black px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.1fr_1fr_auto]">
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-3xl font-semibold text-white">Keiros</h3>
              <p className="mt-3 text-base text-white/90">To the point</p>

              
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-white mb-3">Contact</h3>
              <p className="mt-1 text-base text-white/90">Email: <a href="mailto:sales@keiros.ai" className="text-[#5BC9F0] hover:underline">sales@keiros.ai</a></p>
            </div>
          </div>

          <div className="hidden md:block" />

          <div className="md:justify-self-end">
            <Image
              src="/keiros-logo.png"
              alt="Keiros Logo"
              width={220}
              height={72}
              className="h-auto w-[220px]"
            />
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="text-sm text-white/70">© Keiros, all rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
