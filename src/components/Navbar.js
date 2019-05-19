export default {
  name: 'Nav',
  template: `
    <nav class="nav" role="navigation">
      <div class="nav-left">
        <a class="brand" href="#">Roux</a>

        <div class="tabs">
          <a>Link 1</a>
          <a class="active">Link 2</a>
          <a>Link 3</a>
          <a>Link 4</a>
        </div>
      </div>

      <div class="nav-right">
        <a class="button outline">Button</a>
      </div>
    </nav>
  `
}