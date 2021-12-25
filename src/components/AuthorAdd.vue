<template>
  
    <q-btn 
      no-caps 
      color="primary" 
      class="btn__add"
      @click="authorModal = true"
      >Add Author
      </q-btn>
    <q-dialog v-model="authorModal">
      <q-card style="min-width: 550px">
        <q-card-section align="center">
          <div class="text-h6">Here you can add new author</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input :value="author.firstname" v-model="firstname" placeholder="First name" />
          <q-input :value="author.lastname" placeholder="Last name" />
          <q-input :value="author.dateofdeath" placeholder="Data of birth" />
          <q-input :value="author.dateofbirth" placeholder="Data of death" />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Add author" v-close-popup />
          <q-btn flat label="Cancel" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
      
</template>

<script>
export default {
  data() {
    return {
      authorModal: false,
    }
  },
  props: {
    author: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addAuthor() {
      this.$emit("add", {
        date: new Date().toLocaleString(),
        firstname: this.firstname,
        lastname: this.lastname,
        dateofbirth: this.dateofbirth,
        dateofdeath: this.dateofdeath,
      });
    },
    editAuthor(author) {
      firstname = author.firstname;
      lastname = author.lastname;
      dateofbirth = author.dateofbirth;
      dateofdeath = author.dateofdeath;
    },
  },
};
</script>

<style lang="scss">
.AuthorAdd,
input {
  display: flex;
  margin-bottom: 10px;
  padding: 5px 10px;
}
.btn__add {
  display: flex;
  color: #2c3e50;
  font-weight: bold;
  background: none;
  padding: 10px 15px;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 20px;
  &:hover {
    background: #42b983;
  }
}
</style>
