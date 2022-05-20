import { PropsWithChildren } from 'react'

const AccentButton = ({ children }: any) => {
  return (
    <button className="flex items-center justify-center gap-2 rounded-md bg-blue-500 px-6 py-2 font-manrope text-xl font-extrabold text-white transition-colors hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700">
      {children}
    </button>
  )
}

export default AccentButton
