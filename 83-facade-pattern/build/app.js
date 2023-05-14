"use strict";
class Notify {
    send(template, to) {
        console.log(`Sending ${template}: ${to}`);
    }
}
class Log {
    log(message) {
        console.log(message);
    }
}
class Template {
    constructor() {
        this.templates = [
            { name: "other", template: "<div>Template</div>" }
        ];
    }
    getByName(name) {
        return this.templates.find(t => t.name === name);
    }
}
class NotificationFacade {
    constructor() {
        this.notify = new Notify();
        this.logger = new Log();
        this.template = new Template();
    }
    send(to, templateName) {
        const data = this.template.getByName(templateName);
        if (!data) {
            this.logger.log("Not found!");
            return;
        }
        this.notify.send(data.template, to);
        this.logger.log("Sent");
    }
}
const s = new NotificationFacade();
s.send("d@d.com", "other");
