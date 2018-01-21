<template>
  <article
    class="o-card"
  >
    <header class="o-card__header">
      <div class="o-card__tag">{{ ad.advertisementPrice.sellPrice ? 'Kaufen' : 'Mieten' }}</div>
      <img
        v-if="ad.advertisementAssets[0].advertisementThumbnails.inventory_m.url"
        v-bind:src="ad.advertisementAssets[0].advertisementThumbnails.inventory_m.url"
      />
    </header>

    <div class="o-card__content">
      <section class="o-card__content__main">
        <div
          class="o-card__description"
        >{{ ad.title }}</div>
        <div
          class="o-card__location"
        >{{ ad.realestateSummary.address.postalCode }} {{ ad.realestateSummary.address.city }}
        </div>
      </section>

      <footer class="o-card__content__footer">
        <div
          class="o-card__price"
        >{{ ad.advertisementPrice.sellPrice || ad.advertisementPrice.baseRent }} €</div>
        <div
          class="o-card__info"
        >
          <span>{{ ad.realestateSummary.numberOfRooms }} Zimmer</span>
          <span>ab {{ ad.realestateSummary.space | float }}</span>
        </div>
      </footer>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Card',
  props: ['ad'],
  data () {
    return {
    }
  },
  filters: {
    float: (value) => {
      return Math.round(value)
    }
  }
}
</script>
