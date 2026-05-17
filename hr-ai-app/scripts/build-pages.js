import { rmSync, cpSync } from "fs"

rmSync("../public", { recursive: true, force: true })
cpSync("build/client", "../public", { recursive: true })
rmSync("build", { recursive: true, force: true })
