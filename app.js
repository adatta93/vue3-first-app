console.log("Hello Vue");

const app = Vue.createApp({
  data() {
    return {
      name: "Anik",
      counter: 0,
      showText: true,
      books: [
        { title: "Title 1", author: "Author 1", isFav: true },
        { title: "Title 2", author: "Author 2", isFav: false },
        { title: "Title 3", author: "Author 3", isFav: true },
      ],
      x: 0,
      y: 0,
      url: "https://www.youtube.com/watch?v=CYPZBK8zUik",
    };
  },
  methods: {
    changeName() {
      this.name = "Anikendra";
    },
    addLastName(fName) {
      this.name = fName + " Datta";
    },
    handleEvent(ev, data) {
      console.log("event", ev.type);
      data && console.log("D:", data);
    },
    handleMouseMove(ev) {
      this.x = ev.offsetX;
      this.y = ev.offsetY;
    },
    toggleFavBook(book) {
      book.isFav = !book.isFav;
    },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav);
    },
  },
  mounted() {
    this.counter = 10;
  },
  //template: "<h2>I am template</h2>",
});

app.mount("#root");
