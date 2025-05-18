const newsroom = [
  { id: 1, text: "Blog", href: "/blog" },
  { id: 2, text: "Press Release", href: "/press-release" },
  { id: 3, text: "Media Coverage", href: "/media-coverage" },
  { id: 4, text: "Letter from the CEO", href: "/letter-from-the-ceo" },
];

export default function Categories() {
  return (
    <div className="sidebar__widget">
      <h4 className="sidebar__widget-title">Newsroom</h4>
      <div className="sidebar__cat-list">
        <ul className="list-wrap">
          {newsroom.map((link) => (
            <li key={link.id}>
              <a href={link.href}>{link.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
