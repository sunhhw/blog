import {sidebar} from "vuepress-theme-hope";

export default sidebar({
    "/": [
        "",
        {
            text: "如何使用",
            icon: "creative",
            prefix: "demo/",
            children: "structure",
        },
        {
            text: "代码笔记",
            icon: "note",
            prefix: "/posts",
            children: [
                {
                    text: "Java开发",
                    icon: "java",
                    prefix: "java/",
                    link: "java/",
                },
                {
                  text: "前端开发",
                  icon: "web",
                  prefix: "web/",
                  link: "web/",
              },
                {
                    text: "Linux",
                    icon: "linux",
                    prefix: "linux/",
                    link: "linux/",
                },
                {
                  text: "微服务",
                  icon: "bxl-spring-boot",
                  prefix: "cloud/",
                  link: "cloud/",
              },
                {
                    text: "数据库",
                    icon: "shujuku1",
                    prefix: "mysql/",
                    link: "mysql/",
                }
            ],
        },
        {
            text: "软件/工具教程",
            icon: "software",
            prefix: "software/",
            link: "software/",
        }
    ],
    "/posts/java": "structure",
    "/posts/web": "structure",
    "/posts/cloud": "structure",
    "/posts/linux": "structure",
    "/posts/mysql": "structure"
});
