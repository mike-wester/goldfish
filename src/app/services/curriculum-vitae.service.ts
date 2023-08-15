import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurriculumVitaeService {

  public username = "John Doe";
  public aboutMe = "Hello! I'm [Your Name], a passionate and dedicated software engineer with a strong foundation in creating efficient and innovative solutions. I thrive in the world of coding and problem-solving, always excited to take on new challenges and contribute to cutting-edge projects.  I hold a [Your Degree] in [Your Major] from [Your University], where I honed my technical skills and gained a solid understanding of software engineering principles. Throughout my academic journey, I actively participated in coding competitions and collaborative projects, further enhancing my ability to work in a team and deliver high-quality results.";

  public get contact(): Observable<any> { return of(this._contact); }
  public get education(): Observable<any> { return of(this._education); }
  public get headers(): Observable<string[]> { return of(this._headers); }
  public get headerLinks(): Observable<any[]> { return of(this._headerLinks); }
  public get projects(): Observable<any[]> { return of(this._projects); }
  public get skills(): Observable<any> { return of(this._skills); }
  public get workHistory(): Observable<any[]> { return of(this._workHistory); }

  constructor() { }

  private _contact = {
    email: "mpwester@gmail.com",
    phone: "4142003000"
  }

  private _education = {
    school: "University of Wisconsin - Milwaukee",
    endYear: "2010",
    startYear: "2006",
    gap: "1.01"
  }

  private _headers = [
    "About",
    "Education",
    "Experience",
    "Projects",
    "Skills",
    "Contact"
  ]

  private _headerLinks = [
    { title: "Project Link One", link: "localhsot:4200/#Project1" },
    { title: "Project Link Two", link: "localhsot:4200/#Project2" },
    { title: "Project Link Threee", link: "localhsot:4200" },
  ]

  private _projects = [
    { title: "Link One", link: "localhsot:4200/#Link1" },
    { title: "Link Two", link: "localhsot:4200/#Link2" },
    { title: "Link Three", link: "localhsot:4200" },
  ]

  private _skills = {
    "Programming Languages": ["Angular", "Typescript", "C#", "C", "C++", "Javascript", "React", "Express", "Go", "Java"],
    "Unit Testing Frameworks": ["Karma", "Jasmine", "Jest"],
    "Database": ["Oracle", "SQL Server", "Gramlin", "Postgrese"],
    "Tools": ["Yarn", "Git", "NPM"]
  }

  private _workHistory = [
    {
      company: "Goldfish",
      title: "Staff Software Engineer",
      startDate: new Date(1, 23),
      endDate: null,
      summary: [
        "During your first year at GoldFish, you would likely be immersed in the company's culture and values while getting up to speed on the tools, technologies, and processes used within your team. You would work closely with your manager and teammates to identify your goals and priorities for the year, which might include mastering specific coding languages, contributing to specific projects or initiatives, or developing leadership skills.",
        "As a software engineer at GoldFish, you would likely spend a significant amount of time writing code and collaborating with other engineers to develop, test, and deploy software solutions. You might also participate in code reviews, design discussions, and cross-functional meetings to ensure that your work aligns with the company's overall strategy and vision.",
        "In addition to your technical responsibilities, you would likely be encouraged to participate in various learning and development opportunities, such as training sessions, workshops, and mentorship programs. You might also have the opportunity to attend industry events, hackathons, and conferences to stay up to date on the latest trends and technologies in software engineering.",
        "Overall, your one-year job description as a GoldFish employee would likely involve a mix of technical and non-technical responsibilities, with a focus on continuous learning, collaboration, and innovation."
      ],
      accomplishments: [
        "Designed and developed a scalable and high-performance application that increased user engagement and revenue for the company.",
        "Implemented a new software testing framework that reduced the number of bugs and increased the speed of the testing process.",
        "Led a team of engineers in the successful delivery of a complex software project, meeting all project milestones and ensuring high quality of the final product.",
        "Contributed to an open-source project that gained widespread adoption and recognition in the software development community.",
        "Developed and maintained a robust and secure database architecture that ensured data integrity and confidentiality for millions of users."
      ]
    },
    {
      company: "Koi Fish",
      title: "Senior Software Engineer",
      startDate: new Date(1, 22),
      endDate: new Date(12, 22),
      summary: [
        "As a software engineer at Koi Fish, you would likely spend a significant amount of time writing code and collaborating with other engineers to develop, test, and deploy software solutions. You might also participate in code reviews, design discussions, and cross-functional meetings to ensure that your work aligns with the company's overall strategy and vision.",
        "In addition to your technical responsibilities, you would likely be encouraged to participate in various learning and development opportunities, such as training sessions, workshops, and mentorship programs. You might also have the opportunity to attend industry events, hackathons, and conferences to stay up to date on the latest trends and technologies in software engineering.",
        "Overall, your one-year job description as a Koi Fish employee would likely involve a mix of technical and non-technical responsibilities, with a focus on continuous learning, collaboration, and innovation."
      ],
      accomplishments: [
        "Developed an innovative algorithm that improved the efficiency and accuracy of a machine learning model, resulting in significant cost savings for the company.",
        "Collaborated with cross-functional teams to identify and solve complex technical problems, improving the overall performance and user experience of the software product.",
        "Mentored and trained junior engineers, helping them develop their technical skills and professional growth within the company.",
        "Presented technical talks and papers at industry conferences and published articles in leading software engineering journals.",
        "Received awards or recognition for outstanding technical achievements or contributions to the software engineering community."
      ]
    },
    {
      company: "Goldfish",
      title: "Software Engineer",
      startDate: new Date(1, 20),
      endDate: new Date(12, 21),
      summary: [
        "In addition to your technical responsibilities, you would likely be encouraged to participate in various learning and development opportunities, such as training sessions, workshops, and mentorship programs. You might also have the opportunity to attend industry events, hackathons, and conferences to stay up to date on the latest trends and technologies in software engineering.",
        "Overall, your one-year job description as a GoldFish employee would likely involve a mix of technical and non-technical responsibilities, with a focus on continuous learning, collaboration, and innovation."
      ],
      accomplishments: [
        "Contributed to an open-source project that gained widespread adoption and recognition in the software development community.",
        "Developed and maintained a robust and secure database architecture that ensured data integrity and confidentiality for millions of users.",
        "Developed an innovative algorithm that improved the efficiency and accuracy of a machine learning model, resulting in significant cost savings for the company.",
        "Collaborated with cross-functional teams to identify and solve complex technical problems, improving the overall performance and user experience of the software product."
      ]
    },
    {
      company: "Koi Fish",
      title: "Junior Software Engineer",
      startDate: new Date(1, 20),
      endDate: new Date(12, 21),
      summary: [
        "Overall, your one-year job description as a Koi Fish employee would likely involve a mix of technical and non-technical responsibilities, with a focus on continuous learning, collaboration, and innovation."
      ],
      accomplishments: [
        "Designed and developed a scalable and high-performance application that increased user engagement and revenue for the company."
      ]
    },
    {
      company: "Goldfish",
      title: "Software Engineer",
      startDate: new Date(1, 20),
      endDate: new Date(12, 21),
      summary: [
        "Overall, your one-year job description as a GoldFish employee would likely involve a mix of technical and non-technical responsibilities, with a focus on continuous learning, collaboration, and innovation."
      ],
      accomplishments: [ ]
    },
    {
      company: "Koi Fish",
      title: "Intern Software Engineer",
      startDate: new Date(1, 20),
      endDate: new Date(12, 21),
      summary: [
        "Overall, your one-year job description as a Koi Fish employee would likely involve a mix of technical and non-technical responsibilities, with a focus on continuous learning, collaboration, and innovation."
      ],
      accomplishments: [
        "Designed and developed a scalable and high-performance application that increased user engagement and revenue for the company.",
        "Implemented a new software testing framework that reduced the number of bugs and increased the speed of the testing process.",
        "Received awards or recognition for outstanding technical achievements or contributions to the software engineering community.",
      ]
    },
    {
      company: "Goldfish",
      title: "Intern Software Engineer",
      startDate: new Date(1, 20),
      endDate: new Date(12, 21),
      summary: [
        "Overall, your one-year job description as a GoldFish employee would likely involve a mix of technical and non-technical responsibilities, with a focus on continuous learning, collaboration, and innovation."
      ],
      accomplishments: [
        "Designed and developed a scalable and high-performance application that increased user engagement and revenue for the company.",
        "Implemented a new software testing framework that reduced the number of bugs and increased the speed of the testing process.",
        "Led a team of engineers in the successful delivery of a complex software project, meeting all project milestones and ensuring high quality of the final product.",
        "Mentored and trained junior engineers, helping them develop their technical skills and professional growth within the company.",
        "Presented technical talks and papers at industry conferences and published articles in leading software engineering journals.",
        "Received awards or recognition for outstanding technical achievements or contributions to the software engineering community.",
      ]
    }
  ]
}
