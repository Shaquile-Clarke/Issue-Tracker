export default function Profile() {
  const tabs = ["Security", "Issues"];

  return (
    <div className="h-96 border">
      <ul className="p-2 flex flex-col">
        {tabs.map((tab) => (
          <li key={tab}>
            <button className="p-3 border w-24">{tab}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
