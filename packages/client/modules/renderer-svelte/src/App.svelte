<script lang="ts">
  import { Shell } from './domain/shell/views';
  import { createPortal } from '@/uikit/common/actions';
  import { MODAL_PORTAL, TOOLTIP_PORTAL } from '@/uikit/common/constants';
</script>

<Shell />

<div use:createPortal={MODAL_PORTAL} />
<div use:createPortal={TOOLTIP_PORTAL} />
