"use client";

import { PropsWithChildren, useContext, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context";

export function useLayoutRouterContext() {
  return useContext(LayoutRouterContext);
}

function FrozenRouter(props: PropsWithChildren<{}>) {
  const context = useLayoutRouterContext();
  const frozen = useRef(context).current;

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {props.children}
    </LayoutRouterContext.Provider>
  );
}

export function Animate({ children }: PropsWithChildren) {
  const pathname = usePathname();

  const hidden = { opacity: 0 }
  const visible = { opacity: 1 }

  const transition = { duration: 0.6, ease: "easeInOut" };

  return (
    <AnimatePresence initial={false} mode="popLayout">
      <motion.div
        key={pathname}
        initial={hidden}
        animate={visible}
        transition={transition}
      >
        <FrozenRouter>{children}</FrozenRouter>
      </motion.div>
    </AnimatePresence>
  );
}
