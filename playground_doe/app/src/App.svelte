<script lang="ts">
  import { onMount } from "svelte";

  const links = ["Github"];

  let stuff_list = [];
  let stuff_id = 0;

  const randomId = (len) => {
    return Math.floor(Math.random() * len);
  };

  const randomDataId = () => {
    stuff_id = randomId(stuff_list.length);
  };
  const setData = (id) => {
    stuff_id = id;
  };
  onMount(async () => {
    const res = await fetch(
      `https://raw.githubusercontent.com/santhitak/IT-Xtoberfest2021/main/playground_doe/app/README.md`
    );
    const data_text = await res.text();
    stuff_list = data_text
      .split("\n")
      .filter((line) => line.startsWith("- "))
      .map((line) => line.split("- ")[1]);
    const urlParams = new URLSearchParams(window.location.search);
    const id = parseInt(urlParams.get("id"));
    if (id != null && id < stuff_list.length) {
      setData(id);
    } else {
      randomDataId();
    }
  });

  import { spring } from "svelte/motion";
  import { pannable } from "./component/pannable";

  const coords = spring(
    { x: 0, y: 0 },
    {
      stiffness: 0.2,
      damping: 0.4,
    }
  );

  function handlePanStart() {
    coords.stiffness = coords.damping = 1;
  }

  function handlePanMove(event) {
    coords.update(($coords) => ({
      x: $coords.x + event.detail.dx,
      y: $coords.y + event.detail.dy,
    }));
  }

  function handlePanEnd(event) {
    coords.stiffness = 0.2;
    coords.damping = 0.4;
    coords.set({ x: 0, y: 0 });
  }

  import { time, elapsed } from "./component/stores";
  import GradientText from 'svelte-gradient-typography';
</script>

<main>
  <div class="wrapBox">
    <div class="helloBox">
	<!-- svelte-ignore missing-declaration -->
	<GradientText style="font-size:2rem;">
      Hello,&nbsp;
	</GradientText>

      {#if stuff_list[stuff_id] != undefined}
        <!-- svelte-ignore missing-declaration -->
        <GradientText
			style="font-size:2rem;"
			gradient="linear-gradient(90deg, rgb(67, 174, 255) 5%, rgb(160, 131, 237) 25%, rgb(239, 122, 200) 50%, rgb(254, 134, 159) 85%,rgb(255, 167, 69) 130%)"
		>
		{stuff_list[stuff_id]}
        </GradientText>
      {:else}
        <div class="flex justify-center items-center">
          <div class="" />
        </div>
      {/if}
    </div>

    <!-- svelte-ignore missing-declaration -->
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
      Random
    </button>


      <h6 class="hint">
        <b> try drag the button anywhere</b>
      </h6>

    <div class="timeIsmobile">
      <h6>
        You have been checking out my project for
        {$elapsed}
        {$elapsed === 1 ? "second" : "seconds"}
      </h6>
    </div>
  </div>

  <div class="link">
    <div>
      {#each links as link}
        <h5>
          <a class="text-dark" href="https://github.com/santhitak" target="_blank">{link}</a>
        </h5>
      {/each}
    </div>
  </div>
  <div class="time">
    <h6>
      You have been checking out my project for
      {$elapsed}
      {$elapsed === 1 ? "second" : "seconds"}
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

  .time {
    padding: 1rem;

    position: absolute;
    top: 0;
    right: 0;
  }

  .link {
    justify-content: center;
    padding: 1rem;

    position: absolute;
    top: 0;
    left: 0;
  }

  .link a {
    font-size: medium;
    text-decoration: none;
    color: #333;
  }

  .wrapBox {
    padding: 10rem 0 0 0;
    margin: 2rem 0;
  }

  .wrapBox .helloBox {
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  @media (min-width: 800px) {
    main {
      max-width: none;
    }
    .timeIsmobile {
      display: none;
    }
  }
  @media (max-width: 1024px) {
    .hint {
      display: none;
    }
  }
  @media (max-width: 800px) {
    main {
      max-width: 500px;
    }
    .time {
      display: none;
    }
    .timeIsmobile {
      display: block;
      padding: 2rem 0;
    }
    .timeIsmobile h6 {
      font-size: small;
    }
    .hint {
      display: none;
    }
  }
</style>
