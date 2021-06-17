export default {
    computed: {
		fraseComVirgula() {
			return this.frase.replace(/ /g, ',');
		}
	}
}