<template>
  <div class="board">
    <div class="board-name">{{ name }}</div>
    <div class="board-lists">
      <list
        v-bind:onNewCard="handleNewCard"
        v-for="list in lists"
        v-bind:key="list.id"
        v-bind:list="list"
      />
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
  methods: {
    handleNewCard: function(card, into) {
      this.lists = this.lists.map(list => {
        if (into.name === list.name) {
          return {
            ...list,
            cards: [card, ...list.cards]
          };
        } else {
          return list;
        }
      });
    },
    onDrag: function(card, list) {
      console.log(card);
      this.dragItem = {
        card,
        from: list
      };
    },
    onDrop: function(to) {
      const { card, from } = this.dragItem;

      this.lists = this.lists.map(list => {
        if (list.name === from.name) {
          list.cards = list.cards.filter(item => item.name !== card.name);
        }
        if (list.name == to.name) {
          list.cards = [card, ...list.cards];
        }
        return list;
      });
    }
  },
  provide: function() {
    return {
      onDrag: this.onDrag,
      onDrop: this.onDrop
    };
  },
  data: () => ({
    dragItem: null,
    lists: [
      {
        name: "List1",
        cards: [{ name: "Card1", status: "done" }, { name: "Card2" }]
      },
      {
        name: "List2",
        cards: [{ name: "Card2" }]
      }
    ],
    name: "Board 1"
  })
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.board {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: green;
}
.board-name {
  width: 100%;
  text-align: center;
}
.board-lists {
  display: flex;
  flex-direction: row;
  flex: 1;
  min-width: 100%;
  max-width: 100%;
  overflow-x: scroll;
  background-color: red;
}
</style>
