import { animate, stagger } from "motion"
 import { animate, stagger } from "https://cdn.jsdelivr.net/npm/motion@12.23.0/+esm"

 animate(".example li", { opacity: 1, y: [50, 0] }, { delay: stagger(0.05) })
animate(
  "li",
  { y: 0, opacity: 1 },
  { delay: stagger(0.1) }
)