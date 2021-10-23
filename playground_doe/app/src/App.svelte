<script lang="ts">
	import { onMount } from "svelte"

	let stuff_list = []
	let stuff_id = 0

	const randomId = (len) => {
		return Math.floor(Math.random() * len)
	}

	const randomDataId = () => {
    stuff_id = randomId(stuff_list.length)
  }
  const setData = (id) => {
    stuff_id = id
  }
  let copied = false
  const copyLink = () => {
    navigator.clipboard.writeText(window.location.origin + "?id=" + stuff_id)
    copied = true
    setTimeout(() => {
      copied = false
    }, 1500)
  }
  onMount(async () => {
    const res = await fetch(`https://raw.githubusercontent.com/santhitak/IT-Xtoberfest2021/main/playground_doe/app/README.md`)
    const data_text = await res.text()
    stuff_list = data_text
      .split("\n")
      .filter((line) => line.startsWith("    - "))
      .map((line) => line.split("    - ")[1])
    const urlParams = new URLSearchParams(window.location.search)
    const id = parseInt(urlParams.get("id"))
    if (id != null && id < stuff_list.length) {
      setData(id)
    } else {
      randomDataId()
    }
  })
</script>

<main>
	<div class="container">
		<div class="helloBox">
			<h1>Hello &nbsp;</h1>
			{#if stuff_list[stuff_id] != undefined}
			  <h1 class="">
				{stuff_list[stuff_id]}
			  </h1>
			{:else}
			  <div class="flex justify-center items-center">
				<div class=""/>
			  </div>
			{/if}</div>
	</div>
	<button
		class="btn"
		on:click={randomDataId}
	>
	Random</button>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	.container .helloBox{
		margin: auto;
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
