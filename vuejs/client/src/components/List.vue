<template>
  <div class="list" v-on:drop="onDrop(name)" v-on:dragover.prevent>
    <h1 class="list-name">{{name}}</h1>
    <div v-if="cards.length > 0" class="list-cards">
      <Card
        v-for="card in cards"
        v-bind:onDrag="handleDrag(card)"
        v-bind="card"
        v-bind:key="card.id"
      />
    </div>
    <div v-else>
      <p>Pas de cards</p>
    </div>
    <a @click="toggleForm(true)">+ Add new card</a>
    <NewCard v-if="showForm" v-bind:onCancel="toggleForm" v-on:new-card="handleNewCard" />
  </div>
</template>

<script>
import Card from "./Card";
import NewCard from "./NewCardPlusPlus";

export default {
  name: "List",
  components: {
    Card,
    NewCard
  },
  props: {
    cards: Array,
    name: String,
    onNewCard: Function
  },
  data: () => ({
    showForm: false
  }),
  inject: ["onDrag", "onDrop"],
  methods: {
    handleDrag: function(card) {
      return () => this.onDrag(card, this.name);
    },
    toggleForm: function(open) {
      this.showForm = open !== undefined ? open : !this.showForm;
    },
    handleNewCard: function(newCard) {
      this.toggleForm(false);
      this.onNewCard(newCard, this.name);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.list {
  height: 100%;
  max-height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  width: 20%;
  background-color: blue;
  margin-left: 10px;
}

h1.list-name {
  color: white;
}

div.list-cards {
  flex: 1;
  background-color: aquamarine;
}
</style>
