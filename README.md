> 18 -July - 2022

## Resume Builder | [Live Link](https://resumes-builder.netlify.app)

# React + Tailwind


## Yarn base packages...
|No| Package Installs                               | Use for                  |
|--|------------------------------------------------|--------------------------|
| 1| `yarn add` -D tailwindcss postcss autoprefixer | CSS Framework            |
| 2| `yarn add` react-feather                       | UI father icons          |

[Feather Icons](https://feathericons.com)


## Learning context by developing this application:
|No| Context learn by building this project... | 
|--|-------------------------------------------|
| 1| Project Structure                         | 
| 2| Full Mobile Responsiveness                | 



## Project Data Structure
```jsx
sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievement: "Achievements",
    summary: "Summary",
    other: "Other",
  };

//========================================//

  information = {
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      detail: {},
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [
        {
          title:""
        }
        ,
        {
          title:""
        }
      ],
    },
    [sections.project]: {
      id: sections.project,
      sectionTitle: sections.project,
      details: [],
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.achievement]: {
      id: sections.achievement,
      sectionTitle: sections.achievement,
      points: [],
    },
    [sections.summary]: {
      id: sections.summary,
      sectionTitle: sections.summary,
      detail: "",
    },
    [sections.other]: {
      id: sections.other,
      sectionTitle: sections.other,
      detail: "",
    },
```

## Project Structure
```jsx
    ├───public
    │   ├───index.html
    │   └───kanban.ico
    │
    ├───src
    │   ├───components
    │   │   ├───Board.jsx
    │   │   ├───Card.jsx
    │   │   ├───Chip.jsx
    │   │   ├───DropDown.jsx
    │   │   ├───Editable.jsx
    │   │   └───index.js
    │   │
    │   ├───style
    │   │   └───index.css
    │   │
    │   ├───App.js
    │   └───index.js
    │   
    ├───.gitignore
    ├───package.json
    ├───postcss.config.js
    ├───README.md
    ├───tailwind.config.js
    └───yarn.lock
```