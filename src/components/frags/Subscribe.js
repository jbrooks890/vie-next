import Form from "../form/Form";

export default function Subscribe({ concise = false }) {
  return (
    <Form className="flex col" stacked={concise}>
      <input type="email" />
      <button type="submit">Subscribe</button>
      <h3>Get the latest updates!</h3>
    </Form>
  );
}
