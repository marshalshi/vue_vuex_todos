<template>
    <div id="app">
        <h3>{{ title }}</h3>
        <input type="text" name="new" v-model="new_value" />
        <input type="button" name="create" value="Add" @click="addNew" />
        <ul v-if="len > 0">
              <li v-for="(item, key) in list">
                  <item :item="item" @remove="finish(key)" @recover="recover(key)"></item>
              </li>
        </ul>
    </div>
</template>

<script>
    import {mapGetters, mapState, mapMutations} from 'vuex'
    import Item from './Item.vue'

    export default {
        data () {
            return {
                title: 'This is title',
                new_value: ''
            }
        },
        computed: {
            ...mapState([
                'list'
            ]),
            ...mapGetters([
                'len'
            ])
        },
        components: { Item },
        methods: {
            addNew() {
                if (this.new_value.trim())
                    this.$store.commit('addNew', this.new_value.trim())
                this.new_value = ''
            },
            // finish(index) {
            //     this.list[index].complete = true;
            // },
            // recover(index) {
            //     this.list[index].complete = false;
            // }
            ...mapMutations([
                'finish', 'recover'
            ])
        }
    }
</script>

<style>
    body {
        color: #888;
    }
</style>
