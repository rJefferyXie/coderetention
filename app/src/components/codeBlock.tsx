// Animation
import { motion } from "framer-motion";

interface CodeBlockProps {
  code: string
}

const CodeBlock = (props: React.PropsWithChildren<CodeBlockProps>) => {
  const { code } = props;

  return (
    <motion.div 
      className="whitespace-pre-wrap break-words bg-zinc-600 bg-opacity-30 rounded-bl-lg rounded-br-lg"
      style={{ overflow: "hidden" }}
      initial={{ height: 0 }}
      animate={{ height: "auto" }}
      transition={{ duration: 0.35 }}
      exit={{ height: 0 }}
      key={"container"}
    >
      <p className="whitespace-pre-wrap break-words p-4">
        {code}
      </p>
    </motion.div>
  )
}

export default CodeBlock;