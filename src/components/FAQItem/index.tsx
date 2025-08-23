import { Accordion } from "@mantine/core";

export default function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <Accordion.Item value={question}>
      <Accordion.Control>{question}</Accordion.Control>
      <Accordion.Panel>{answer}</Accordion.Panel>
    </Accordion.Item>
  );
}
