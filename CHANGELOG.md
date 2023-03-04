# Changelog
#### Last update: 2023-03-04

<hr>

**Name** : Project section<br/>
**Description** : added a new section on the portfolio named **Projects**, here you will be able to showcase all your relevant projects.<br/>
Projects can demonstrate your skill in different areas like :
- Technology
- Graphic design
- UX design
- Video editing
- etc...
<br/>

We tried to make this section more general in order to be flexible and adaptable to any kind of projects. <br/>
As usually you will have a `projects.json` that you need to fill in with projects information, a sample entry is the following:

    {
        "title": "GZ Project no 1",
        "logo": "gz001/logo.png",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor nisl sed viverra hendrerit. Proin quis ex mattis, ultricies leo in, rhoncus ligula. Vivamus venenatis tellus tempor leo maximus cursus. Vestibulum consectetur vehicula dui, commodo semper enim semper et. Praesent interdum lacus ante, vel eleifend nisi iaculis vel. Morbi rhoncus.",
        "link": "https://github.com/StefanoPisano/gz-folio",
        "tags": ["Skill 1", "Skill 2"],
        "details": {
            "description": "\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultrices ac ipsum nec suscipit. Phasellus porta fermentum placerat. Nunc tristique odio sed nisi lobortis, ullamcorper rhoncus lorem semper. Integer sed lorem ac leo finibus pharetra ut ut magna. Donec sit amet urna maximus, porta lectus nec, elementum ex. Praesent vehicula lacus risus, vel suscipit magna aliquam in. Donec ex augue, aliquet ac pretium sit amet, elementum nec ante. Nulla justo mauris, porttitor sed pellentesque eu, tempus sed diam. Proin ornare nulla non sollicitudin fermentum. Vestibulum luctus metus non ante iaculis, quis pellentesque ipsum posuere. Quisque laoreet ut felis eu hendrerit.\n\nQuisque nisi lacus, tincidunt vel blandit id, cursus quis libero. Nunc rhoncus dui eget quam elementum, sed tristique tellus tempus. Nunc sit amet velit eget ante ultrices feugiat. Nullam nec mi eu eros efficitur dictum sed eget turpis. Etiam et erat dictum, tincidunt magna nec, tempus orci. Morbi vulputate vel tortor a cursus. Integer in dictum neque. Mauris finibus libero quis massa elementum, vitae interdum lorem ornare. Etiam vel augue facilisis, ultricies risus a, tempus lorem. Fusce quis tellus volutpat, tempor est et, efficitur arcu. Aliquam finibus leo vel dignissim finibus. Sed sem mi, semper vel leo sed, ultricies pharetra dolor. Morbi quis neque pulvinar ipsum gravida vulputate. Curabitur aliquam magna in mi accumsan, non efficitur velit tincidunt. Maecenas pharetra imperdiet quam ultrices bibendum. Phasellus maximus tincidunt diam sed mattis. ",
            "banner": "gz001/banner.png",
            "image_one": "gz001/logo.png",
            "image_two": "gz001/logo.png",
            "image_three": "gz001/logo.png"
        }
    }

- Images should be put in the `assets/projects` folder, we strongly suggest to put them in subfolders to have a cleaner structure.
    1. **logo** the image in the homepage, it should be a squared image.
    2. **banner** rectangular image in more details page.
    3. **image_(one/two/three)** squared images inside the more details dialog that will show up at the bottom of the modal.  
- The description is a brief introduction (up to 500 characters) that will show up in the main page.
- Details section is not mandatory but if you put it there will be a new button on the portfolio that will show additional details.

The list of projects will be filterable selecting one skill in the filter section, this one will be hidden on small screens.

Below this section a simple ranking table will be generated, this will consider the skills you set for your projects and based on them it will do a simple calculation to guess the areas where you have more expertise.
In order to make it working, you will need to add the following entries to your theme, in the general section:
       
    "gradient_start": "#0a192f",
    "gradient_middle": "rgba(55, 154, 130, 1)",
    "gradient_end": "rgba(69, 143, 158, 1)"

As always, the route is configurable in the file `routing-toggle.json` by adding: 

       {
        "name": "GZProjects",
        "label": "Projects",
        "path": "projects",
        "enabled": true
    },