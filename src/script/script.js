// ------ COMPONENTS

Vue.component('v-header', {
  template: `
    <header>
      <nav>
        <ul>
          <li><a href="#">Inleiding</a></li>
          <li><a href="index.html">Risico Indicatie</a></li>
          <li><a href="#">Over</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>`
})

Vue.component('v-aside', {
  template: `
    <aside>

    </aside>`
})

Vue.component('v-main', {
  template: `
    <main>
      <h2>Risico indicatie</h2>
      <p>Deze beslissingondersteuningstool kan gebruikt worden door hulpverleners om een objectieve risico-indicatie te krijgen op een zwaardere maatregel op basis van kenmerken van het kind, de ouders en het huishouden. Onder zwaardere maatregelen vallen in dit geval jeugdhulp met verblijf, jeugdbeschermingsmaatregelen en jeugdreclasseringsmaatregelen.</p>
      <button>Begin</button>
    </main>`
})

// ------ VUE APP

var v_app = new Vue({
  el: '#v_app',
})
