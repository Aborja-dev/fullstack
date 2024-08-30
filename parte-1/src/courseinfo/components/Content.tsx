import { ContentPart } from "./Part."

interface Content {
    name: string
    number: number
}
// usar el patron render props
const Content = ({ content }: { content: Content[] }) => {
  return (
    <div>
      {
        content.map(({ name, number }) => {
          return (
            <div key={number}>
              <ContentPart content={name} number={number} />
            </div>
          )
        })
      }
    </div>
  )
}

export default Content
