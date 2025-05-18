const tags = [
  { id: 1, text: "Education", url: "/education" },
  { id: 2, text: "Railways", url: "/railways" },
  { id: 3, text: "Shelters", url: "/shelters" },
  { id: 4, text: "Oil & Gas", url: "/oil-and-gas" },
  { id: 5, text: "Power & Energy", url: "/power-and-energy" },
  { id: 6, text: "Commercial", url: "/commercial" },
  { id: 7, text: "Marine & Ports", url: "/marine-and-ports" },
  { id: 8, text: "Healthcare & Hospitality", url: "/healthcare-and-hospitality" },
  { id: 9, text: "Industrial & Logistics", url: "/industrial-and-logistics" },
  { id: 10, text: "Roads & Infrastructure", url: "/roads-and-infrastructure" },
  { id: 11, text: "WTP, RO & Desalination", url: "/wtp-ro-and-desalination" }
];


export default function Tags() {
  return (
    <div className="sidebar__widget">
      <h4 className="sidebar__widget-title">Our Sector</h4>
      <div className="sidebar__tag-list">
        <ul className="list-wrap">
          {tags.map((category) => (
            <li key={category.id}>
              <a href={category.url}>{category.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
