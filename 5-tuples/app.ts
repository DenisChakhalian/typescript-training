const skills: [number, string] = [1, "Dev"];
const id = skills[0];
const skillName = skills[1];

skills.push("sfgsf");
// const q = skills[2];

skills.pop();

const [id2, skillName2] = skills;

const arr: [number, string, ...boolean[]] = [1, "dfg", true, true, false, true];
