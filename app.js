const App = {
	data() {
		return {
			questions: [],
			index: 0,
			category: '27',
			amount: '10',
			selectedIndex: null,
			correctNumbers: 0,
			totalNumbers: 0,
			background: null,
		}
	},
	computed: {
		nextQuestion() {
			this.background = null
			return this.questions[this.index].question
		},
		answers() {
			// combine incorrect answers and correct answer
			let answers = [...this.questions[this.index].incorrect_answers]
			answers.push(this.questions[this.index].correct_answer)
			// shuffle answers
			answers.sort(() => Math.random() - 0.5)
			return answers
		},
	},
	methods: {
		submitAnswer(answer, index) {
			this.selectedIndex = index

			if (answer === this.questions[this.index].correct_answer) {
				this.correctNumbers++
				this.background = 'green'
			} else {
				console.log('wrong!')
				this.background = 'red'
			}

			if (this.index === this.questions.length - 1) {
				this.totalNumbers++
				return
			}

			this.totalNumbers++
			this.index++
		},
	},
	async mounted() {
		const res = await fetch(
			`https://opentdb.com/api.php?amount=${this.amount}&category=${this.category}&type=multiple`,
			{ method: 'get' }
		)
		const data = await res.json()

		this.questions = data.results
	},
}

Vue.createApp(App).mount('#app')
