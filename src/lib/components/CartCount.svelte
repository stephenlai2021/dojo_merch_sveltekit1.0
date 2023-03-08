<script>
  import { totalCartQuantity } from '$lib/stores'
</script>

<div class="quantity-wrapper text- font-">
  <span class="quantity">{$totalCartQuantity}</span> 
</div>

<style>
  .quantity-wrapper {
    position: absolute;
    top: -10px;
    right: -6px;
    background: red;
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }

  .quantity {
    position: absolute;
    font-size: 12px;
    color: white; 
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>