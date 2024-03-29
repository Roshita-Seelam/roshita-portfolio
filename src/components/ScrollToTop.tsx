"use client";

import classNames from "classnames";

import scroller from "@/hooks/scroller";
import Button from "@/common/Form/Button";
import useScroller from "@/hooks/useScrollTop";

export default function ScrollToTop() {
  const { showToTop } = useScroller();
  return (
    <Button
      className={classNames(
        "rounded-full bg-text-primary text-primary fixed bottom-12 right-6 flex items-center px-4 py-3",
        { hidden: !showToTop }
      )}
      onClick={() => {
        scroller.top();
      }}
    >
      &uarr;
    </Button>
  );
}
