interface IFaq {
  title: string;
  questions: {
    title: string;
    answer: string;
  }[]
}

const Faq = ({ title, questions }: IFaq) => (
  <div>
    <span>{title}</span>

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
