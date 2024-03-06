import './Test.css'

export interface TestProps {
  text: string
}

export const Test = ({ text }: TestProps) => {
  return <div className="text">This is test text: {text}</div>
}