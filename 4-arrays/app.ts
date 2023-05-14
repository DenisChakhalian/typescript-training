const skills: string[] = ["Dev", "devOps", "Testing"];

for (const skill of skills) {
    console.log(skill.toUpperCase())
}

const res = skills.filter((s: string) => s !== "devOps")
    .map(s => s + "! ")
    .reduce((a, b) => a + b);

console.log(res);