import { render, screen } from "@testing-library/react";
import About from "./page";

describe("About page", () => {
  it("renders skill categories", () => {
    render(<About />);
    expect(screen.getByRole("heading", { name: /Frameworks & Platforms/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /State & Forms/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /UI & Styling/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Data & Platforms/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Tools/i })).toBeInTheDocument();
  });
});
