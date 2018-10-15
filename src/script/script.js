// ------ COMPONENTS

Vue.component('v-header', {
  template: `
    <header>
      <nav>
        <ul>
          <li><a href="index.html">Introductie</a></li>
          <li><a href="risico-indicatie.html">Risico Indicatie</a></li>
          <li><a href="#">Over</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>`
});

Vue.component('v-aside', {
  data: function() {
    return {
      categorieen: [
        { title: 'Categorie 1' },
        { title: 'Categorie 2' },
        { title: 'Categorie 3' }
      ]
    };
  },
  template: `
    <aside>

      <ul>
        <li v-for="categorie in categorieen">
          {{ categorie.title }}
        </li>
      </ul>

    </aside>`
});

Vue.component('v-main', {
  template: `
    <main>
      <h2>Introductie</h2>
      <p>Deze beslissingondersteuningstool kan gebruikt worden door hulpverleners om een objectieve risico-indicatie te krijgen op een zwaardere maatregel op basis van kenmerken van het kind, de ouders en het huishouden. Onder zwaardere maatregelen vallen in dit geval jeugdhulp met verblijf, jeugdbeschermingsmaatregelen en jeugdreclasseringsmaatregelen.</p>
      <p>In het menu vindt u onder ‘Risico indicatie’ de objectieve risico indicatie tool op een zware maatregel op basis van kenmerken. Daarnaast vindt u onder ‘Trajectkeuze’ een tool om op basis van eerdere trajecten de kans te verkrijgen op een volgend traject op basis van historische gegevens.</p>
      <p>Voor hulp bij het gebruik van deze tool, kunt u gebruik maken van de handleiding die u hier kunt downloaded:</p>
      <p>Bij ‘Over’ kunt u achtergrondinformatie vinden over de totstandkoming van deze tool.</p>
      <p>Mocht u verder nog vragen hebben over de tool in het algemeen of het gebruik ervan, kunt u contactgegevens vinden onder ‘Contact’.</p>
    </main>`
});


// ------ VUE APP

var vm = new Vue({
  el: '#v_app'
});
