const Button = ({ children }: any) => {
  return (
    <button className="flex items-center justify-center gap-2 rounded-md bg-black px-6 py-2 font-manrope text-xl font-extrabold text-white transition-colors hover:bg-blue-500 hover:text-white dark:bg-white dark:text-black dark:hover:bg-gray-600 dark:hover:text-white">
      {children}
    </button>
  )
}

export default Button
