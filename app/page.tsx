import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-cardy-cloud flex items-center justify-center">
      <div className="text-center space-y-8">
        <h1 className="text-4xl font-bold text-cardy-ink">
          Cardy AI - Train & Hire DemoDay
        </h1>
        <div className="flex flex-col gap-4 max-w-md mx-auto">
          <Link
            href="/present"
            className="px-8 py-4 bg-cardy-ink text-white rounded-lg hover:opacity-90 transition text-lg font-semibold"
          >
            Start Presentation
          </Link>
          <Link
            href="/rate"
            className="px-8 py-4 bg-white text-cardy-ink border border-cardy-border rounded-lg hover:bg-gray-50 transition"
          >
            Judge Rating Form
          </Link>
          <Link
            href="/results"
            className="px-8 py-4 bg-white text-cardy-ink border border-cardy-border rounded-lg hover:bg-gray-50 transition"
          >
            View Results
          </Link>
        </div>
      </div>
    </div>
  )
}