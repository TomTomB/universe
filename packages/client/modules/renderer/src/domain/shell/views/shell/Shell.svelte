<script lang="ts">
  import { onMount } from 'svelte';
  import { TitleBar } from '../../components';

  onMount(() => {
    window.electron.window.didLoad();
  });
</script>

<div>
  <TitleBar />
</div>
