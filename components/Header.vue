<template>
	<header>
		<h1>Trivia App</h1>
		<li>{{ correctNumbers }}/{{ totalNumbers }}</li>
	</header>
</template>

<script>
export default {
	props: ['correctNumbers', 'totalNumbers'],
}
</script>
