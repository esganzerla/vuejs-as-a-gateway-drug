{
  lesson: 'mounted',
  description: 'a function that is executed when the component is mounted',
  
  example: {
    data: () => ({ customData: 'hey' }),
    methods: {
    	myCustomMethod (value) {
    		alert(value)
    	}
    },
    mounted () {
      this.myCustomMethod (this.customData)
    }
  }
}
