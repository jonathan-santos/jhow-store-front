import Title from '@/components/title/title'

interface IFaq {
  title: string;
  questions: {
    title: string;
    answer: string;
  }[]
}

const Faq = ({ title, questions }: IFaq) => (
  <div>
    <Title level='2'>{title}</Title>

    <ul>
      {questions.map(({ title, answer }, i) => (
        <li key={i}>
          <p>{title}</p>
          <p>{answer}</p>
        </li>
      ))}
    </ul>
  </div>
)

export default Faq
