{
  lesson: 'v-for',
  description: 'loop over something (array/json/number)',
  
  example: {
    data: () => ({
      contents: [
        'hello',
        'beautiful',
        'world'
      ]
    }),
    template: ('
      <p v-for="content in contents">
        {{ content }}
      </p>
    ')
  }
}
