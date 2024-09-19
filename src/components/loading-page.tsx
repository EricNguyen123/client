import { Loader } from 'lucide-react'
import React from 'react'

export default function LoadingPage({ loading }: { loading: boolean }) {
  return (
    <>
      {loading && (
        <div className="fixed inset-0 flex justify-center items-center bg-white/30 backdrop-blur-sm z-50">
          <div className="p-4">
            <Loader className="size-10 bg-inherit animate-spin text-sky-500" />
          </div>
        </div>
      )}
    </>
  )
}
