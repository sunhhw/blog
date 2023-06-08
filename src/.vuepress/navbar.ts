import {navbar} from "vuepress-theme-hope";

export default navbar([
    "/",
    {text: "导航", icon: "discover", link: "/demo/"},
    {
        text: "代码笔记",
        icon: "note",
        prefix: "/",
        children: [
            {text: "Linux", icon: "linux", link: "posts/linux/"},
            {text: "数据库", icon: "shujuku1", link: "posts/database/"},
            {text: "微服务", icon: "bxl-spring-boot", link: "posts/cloud/"},
            {text: "Java开发", icon: "java", link: "posts/java/"},
        ],
    },
    {
        text: "软件教程",
        icon: "software",
        link: "/software",
    }
]);
