<script lang="ts">
	import { onMount } from "svelte"
	const links = ['Github'];

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
  onMount(async () => {
    const res = await fetch(`https://raw.githubusercontent.com/santhitak/IT-Xtoberfest2021/main/playground_doe/app/README.md`)
    const data_text = await res.text()
    stuff_list = data_text
      .split("\n")
      .filter((line) => line.startsWith("- "))
      .map((line) => line.split("- ")[1])
    const urlParams = new URLSearchParams(window.location.search)
    const id = parseInt(urlParams.get("id"))
    if (id != null && id < stuff_list.length) {
      setData(id)
    } else {
      randomDataId()
    }
  })

  import { spring } from 'svelte/motion';
	import { pannable } from './component/pannable';

	const coords = spring({ x: 0, y: 0 }, {
		stiffness: 0.2,
		damping: 0.4
	});

	function handlePanStart() {
		coords.stiffness = coords.damping = 1;
	}

	function handlePanMove(event) {
		coords.update($coords => ({
			x: $coords.x + event.detail.dx,
			y: $coords.y + event.detail.dy
		}));
	}

	function handlePanEnd(event) {
		coords.stiffness = 0.2;
		coords.damping = 0.4;
		coords.set({ x: 0, y: 0 });
	}

	import { time, elapsed } from './component/stores';

	const formatter = new Intl.DateTimeFormat('en', {
		hour12: true,
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit'
	});
</script>

<main>
	<div class="wrapBox">
		<div class="helloBox">
			<h1>Hello&nbsp;</h1>
			{#if stuff_list[stuff_id] != undefined}
			  <h1 class="">
				{stuff_list[stuff_id]}
			  </h1>
			{:else}
			  <div class="flex justify-center items-center">
				<div class=""/>
			  </div>
			{/if}</div>

			<button
			class="btn btn-outline-dark my-4"
			on:click={randomDataId}

			use:pannable
			on:panstart={handlePanStart}
			on:panmove={handlePanMove}
			on:panend={handlePanEnd}
			style="transform:
				translate({$coords.x}px,{$coords.y}px)
				rotate({$coords.x * 0.2}deg)"
			>
			Random</button>
		<div class="timeIsmobile">
			<h6>
				You have been checking out my project for
				{$elapsed} {$elapsed === 1 ? 'second' : 'seconds'}
			</h6>
		</div>
	</div>

	<div class="link">
		<div>
			{#each links as link}
			<h5><a class="text-dark" href="https://github.com/santhitak">{link}</a></h5>
			{/each}
		</div>
	</div>
	<div class="time">
		<h6>
			You have been checking out my project for
			{$elapsed} {$elapsed === 1 ? 'second' : 'seconds'}
		</h6>
	</div>
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

	.time{
		padding: 1rem;

		position: absolute;
		top: 0;
		right: 0;
	}

	.link{
		justify-content: center;
		padding: 1rem;

		position: absolute;
		top: 0;
		left: 0;
	}

	.link a{
		font-size: medium;
		text-decoration: none;
		color: #333;
	}

	.wrapBox{
		padding: 5rem 0;
		margin: 2rem 0;
	}

	.wrapBox .helloBox{
		margin: auto;
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	@media (min-width: 800px) {
		main {
			max-width: none;
		}
		.timeIsmobile{
			display: none;
		}
	}
	@media (max-width: 800px) {
		main {
			max-width: 500px;
		}
		.helloBox h1{
			font-size: 1.5rem;
		}
		.time{
			display: none;
		}
		.timeIsmobile{
			display: block;
			padding: 2rem 0;
		}
		.timeIsmobile h6{
			font-size: small;
		}
	}
</style>

