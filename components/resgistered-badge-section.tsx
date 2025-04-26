import Image from 'next/image'
import React from 'react'
import { cn } from '@/lib/utils'

const RysBadgeSection = ({ className }: { className?: string }) => {
  return (
    <div className={cn('flex items-center justify-center gap-4', className)}>
        <Image src="/rys-200.png" alt="RY badge" width={100} height={100} />
        <Image src="/rys-300.png" alt="RY badge" width={100} height={100} />
        <Image src="/rpys.png" alt="RY badge" width={100} height={100} />
    </div>
  )
}

export default RysBadgeSection