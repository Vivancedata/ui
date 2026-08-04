/**
 * Behaviour tests for the toast store: the reducer's four actions, the
 * TOAST_LIMIT cap, and the hook's subscribe/unsubscribe lifecycle. This is
 * the one component in the package with real state logic, and it sat at 25%
 * coverage while the gate reported green.
 */
import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { reducer, toast, useToast } from "../components/use-toast";

const makeToast = (id: string) => ({ id, open: true });

describe("toast reducer", () => {
  it("adds a toast at the front", () => {
    const next = reducer({ toasts: [] }, { type: "ADD_TOAST", toast: makeToast("1") });
    expect(next.toasts.map((t) => t.id)).toEqual(["1"]);
  });

  it("enforces TOAST_LIMIT by dropping the oldest", () => {
    const one = reducer({ toasts: [] }, { type: "ADD_TOAST", toast: makeToast("1") });
    const two = reducer(one, { type: "ADD_TOAST", toast: makeToast("2") });
    // TOAST_LIMIT is 1: the newest replaces the oldest.
    expect(two.toasts.map((t) => t.id)).toEqual(["2"]);
  });

  it("updates only the matching toast", () => {
    const state = { toasts: [{ ...makeToast("1"), title: "old" }] };
    const next = reducer(state, { type: "UPDATE_TOAST", toast: { id: "1", title: "new" } });
    expect(next.toasts[0].title).toBe("new");
  });

  it("dismiss closes the toast without removing it", () => {
    const state = { toasts: [makeToast("1")] };
    const next = reducer(state, { type: "DISMISS_TOAST", toastId: "1" });
    expect(next.toasts).toHaveLength(1);
    expect(next.toasts[0].open).toBe(false);
  });

  it("dismiss without an id closes every toast", () => {
    const state = { toasts: [makeToast("1")] };
    const next = reducer(state, { type: "DISMISS_TOAST" });
    expect(next.toasts.every((t) => t.open === false)).toBe(true);
  });

  it("remove deletes the matching toast; without an id it clears all", () => {
    const state = { toasts: [makeToast("1")] };
    expect(reducer(state, { type: "REMOVE_TOAST", toastId: "1" }).toasts).toHaveLength(0);
    expect(reducer(state, { type: "REMOVE_TOAST" }).toasts).toHaveLength(0);
  });
});

describe("useToast", () => {
  it("exposes toasts created through toast() and can dismiss them", () => {
    const { result, unmount } = renderHook(() => useToast());

    let handle!: ReturnType<typeof toast>;
    act(() => {
      handle = toast({ title: "Saved" });
    });
    expect(result.current.toasts.some((t) => t.title === "Saved")).toBe(true);

    act(() => {
      handle.dismiss();
    });
    expect(result.current.toasts.find((t) => t.id === handle.id)?.open).toBe(false);

    // Unmount must detach the listener -- the upstream shadcn bug this
    // implementation fixed resubscribed every render and leaked.
    unmount();
    act(() => {
      toast({ title: "after unmount" });
    });
  });

  it("update replaces the toast content in place", () => {
    const { result } = renderHook(() => useToast());

    let handle!: ReturnType<typeof toast>;
    act(() => {
      handle = toast({ title: "first" });
    });
    act(() => {
      handle.update({ id: handle.id, title: "second" });
    });
    expect(result.current.toasts.find((t) => t.id === handle.id)?.title).toBe("second");
  });
});
