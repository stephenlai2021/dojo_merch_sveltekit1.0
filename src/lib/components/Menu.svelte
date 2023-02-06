<script>
  import { page } from "$app/stores";
  import { fade } from 'svelte/transition'

  let userEmail = $page.data.session.user.email;

  const slidefade = (node, params) => {
		const existingTransform = getComputedStyle(node).transform.replace('none', '');
		return {
			delay: params.delay || 0,
			duration: params.duration || 200,
			easing: params.easing,
			css: (t, u) =>
				`transform-origin: top right; transform: ${existingTransform} scale(${t}); opacity: ${t};`
		};
	}
</script>

<ul class="menu" transition:slidefade on:keydown on:click|stopPropagation>
  <li>{userEmail}</li>
</ul>

<style>
	.menu {
		position: absolute;
		top: 70px;
		right: 30px;
    z-index: 500;
		padding: 5px;
		background: #fff;
		position: absolute;
		border-radius: 4px;
		box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);
	}

	.menu li {
    width: 150px;
		font-size: 16px;
		padding: 17px 15px;
		box-shadow: none;
		border-radius: 0;
		list-style: none;
    word-break: break-all;
		display: flex;
		align-items: center;
	}

  .menu li:last-child {
		margin-bottom: 0;
	}

	.menu li:hover {
		background: #f5f5f5;
	}
</style>