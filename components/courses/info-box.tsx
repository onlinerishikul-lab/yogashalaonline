interface InfoBoxProps {
  number: number
  text: string
}

export default function InfoBox({ number, text }: InfoBoxProps) {
  return (
    <div className="bg-gray-700/90 text-white p-6 rounded-xl">
      <span className="inline-block w-8 h-8 bg-white text-gray-700 rounded-full text-center leading-8 font-semibold mb-2">
        {number}
      </span>
      <p>{text}</p>
    </div>
  )
}

