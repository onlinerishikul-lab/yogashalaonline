interface YogaIconProps {
  className?: string
}

export default function YogaIcon({ className }: YogaIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 2a5 5 0 0 0-5 5c0 2.76 2.24 5 5 5s5-2.24 5-5a5 5 0 0 0-5-5zm0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
      <path d="M12 9v3M12 12l-3 3M12 12l3 3" />
      <path d="M12 17v5" />
      <path d="M7 22h10" />
    </svg>
  )
} 