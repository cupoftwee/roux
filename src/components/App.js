import Navbar from './Navbar.js';
import Footer from './Footer.js';
import Countbar from './Countbar.js';

export default {
  name: 'App',
  components: {
    Navbar, Footer, Countbar
  },
  data() {
    return { count: 0 };
  },
  methods: {
    incrementCount () {
      console.log('App.incrementCount() fired. count now: ', this.count, ' | count after: ', this.count + 1);
      this.count = this.count + 1;
    },
    decrementCount () {
      console.log('App.decrementCount() fired. count now: ', this.count, ' | count after: ', this.count - 1);
      this.count = this.count - 1;
    },
    resetCount () {
      this.count = 0;
    }
  },
  template: `
    <div role="document">
      <Navbar></Navbar>

      <Countbar
        :count="count"
        :increment="incrementCount"
        :decrement="decrementCount"
      ></Countbar>

      <div class="container">
        <main role="main">
          <header>
            <h3>Roux - The mother sauce of mother sauces</h3>
            <hr>
            <p>
              <strong>Roux</strong> (/ˈruː/) is flour and fat cooked together and
              used to thicken sauces. Roux is typically made from equal parts of
              flour and fat by weight. The flour is added to the melted fat or oil
              on the stove top, blended until smooth, and cooked to the desired
              level of brownness. Butter, vegetable oils, bacon drippings or lard
              are commonly used fats. Roux is used as a thickening agent for gravy,
              sauces, soups and stews. It provides the base for a dish, and other
              ingredients are added after the roux is complete.
            </p>
          </header>

          <section id="contents" role="navigation">
            <h4>Table of Contents</h4>
            <ol>
              <li>Uses</li>
              <li>Methods</li>
              <li>
                Types
                <ul>
                  <li>Cretan staka</li>
                </ul>
              </li>
              <li>Alternatives</li>
              <li>See also</li>
              <li>References</li>
              <li>Further reading</li>
              <li>External links</li>
            </ol>
          </section>

          <section id="uses">
            <p>
              The fat is most often butter in French cuisine, but may be lard or
              vegetable oil in other cuisines. The roux is used in three of the
              five mother sauces of classical French cooking: béchamel sauce,
              velouté sauce, and espagnole sauce.
            </p>
            <p>
              In Cajun cuisine, roux is made with bacon fat or oil instead of
              butter and cooked to a medium or dark brown color, which lends much
              richness of flavor, but makes it thinner.
            </p>
            <p>
              Central European cuisine often uses lard (in its rendered form) or
              more recently vegetable oil instead of butter for the preparation of
              roux, which is called zápražka in Slovak, jíška in Czech, zasmażka
              in Polish, zaprška (запршка) in Bosnian, Croatian, Serbian, and
              Macedonian, zaprazhka (запръжка) in Bulgarian, rántás in Hungarian
              and Mehlschwitze in German.
            </p>
            <p>
              Japanese curry, or karē (カレー), is made from a roux made by frying
              yellow curry powder, butter or oil, and flour together. The French
              term roux has become a loanword in Japanese, rū (ルー), or more
              specifically karērū (カレールー, curry roux).
            </p>
          </section>
        </main>
      </div>

      <Footer></Footer>
    </div>
  `,
};