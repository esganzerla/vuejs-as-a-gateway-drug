{
  lesson: 'filters',
  description: 'filters to string/numbers/whatever',
  
  example: {
    template: '{{ content | fn }}',
    script: {
    	filters: {
    		fn (value) {
    			return doSomething(value)
    		}
    	}
    }
  }
}
