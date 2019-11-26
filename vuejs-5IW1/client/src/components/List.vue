<template>
  <div class="list" @dragover.prevent @drop="onDrop(list)">
    <button @click="goToList">Select Me</button>
    <h1>{{list.name}} {{list.cards|countDone}}/{{list.cards.length}}</h1>
    <div class="list-cards">
      <card
        :onDrag="handleDrag(card)"
        v-for="card in list.cards"
        v-bind:key="card.id"
        v-bind="card"
      />
    </div>
    <a v-on:click.prevent="toggleForm" href="https://google.fr">+ Add new card</a>
    <NewCard :open="showForm" @new-card="handleNewCard" :onCancel="toggleForm" />
  </div>
</template>

<script>
import Card from "./Card";
import NewCard from "./NewCardFormik";

export default {
  name: "List",
  components: {
    card: Card,
    NewCard
  },
  props: {
    list: Object,
    onNewCard: Function
  },
  data: () => ({
    showForm: false
  }),
  filters: {
    countDone: function(cards) {
      return cards.filter(card => card.status && card.status === "done").length;
    }
  },
  inject: ["onDrag", "onDrop"],
  methods: {
    toggleForm: function() {
      console.log("here");
      this.showForm = !this.showForm;
    },
    handleNewCard: function(card) {
      this.toggleForm();
      this.onNewCard(card, this.list);
    },
    handleDrag: function(card) {
      return () => this.onDrag(card, this.list);
    },
    goToList: function () {
      this.$router.push({
        name: "listHome",
        params: {
          listid: this.list.name
        } 
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list {
  width: 20%;
  min-width: 20%;
  max-width: 20%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  background-color: blue;
  margin-left: 10px;
}
.list > h1,
.list > a {
  color: white;
}
</style>
