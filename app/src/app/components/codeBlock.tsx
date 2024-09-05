interface CodeBlockProps {
  code: string
}

const CodeBlock = (props: React.PropsWithChildren<CodeBlockProps>) => {
  const { code } = props;

  return (
    <div>
      {code}
    </div>
  )
}

export default CodeBlock;