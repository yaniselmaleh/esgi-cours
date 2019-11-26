<template>
  <div class="board">
    <a href="https://google.fr" @click.prevent="$alert($event.target.href)">Google</a>
    <h1 class="board-name">{{name}}</h1>
    <div class="board-lists">
      <list v-for="list in lists" v-bind="list" :key="list.id" v-bind:onNewCard="handleNewCard" />
    </div>
  </div>
</template>

<script>
import List from "./List";

export default {
  name: "Board",
  components: {
    list: List
  },
  data: () => ({
    dragItem: {
      item: null,
      from: null
    },
    lists: [
      {
        name: "List1",
        cards: [{ name: "Card1", waiting: true }, { name: "Card2" }]
      },
      {
        name: "List2",
        cards: [{ name: "Card1" }]
      },
      {
        name: "List3",
        cards: []
      }
    ],
    name: "Board1"
  }),
  provide: function() {
    return {
      onDrag: this.onDrag,
      onDrop: this.onDrop
    };
  },
  methods: {
    handleNewCard: function(card, listName) {
      this.lists = this.lists.map(list => {
        if (list.name === listName) {
          return { ...list, cards: [...list.cards, card] };
        } else {
          return list;
        }
      });
    },
    onDrag: function(card, from) {
      this.dragItem = { item: card, from };
    },
    onDrop: function(to) {
      if (this.dragItem.from === to) return;
      this.lists = this.lists.map(list => {
        if (list.name === this.dragItem.from) {
          return {
            ...list,
            cards: list.cards.filter(
              card => card.name !== this.dragItem.item.name
            )
          };
        } else if (list.name === to) {
          return { ...list, cards: [this.dragItem.item, ...list.cards] };
        } else {
          return list;
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.board {
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: red;
}

h1.board-name {
  background-color: green;
}

div.board-lists {
  flex: 1;
  display: flex;
  flex-direction: row;
  max-width: 100%;
  width: 100%;
  overflow-x: scroll;
  background-color: yellow;
}
</style>
