export default {
  name: 'Countbar',
  props: {
    count: { type: Number, default: 0 },
    increment: {
      type: Function,
      default: () => { console.log('default increment') }
    },
    decrement: {
      type: Function,
      default: () => { console.log('default decrement') }
    },
    reset: {
      type: Function,
      default: () => { console.log('default reset') }
    }
  },
  methods: {
    test (e) {
      console.log('testfired', e);
      this.increment();
    }
  },
  template: `
    <section class="count-bar bg-primary text-light">
      <article>
        <h4>Count: {{ this.count }}</h4>
      </article>

      <div class="flex-container space-around">
        <button class="button outline light" @click="test">
          Increment
        </button>
        <button class="button outline secondary" @click="decrement">
          Decrement
        </button>
        <button class="button outline dark" @click="reset">
          Reset
        </button>
      </div>
    </section>
  `,
};