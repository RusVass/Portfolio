import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { HoverSwitchImage } from "./hover-switch-image";

describe("HoverSwitchImage", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    cleanup();
    vi.useRealTimers();
  });

  it("перемикає зображення за замовчуванням кожні 3 секунди", () => {
    render(<HoverSwitchImage intervalMs={3000} />);

    expect(screen.getByRole("img", { name: /портфоліо превʼю/i })).toHaveAttribute("src", "/3.png");

    act(() => {
      vi.advanceTimersByTime(3000);
    });
    expect(screen.getByRole("img", { name: /портфоліо превʼю/i })).toHaveAttribute("src", "/2.png");

    act(() => {
      vi.advanceTimersByTime(3000);
    });
    expect(screen.getByRole("img", { name: /портфоліо превʼю/i })).toHaveAttribute("src", "/3.png");
  });

  it("залишає друге зображення під час ховера та відновлює автоперемикання", () => {
    render(<HoverSwitchImage intervalMs={3000} />);

    fireEvent.mouseEnter(screen.getByRole("img", { name: /портфоліо превʼю/i }));
    expect(screen.getByRole("img", { name: /портфоліо превʼю/i })).toHaveAttribute("src", "/2.png");

    act(() => {
      vi.advanceTimersByTime(6000);
    });
    expect(screen.getByRole("img", { name: /портфоліо превʼю/i })).toHaveAttribute("src", "/2.png");

    fireEvent.mouseLeave(screen.getByRole("img", { name: /портфоліо превʼю/i }));
    act(() => {
      vi.advanceTimersByTime(3000);
    });
    expect(screen.getByRole("img", { name: /портфоліо превʼю/i })).toHaveAttribute("src", "/3.png");
  });
});


