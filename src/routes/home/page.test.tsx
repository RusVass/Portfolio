import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Home page", () => {
  it("renders developer name", () => {
    render(<Home />);
    expect(screen.getByRole("heading", { name: /Ruslan Vasiliev/i })).toBeInTheDocument();
  });
});
