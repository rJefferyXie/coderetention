interface CodeHeaderProps {
  title: string,
  difficulty: string,
  showDescription: () => void,
}

const CodeHeader = (props: React.PropsWithChildren<CodeHeaderProps>) => {
  const { title, difficulty, showDescription } = props;

  const difficultyColor = difficulty === "easy" ? "bg-green-400" // Green for easy
  : difficulty === "medium" ? "bg-yellow-400" // Yellow for medium
  : "bg-red-400";   // Red for hard

  return (
    <div className="flex cursor-pointer bg-cyan-400 bg-opacity-50 px-4 py-2 hover:brightness-110 duration-200 ease-in-out">
      <h1 className="text-2xl w-full" onClick={() => showDescription()}>
        {title}
      </h1>

      <p className={`px-4 py-2 ${difficultyColor} bg-opacity-40 min-w-24 text-center rounded-full`}>
        {difficulty}
      </p>
    </div>

  )
}

export default CodeHeader;