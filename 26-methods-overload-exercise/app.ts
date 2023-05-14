class User {
    skills: string[];

    addSkill(skill: string);
    addSkill(skills: string[]);
    addSkill(skillOrSkills: string | string[]): void {
        if (typeof skillOrSkills === "string") {
            this.skills.push(skillOrSkills);
        } else if (Array.isArray(skillOrSkills)) {
            this.skills.concat(skillOrSkills);
        }
    }
}

new User().addSkill("skill");
new User().addSkill(["skill", "skill"]);

function run(distance: string): string;
function run(distance: number): number;
function run(distance: number | string): number|string {
    if(typeof distance === "number") {
        return 1;
    } else {
        return "";
    }

}

run(2342)
run("2342")