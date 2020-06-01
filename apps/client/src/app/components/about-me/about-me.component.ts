import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  personalInfo = {
    name: 'Mohammad Mazedul Islam',
    title: 'Software Engineer'
  };

  timelineData = [
    {
      type: 'position',
      company: {
        name: 'Impel IT Solutions',
        website: 'http://www.impelitsolutions.com/'
      },
      title: 'Software Engineer',
      technologies: ['angular', 'spring-boot'],
      responsibilities: [
        'Adding necessary angular components and directives for the project',
        'Implementing REST APIs using spring-boot',
        'Refactored angular components to increase flexibility and maintainability'
      ],
      dates: {
        start: new Date(2020, 2),
        end: null
      }
    },
    {
      type: 'position',
      company: {
        name: 'Relisource Technologies Ltd.',
        website: 'http://www.relisource.com/'
      },
      title: 'Software Engineer',
      technologies: ['salesforce', 'angularjs'],
      responsibilities: [
        'Added features in a large scale enterprise application',
        'Wrote unit tests',
        'Optimized database queries'
      ],
      dates: {
        start: new Date(2019, 7),
        end: new Date(2020, 1)
      }
    },
    {
      type: 'position',
      company: {
        name: 'Orbitax Inc.',
        website: 'https://orbitax.com/'
      },
      title: 'Associate Software Engineer',
      technologies: ['angular', '.net', '.net-core', 'mongodb', 'jenkins', 'graphql', 'rabbitmq'],
      responsibilities: [
        'Developed highly functional and reusable UI packages in Angular and published to npm registry',
        'Consumed ​REST APIs​ and developed few of them in microservice based architecture',
        'Contributed to ​Chatbot​ implementation using ​Dialogflow',
        'Implemented ​.NET MVC​ application for playing video tutorials'
      ],
      dates: {
        start: new Date(2018, 2),
        end: new Date(2019, 6)
      }
    },
    {
      type: 'position',
      company: {
        name: 'LII Lab',
        website: 'https://liilab.com/'
      },
      title: 'Software Engineer',
      technologies: ['android', 'java'],
      responsibilities: [
        'Developed image editing Android apps',
        'Implemented flood-fill algorithm to automatically erase selected color from an image',
        'Participated at daily SCRUM and maintained trello board'
      ],
      dates: {
        start: new Date(2017, 7),
        end: new Date(2018, 1)
      }
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
