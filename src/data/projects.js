import OneMinuteWriterImg from '../images/OneMinuteWriter.jpg'
import JazzCollaborationsImg from '../images/JazzCollaborations.jpg'
import RancidTomatillosImg from '../images/RancidTomatillos.jpg'
import ScorecardImg from '../images/Scorecard.jpg'
import LeaderboardImg from '../images/Leaderboard.png'
import ScorecardSetupImg from '../images/ScorecardSetup.png'
import CourseImg from '../images/Course.png'

export const projects = [
  {
    name: 'One Minute Writer',
    description: 'This application was developed by a full stack team as our capstone project at Turing School of Software & Design. The application gives writers a space to write, save and edit writings, and find inspiration.\n\nThe goals for this project were to learn GraphQL and TypeScript, work with a backend team, utilize CI/CD for automatic testing and deployment, rebasing, and working asyncronously on a project with a team.\n\n',
    images: [OneMinuteWriterImg],
    technologies: [
      'React',
      'TypeScript',
      'GraphQL',
      'REST',
      'SCSS',
      'Cypress'
    ],
    deployed: 'https://one-minute-writer.herokuapp.com/',
    repo: 'https://github.com/one-minute-writer/one_minute_writer_fe',
    backend: 'https://github.com/one-minute-writer/one_minute_writer_be'
  },
  {
    name: 'Jazz Collaborations',
    description: 'This application allows a user to browse through jazz artists, choose two musicians, and then see list of albums those musicians both played on.\n\nThe front end was written in React, using Sass, React Router and Cypress. The server was written in Express and both the front and back ends are hosted on Heroku.\n\nThe focus of this project was to practice global state management with React\'s context and using hooks in functional components.\n\n',
    images: [JazzCollaborationsImg],
    technologies: [
      'React',
      'JavaScript',
      'REST',
      'Express',
      'SCSS',
      'Cypress'
    ],
    deployed: 'https://jazz-collaborations.herokuapp.com/',
    repo: 'https://github.com/philalewis/jazz-collaborations',
    backend: 'https://github.com/philalewis/jazz-collaborations-api'
  },
  {
    name: 'Discify',
    description: 'Application that allows a user to manage a disc golf league, create a personal and team scorecard, search courses to play, and view league statistics. Pulled data from REST API to prepopulate scorecard with par information, hole distance, and user statistics. Stored all data in a custom backend. Leveraged React\’s context API for global state management, React Router v6, and Cypress for end-to-end testing.\n\nThe focus of this project was to learn React hooks, context, and practice making a complex front end application.\n\n',
    images: [ScorecardImg, LeaderboardImg, ScorecardSetupImg, CourseImg],
    technologies: [
      'React',
      'JavaScript',
      'REST',
      'SCSS',
      'Cypress'
    ],
    deployed: 'https://discify-app.herokuapp.com/',
    repo: 'https://github.com/philalewis/discify',
    backend: 'https://discify-api.herokuapp.com/#introduction'
  },
  {
    name: 'Rancid Tomatillos',
    description: 'Leveraged the React framework to create functional and class components, utilized network requests using fetch, routed with React Router v5, and conducted end-to-end testing with Cypress. Allows users to browse through movies and view details about each one.\n\nThe learning goals for this project were to learn React, React Router, and end-to-end testing with Cypress.\n\n',
    images: [RancidTomatillosImg],
    technologies: [
      'React',
      'JavaScript',
      'REST',
      'SCSS',
      'Cypress'
    ],
    deployed: 'https://philalewis.github.io/rancid-tomatillos/',
    repo: 'https://github.com/philalewis/rancid-tomatillos'
  }
]