import "./servicesList.scss";

export default function ServicesList({ id, title, active, setSelected }) {
  return (
    <li
      className={active ? "servicesList active" : "servicesList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
