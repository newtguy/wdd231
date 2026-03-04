import { displayModal } from "./index.js";

const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 235,
        title: 'Data Structures and Algorithms',
        credits: 3,
        certificate: 'Software Development',
        description: '(Transfer Credit from BYU) Fundamental data structures and algorithms of computer science; basic algorithm analysis; recursion; sorting and searching; lists, stacks, queues, trees, hashing; object-oriented data abstraction.',
        technology: [
            'C++'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 270,
        title: 'Software Testing',
        credits: 3,
        certificate: 'Web Development',
        description: 'Software Testing is a systematic process of verifying requirements and design elements, features, or standards against the implementation to increase product success. The verification process uses a set of test paths starting from the minor units up to the entire deliverable system. Predetermined or live data is used to build confidence that the product works right as specified. CSE 270 will explore testing standards, techniques, tools, and cases.',
        technology: [
            'Python',
            'Postman',
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 310,
        title: 'Applied Programming',
        credits: 3,
        certificate: 'Software Development',
        description: 'Independently research and create computing solutions in a variety of languages and domains. Contribute and interact with peers to successfully develop software. The student who successfully completes the course will have all the tools necessary including a Personal Software Portfolio to assist in finding an internship or career employment.',
        technology: [
            'C++',
            'Kotlin',
            'Python'
        ],
        completed: true
    },
    {
        subject: 'ITM',
        number: 111,
        title: 'Introduction to Databases',
        credits: 3,
        certificate: 'Web and Computer Programming',
        description: 'This course teaches the basic elements of database management systems. It introduces students to the concepts of logical and physical relationships in a data model and the concept of inner join. Students will use a computer aided software engineering (CASE) tool to design, create and query a database.',
        technology: [
            'MySQL',
            'WorkBench'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 330,
        title: 'Frontend Web Development II',
        credits: 2,
        certificate: 'Web Development',
        description: 'This course dives deeper into building dynamic web applications using the power of pure JavaScript, HTML, CSS, and Node.js—no frameworks required! Students gain a stronger foundation in web frontend development and learn how to create interactive user interfaces, handle data, consume APIs, manage a collaborative project, and build complete web applications from scratch in a team environment.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    }
]

const courseGridSelector = document.querySelectorAll('.course-grid');
const insertionGrid = courseGridSelector[1];
const allButton = document.getElementById('all-button');
const cseButton = document.getElementById('cse-button');
const wddButton = document.getElementById('wdd-button');
const creditCalculator = document.getElementById('credit-calculator');

allButton.addEventListener('click', (event) => {
    insertionGrid.innerHTML = "";
    let newChild = null;
    let creditCounter = 0;

    courses.forEach(course => {
        newChild = document.createElement('p');
        newChild.classList.add("course");
        if (course.completed == false) {
            newChild.classList.add("incomplete");
        }
        newChild.textContent = `${course.subject}${course.number}`;
        insertionGrid.appendChild(newChild);

        creditCounter += course.credits;
        newChild.addEventListener('click', () => {
            displayModal(course);
        });
    });
    creditCalculator.innerHTML = `<strong>${creditCounter}</strong>`;
});

cseButton.addEventListener('click', (event) => {
    insertionGrid.innerHTML = "";
    let newChild = null;
    let creditCounter = 0;

    let cseCourses = courses.filter((course) => course.subject == 'CSE');
    cseCourses.forEach(course => {
        newChild = document.createElement('p');
        newChild.classList.add("course");
        if (course.completed == false) {
            newChild.classList.add("incomplete");
        }
        newChild.textContent = `${course.subject}${course.number}`;
        insertionGrid.appendChild(newChild);

        creditCounter += course.credits;
        newChild.addEventListener('click', () => {
            displayModal(course);
        });
    });
    creditCalculator.innerHTML = `<strong>${creditCounter}</strong>`;
});

wddButton.addEventListener('click', (event) => {
    insertionGrid.innerHTML = "";
    let newChild = null;
    let creditCounter = 0;

    let wddCourses = courses.filter((course) => course.subject == 'WDD');
    wddCourses.forEach(course => {
        newChild = document.createElement('p');
        newChild.classList.add("course");
        if (course.completed == false) {
            newChild.classList.add("incomplete");
        }
        newChild.textContent = `${course.subject}${course.number}`;
        insertionGrid.appendChild(newChild);

        creditCounter += course.credits;
        newChild.addEventListener('click', () => {
            displayModal(course);
        });
    });
    creditCalculator.innerHTML = `<strong>${creditCounter}</strong>`;
});
