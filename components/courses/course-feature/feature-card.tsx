


export default function FeatureCard({ title, body, idx }: { title: string, body: string, idx: number }) {
  return (
    <div className="space-y-6">
      {/* <Icon className="w-16 h-16 text-white" /> */}
      <div className="space-y-4">
      <div className="h-8 w-8 rounded-full bg-white" />
        <div className="flex items-center gap-2">
          <h3 className="text-white text-xl font-bold">{idx + 1}. {title}</h3>
        </div>
        <p className="text-white leading-relaxed">
          {body}
        </p>
      </div>
    </div>
  )
}

