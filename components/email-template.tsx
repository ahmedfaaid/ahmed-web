interface EmailTemplateProps {
  subject: string;
  name: string;
  email: string;
  message: string;
}

export default function EmailTemplate({
  subject,
  name,
  email,
  message
}: EmailTemplateProps) {
  return (
    <div>
      <h1>{subject}</h1>
      <p>{message}</p>
      <p>
        From: {name} {`<${email}>`}
      </p>
    </div>
  );
}
