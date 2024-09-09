// React
import { useState } from 'react';

// Components
import CodeBlock from './codeBlock';
import CodeHeader from './codeHeader';
import CodeDescription from './codeDescription';

// Animation
import { AnimatePresence } from 'framer-motion';

interface CodeComponentFullProps {
  code: string,
  title: string,
  description: string,
  difficulty: string,
}

const CodeComponentFull = (props: React.PropsWithChildren<CodeComponentFullProps>) => {
  const { code, title, description, difficulty } = props;

  const [showDescription, setShowDescription] = useState(false);
  const [showCode, setShowCode] = useState(false);

  const toggleDescription = () => {
    if (showDescription) {
      setShowCode(false);
    }

    setShowDescription(!showDescription);
  }

  const toggleSolution = () => {
    setShowCode(!showCode);
  }

  return (
    <div className="rounded-lg w-3/5 max-w-4xl mx-auto mb-4 overflow-hidden">
      <CodeHeader title={title} showDescription={toggleDescription} difficulty={difficulty}></CodeHeader>

      <AnimatePresence key={title + "-description"}>
        { showDescription && <CodeDescription description={description} showSolution={toggleSolution}></CodeDescription> }
      </AnimatePresence>

      <AnimatePresence key={title + "-solution"}>
        { showCode && <CodeBlock code={code}></CodeBlock> }
      </AnimatePresence>
    </div>
  )
}

export default CodeComponentFull;