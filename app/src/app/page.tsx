"use client"

// Components
import CodeComponentFull from "@/components/codeComponentFull";

const firstcode = "def hello_world():\n    print(\"Hello, world!\")"

const problemDescription = `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.`

const Home = () => {
  return (
    <div className="h-screen w-screen flex flex-col bg-zinc-900 text-gray-100">
      <CodeComponentFull code={firstcode} title="1. Two Sum" description={problemDescription} difficulty="easy"></CodeComponentFull>
      <CodeComponentFull code={firstcode} title="2. Two Sum" description={problemDescription} difficulty="medium"></CodeComponentFull>
      {/* <CodeComponentFull code={firstcode} title="1. Two Sum" description={problemDescription} difficulty="hard"></CodeComponentFull> */}
    </div>
  );
}

export default Home;