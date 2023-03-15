export default function Form({
  children,
  name,
  id,
  className,
  stacked = false,
}) {
  return (
    <form id={`${id}`} className={`custom-form ${className}`}>
      {children}
    </form>
  );
}
