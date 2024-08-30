export const ContentPart = ({ content, number }: { content: string, number: number }) => {
  return (
    <div key={number}>
      <p className="text-left">
        {content}
        <span className="font-bold text-lg ml-4">{number}</span>
      </p>
    </div>
  )
}