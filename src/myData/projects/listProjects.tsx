import { typeProject } from "@/utils/Enums";
import { listImagesCampusConnect, listImagesErcon, listImagesLayananMandiri, listImagesUdemy, listSaucedemo } from "./projectImages";


export const listProjects = [
    {
        id: 1,
        title: 'Campus Connect',
        description: 'Social Media platform based web application for College Student who want to get information about all university and their campus using React.js.',
        defaultImage: '/projects/campus_connect/1.png',
        images: listImagesCampusConnect,
        links: [
            {
                id: 1,
                title: 'Github',
                url: 'https://github.com/anmistrz/Campus_Connect'
            },
            {
                id: 2,
                title: 'Demo',
                url: 'https://campus-connects.netlify.app/login'
            },
            {
                id: 2,
                title: 'List Account',
                url: 'https://docs.google.com/spreadsheets/d/1f2DXnmTtkCnnI6zL2y_p8e-k807KPe0YFMNWpz-o7_k/edit?usp=sharing'
            },
        ],
        technology: ['React.js', 'Figma', 'Go', 'SqlLite', 'Zustand', 'Tailwind CSS'],
        type: typeProject.WEB_DEVELOPMENT,
        slug: 'campus-connect'
    },
    {
        id: 2,
        title: 'Ercon Supplier Connectivity',
        description: "Supply Chain Management (SCM) System where integrated on web application and have 2 main feature (Tracking and Monitoring) From Tier 3 until Tier 0 using Vue.js framework and Figma for UI/UX design.",
        defaultImage: '/projects/ercon/1.png',
        images: listImagesErcon,
        links: [
            {
                id: 1,
                title: 'Github',
                url: 'https://github.com/anmistrz/Supplier-Connectivity-FE'
            },
            {
                id: 2,
                title: 'Demo',
                url: 'https://drive.google.com/file/d/16hb0VDc2tNDvPniTe6fPqYvFpOnexhLG/view?usp=sharing'
            },
        ],
        technology: ['Vue.js', 'Figma', 'Pinia (State Management)', 'Express.js', 'Mysql'],
        type: typeProject.WEB_DEVELOPMENT,
        slug: 'ercon'
    },
    {
        id: 3,
        title: 'Layanan Mandiri UMS Digital Library',
        description: "Web application for students to handle the process of checking out and returning books themselves. This eliminates the need for librarians to be involved in the user's process.",
        defaultImage: '/projects/layanan_mandiri/0.png',
        images: listImagesLayananMandiri,
        links: [
            {
                id: 1,
                title: 'Github',
                url: 'https://github.com/anmistrz/Layanan-Mandiri-UMS-Digital-Library'
            },
            {
                id: 2,
                title: 'Demo',
                url: 'https://api-selfservice.lib.ums.ac.id/'
            },
        ],
        technology: ['React.js', 'Figma', 'Redux', 'Express.js', 'Mysql Server', 'Midtrans'],
        type: typeProject.WEB_DEVELOPMENT,
        slug: 'layanan-mandiri'
    },
    {
        id: 4,
        title: 'Udemy Test Manual',
        description: "Test Manual for Udemy Web Application",
        defaultImage: '/projects/udemy_test_manual/1.png',
        images: listImagesUdemy,
        links: [
            {
                id: 1,
                title: 'Link Test Case Manual',
                url: 'https://docs.google.com/spreadsheets/d/1CEZ5kzI4d7-ZbQs30AvUzyl0ZZtA0lAH/edit?usp=sharing&ouid=109661761611068864567&rtpof=true&sd=true'
            },
        ],
        technology: ['Google Sheet', 'Test Case Manual', 'Test Scenario', 'Bug Report'],
        type: typeProject.SOFTWARE_QUALITY_ASSURANCE,
        slug: 'udemy-test-manual'
    },
    {
        id: 5,
        title: 'Saucedemo Test Automation',
        description: "Test Automation for Saucedemo Web Application using TestNG, Selenium, and BDD Cucumber. This project is a simple project to learn how to create a test automation project and how to deploy it to the CI/CD pipeline.",
        defaultImage: '/projects/saucedemo/1.png',
        images: listSaucedemo,
        links: [
            {
                id: 1,
                title: 'Github',
                url: 'https://github.com/anmistrz/simple-qa-automation-project'
            },
        ],
        technology: ['TestNG', 'Selenium', 'BDD Cucumber', 'Java', 'Maven', 'Jenkins'],
        type: typeProject.SOFTWARE_QUALITY_ASSURANCE,
        slug: 'saucedemo-test-automation'
    }
]