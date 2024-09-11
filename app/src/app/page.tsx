"use client"

// Components
import Navbar from "@/components/navbar/navbar";
import CodeComponent from "@/components/codeComponent/codeComponent";

const firstcode = "def hello_world():\n    print(\"Hello, world!\")"

const problemDescription = `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.`

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="h-screen flex flex-col text-white ml-20">
        <CodeComponent code={firstcode} title="1. Two Sum" description={problemDescription} difficulty="easy"></CodeComponent>
        <CodeComponent code={firstcode} title="2. Two Sum" description={problemDescription} difficulty="medium"></CodeComponent>
        {/* <CodeComponentFull code={firstcode} title="1. Two Sum" description={problemDescription} difficulty="hard"></CodeComponentFull> */}
      </div>
    </div>
  );
}

export default Home;