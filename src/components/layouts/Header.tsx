import { Nav } from "./nav/Nav";

export function Header() {
  return (
    <header className="bg-stone-800">
      <div className="container">
        <Nav />
      </div>
    </header>
  );
}