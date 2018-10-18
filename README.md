# frontend-applications | Risico indicatie App

This is the repo for my frontend applications project where I made a web application using Vue.js. The web application can be used to calculate the risk that a child has to be removed from their parental home

![Risico Indicatie App Start Screenshot](images/dating_app_start_screenshot.png)
> Risico Indicatie App

## Table of Contents
* [To Do](#to-do)
* [Description](#description)
* [Installing](#installing)
* [Sources](#sources)
* [Licence](#licence)
* [Process](#process)

## To Do
This is a list of things in want to do in this project.
- [X] Git, npm, and a framework are used
- [X] Data is rendered with a framework
- [ ] Data can be read and changed
- [ ] Changes to data are reflected in the interface;
- [ ] Changes persist across page reloads
- [ ] Use routing or creating data

## Description
This web app can be used to calculate the risk that a child has to be removed from their parental home due to a number of different factors like educational status, social participation by the parents in society and if there are any relations with crime.

## Installing
To install this application enter the following into your _terminal_:
```
git clone https://github.com/BasPieren/frontend-applications.git

cd frontend-applications

npm install
```
If you want to also install the devDependencies use:
```
npm install --dev
```

### Packages and technologies
This project makes use of the following packages and technologies:

#### Dependencies
These dependencies are needed to run the web application.

* [Vue](https://www.npmjs.com/package/vue)

#### devDependencies
The devdependencies where used during the creation op the web application but are not needed to run it.

* [Prettier](https://www.npmjs.com/package/prettier)

All of these where recommended and used as examples by [Titus Wormer](https://github.com/wooorm) during the lectures and labs so thats why I also made use of them.

## Sources
This project makes use of the following sources:

* [Simple list filter with Vue.js](https://codepen.io/anon/pen/bxjpKG)
* [Code provided by Martijn Reeuwijk](https://github.com/MartijnReeuwijk)

## Process
Add the start of this project I got assigned  [Vue](https://www.npmjs.com/package/vue) as the framework to use for the frontend applications project.

![Vue.js](images/vue_js_home.png)

First I wanted to familiarize myself with the framework itself before I would start on the project. I began with following the [installation](https://vuejs.org/v2/guide/installation.html) guide on the Vue website and followed that with the short introduction about the following points:

* What is Vue.js?
* Getting Started
* Declarative Rendering
* Conditionals and Loops
* Handling User Input
* Composing with Components

In short Vue is described as a **progressive framework** for building user interfaces. It enables people to render data to the DOM using simple syntax.

After reading the introduction I followed the [Scrimba](https://scrimba.com/p/pXKqta/cQ3QVcr) tutorial which explains the same basic concepts but using a video and voiceover which made it easier to follow.

![Vue.js](images/vue_scrimba_01.png)
> Vue introduction tutorial

The tutorial showed how to make 6 simple Vue applications.

### App 1
This simpele example shows how to link data and the DOM in a reactive way. This means when you edit the data, for example by using `app.message = "Hello World"`, it's get updated accordingly.

```
<div id="app">
  {{ message }}
</div>

<script type="text/javascript">

var app = new Vue({
  el:'#app',
  data: {
    message: "Hello Vue"
  }
})

</script>
```

This was all the code after I was done with the tutorial:

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <link rel="stylesheet" href="style/style.css">
  <title>Vue Tutorial</title>
</head>
<body>

  <!-- APP 1 -->

  <div id="app">
    {{ message }}
  </div>

  <!-- APP 2 -->

  <div id="app-2">
    <span v-bind:title="message">
      Hover your mouse over me for a few seconds
      to see my dynamically bound title!
    </span>
  </div>

  <!-- APP 3 -->

  <div id="app-3">
    <span v-if="seen">Now you see me</span>
  </div>

  <!-- APP 4 -->

  <div id="app-4">
    <ol>
      <li v-for="todo in todos">
        {{ todo.text }}
      </li>
    </ol>
  </div>

  <!-- APP 5 -->

  <div id="app-5">
    <p>{{ message }}</p>
    <button v-on:click="reverseMessage">Reverse Message</button>
  </div>

  <!-- APP 6 -->

  <div id="app-6">
    <p>{{ message }}</p>
    <input v-model="message">
  </div>

  <!-- APP 7 -->

  <div id="app-7">
    <ol>
      <todo-item
        v-for="item in groceryList"
        v-bind:todo="item"
        v-bind:key="item.id">
      </todo-item>
    </ol>
  </div>

  <div id="todolist">
    <h1>TODO:</h1>

    <ul>
      <li v-for="todo in todos">
        <button v-on:click="remove(todo)">X</button>{{todo}}
      </li>
    </ul>

    <input v-model="newtodo">
    <button v-on:click="add">Voeg {{newtodo}} toe</button>

  </div>

  <script type="text/javascript">

    // APP 1

    var app = new Vue({
      el:'#app',
      data: {
        message: "Hello Vue"
      }
    })

    // APP 2

    var app2 = new Vue({
      el: '#app-2',
      data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
      }
    })

    // APP 3

    var app3 = new Vue({
      el:"#app-3",
      data: {
        seen: true
      }
    })

    // APP 4

    var app4 = new Vue ({
      el: "#app-4",
      data: {
        todos: [
          { text: "Learn Javascript"},
          { text: "Learn Vue"},
          { text: "Build something awesome"}
        ]
      }
    })

    // APP 5

    var app5 = new Vue({
      el: "#app-5",
      data: {
        message: "Hello Vue.js"
      },
      methods: {
        reverseMessage: function () {
          this.message = this.message.split("").reverse().join("")
        }
      }
    })

    // APP 6

    var app6 = new Vue({
      el:"#app-6",
      data:{
        message: "Hello Vue!"
      }
    })

    // APP 7

    Vue.component("todo-item", {
      props: ["todo"],
      template: "<li>{{ todo.text }}</li>"
    })

    var app7 = new Vue({
      el: "#app-7",
      data: {
        groceryList: [
          {id: 0, text:'Vegetables'},
          {id: 1, text:'Cheese'},
          {id: 2, text:'Whatever else humans are supposed to eat'},
        ]
      }

    })

    new Vue({
        el : "#todolist",
        data : {
            newtodo : null,
            todos : ['Boter', 'Kaas', 'Eieren', 'Whisky']
        },
        methods : {
            add : function() {
                this.todos.push(this.newtodo);
                this.newtodo = null;
            },

            remove : function(todo) {
                this.todos = this.todos.filter(function(t) {
                    return t !== todo;
                });
            }
        }
    })

  </script>

</body>
</html>

```

After the first tutorial I started to watch the second tutorial which went deeper into stuff like:

* Methods
* Control-Flow
* Components

![Vue.js](images/vue_scrimba_02.png)
> Intro to Vue.js tutorial

After following all the tutorials I started work on the project itself
sins I got the feeling I had the hang of the basics. I created the `frontend-applications` directory and installed Vue with `node install vue` which installed vue in de `node_modules` directory.

My document looked something like this:

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../style/style.css">
  <script src="../../node_modules/vue/dist/vue.js"></script>
  <title>Fe-applications | Risico indicatie app</title>
</head>
<body>

<script src="../script/script.js" type="text/javascript"></script>

</body>
</html>

```

After the setup I started with a quick sketch of how I ruffly wanted the web application to look like.

![Vue.js](images/first_sketch.JPG)
> First very low-fi sketch

When I got a general idea of how I wanted my web application to look I made a design in Adobe Xd.

![Vue.js](images/home.png)
> Home Page

![Vue.js](images/start_profiel.png)
> Creating a new profile

![Vue.js](images/start_profiel_einde.png)
> A new profile is added to the sidebar

![Vue.js](images/algemene_informatie_gezin.png)
> Selected categorie

![Vue.js](images/profiel_post.png)
> State when you reopen a profile

When the design was done I started with creating the components that I was gonne need for the webb application. I made the following components and initiated a Vue instance on a wrapper div:

```
Vue.component('v-header', {

});

Vue.component('v-aside', {

});

Vue.component('v-main', {

});

var vm = new Vue({
  el: '#v_app'
});
```

The HTML looked like this:

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../style/style.css">
  <script src="../../node_modules/vue/dist/vue.js"></script>
  <title>Fe-applications | Risico indicatie app</title>
</head>

<div id="v_app">

  <v-header></v-header>

  <v-aside></v-aside>

  <v-main></v-main>

</div>

<script src="../script/script.js" type="text/javascript"></script>

</body>
</html>
```

After I created the first components that I was gonna need I started to fill them with the content that I wanted to display per components. The most important components where the aside and the main.

In the aside section I wanted to display all the categories as a means to navigate to the desired categorie to and fill in the questions that are part of that categorie.

First I needed the JSON data that was provided by Arjen. I was looking up ways to import the data from the separate JSON file. I found solutions that where using `import vue from './assets/data.json'` but this would not work becaus I kept getting the same error that `import` was not a valid value.

After some time of trying I heard other people where having the same issue and the just put the JSON data inside an array. So I did the same and got the following:

```
var data = [
  {
    Coefficients: 'GESLACHT Mannen',
    Categorie: 'Geslacht',
    Name: 'Man',
    Gewicht: '-0,12611'
  },
  {
    Coefficients: 'Herkomst ouders: Beide ouders niet Nederlands',
    Categorie: 'Herkomst',
    Name: 'Beide ouders niet Nederlands',
    Gewicht: '0,16972'
  },
  {
    Coefficients:
      'Herkomst ouders: Een van de ouders Nederlands en de andere niet Nederlands',
    Categorie: 'Herkomst',
    Name: 'Een van de ouders Nederlands en de andere niet Nederlands',
    Gewicht: '-0,08943'
  },
  {
    Coefficients: 'Type huishouden: Eenouderhuishouden',
    Categorie: 'Type huishouden',
    Name: 'Eenouderhuishouden',
    Gewicht: '0,49608'
  },
  {
    Coefficients: 'Type huishouden: Eenpersoonshuishouden',
    Categorie: 'Type huishouden',
    Name: 'Eenpersoonshuishouden',
    Gewicht: '1,71859'
  },
  {
    Coefficients: 'Type huishouden: Gehuwd paar zonder kinderen',
    Categorie: 'Type huishouden',
    Name: 'Gehuwd paar zonder kinderen',
    Gewicht: '1,06108'
  },
  {
    Coefficients: 'Type huishouden: Institutioneel huishouden',
    Categorie: 'Type huishouden',
    Name: 'Institutioneel huishouden',
    Gewicht: '1,92321'
  },
  {
    Coefficients: 'Type huishouden: Niet-gehuwd paar met kinderen',
    Categorie: 'Type huishouden',
    Name: 'Niet-gehuwd paar met kinderen',
    Gewicht: '0,32694'
  },
  {
    Coefficients: 'Type huishouden:Niet-gehuwd paar zonder kinderen',
    Categorie: 'Type huishouden',
    Name: 'Niet-gehuwd paar zonder kinderen',
    Gewicht: '-14,15530'
  },
  {
    Coefficients: 'Type huishouden: Onbekend',
    Categorie: 'Type huishouden',
    Name: 'Onbekend huishouden',
    Gewicht: '-13,81002'
  },
  {
    Coefficients: 'Type huishouden: Overig huishouden',
    Categorie: 'Type huishouden',
    Name: 'Overig huishouden',
    Gewicht: '0,91365'
  },
  {
    Coefficients: 'Scheiding',
    Categorie: 'Gescheiden ouders',
    Name: 'Ja',
    Gewicht: '0,27683'
  },
  {
    Coefficients: 'VSV Niet van toepassing',
    Categorie: 'Voortijdig schoolverlaten',
    Name: 'Niet van toepassing',
    Gewicht: '0,38736'
  },
  {
    Coefficients: 'VSV Geen data over VSV bekend',
    Categorie: 'Voortijdig schoolverlaten',
    Name: 'Onbekend',
    Gewicht: '0,80564'
  },
  {
    Coefficients: 'VSV Geen vsv: uit onderwijs met startkwalificatie',
    Categorie: 'Voortijdig schoolverlaten',
    Name: 'Uit onderwijs met startkwalificatie',
    Gewicht: '-13,64193'
  },
  {
    Coefficients: 'VSV Voortijdig schoolverlater (vsv)',
    Categorie: 'Voortijdig schoolverlaten',
    Name: 'Voortijdig schoolverlaten',
    Gewicht: '0,34684'
  },
  {
    Coefficients: 'SPECIAAL_Onderwijs Niet-regulier onderwijs',
    Categorie: 'Soort onderwijs',
    Name: 'Niet-regulier onderwijs',
    Gewicht: '-0,33031'
  },
  {
    Coefficients: 'SPECIAAL_Onderwijs Geen onderwijsdata bekend',
    Categorie: 'Soort onderwijs',
    Name: 'Onderwijs onbekend',
    Gewicht: '-0,76957'
  },
  {
    Coefficients: 'Soort woning Huurwoning, met huurtoeslag',
    Categorie: 'Soort woning',
    Name: 'Huurwoning met huurtoeslag',
    Gewicht: '0,38401'
  },
  {
    Coefficients: 'Soort woning Huurwoning, zonder huurtoeslag',
    Categorie: 'Soort woning',
    Name: 'Huurwoning zonder huurtoeslag',
    Gewicht: '0,40420'
  },
  {
    Coefficients: 'Soort woning onbekend',
    Categorie: 'Soort woning',
    Name: 'Onbekend',
    Gewicht: '2,40126'
  },
  {
    Coefficients: 'Werk vader Geen werk',
    Categorie: 'Werk vader',
    Name: 'Geen werk en niet actief',
    Gewicht: '0,33772'
  },
  {
    Coefficients: 'Werk vader onbekend',
    Categorie: 'Werk vader',
    Name: 'Onbekend',
    Gewicht: '0,23486'
  },
  {
    Coefficients: 'Werk moeder Geen werk',
    Categorie: 'Werk moeder',
    Name: 'Geen werk en niet actief',
    Gewicht: '0,36958'
  },
  {
    Coefficients: 'Werk moeder onbekend',
    Categorie: 'Werk moeder',
    Name: 'Onbekend',
    Gewicht: '-0,95012'
  },
  {
    Coefficients: 'Slachtoffer Ja',
    Categorie: 'Slachtoffer',
    Name: 'Ja',
    Gewicht: '0,23639'
  },
  {
    Coefficients: 'Jeuggdhulp zonder verblijf vooraf',
    Categorie: 'Traject vooraf',
    Name: 'Jeugdhulp zonder verblijf gehad',
    Gewicht: '1,52774'
  },
  {
    Coefficients: 'Leeftijd moederbij _geboorte_cat 20 tot 25 jaar',
    Categorie: 'Leeftijd moeder',
    Name: '20 tot 25 jaar',
    Gewicht: '0,10852'
  },
  {
    Coefficients: 'Leeftijd moederbij _geboorte_cat 25 tot 30 jaar',
    Categorie: 'Leeftijd moeder',
    Name: '25 tot 30 jaar',
    Gewicht: '-0,08841'
  },
  {
    Coefficients: 'Leeftijd moederbij _geboorte_cat 35 tot 40 jaar',
    Categorie: 'Leeftijd moeder',
    Name: '35 tot 40 jaar',
    Gewicht: '0,23988'
  },
  {
    Coefficients: 'Leeftijd moederbij _geboorte_cat ouder dan 40 jaar',
    Categorie: 'Leeftijd moeder',
    Name: '40 jaar en ouder',
    Gewicht: '-0,11153'
  },
  {
    Coefficients: 'Leeftijd moederbij _geboorte_cat 0 tot 20 jaar',
    Categorie: 'Leeftijd moeder',
    Name: 'Jonger dan 20 jaar',
    Gewicht: '0,45150'
  },
  {
    Coefficients: 'Leeftijd vaderbij _geboorte_cat 25 tot 30 jaar',
    Categorie: 'Leeftijd vader',
    Name: '25 tot 30 jaar',
    Gewicht: '0,03107'
  },
  {
    Coefficients: 'Leeftijd vaderbij _geboorte_cat 35 tot 40 jaar',
    Categorie: 'Leeftijd vader',
    Name: '35 tot 40 jaar',
    Gewicht: '-0,21624'
  },
  {
    Coefficients: 'Leeftijd vaderbij _geboorte_cat ouder dan 40 jaar',
    Categorie: 'Leeftijd vader',
    Name: '40 jaar en ouder',
    Gewicht: '-0,32645'
  },
  {
    Coefficients: 'Leeftijd vaderbij _geboorte_cat 0 tot 25 jaar',
    Categorie: 'Leeftijd vader',
    Name: 'Jonger dan 25 jaar',
    Gewicht: '-0,00587'
  },
  {
    Coefficients: 'Verdenking misdrijf Vader of moeder Ja',
    Categorie: 'Vader of moeder verdacht',
    Name: 'Ja',
    Gewicht: '0,50027'
  },
  {
    Coefficients: 'Verdenking misdrijf KIND Ja',
    Categorie: 'Kind verdacht',
    Name: 'Ja',
    Gewicht: '0,94738'
  },
  {
    Coefficients: 'HALTDELICT Ja',
    Categorie: 'Halt delict',
    Name: 'Ja',
    Gewicht: '0,36448'
  },
  {
    Coefficients: 'Onderwijsverandering afschalen',
    Categorie: 'Verandering onderwijs niveau',
    Name: 'Afschalen',
    Gewicht: '0,58732'
  },
  {
    Coefficients: 'Onderwijsverandering onbekend',
    Categorie: 'Verandering onderwijs niveau',
    Name: 'Onbekend',
    Gewicht: '-1,11682'
  },
  {
    Coefficients: 'Leeftijdsverschil ouders meer dan 5 jaar',
    Categorie: 'Leeftijdsverschil ouders',
    Name: 'Meer dan 5 jaar',
    Gewicht: '0,28581'
  },
  {
    Coefficients: 'Actueel onderwijs niveau Basisonderwijs',
    Categorie: 'Actueel onderwijs niveau',
    Name: 'Basisonderwijs',
    Gewicht: '0,25232'
  },
  {
    Coefficients: 'Actueel onderwijs niveau Geen onderwijsdata bekend',
    Categorie: 'Actueel onderwijs niveau',
    Name: 'Onderwijs onbekend',
    Gewicht: '0,00000'
  },
  {
    Coefficients: 'Actueel onderwijs niveau Vmbo-b/k, mbo 1 en mbo 2',
    Categorie: 'Actueel onderwijs niveau',
    Name: 'Vmbo b/k, mbo 1 en mbo 2',
    Gewicht: '0,87842'
  },
  {
    Coefficients: 'Actueel onderwijs niveau Vmbo-g/t, mbo 3 en mbo 4',
    Categorie: 'Actueel onderwijs niveau',
    Name: 'Vmbo g/t, mbo 3 en mbo 4',
    Gewicht: '0,56882'
  },
  {
    Coefficients: 'Actueel onderwijs niveau Vwo en Wo-bachelor',
    Categorie: 'Actueel onderwijs niveau',
    Name: 'Vwo en Wo bachelor',
    Gewicht: '-0,83566'
  },
  {
    Coefficients: 'Hoogst behaalde diploma vader Geen onderwijsdata bekend',
    Categorie: 'Hoogst behaalde diploma vader',
    Name: 'Onderwijs onbekend',
    Gewicht: '0,88464'
  },
  {
    Coefficients: 'Hoogst behaalde diploma vader Vmbo-b/k, mbo 1 en mbo 2',
    Categorie: 'Hoogst behaalde diploma vader',
    Name: 'Vmbo b/k, mbo 1 en mbo 2',
    Gewicht: '-0,21630'
  },
  {
    Coefficients: 'Hoogst behaalde diploma vader Vmbo-g/t, mbo 3 en mbo 4',
    Categorie: 'Hoogst behaalde diploma vader',
    Name: 'Vmbo g/t, mbo 2 en mbo 3',
    Gewicht: '0,67119'
  },
  {
    Coefficients:
      'Hoogst behaalde diploma vader Vwo en Wo-bachelor en Wo-master',
    Categorie: 'Hoogst behaalde diploma vader',
    Name: 'Vwo, Wo bachelor en Wo master',
    Gewicht: '-12,08995'
  },
  {
    Coefficients: 'Hoogst behaalde diploma moeder Geen onderwijsdata bekend',
    Categorie: 'Hoogst behaalde diploma moeder',
    Name: 'Onderwijs onbekend',
    Gewicht: '0,03655'
  },
  {
    Coefficients: 'Hoogst behaalde diploma moeder Vmbo-b/k, mbo 1 en mbo 2',
    Categorie: 'Hoogst behaalde diploma moeder',
    Name: 'Vmbo b/k, mbo 1 en mbo 2',
    Gewicht: '0,15936'
  },
  {
    Coefficients: 'Hoogst behaalde diploma moeder Vmbo-g/t, mbo 3 en mbo 4',
    Categorie: 'Hoogst behaalde diploma moeder',
    Name: 'Vmbo g/t, mbo 2 en mbo 3',
    Gewicht: '0,03334'
  },
  {
    Coefficients:
      'Hoogst behaalde diploma moeder Vwo en Wo-bachelor en Wo-master',
    Categorie: 'Hoogst behaalde diploma moeder',
    Name: 'Vwo, Wo bachelor en Wo master',
    Gewicht: '-13,03162'
  }
];
```
After that I added data to the component to import the that through a function and return the data array. I also added a `v-for` to the `<li>` tag to be able to loop through the entire array and put out all the categories into the list.

```
Vue.component('v-aside', {
  data: function() {
    return {
      data
    };
  },
  template: `
    <aside>
      <ul>
        <li v-for="categorie in categorieName">
          {{ categorie }}
        </li>
      </ul>
    </aside>`
});
```
This gave the desired affect except for one thing: it printed all the categories multiple times because of the way the data was set up. So I needed to find a fix for this.

After some time I found the following source: [Simple list filter with Vue.js](https://codepen.io/anon/pen/bxjpKG). This code provided me with the solution:

```
computed: {
  // START USE OF SOURCE: https://codepen.io/anon/pen/bxjpKG
  categorieName: function() {
    return [...new Set(this.data.map(i => i.Categorie))];
  }
  // END USE OF SOURCE
},
```
I will go through how this code works. First I added the `computed` property to the component. `computed` properties work the same as `methods` accept for one difference:

> Computed properties are cached, and only re-computed on reactive dependency changes. Note that if a certain dependency is out of the instance’s scope (i.e. not reactive), the computed property will not be updated (Vue, 2018).

Inside the computed property I created a new function named `categorieName: function () {}` and inside the function we return a new array that checks if a categorie is duplicated and only gives back one per categorie.

All of this thougher look like the following:

```
Vue.component('v-aside', {
  data: function() {
    return {
      data
    };
  },

  computed: {
    // START USE OF SOURCE: https://codepen.io/anon/pen/bxjpKG
    categorieName: function() {
      return [...new Set(this.data.map(i => i.Categorie))];
    }
    // END USE OF SOURCE
  },

  template: `
    <aside>
      <ul>
        <li v-for="categorie in categorieName">
          {{ categorie }}
        </li>
      </ul>
    </aside>`
});
```

This gave the following outcome:

![Vue.js](images/aside_categories.png)

After the aside component was finished I started to work on the main component

## Licence

MIT © [Bas Pieren](https://github.com/BasPieren)
