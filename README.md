# :boom: The only portfolio framework that you will ever need: **gz-folio**

## A free, customizable and simple portfolio for everyone!
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) 
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)
<br/>

The portfolio has been developed in order to be deployed inside GitHub pages.<br/>
The main goal of this project is to have a user-friendly way to create a personal portfolio full of features such as:<br/>
- Brief introduction about yourself.
- Work experiences with skills divided by work place.
- A clean Blog space easy to setup.
- Email and other relevant point of contacts.
- Add your Curriculum Vitae pdf within the portfolio.
- Mobile friendly.
<br/>
It does not require any backend or database integration, it is full front end!
<br/><br/>

:satellite: Live Demo: [Click me!](https://stefanopisano.github.io/gz-folio/#/) 

<br/>

Some real world examples: 
- [Stefano Pisano](https://stefanopisano.github.io/portfolio/#/) 

Feel free to send me your portfolio link at spisano@protonmail.com, I will add it to the list :)

### 🌱 What's next
I am currently working on adding new features like:
- [ ] Photo Gallery.
- [ ] Work Projects.
- [ ] Realtime themes previews.

### :computer: Technologies & Programming stuff

- **Vue 4** as main JavaScript framework. 
- **Markdown** as reference for blog posts.
- **HTML**
- **CSS**

### :hammer: How to run
1. Clone this repository into your local environment.
2. Edit entry `"name": "gz-folio"` in your package.json file, give a proper name to it!
3. Run `npm install`
4. Run `npm run serve`
5. Open *localhost:8080* or whichever url it will be prompt in the console and see if it is working correctly.
6. Push it to your repository with a nice name for your personal portfolio.

### :file_folder: Sections
The portfolio is highly customizable, if you don't need a particular route (menu entry), you can deactivate it using the configuration inside `src/router/routing-toggle.json` <br/>
The configuration should be straightforward, every entry can be enabled or disabled using the boolean value:

    "name": "SPBlog",
    "label": "Blog",
    "path": "/blog",
    "enabled": true/false


By changing the **label** value you will modify the label on the navigation menu. 


### :pencil2: Portfolio Content
I don't want you to waste time inside HTML tags and vue components, I want you to only focus on the content of your portfolio.
You will be able to do that by editing some simple `json` files, one for every section.<br/>
Please do not remove credits from the footer one :)

### :envelope: Resume
You can set a download link for your curriculum vitae by simply adding a file called `resume.pdf` inside the `public/resume` folder. <br/>
If you don't need it you can disable it by simply disabling the property inside `src/components/greetings/greetings.json`

### :newspaper: Blog
Blog articles should be written in **Markdown** language and they should be put inside the folder `src/assets/posts`. <br/>
Inside that folder you will find another `json` file, in order to make an article available to your audience you will need to edit this file and add an entry to that providing simple informations like the author, the date, a title and a description. <br/>
Articles will be sorted automatically based on the dates.
Titles and descriptions will be automatically truncated if their length is greater than:
- **Title**: 50 characters
- **Description**: 100 characters

At the moment the blog does not support embedding local images but you can always host them somewhere and use the link as reference.

<br/>

**Reference**: https://www.markdownguide.org/

### :rainbow: Color schemes
GZ-folio supports also color schemes, by default you fill find two different themes, a light and a dark one. <br/>
Don't worry, you will be able to choose your personal palette creating a new folder inside `src/themes`. <br/>
For simplicity, the theme will be a `json` file and its name should be `default.json`.
I suggest you to copy the default one inside your new folder and then start customizing it with your own personal colors. <br/>
In order to be able to see the newly created theme you should do one last thing: <br/>
1. Open `src/main.js`
2. Look for `app.config.globalProperties.$theme = 'default'` 
3. Replace `default` with the name of your theme (the directory name)

### :rocket: Deploy
Also this one is simple, too simple :D

1. Open the script `deploy.sh`.
2. Look for `git push -f your-git-repository master:gh-pages`.
3. Replace `your-git-repository` with the name of your repository.
4. Open `vue.config.js` file and replace `gz-folio` with the name of your repository.
5. Run `npm run deploy`
6. Follow the deployment process on Github Actions

You can use this script to deploy it on GitHub pages but the portfolio should work on any host.

### :pushpin: Keep it updated!
Inside the portfolio you will find a file named `gz-folio-update.sh`, execute it by simply running the following command inside the terminal `sh gz-folio-update.sh` inside the portfolio directory.
This will fetch latest updates on the portfolio. <br/>
Be aware that this will also overwrite any changes you did on the vue files (not the json ones). <br/>
It will also update a file named `CHANGELOG.md` with latest changes.