{
  lesson: 'v-bind:attribute',
  description: 'includes an attribute based on a component data',
  
  example: {
    data: () => ({ link: 'http://www.xuxa.com.br' }),
    template: '<a v-bind:href="link">Click me!</a>',
  }
}
