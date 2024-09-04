import { ContentPart } from "./Part."

interface Content {
    name: string
    exercises: number
}
// usar el patron render props
const Content = ({ content }: { content: Content[] }) => {
  return (
    <div>
      {
        content.map(({ name, exercises }) => {
          return (
            <div key={exercises}>
              <ContentPart content={name} number={exercises} />
            </div>
          )
        })
      }
    </div>
  )
}

export default Content
