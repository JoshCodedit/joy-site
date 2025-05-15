export default function Button(props) {
  return (
    <a
      href={props.link}
      target={props.target}
      className={`button-class hover:bg-[#e28f36] ${props.className}`}
    >
      {props.text}
    </a>
  );
}
