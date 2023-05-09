import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurriculumVitaeService {

  public username = "John Doe";
  public aboutMe = "As an AI language model, I don't have personal experiences or a physical presence, so I don't have a personal about me. However, as a software engineer, your about me could include your background in computer science, your professional experience in software development, your areas of expertise, your programming languages and tools of choice, and your passion for creating efficient, elegant, and scalable software solutions. You might also want to include any notable achievements, such as projects you've contributed to, awards you've received, or technologies you've helped to develop. Additionally, you might want to mention any personal interests or hobbies that relate to software engineering, such as open-source contributions or hackathon participation.";


  public get headers(): Observable<string[]> { return of(this._headers); }
  public get headerLinks(): Observable<any[]> { return of(this._headerLinks); }
  public get workHistory(): Observable<any[]> { return of(this._workHistory); }

  constructor() { }

  private _headers = [
    "About",
    "Experience",
    "Education",
    "Projects",
    "Skills",
    "Contacts"
  ]

  private _headerLinks = [
    { title: "Github", link: "https://github.com/mike-wester" },
    { title: "Github - Resume", link: "https://github.com/mike-wester/mike-wester.github.io" },
    { title: "Github - Angular ATM", link: "https://github.com/mike-wester/angular-atm" },
    { title: "Github - Goldfish", link: "https://github.com/mike-wester/goldfish" },
  ]

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
      startDate: new Date(1, 28),
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
      startDate: new Date(2, 20),
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
