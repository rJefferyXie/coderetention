// Animation
import { motion } from "framer-motion";

interface CodeDescription {
  description: string,
  showSolution: () => void,
}

const CodeDescription = (props: React.PropsWithChildren<CodeDescription>) => {
  const { description, showSolution } = props;

  return (
    <motion.div 
      className="bg-zinc-800 bg-opacity-30 px-2 w-full flex flex-col"
      style={{ overflow: "hidden" }}
      initial={{ height: 0 }}
      animate={{ height: "auto" }}
      transition={{ duration: 0.35 }}
      exit={{ height: 0 }}
      key={"container"}
    >
      <p className="whitespace-pre-wrap py-4 px-2">
        {description}
      </p>

      <div className="flex pb-6 px-2">
        <button className="bg-orange-400 bg-opacity-70 mr-2 px-4 py-2 rounded-lg hover:brightness-110 duration-200 ease-in-out">
          LeetCode Link
        </button>

        <button className="bg-emerald-400 bg-opacity-60 px-4 py-2 rounded-lg hover:brightness-110 duration-200 ease-in-out" onClick={() => showSolution()}>
          Show Solution
        </button>
      </div>
    </motion.div>
  )
}

export default CodeDescription;