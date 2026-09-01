type MethodStepProps = {
  number: string;
  title: string;
  chinese: React.ReactNode;
  description: string;
};

export function MethodStep({ number, title, chinese, description }: MethodStepProps) {
  return (
    <li className="method-step" tabIndex={0}>
      <p className="method-step-label"><span>{number}</span><span>/</span><strong>{title}</strong></p>
      <p className="method-step-chinese" lang="zh-Hans">{chinese}</p>
      <p className="method-step-description">{description}</p>
    </li>
  );
}
