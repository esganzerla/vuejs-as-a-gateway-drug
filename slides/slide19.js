{
  lesson: 'props',
  description: 'child component receives content from parent',
  
  example: {
    props: {
      prop1: String,
      prop3: {
        type: Boolean,
        default: true
      },
      prop2: {
        type: Array,
        default: () => ([])
      }
    }
  }
}
