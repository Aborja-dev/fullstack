export const ContentPart = ({ content, number }: { content: string, number: number }) => {
    return (
      <div key={number}>
        {number}: {content}
      </div>
    )
  }